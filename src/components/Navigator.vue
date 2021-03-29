<template>
   <div class="ma=0">
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#F7F5EB" 
      >     
      <v-list>

        <v-list-item> 
          <v-list-item-content class="ma-0 pa-0">
            <v-list-item-title class="mx-4 text-h6">          
              Food Bridge
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
       
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            color="red"
            v-for="(item, i) in items"
            :key="i"
            class="ma-0"
            link router :to="item.route"
          >
            <v-list-item-icon>
              <span class="material-icons">
                {{ item.icon }}
              </span>
            </v-list-item-icon>
            <v-list-item-content >
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         </v-list-item-group>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar     
      min-height="60"
      shrink-on-scroll
      fade-img-on-scroll 
      :height="$vuetify.breakpoint.height" 
      scroll-off-screen
      hide-on-scroll
      color="#EDD1CB"
      light
      style="border-bottom: 1px solid #760933;"    
    >   
      <template v-slot:img >
        <HomeCarousel/>        
      </template>
      <v-app-bar-nav-icon @click="drawer=!drawer" >
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <div class="pa-0 ma-2 green--text text--darken-4 font-weight-bold" color="#760933" >
        Food Bridge
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex justify-center align-center mt-2">
        <v-btn 
        v-if="$vuetify.breakpoint.mdAndUp" 
        depressed 
        color="#760933" 
        light text rounded
        class="mx-2"
        link router to="/login"

        >
          LOGIN
        </v-btn>

        <v-btn 
        v-if="$vuetify.breakpoint.mdAndUp" 
        depressed 
        color="#760933" 
        light outlined rounded class="mx-2"
        link router to="/checkfood"
        >
        CHECK FOOD
        </v-btn>

        <v-btn
        v-if="$vuetify.breakpoint.mdAndUp" 
        depressed 
        color="#760933" 
        dark rounded 
        class="mx-2"
        link router to="/about"        
        >
          ABOUT    
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-responsive :max-width="$vuetify.breakpoint.mdAndUp?260:150" class="mt-2" >
          <v-text-field
            dense
            hide-details
            background-color="#760933"
            rounded
            color="white"
            solo
            dark
            placeholder="search location"
            class="carouseltext"
            @change="searchFood"
          ></v-text-field>
        </v-responsive>
      </v-app-bar>
    </div>
</template>

<script>
import HomeCarousel from '../views/HomeCarousel'
  export default {
    name: 'Navigator',
    components:{
      HomeCarousel
    },
    data: () =>{
      return{
        selectedItem: true,
        items: [
          { text: 'Home',icon:'home', route:'/' },
          { text: 'Login',icon:'person_pin', route:'/login' },
          { text: 'CheckFood',icon:'rice_bowl', route:'/checkfood' },
          { text: 'About',icon:'info',route:'/about'},
        ],
        drawer:false,
      }
    },
    methods:{
      searchFood(){

      }
    }
  }
</script>
