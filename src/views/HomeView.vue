<template>
  <SongsList />

  <div
    v-if="!songsStore.items.length"
    class="text-center mt-16 animate__animated animate__bounceInUp"
  >
    <v-icon icon="mdi-check" size="100" color="primary" />

    <div class="text-h5 primary--text">Nenhuma tarefa</div>
  </div>
</template>

<script>
import { useSongsStore } from "@/store/songs";
import SongsList from "@/components/Songs/SongList.vue";

export default {
  components: {
    SongsList,
  },
  data: () => ({
    songsStore: useSongsStore(),
  }),
  created() {
    this.songsStore.getSongs();
  },
};
</script>
