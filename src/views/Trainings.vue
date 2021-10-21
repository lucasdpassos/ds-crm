<template>
  
    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;">
   <v-btn style="color:azure;width:900px;height:100px;margin:20px;" color="#000B44"><v-icon style="margin:15px;" color="white" x-large >mdi-home-city</v-icon>Real State</v-btn>
   <v-btn style="color:azure;width:900px;height:100px;margin:20px;" color="#000B44"><v-icon style="margin:15px;" color="white" x-large >mdi-transit-connection-variant</v-icon>Networking</v-btn>
   <v-btn style="color:azure;width:900px;height:100px;margin:20px;" color="#000B44"><v-icon style="margin:15px;" color="white" x-large >mdi-file-document-edit</v-icon>Legislação</v-btn>
   <v-btn style="color:azure;width:900px;height:100px;margin:20px;" color="#000B44"><v-icon style="margin:15px;" color="white" x-large >mdi-cash-fast</v-icon>Vendas</v-btn>

   <v-btn style="margin:30px;" @click="$router.push('/')"  >Voltar</v-btn>
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   //
  }
}
</script>


<style lang="scss">
 @import './src/sass/variables.scss';

.hometext {
  font-family: $body-font-family;
  font-size: $font-size-hometext;
}

</style>