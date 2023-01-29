<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-text-field
          clearable
          label="Label"
          variant="outlined"
          v-model="newSong"
          @keyup.enter="addSong"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useSongsStore } from "@/store/songs";

export default {
  data: () => ({
    songsStore: useSongsStore(),
    newSong: null,
  }),

  methods: {
    addSong() {
      this.songsStore.addSong(this.newSong);
      this.clearFields();
    },
    clearFields() {
      this.newSong = null;
    },
  },
};
</script>
