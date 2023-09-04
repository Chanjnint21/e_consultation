<template>
    <v-app>
      <v-app-bar
        app
        color="#ffffff"
        elevation="0"
      >
        <div class="d-flex align-center ">
          <v-avatar size="45">
            <v-img src="../../assets/Img/eC2.png"/>
          </v-avatar>
          <h2 class="pb-3 ml-3">E-Consultation</h2>
        </div>
  
        <v-spacer></v-spacer>
        <template class="d-flex">
            <v-btn text>Home</v-btn>
            <v-btn text>About Us</v-btn>
            <v-btn text>Services</v-btn>
            <v-btn text>Partnership</v-btn>
            <accessDia IconLabel="Login" title="Login"  BtnLabel1="Login" BtnLabel2="Continue with google" >
              <template v-slot:forgot-pwd>
                <router-link to="/" class="router-link" style: style="display: flex; justify-content: end; align-items: end;">forgot password ?</router-link>
              </template>
            </accessDia>
            <accessDia IconLabel="Sign Up" title="Sign Up"  BtnLabel1="Sign Up" BtnLabel2="Sign Up with google">
              <template v-slot:signUp-textField>
                <v-text-field
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                label="Confirm password"
                required
                rounded
                filled
                small
                class="flex"/>
              </template>
            </accessDia>
        </template>
      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </template>
  
  <script>
import accessDia from '../components/Sign&Log_Dialog.vue'
  export default {
    name: 'AuthLayout',
    components: {
      accessDia
    },
    data: () => ({
      password: ''
    }),

    methods: {
      // openSignUpDialog () {
      //   console.log('it works !'),
      //   this.$refs.signUpDialog.dialog = true
      // }
    }
  };
  </script>
  <style>

  .router-link {
    color: blue;
    text-decoration: underline;
  }
  .d-flex {
    align-items: flex-end;
    
  }
  </style>
  