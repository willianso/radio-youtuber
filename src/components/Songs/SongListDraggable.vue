<template>
  <div>
    <v-container fluid>
      <v-row align-content="stretch">
        <v-col>
          <v-list three-line class="list1">
            <drop-list :items="computedSongs" @reorder="reorderList($event)">
              <template v-slot:item="{ item, reorder }">
                <drag :key="item.id" :data="item">
                  <ItemList :song-prop="item" :reorder="reorder" />
                  <v-divider />
                </drag>
              </template>
              <template v-slot:inserting-drag-image="{ data }"> </template>
              <template v-slot:reordering-drag-image />
              <template v-slot:feedback="{ data }"> </template>
            </drop-list>
          </v-list>
        </v-col>
      </v-row>

      <LoadingModal v-if="loading" :dialog-prop="loading" />
    </v-container>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import "vue-easy-dnd/dist/dnd.css";
import { useSongsStore } from "@/store/songs";
import ItemList from "./ItemList.vue";
import LoadingModal from "./Dialogs/LoadingModal.vue";

export default {
  name: "App",
  components: {
    Drag,
    DropList,
    ItemList,
    LoadingModal,
  },
  data: function () {
    return {
      songsStore: useSongsStore(),
      loading: true,
    };
  },
  computed: {
    computedSongs() {
      return this.songsStore.items;
    },
  },
  methods: {
    reorderList(event) {
      this.loading = true;

      event.apply(this.computedSongs);
      this.songsStore.reorderList();

      this.loading = false;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Roboto";
}

.list1 {
  height: 100%;
}

.list2 {
  display: flex;
  height: 100%;
}

.chip {
  margin: 10px;
}

.drop-allowed.drop-in * {
  cursor: inherit !important;
}
</style>
