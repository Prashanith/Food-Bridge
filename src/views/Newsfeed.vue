<template>
    <v-app class="backColor" >
        <v-app-bar color="green darken-4" app dark elevation="0">
            <v-app-bar-title>
                {{userProfile.firstname +" " + userProfile.lastname}}
                                
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <div>NEWSFEED</div>
            <v-spacer></v-spacer>
            <v-btn class="mx-3" color="#EDD1CB" light rounded depressed link router to="/profile" >
            Profile                            
            </v-btn>
            <v-btn color="#EDD1CB" light depressed rounded @click="logout()">
            Logout
            <v-icon>logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main class="backColor mt-8">
            <v-row>
            
                <v-col></v-col>
                <v-col cols="11" sm="10" md="8" lg="8" xl="8">
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Add POST</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <AddPost v-bind:username="userProfile.firstname+userProfile.lastname"/>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>                    
                </v-col>
                <v-col></v-col>
                
            </v-row>              
            <v-row>
                <v-col></v-col>
                <v-col cols="11" sm="10" md="8" lg="8" xl="8">
                    <v-row v-for="post in posts" :key="post">
                        <v-col cols="12">
                        <v-card min-height="250" rounded="lg">
                            <v-card-title class="my-0 pt-3 pb-2">
                            {{ post.username }}
                            <v-spacer></v-spacer>
                            <p class="my-0 pt-3 pb-2 font-weight-light">
                                {{ post.date.slice(0,21)+" hrs"}}
                            </p>                           

                            </v-card-title>
                            <hr class="mx-5 my-0">
                            <v-card-subtitle class="subtitle-2 my-0">
                                <p>
                                    <v-btn fab @click="copyFunction(post.email)" x-small depressed class="green lighten-4">
                                    <v-icon class="material-icons " size="22">mail</v-icon>
                                    </v-btn>
                                    {{post.email}}
                                </p>

                                <p>
                                    <v-btn fab @click="copyFunction(post.mobile)" x-small depressed class="green lighten-4">
                                    <v-icon class="material-icons " size="22">local_phone</v-icon>
                                    </v-btn>
                                    {{post.mobile}}
                                </p>

                                <p>
                                    <v-btn fab @click="copyFunction(post.location)" x-small depressed class="green lighten-4">
                                    <v-icon class="material-icons " size="22" >place</v-icon>
                                    </v-btn>
                                    <a :href="post.location" target="_blank"> {{post.location}}</a>

                                </p>                                                                                   
                            </v-card-subtitle>
                            <v-card-text>                               
                                 <p class="font-weight-medium black--text subtitle-1">
                                    {{ post.description }}
                                 </p>
                                                             
                            </v-card-text>
                            <v-card-actions>
                            </v-card-actions>                            
                        </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col></v-col>
            </v-row>           
        </v-main>
        <div class="text-center">
            <v-snackbar
            v-model="snackBar"
            :timeout="timeout"
            dark
            color="green"
            >
            {{ message }}
            </v-snackbar>
        </div>
    </v-app>    
</template>

<script>
import { auth,db } from '../firebaseInit';
import AddPost from './AddPost.vue';
export default {
    components:{
        AddPost,
        
    },  
    data(){
        return{
            info:'',
            posts:[],
            userProfile:'',
            snackBar:false,
            message:'',
            timeout: 2000,
        }
    },
    methods:{
        logout(){
            auth.signOut().then((token)=>{
                console.log(token);
                this.$store.commit('signOut');
                this.$store.commit('removeUserId');
                this.$router.push({ path:'/'});
            },
            error=>{
                console.log(error)
            })
        },
        async copyFunction(text) {
            await navigator.clipboard.writeText(text);
           
            this.snackBar=true;
            this.message=`Text Copied ${text}`
        }       
    },
    async created(){
        this.info=auth.currentUser
        console.log(this.info)
        db.collection("UserData").doc(this.info.uid)
        .onSnapshot((doc) => {
            this.userProfile=doc.data();
        });
        console.log("df",this.userProfile);

        db.collection("Posts")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                this.posts.push(doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }
}
</script>

<style scoped>
.backColor{
  background: #F1EEE5;
}

</style>