<template>
<div>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Descrição
          </th>
          <th class="text-left">
            Marca
          </th>
          <th class="text-left">
            Fornecedor
          </th>
          <th class="text-left">
            Classe
          </th>
          <th class="text-left">
            Custo
          </th>
          <th class="text-left">
            Valor de Venda
          </th>
          <th class="text-left">
            Estoque
          </th>
          <th class="text-left">
            Na loja
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.product_nome"
        >
          <td>{{ item.product_nome }}</td>
          <td>{{ item.product_desc }}</td>
          <td>{{ item.product_marca }}</td>
          <td>{{ item.product_forn }}</td>
          <td>{{ item.product_class }}</td>
          <td>{{ item.product_custo }}</td>
          <td>{{ item.product_venda }}</td>
          <td>{{ item.product_estoque }}</td>
          <td>{{ item.product_loja }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    

  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          style="margin-top:5%;"
        >
          Cadastrar Novo
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Cadastrar novo produto
        </v-card-title>

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:300px;">
        <v-text-field
            v-model="product.product_nome"           
            label="Nome do Produto"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_desc"           
            label="Descrição"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_marca"           
            label="Marca"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_forn"           
            label="Fornecedor"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_class"           
            label="Classificação"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_custo"           
            label="Custo de compra"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_venda"           
            label="Preço de Venda"
            required           
    ></v-text-field>      
        <v-text-field
            v-model="product.product_estoque"           
            label="Quantidade em estoque"
            required           
    ></v-text-field>
        <v-text-field
            v-model="product.product_loja"           
            label="Quantidade na loja"
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
            product_id:3,
            product_nome: "",
            product_desc: "",
            product_marca: "",
            product_forn: "",
            product_class:"",
            product_custo:0,
            product_venda:0,
            product_estoque:0,
            product_loja:0
        },
        info: null,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
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


<style>

#divButtons {
  margin-left: 29%;
  margin-top: 100px;
  max-width: 800px;
  display: grid;
  grid-template-columns: 50fr 50fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>