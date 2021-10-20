<template>
<div>
 
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#000B44"
          dark
          v-bind="attrs"
          v-on="on"
          style="margin-top:5%;"
        >
          Cadastro Manual
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Cadastro Manual de Lead
        </v-card-title>

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:300px;">
        <v-text-field
            v-model="product.product_nome"           
            label="Nome"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_ctt"           
            label="Contato"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_data"           
            label="Data de Entrada"
            required           
    ></v-text-field>
       
</div>
</div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="sendProduct()"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>










    
  </div>
  

 
</template>


<script>
import axios from 'axios'
  export default {
    data () {
      return {
        dialog: false,
        result: "",
        product: {
            
            product_nome: "",
            product_ctt: "",
            product_data:""
       
        },
        info: null,       
        
      }
    },
    mounted () {
    axios.get('http://localhost:5588/api/all')
        .then(res => (this.info = res.data.rows))
        console.log(this.info)
        .catch(error => console.log(error))
  },
  methods: {
      sendProduct() {
          axios.post('http://localhost:5588/api/productadd', this.product)
          .then(res => this.result = res.data)
      }
  }
  }
</script>


<style lang="scss">
 @import './src/sass/variables.scss';

.helpText {
  font-family: $body-font-family;
  font-size: $font-size-helpText;
  padding: $padding-helpText;
}

</style>