<template>
  <div
    v-if="!songsStore.items.length"
    class="text-center mt-16 animate__animated animate__bounceInUp"
  >
    <v-icon icon="mdi-check" size="100" color="primary" />

    <div class="text-h5 primary--text">Nenhuma música</div>
  </div>

  <div v-else>
    <SongListDraggable />
  </div>
</template>

<script>
import { useSongsStore } from "@/store/songs";
import SongListDraggable from "@/components/Songs/SongListDraggable.vue";

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
