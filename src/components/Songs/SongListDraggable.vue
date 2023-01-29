<template>
  <div>
    <v-container fluid>
      <v-row align-content="stretch">
        <v-col>
          <v-list three-line class="list1">
            <drop-list
              :items="computedSongs"
              @reorder="$event.apply(computedSongs)"
            >
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
    </v-container>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import "vue-easy-dnd/dist/dnd.css";
import { useSongsStore } from "@/store/songs";
import ItemList from "./ItemList.vue";

export default {
  name: "App",
  components: {
    Drag,
    DropList,
    ItemList,
  },
  data: function () {
    return {
      songsStore: useSongsStore(),
    };
  },
  computed: {
    computedSongs() {
      return this.songsStore.items;
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
