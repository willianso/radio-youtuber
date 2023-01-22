<template>
  <v-list-item
    :class="{ 'bg-blue': song.played }"
    @click="song.played = !song.played"
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
      <v-btn
        @click.stop="removeSong(song.id)"
        color="red"
        icon="mdi-trash-can-outline"
        variant="text"
      ></v-btn>
    </template>
  </v-list-item>

  <v-divider />
</template>

<script>
import { useSongsStore } from "@/store/songs";

export default {
  props: ["songProp"],
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
};
</script>
