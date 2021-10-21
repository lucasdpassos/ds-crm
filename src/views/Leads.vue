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
            Contato
          </th>
          <th class="text-left">
            Data de Entrada
          </th>
          <th class="text-left">
            Origem
          </th>
          <th class="text-left">
            Corretor
          </th>        
          <th class="text-left">
            Status
          </th>        
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.nome"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.contato }}</td>
          <td>{{ item.data_entrada }}</td>
          <td>{{ item.origem }}</td>
          <td>{{ item.corretor }}</td>
          <td>{{ item.status }}</td>      
                                       
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
      <template v-slot:activator="{ on, attrs2 }">
        <v-btn
          color="#000B44"
          dark
          v-bind="attrs2"
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
            v-model="newLead.nome"           
            label="Nome"
            required           
    ></v-text-field>
        <v-text-field
            v-model="newLead.contato"           
            label="Contato"
            required           
    ></v-text-field>
        <v-text-field
            v-model="newLead.corretor"           
            label="Corretor"
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
            @click="addLead()"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>










    
  </div>
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="500"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        
          <div style="display:flex;flex-direction:row;align-items:center;margin-left:1250px;">
    <v-btn  v-bind="attrs"
          v-on="on" color="#000B44" style="color:azure" fab x-large><v-icon>mdi-help-box</v-icon></v-btn>
    <p class="helpText">Como funciona?</p>
    </div>
      </template>

      <v-card>
        

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:500px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          
          <p  class="font-weight-medium" style="margin-top:20px;">Existem 3 formas dos Leads chegarem até o sistema:</p>
 <br /><br />
          <v-icon color="#000B44" x-large>mdi-account-plus</v-icon>Adicionados por um administrador
          <br /><br /><br />
          <v-icon color="#000B44" x-large>mdi-form-select</v-icon>Preenchendo formulários em websites / landing-pages
          <br /><br /><br />
          <v-icon color="#000B44" x-large>mdi-robot-happy</v-icon>Alimentados pelos assistentes virtuais das campanhas
       
        </div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#000B44"
            text
            @click="helpNextStep()"
          >
            Próximo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>


  <div class="text-center">
    <v-dialog
      v-model="dialog3"
      width="500"
      persistent
    >
      
      <v-card>
        

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:500px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          
         <p  class="font-weight-medium" style="margin-top:20px;">Apresentação dos Leads:</p>
 <br /><br />

 <v-icon color="#000B44" x-large>mdi-card-account-phone</v-icon><p style="padding:20px;">Nesta área do sistema, você terá acesso à informações dos leads como por exemplo, a origem do lead e seu contato, lembre-se de que todas as informações apresentadas nesta tela são sensíveis à LGPD (Lei geral de proteção aos dados) e o mau uso dos dados dos leads pode acarretar em consequências jurídicas.</p>
          <br /><br /><br />
       
        </div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#000B44"
            text
            @click="helpFinalStep()"
          >
            Próximo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>

  <div class="text-center">
    <v-dialog
      v-model="dialog4"
      width="500"
      persistent
    >
      
      <v-card>
        

        <div style="display:flex;align-items:center;justify-content:center;">
        <div style="width:500px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          
         <p  class="font-weight-medium" style="margin-top:20px;">Lembre-se:</p>
 <br /><br />

 <v-icon color="#000B44" x-large>mdi-folder-network</v-icon><p style="padding:20px;">Você como corretor, conseguirá visualizar apenas os leads que estão apontados pra você, atente-se ao prazo de contato para que o sistema não redirecione os seus leads!</p>
          <br /><br /><br />
       
        </div>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#000B44"
            text
            @click="closeHelp()"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </div>
  <div class="text-center">
    <v-dialog
      v-model="dialog5"
      width="500"
      
    >
      <call-alert />

    </v-dialog>



  </div>


  
   <div style="height:300px;display:flex;justify-content:center;align-items:center;flex-direction:column">

     <v-btn @click="alertCall()" color="#000B44" style="margin:15px;color:azure;"><v-icon style="padding:10px;">mdi-phone</v-icon> Registrar Atendimento</v-btn>


    <v-btn style="margin:30px;" @click="$router.push('/')"  >Voltar</v-btn>
  
    </div>
    
 </div>

 
</template>


<script>
import axios from 'axios'
import CallAlert from '../components/CallAlert.vue'


  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        nome_lead: "",
        result: "",
        newLead: {
            
            nome: "",
            contato: "",
            data: "21/10/2021",
            origem:"Cadastro Manual",
            corretor: "",
            status: "Interessado"
       
        },
        info: null,       
        names: []
        
      }
    },
    components: {
      CallAlert
    },
    mounted () {
    axios.get('https://ds-crm-backend.herokuapp.com/all')
        .then(res => (this.info = res.data))
        console.log(this.info)
        
  },
  methods: {
      getProduct() {
          axios.get('https://ds-crm-backend.herokuapp.com/all')
        .then(res => (this.info = res.data))
        console.log(this.info)
        .catch(error => console.log(error))
        console.log(this.info)
      },
      helpNextStep() {
        this.dialog2 = false
        this.dialog3 = true
        console.log('asaa')
      },
      helpFinalStep() {
        this.dialog3 = false
        this.dialog4 = true
      },
      closeHelp() {
        this.dialog4 = false
      },
      alertCall() {
        this.dialog5 = true
      },
      closeDialog() {
        this.dialog5 = false
      },
        async addLead() {      
       
     await axios.post('http://localhost:8080/add', this.newLead, {
       headers: {
            "Content-Type":"application/json"
        }
      }).then(res => {
        console.log(res);
        this.dialog = false
        alert('Novo Lead adicionado!')
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