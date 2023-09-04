<template>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#E84D72"
          class="mr-2" 
          text
          v-bind="attrs"
          v-on="on"
        >
          {{ IconLabel }}
        </v-btn>
      </template> 
      <v-card>
          <v-col cols="12" >
            <v-card-title class="text-h5" style=" color:#365BC2; display: flex; justify-content: center; align-items: center;">
              {{ title }}
            </v-card-title>
          </v-col>
        <v-card-actions>
              <v-spacer></v-spacer>
              <v-col
              cols="12"
              >
              <v-text-field
              rounded
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail or Username"
              required
              filled
              small
              class="flex"
            />
              <v-text-field
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                required
                rounded
                filled
                small
                class="flex"
              />
              <slot name="forgot-pwd"/>
              <slot name="signUp-textField"/>
            <v-btn
              block
              rounded
              color="#E84D72" 
              class="white--text"
              style="margin-top: 20px;"
              >{{ BtnLabel1 }}
            </v-btn>
            <v-col cols="12" class="center-content">
              <span style="color: #365BC2"> Or</span>
            </v-col>
              <v-btn
              block
              rounded
              outlined
              color="#365BC2"> 
              <v-img src="../../assets\Img\search.png" max-width="20" />
              {{BtnLabel2}}
            </v-btn>  
          </v-col>
      </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'SignUp_Dia',
    props: {
      IconLabel: String,
      title: String,
      BtnLabel1: String,
      BtnLabel2 : String
    },
    data: () => ({
      dialog: false,
      show1: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }) 
  }
</script>
<style>
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Btnlogo {
  display : flex;
  justify-content: start;
  align-self: start;
}
</style>
