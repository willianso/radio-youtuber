<template>
  <SongListDraggable />
</template>

<script>
import { useSongsStore } from "@/store/songs";
import SongListDraggable from "./SongListDraggable.vue";

export default {
  components: {
    SongListDraggable,
  },
  data: () => ({
    songsStore: useSongsStore(),
  }),
  created() {
    this.songsStore.getSongs();
  },
};
</script>
