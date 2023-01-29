<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list v-for="item in items" :key="item.title" linkdensity="compact" nav>
        <v-list-item
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      density="prominent"
      image="https://picsum.photos/1920/1080?random"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> <InputSong /></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputSong from "@/components/Songs/InputSong.vue";

export default {
  components: {
    InputSong,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Músicas", icon: "mdi-view-dashboard", to: "." },
      { title: "Sobre", icon: "mdi-help-box", to: "sobre" },
    ],
  }),
};
</script>
