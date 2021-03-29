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
                <a href="" class="grey--text lighten-4 px-1">here</a>
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
                <v-card  v-for="n in 3" :key="n" class="ma-3 py-3 px-2" outlined>
                  <v-card-title class="d-flex justify-center align-center mx-3">
                    <v-btn
                            class="mx-2 "
                            fab
                            dark                            
                            color="#c3e6fc"
                            depressed
                            >
                            <v-icon large class="px-5" color="white" @click="null">
                            mdi-twitter
                            </v-icon>
                            </v-btn>

                  </v-card-title>
                  <v-card-subtitle>

                  </v-card-subtitle>
                  <v-card-text class="subtitle-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut tenetur ea doloribus praesentium consectetur odit recusandae consequuntur! Animi in, placeat architecto debitis ratione deleniti. Quam eligendi asperiores cupiditate voluptatem.
                  </v-card-text>
                </v-card>

                
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