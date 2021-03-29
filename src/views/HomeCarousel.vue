<template>
    <v-img       
    :height="$vuetify.breakpoint.height"
    src="https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    >
      <template v-slot:default>           
        <v-row justify="start" align="center" align-content="center"  class="fill-height ma-0" >

          <v-col v-if="$vuetify.breakpoint.smAndUp" cols="1"></v-col>

          <v-col md="6" cols="10" xl="6" sm="6">
              <v-carousel 
              :height="$vuetify.breakpoint.height/5*3" 
              cycle="4"
              :show-arrows="false"
              hide-delimiter-background
              transition="scale-transition" 
              >
                <template v-slot:default>
                    <!-- <v-img src="https://pngjungle.com/filedir/upfiles/2020/10/Purple-ribbon-background-ribbon-elements-shading-decorative-patterns.png"  
                    :height="$vuetify.breakpoint.height"
                    contain
                    > -->
                    <!-- <template v-slot:default> -->
                        <v-row justify="center" align="center">
                          <v-col>
                            <ha v-text="textinfo"                               
                            ></ha>


                          </v-col>
                        </v-row>
                        <v-row class="mx-5">
                          <v-btn
                            rounded
                            color="green lighten-3"
                            light
                            depressed
                            x-large
                            class="pa-10 mx-3 headline"                                  
                          >
                            I have Food
                          </v-btn>
                          <v-btn
                            rounded
                            color="green lighten-3"
                            light
                            depressed
                            x-large
                            class="pa-10 mx-3 headline"                                 
                          >
                            I want Food
                          </v-btn>

                        </v-row>
                </template>

                <v-carousel-item>
                  <v-container :height="$vuetify.breakpoint.height/5*3" 
                  elevation-5
                  >
                  
                  </v-container>
                </v-carousel-item>
              </v-carousel>
          </v-col>
          <v-col></v-col>
      </v-row>                     
    </template>
    </v-img>
</template>

<script>
export default {
    name:'HomeCarousel',
    data:()=>{
      return{
        textinfo:'',
        buttonView:false,
        info:'Join us conquer hunger',
      }
    },
    methods:{
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      async changeText(i){
        await this.sleep(2000);
        this.textinfo=this.info.slice(0,i+1);
      }        
    },


    async mounted() {
       for (var i = 0; i < this.info.length; i++) {
        await this.sleep(100);
        this.changeText(i); 
                
      }
    },
    updated(){
      if(this.info.length===this.textinfo.length){
        this.buttonView=true;
        console.log('fuck');
      }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
ha{
font-family: 'Dela Gothic One', cursive;
font-size: 60px;
color: darkgreen;
background: white;
}
</style>
