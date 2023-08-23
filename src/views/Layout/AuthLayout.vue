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
            <v-btn color="#E84D72" class="mr-2" text>Login</v-btn>
            <v-btn color="#E84D72" outlined>SignUp</v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </template>
  
  <script>
  
  export default {
    name: 'AuthLayout',
  
    data: () => ({
      //
    }),
  };
  </script>
  