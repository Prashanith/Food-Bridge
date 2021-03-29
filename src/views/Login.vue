<template>
    
    <v-container class="fill-height backGroundImg" fluid>
        
        <v-row
            align="center"
            justify="center"
        > 
        <v-col
        cols="12"
        sm="8"
        md="4"
        >
            <v-card  min-height="335" class="cardColor" elevation="0" >
                <v-toolbar color="#6A3D3B" dark height="60" elevation="0">
                    <v-toolbar-title class="d-flex align-center justify-center text-center">LOGIN</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="py-5">
                <v-form ref="form" :lazy-validation="true">
                    <v-text-field
                    v-model="email"
                    label="Email"
                    name="login"
                    
                    type="text"
                    :rules="emailRules"
                    outlined
                    rounded
                    dense
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        required
                        :rules="passwordRules"
                        :type="show? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        counter
                        outlined
                        rounded
                        dense
                        @click:append="show = !show"
                        ></v-text-field>
                        <v-card-actions >
                            <v-btn color="#6A3D3B" depressed block class="white--text px-4" @click="validate" rounded>Login</v-btn>
                        </v-card-actions>
                </v-form>
                </v-card-text>
                
                <blockquote class="text-center subtitle-1">Not a User ?
                    <router-link :to="{ name:'Register'}">Register Here</router-link>
                </blockquote>
            </v-card>            
        </v-col>
    </v-row>
    </v-container>
   
</template>
<script>
import backgroundUrl from '../assets/app.jpg'
export default {
  data() {
    return {
      backgroundUrl,
      show: false,
      email:'',
      password: '',
      emailRules: [
        value => !!value || 'Email Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
       passwordRules: [
        v => v.length >= 8 || 'Min 8 characters',
        v => !!v || 'Password Required',
        v => (v && v.length <= 26) || 'Password cannot exceed 26 characters',
        ],
    }
  },
  methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<style scoped>
.cardColor {
   background-color: rgba(255, 255, 255,0.9) !important;
   border-color: blueviolet !important;
   
 }
 .backGroundImg{
     background-image: url('../assets/app.png');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;    
 } 
</style>