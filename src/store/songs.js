// Utilities
import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", {
  id: "songs",
  state: () => ({
    items: [],
    id: 0,
  }),
  actions: {
    addSong(title) {
      this.items.push({
        id: this.id++,
        title,
        played: false,
      });
    },
    removeSong(id) {
      const index = this.items.findIndex((song) => song.id === id);
      if (index !== -1) this.items.splice(index, 1);
    },
  },
});
