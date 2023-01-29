// Utilities
import { defineStore } from "pinia";
import state from "./state";
import actions from "./actions";

export const useSongsStore = defineStore("songs", {
  id: "songs",
  state: () => state,
  actions,
});
