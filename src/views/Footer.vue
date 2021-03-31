<template>
    <v-footer class="font-weight-light pa-6 footerFont" color="#17181D" light bottom>
        <v-col></v-col>

        <v-col cols="8">

            <v-row :justify="$vuetify.breakpoint.mdAndUp?space-between:center" align="center">

                <v-col md="3" lg="3" xl="3" sm="12" cols="12">
                    <h2 class="white--text font-weight-light" >Food Bridge</h2>
                </v-col>

                <v-col></v-col>

                <v-col md="5" lg="5" xl="5" sm="12" cols="12">
                    <v-row justify="center" align="center">

                        <v-col cols="3">
                            <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="#17181D"
                            >
                            <v-icon class="px-5" color="grey lighten-2" >
                            mdi-euro
                            </v-icon>
                            </v-btn>                            
                        </v-col>    

                        <v-col cols="3">
                            <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="#17181D"
                            >
                            <v-icon class="px-5" color="grey lighten-2" >
                            mdi-facebook
                            </v-icon>
                            </v-btn>                            
                        </v-col>   

                        <v-col cols="3">
                            <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="#17181D"
                            >
                            <v-icon class="px-5" color="grey lighten-2" >
                            mdi-instagram
                            </v-icon>
                            </v-btn>                            
                        </v-col>   

                        <v-col cols="3">
                            <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="#17181D"
                            >
                            <v-icon class="px-5" color="grey lighten-2" @click="null">
                            mdi-twitter
                            </v-icon>
                            </v-btn>                            
                        </v-col>

                    </v-row>
                </v-col>
            </v-row>

            <v-card color="#17181D" outlined class="px-10">
                <v-card-text class="d-flex justify-center align-center flex-row flex-wrap align-content-center px-6">
                   
                    <v-btn class="mx-1 my-3 black white--text mx-3" rounded>
                        CONTACT
                    </v-btn>  

                    <v-btn class="mx-1 my-3 black white--text mx-3" link router to="/" rounded>
                        DONATE
                    </v-btn>

                    <v-btn class="mx-1 my-3 black white--text mx-3" link router to="/about" rounded>
                        ABOUT
                    </v-btn>

                </v-card-text>                    
            </v-card>

            <v-row justify="center" align="center">
                <v-col cols="8">
                    <v-divider class="black lighten-5"></v-divider>
                </v-col>                
            </v-row>

            <v-row align="center" justify="center" >
                <v-col cols="8">
                    <v-row justify="center" align="center">
                        <h3 class="white--text font-weight-light subtitle-2">2021 - FOOD BRIDGE</h3>
                    </v-row>                    
                </v-col>                
            </v-row>

        </v-col>

        <v-col></v-col>
    </v-footer>     
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
.footerFont{
font-family: 'Changa', sans-serif;
}
</style>
