<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      style="display:flex;flex-direction:row;justify-content:center;"
    >
    <v-app-bar-title>Tem De Tudo</v-app-bar-title>
    </v-app-bar>

    <v-main>
    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   //
  },

  data: () => ({
    //
  }),
};
</script>
