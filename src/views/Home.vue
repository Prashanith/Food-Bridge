<template>
  <div>
    <Navigator/>
    <v-main class="backColor">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="11">
            <v-card class="my-12 align-center justify-center text-center pa-10" outlined height="250">

              <v-card-title class="d-flex justify-center align-center ha">
              We are just an interface
              <br>
              <br>
              You do everything here 
              </v-card-title>  

              <div class="d-flex justify-center subtitle-1 my-4 font-weight-light">
                Click                 
                <router-link link router to="/about" class="grey--text lighten-4 px-1">here</router-link>
                to learn more about what we do 
              </div>            
            </v-card>         
          </v-col>
        </v-row>      

        <v-row align="center" justify="center">           
          <v-col cols="11">
            <v-card outlined class="pa-5 pt-8 mb-10">
              <v-card-title class="d-flex justify-center ha py-5">
                Our Goals
              </v-card-title>
              <v-card-text class="d-flex flex-row">
                <v-row>
                  <v-col v-for="goal in goals" :key="goal.title">
                    <v-card class="ma-3 py-3 px-2" height="400" outlined>
                  <v-card-title class="d-flex justify-center align-center mx-3">
                    <v-btn
                    class="mx-2"
                    fab
                    dark                            
                    color="#c3e6fc"
                    depressed
                    >
                    <span class="material-icons black--text">
                    {{goal.icon}}
                    </span>
                  </v-btn>

                  </v-card-title>
                  <v-card-subtitle class="my-2 text-center" >
                    {{ goal.title }}                    
                  </v-card-subtitle>
                  <v-card-text class="subtitle-1 text-center"> 
                    {{ goal.description }}                   
                  </v-card-text>
                </v-card>
                    
                  </v-col>
                </v-row>
                

                
              </v-card-text>
            </v-card>          
          </v-col>        
        </v-row>

    </v-container>      
    </v-main>
    <Footer/>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Footer from '../views/Footer'

export default {
  name: 'Home',
  components: {
    Navigator,  
    Footer  
  },
  data:()=>{
    return{
      goals:[
        {
          'icon':'dinner_dining',
          'title':'UN SDG Zero Hunger',
          'description':'We are promoting sustainable development goal set by the United Nations towards a better planet by supplying food to the hungry'
        },
        {
          'icon':'spa',
          'title':'Responsible consumption and production',
          'description':'Food sector contributes to almost 22% of global greenhouse gases. We focus towards sustainable consumption of food by putting the extra food from restuarants or households to use.',
        },
        {
          'icon':'health_and_safety',
          'title':'Good health and well being',
          'description':'1.3 billion tonnes of food is wasted every year, while almost 2 billion people go undernourished and hungry. We aim to provide health to them by providing them with everyday good at the least.',
        }
      ]
      
       
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
.ha{
font-family: 'Changa', sans-serif;
font-size: 45px;
color: #484E5D;
}
.backColor{
  background: #F1EEE5;
}
</style>