import db from "../services/localbase";

export default {
  getSongs() {
    db.collection("songs")
      .get()
      .then((songs) => {
        this.items = songs;
      });
  },
  addSong(newSong) {
    const id = new Date().getTime();

    db.collection("songs")
      .add({
        id,
        title: newSong.title,
        value: newSong.value,
        position: newSong.position,
        played: false,
      })
      .then((response) => {
        this.items.push({
          id,
          title: newSong.title,
          value: newSong.value,
          position: newSong.position,
          played: false,
        });
      })
      .catch((error) => {
        console.log("There was an error, do something else.");
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
  playedSong(newSong) {
    db.collection("songs")
      .doc({ id: newSong.id })
      .update({
        played: !newSong.played,
      })
      .then(() => {
        let song = this.items.find((song) => song.id === newSong.id);
        if (song) {
          song.played = !newSong.played;
        }
      });
  },
  reorderList() {
    db.collection("songs")
      .delete()
      .then(() => {
        this.items.forEach( (item) => {
           db.collection("songs").add({ ...item });
        });
      });
  },
};
