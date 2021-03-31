<template>
  <v-app class="backColor">
    <v-app-bar app dark color="green darken-4">
      <v-row no-gutters>
        <v-col cols="1" sm="1" md="2" lg="2" xl="2"></v-col>
        <div class="text-center font-weight-light headline">PROFILE</div>
        <v-spacer></v-spacer>
        <v-btn color="#EDD1CB" depressed @click="logout()" light>
          Logout
          <v-icon>logout</v-icon>
        </v-btn>
        <v-col cols="1" sm="1" md="2" lg="2" xl="2"></v-col>
      </v-row>   
    </v-app-bar>

    <v-main class="backColor mt-8">
      <v-row>
        <v-col></v-col>

        <v-col cols="11" sm="10" md="8" lg="8" xl="8" >
          <v-card class="pa-8">
          <v-card-title class="d-flex justify-center text-center headline mb-4">MY PROFILE</v-card-title>
          <v-card-text>
            <v-form ref="form" :lazy-validation="true">
              <v-text-field
              v-model="firstname"
              required
              :rules="firstnameRules"
              label="First Name"
              counter
              outlined
              rounded
              dense              
            ></v-text-field>

            <v-text-field
              v-model="lastname"
              required
              :rules="lastnameRules"
              label="Last Name"
              counter
              outlined
              rounded
              dense              
            ></v-text-field>

            <v-text-field
              v-model="email"
              required
              :rules="emailRules"
              label="Email"              
              outlined
              rounded
              dense              
            ></v-text-field>

            <v-text-field
              v-model="mobile"
              required
              :rules="mobileRules"
              label="Mobile"              
              outlined
              rounded
              dense              
            ></v-text-field>        
            </v-form>
          </v-card-text>
    
          <v-card-actions >
            <v-btn color="#6A3D3B" depressed block class="white--text px-4" @click="validate()" rounded>Update</v-btn>
          </v-card-actions>
        </v-card>

        </v-col>
        <v-col></v-col>
      </v-row>
      <div class="text-center">
        <v-snackbar
        v-model="snackBar"
        :timeout="timeout"
        >
        {{ message }}
        </v-snackbar>
    </div>

    </v-main>

    
      

  </v-app>

</template>
<script>
import { auth,db } from "../firebaseInit"


export default ({
  data()
  {
    return{
      snackBar:false,
      message:'',
      timeout: 2000,
      email:'',
      mobile:'',
      firstname:'',
      lastname:'',
      emailRules: [
        value => !!value || 'Email Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      firstnameRules: [
      v => v.length >= 8 || 'Min 8 characters',
      v => !!v || 'firstname required',
      v => (v && v.length <= 26) || 'Length Exceeded',
      ],
      lastnameRules: [
      v => v.length >= 1|| 'Last Name cannot be empty',
      v => !!v || 'firstname required',
      v => (v && v.length <= 26) || 'Length Exceeded',
      ],
      mobileRules:[
        v => v.length == 10 || 'Mobile Number must be of 10 Characters',
        v => !!v || 'mobile number required',
      ],

      
    }
  },
  methods: {
    reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      async validate(){
      if(this.$refs.form.validate()){
        await db.collection("UserData").doc(this.$store.state.uid).set({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          mobile:this.mobile
          })
          .then(() =>{                
              this.snackBar=true;
              this.message='Profile Updated Succesfully'
          })
          .catch((error) =>{
              this.snackBar=true;
              this.message=error.message
          });
              }
          },
    logout(){
          auth
          .signOut().then(()=>{
              this.$store.commit('signOut');
              this.$store.commit('removeUserId');
              this.$router.push({ path:'/'})
          },
          error=>{
              console.log(error)
          })
      }
  },
  created() {
    db.collection("UserData")
  .doc(this.$store.state.uid)
  .get()
  .then(snapshot => {
    this.firstname=snapshot.data().firstname
    this.lastname=snapshot.data().lastname
    this.email=snapshot.data().email
    this.mobile=snapshot.data().mobile
  })
    
  },
})
</script>

<style scoped>
.backColor{
  background: #F1EEE5;
}

</style>