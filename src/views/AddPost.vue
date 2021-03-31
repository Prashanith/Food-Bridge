<template>
    <div>
        <v-row>
            <v-col >
                <v-card flat>
                    <v-card-text>
                        <v-form ref="form" :lazy-validation="true">
                            <v-text-field
                            v-model="userinfo"
                            required
                            label="Username"
                            outlined
                            rounded
                            dense
                            readonly              
                            ></v-text-field>

                            <v-text-field
                            v-model="email"
                            required
                            :rules="emailRules"
                            label="Email"
                            outlined
                            rounded
                            dense
                            readonly              
                            ></v-text-field>

                            <v-text-field
                            v-model="location"
                            required
                            :rules="locationRules"
                            label="Location"
                            outlined
                            rounded
                            dense              
                            ></v-text-field>                            
                            
                            <v-text-field
                            v-model="description"
                            required
                            :rules="descriptionRules"
                            label="Description"
                            counter
                            outlined
                            rounded
                            dense              
                            ></v-text-field>

                            <v-text-field
                            v-model="mobile"
                            required
                            :rules="mobileRules"
                            label="Mobile Number"
                            counter
                            outlined
                            rounded
                            dense              
                            ></v-text-field>                            
                            <v-btn depressed rounded dark block color="green darken-4" @click="addPost()">POST</v-btn>

                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> 
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
    </div>
</template>

<script>
import { db,auth } from '../firebaseInit'
export default {
    created(){
        this.email=auth.currentUser.email
    },
    props:['username'],
    data(){
        return{
            userinfo:this.username,
            snackBar:false,
            message:'',
            timeout: 2000,
            email:auth.currentUser.email,
            location:'',
            description:'',
            mobile:'',
            emailRules: [
                value => !!value || 'Email Required.',
                value => (value || '').length <= 50 || 'Max 50 characters',
                value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
            ],
            locationRules: [
                value => !!value || 'Location Required.',
                value => {
                const regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
                return regex.test(value) || 'Invalid Location'
                },
            ],
            descriptionRules:[
                value => !!value || 'Description Required.',
                value => (value || '').length <= 250 || 'Max 250 characters',
            ],
            mobileRules:[
                value => !!value || 'Mobile Number Required.',
                value => (value || '').length <= 10 || 'Max 10 characters',
            ]
        }
    },
    methods:{
        addPost(){
            if(this.$refs.form.validate()){
                console.log(this.userinfo)
                if(!(this.userinfo==null || this.userinfo==undefined || this.userinfo=='')){
                db.collection("Posts").add({
                    'email':this.email,
                    'location':this.location,
                    'description':this.description,
                    'userId':this.$store.state.uid,  
                    'mobile':this.mobile,
                    'date':Date(),
                    'username':this.userinfo                
                })
                .then(() =>{                
                this.snackBar=true;
                this.message='Post Added Successfully'
                })
                .catch((error) =>{
                    this.snackBar=true;
                    this.message=error.message
                });
            } 
            else{
                this.snackBar=true;
                this.message="Update Profile to Post"
            }            
            }
        }       
    },
}
</script>