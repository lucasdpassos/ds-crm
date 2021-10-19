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
            Endereço
          </th>
          <th class="text-left">
            Compras
          </th>
          <th class="text-left">
            Telefone
          </th>        
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.product_nome"
        >
          <td>{{ item.customer_nome }}</td>
          <td>{{ item.customer_end }}</td>
          <td>{{ item.customer_buys }}</td>
          <td>{{ item.customer_tel }}</td>         
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
          Cadastrar novo cliente
        </v-card-title>

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:300px;">
        <v-text-field
            v-model="customer.customer_nome"           
            label="Nome do Cliente"
            required           
    ></v-text-field>
        <v-text-field
            v-model="customer.customer_end"           
            label="Endereço"
            required           
    ></v-text-field>
        <v-text-field
            v-model="customer.customer_tel"           
            label="Telefone"
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
   <div style="height:100px;display:flex;justify-content:center;align-items:center;">
    <v-btn @click="$router.push('/')" >Voltar</v-btn>
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
        customer: {
           id:2,
           customer_nome:"",
           customer_end:"",
           customer_tel:0
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
    axios.get('http://localhost:5588/api/allcustomers')
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