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
          <v-col md="7" lg="7" xl="7" sm="10" cols="11">
            <v-card outlined>
              <v-card-text class="pt-8 pb-16 px-8 text-subtitle-1 font-weight-regular black--text">
                <strong class="font-weight-medium text-h6 py-4">ABOUT US</strong>
                <br> 
                <br>
                <p>
                Food-Bridge works towards eradicating hunger by connecting people who need food and people who have extra food to donate.Extra food from local household, restaurants, parties should not go waste, so we take their food and distribute it among people who are in need. Our volunteers pick up food from your doorstep and you can be part of this good cause. Let us try and not let anyone sleep on an empty stomach. 
                </p>
                <p>
                Most of us believe that hunger only affects people who are lazy or people who are just looking for a handout, people who don’t want to work, but, sadly, that is not true. Over one-third of our hungry people are innocent children who are members of households that simply cannot provide enough food or proper nutrition. And to think of the elderly suffering from malnutrition is just too hard. The problem is not having too little – it is about not caring enough! We decided to care enough, and we hope to joining hands with everyone who cares.
                </p>
                <p>
                  Recent research shows that many children who do not have enough to eat wind up with diminished capacity to understand and learn. Children don’t have to be starving for this to happen. Even mild undernutrition causes diseases. So Food-Bridge aims to help these children and all these families. 
                </p>
                <p>We all see food going to waste everyday, be it at our houses or be it at restaurants we go to for lavish parties, we took that into consideration and thought why not just distribute this food to people who cannot afford 3 meals a day. Hence, we built this interface where people can tell us where they have extra food, and we can supply it to people who need food !
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
