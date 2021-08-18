<template>
  <div class="home">
    
    <div style="display:flex;flex-direction:row;justify-content:space-around;height:500px;align-items:center;">
    <v-btn @click="$router.push('products')" color="primary">Produtos</v-btn>
    <v-btn color="primary">Clientes</v-btn>
    <v-btn color="primary">Vendas</v-btn>
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
