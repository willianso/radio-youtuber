// Utilities
import { defineStore } from "pinia";
import Localbase from "localbase";

let db = new Localbase("db");

export const useSongsStore = defineStore("songs", {
  id: "songs",
  state: () => ({
    items: [],
    id: 1,
  }),
  actions: {
    getSongs() {
      db.collection("songs")
        .get()
        .then((songs) => {
          this.items = songs;
        });
    },
    addSong(title) {
      db.collection("songs").add({
        id: new Date().getTime(),
        title,
        played: false,
      });

      this.items.push({
        id: this.id++,
        title,
        played: false,
      });
    },
    removeSong(id) {
      db.collection("songs")
        .doc({ id })
        .delete()
        .then((response) => {
          const index = this.items.findIndex((song) => song.id === id);
          if (index !== -1) this.items.splice(index, 1);
        })
        .catch((error) => {
          console.log("There was an error, do something else.");
        });
    },
    editSong(newSong) {
      db.collection("songs")
        .doc({ id: newSong.id })
        .update({
          title: newSong.title,
        })
        .then(() => {
          let song = this.items.find((song) => song.id === newSong.id);
          if (song) song.title = newSong.title;
        });
    },
  },
});
