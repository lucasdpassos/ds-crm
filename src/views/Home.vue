<template>
  <div class="home">
    
    <div style="display:flex;flex-direction:row;justify-content:space-around;height:140px;align-items:center;">
    <v-btn @click="$router.push('products')" color="#000B44" style="color:azure;">Acessar Leads</v-btn>
    <v-btn @click="$router.push('customers')"  color="#000B44" style="color:azure;" >Equipe</v-btn>
    <v-btn color="#000B44" style="color:azure;">Vendas</v-btn>
    <v-btn color="#000B44" style="color:azure;">Análise de Documentos</v-btn>
    <v-btn color="#000B44" style="color:azure;">Abrir chamado</v-btn>
    
   </div> 
   <div style="display:flex;justify-content:center;flex-direction:row;align-items:center;">
    <v-img
    src="../assets/phone.png"
    max-height="450"
    max-width="400"
    style=""    
     />

     <p class="hometext">Corretagem potencializada.</p>
   </div>
   
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