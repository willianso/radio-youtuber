<template>
  <v-list-item
    style="background-color: white"
    :style="
      reorder
        ? {
            borderLeft: '2px solid #1976D2',
            marginLeft: '-2px',
          }
        : {}
    "
    :class="{ 'bg-blue': song.played }"
    @click="songsStore.playedSong(song)"
  >
    <template v-slot:prepend="{}">
      <v-list-item-action start>
        <v-checkbox-btn :model-value="song.played"></v-checkbox-btn>
      </v-list-item-action>
    </template>

    <v-list-item-title
      :class="{ 'text-decoration-line-through': song.played }"
      >{{ song.title }}</v-list-item-title
    >

    <template v-slot:append>
      <MenuEdit :songProp="songProp" />
    </template>
  </v-list-item>

  <v-divider />
</template>

<script>
import { useSongsStore } from "@/store/songs";
import MenuEdit from "./MenuEdit.vue";

export default {
  props: ["songProp", "reorder"],
  data: () => ({
    song: null,
    songsStore: useSongsStore(),
  }),
  created() {
    this.song = this.songProp;
  },
  methods: {
    removeSong(id) {
      this.songsStore.removeSong(id);
    },
  },
  components: { MenuEdit },
};
</script>
