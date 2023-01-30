<template>
  <v-dialog v-model="dialog">
    <!-- <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
    </template> -->
    <v-card>
      <v-card-title>
        <span class="text-h5">Editar música</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Nome da música"
                v-model="title"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('closeModal')"
        >
          Fechar
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="editSong">
          Salvar
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
      title: null,
    };
  },
  created() {
    this.title = this.songProp.title;
  },
  methods: {
    editSong() {
      this.songsStore.editSong({
        title: this.title,
        id: this.songProp.id,
        played: this.songProp.played,
      });

      this.$emit("closeModal");
    },
  },
};
</script>
