<template>
  <div class="home">
    
    <div style="display:flex;flex-direction:row;justify-content:space-around;height:140px;align-items:center;">
    <v-btn @click="$router.push('leads')" color="#000B44" style="color:azure;">Acessar Leads</v-btn>  
    
    <v-btn color="#000B44" style="color:azure;">Análise de Documentos</v-btn>
    <v-btn @click="$router.push('trainings')" color="#000B44" style="color:azure;">Treinamentos</v-btn>
    
   </div> 
   <div style="display:flex;flex-direction:row;align-items:center;height:240px;">
    <v-img
    src="../assets/sylvia.png"
    max-height="300"
    max-width="120"
    style=""    
     />

     <div>
     <p  class="hometext">Conheça a Sylv.ia.</p>     
     <p>A assistente virtual do DS-CRM.</p>
     <p>Responsável pela automatização do mapeamento dos Leads no sistema</p>
     </div>
     
   </div>
   <v-alert
      color="blue-grey"
      dark
      v-model="alert"
      dense
      icon="mdi-school"
      prominent
    >
      Não se esqueça de assistir ao novo treinamento sobre técnicas de vendas
     <v-btn
            @click="closeAlert1()"
            color="black"
            outlined
            style="margin:10px;"
          >
            Ok
          </v-btn>
    </v-alert>
   <v-alert
      icon="mdi-shield-lock-outline"
      prominent
      text
      type="info"
      v-model="alert2">
      As informações dos leads são intransferíveis e monitoradas por inteligência artificial, cuidado ao tratar dados sensíveis.
     <v-btn
            @click="closeAlert2()"
            color="black"
            outlined
            style="margin:10px;"
          >
            Ok
          </v-btn>
    </v-alert>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
     data () {
      return {
        alert: true,
        alert2: true
        
      }     
   },
  components: {
   //
  },
  methods: {
    closeAlert1() {
      this.alert = false
    },
    closeAlert2() {
      this.alert2 = false
    }
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