<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="mr-4">
        <v-text-field
          clearable
          label="Música?"
          variant="outlined"
          v-model="title"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          label="Dinheiros?"
          variant="outlined"
          v-model="value"
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
    title: null,
    value: null,
  }),

  methods: {
    addSong() {
      if (!this.title || !this.value) return;
      if (this.title.length < 3) return;
      if (this.value.length < 1) return;

      const lastIndex =
        this.songsStore.items.length - 1 > 0
          ? this.songsStore.items.length - 1
          : 0;
      const lastPosition = this.songsStore.items[lastIndex]
        ? this.songsStore.items[lastIndex].position + 1
        : 1;

      this.songsStore.addSong({
        title: this.title,
        value: this.value,
        position: lastPosition,
      });

      this.clearFields();
    },
    clearFields() {
      this.newSong = null;
    },
  },
};
</script>
