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

  <div>
    <v-list lines="two" select-strategy="multiple">
      <div v-for="song in songsStore.items" :key="song.id">
        <Item :song-prop="song" />
      </div>
    </v-list>
  </div>
</template>

<script>
import Item from "@/components/Songs/ItemList.vue";
import { useSongsStore } from "@/store/songs";

export default {
  components: {
    Item,
  },
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
