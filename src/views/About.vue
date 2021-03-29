<template>
  <v-app>
    <v-app-bar
      elevate-on-scroll     
      outlined
      app
      color="#EDD1CB"
      light
      height="60"
      style="border-bottom: 2px solid gray;"
      >
      <v-spacer/>   
      <v-toolbar-title>
        ABOUT
      </v-toolbar-title>
      <v-spacer/>    
    </v-app-bar>

    <v-main class="mainColor my-5">
      <v-container >
        <v-row justify="center"  align="center">

          <v-col md="2" lg="2" xl="2" sm="10" cols="10"> 
            <v-avatar size="150" class="pa-2" color="#FFC87A" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img src="../assets/logo.png" contain></v-img> 
              </v-avatar>  

            <v-img src="../assets/logo.png" contain v-if="$vuetify.breakpoint.smAndDown"></v-img>          
                        
          </v-col>

          <v-col md="7" lg="7" xl="7" sm="10" cols="11">
            <v-card outlined>
              <v-card-text class="pt-8 pb-16 px-8 text-subtitle-1 font-weight-regular black--text">
                <strong class="font-weight-medium text-h6 py-4">ABOUT ME</strong>
                <br> 
                <br>
                <p>
                  I'm Prashanith, author of this Blog-Dev007.
                </p>
                <p>
                  Here I speak about everything I'm interested in. So basically I speak about 
                  Science and Technology, Gadgets, Sports and some side of politics. I believe to put my insights on the several affairs. I would like everyone of similar interests to subscirbe to my blog. 
                </p>
                <i>
                  "The aim is to build a good community"
                </i>
                <p>
                  I am active on most of the social media platforms. Yeah I do a lot of things there too.  
                </p>
              
                <p>
                  In a few years, I hope I will be able to build a good community here.I wish to get all the support I need.
                </p>
              </v-card-text>
            </v-card>           
          </v-col>

        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>


<script>
  
import Footer from './Footer';


export default {
  name: 'About',
  components: {
    Footer,
  },
};
</script>
