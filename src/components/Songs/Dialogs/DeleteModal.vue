<template>
  <v-dialog v-model="dialog" persistent>
    <!-- <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
    </template> -->
    <v-card>
      <v-card-title>
        <span class="text-h5">Excluir música</span>
      </v-card-title>
      <v-card-text>
        <v-container> Excluir a música? </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('closeModal')"
        >
          Cancelar
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="removeSong">
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { useSongsStore } from "@/store/songs";

export default {
  props: ["songProp"],
  data() {
    return {
      songsStore: useSongsStore(),
      dialog: true,
    };
  },
  methods: {
    removeSong() {
      this.songsStore.removeSong(this.songProp.id);

      this.$emit("closeModal");
    },
  },
};
</script>
