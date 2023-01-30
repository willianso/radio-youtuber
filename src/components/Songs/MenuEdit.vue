<template>
  <div>
    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          icon="mdi-dots-vertical"
          v-bind="props"
        >
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="item.click()">
          <v-list-item-title>
            <v-icon start :icon="item.icon" />
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <EditModal
      @closeModal="items[0].modal = false"
      v-if="items[0].modal"
      :songProp="songProp"
    />

    <DeleteModal
      @closeModal="items[1].modal = false"
      v-if="items[1].modal"
      :songProp="songProp"
    />
  </div>
</template>
<script>
import DeleteModal from "./Dialogs/DeleteModal.vue";
import EditModal from "./Dialogs/EditModal.vue";

export default {
  props: ["songProp"],
  components: {
    EditModal,
    DeleteModal,
  },
  data: () => ({
    items: [
      {
        icon: "mdi-pencil",
        title: "Editar",
        modal: false,
        click() {
          this.modal = true;
        },
      },
      {
        icon: "mdi-trash-can-outline",
        title: "Excluir",
        modal: false,
        click() {
          this.modal = true;
        },
      },
    ],
  }),
};
</script>
