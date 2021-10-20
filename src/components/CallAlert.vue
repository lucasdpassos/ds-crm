<template>
<div> 
      <v-card>
        <v-card-title  class="text-h5 lighten-2">
          Aviso de Contato
        </v-card-title>


    <div style="padding:30px;">
      Você está prestes a registrar no sistema um contato efetuado com seu lead, lembre-se de ter todas as informações em mãos, caso não queira registrar agora, basta clicar fora dessa caixa e voltar para o menu.
      <br /><br />

      <div style="display:flex;flex-direction:row;align-items:center;justify-content:center;">
      <v-btn @click="nextStep()" color="#000B44" style="margin:15px;color:azure">Prosseguir</v-btn>
      </div>
    </div>

      </v-card>


  


  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
      persistent
    >
      

     <v-card>
        <v-card-title  class="text-h5 lighten-2">
          Aviso de Contato
        </v-card-title>



        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:500px;padding:80px;">
          
         <v-select
          :items="leads"
          label="Lead"
        ></v-select>

        <v-text-field v-model="updater.number" style="width:240px;" placeholder="Telefone com DDD"></v-text-field>

         <v-select
         v-model="updater.status"
          :items="items"
          label="Feedback do Lead"
        ></v-select>

        <v-textarea style="width:400px;" label="Detalhes do contato" outlined />

          <div style="display:flex;flex-direction:row">
         <v-btn @click="closeDialog()" color="#000B44" style="margin:10px;color:azure">Voltar</v-btn> <v-btn @click="updateStatus()" color="#000B44"  style="margin:10px;color:azure">Enviar</v-btn>
          </div>
        </div>

     
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
        dialog2: false,
        result: "",
        product: {
            
            product_nome: "",
            product_ctt: "",
            product_data:""
       
        },
        info2: null,       
        items: ['Interessado', 'Visita Agendada', 'Remarcou o Contato', 'Perdeu Interesse', 'Resistência', 'Não Atende'],
        leads: [],

       updater: {
         number: "",
         status: ""
       }

        
        
      }
    },
    mounted() {
        axios.get('http://localhost:80/allnames')
        .then(res => (this.leads = res.data))     
              
        console.log(this.leads) 
        
    },
    methods: {
      nextStep() {      
        this.dialog = false
        this.dialog2 = true
      },
      closeDialog() {
        this.dialog2 = false
      },    
      
     async updateStatus() {      
       
     await axios.post('http://localhost:8080/update', this.updater, {
       headers: {
            "Content-Type":"application/json"
        }
      }).then(res => {
        console.log(res);
        this.dialog2 = false
        alert('Status do Lead atualizado!')
        location.reload();
      }).catch(err => {
        console.log(err.response);
      });
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