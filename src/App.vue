<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
      style="display:flex;flex-direction:row;justify-content:center;align-items:center;"
      prominent
    >
    <div style="display:flex;justify-content:center;align-items:center;">
    <v-img
    src="./assets/logo-ds.png"
    width=150
    height=130
     />
   
    </div>
    </v-app-bar>
   
    <v-main>
      
    <router-view></router-view>
    <div style="display:flex;flex-direction:row;">
     <v-img
    src="./assets/housesPattern.png"
    width=50%
    height=100px   
     />
     <v-img
    src="./assets/housesPattern.png"
    width=50%
    height=100px   
     />
    </div>

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
