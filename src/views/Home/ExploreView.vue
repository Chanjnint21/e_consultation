<template>
  <div>
    <v-row>
      <v-col cols="12" class="Q_A text-center pb-0">
        <p>Explore</p> 
      </v-col>
      <v-col cols="12">
        <v-text-field
          outlined
          rounded
          dense
          hide-details="auto"
          label="Explore more..."
          append-icon="mdi-magnify"/>
      </v-col>
      <v-col cols="12" class="Q_A d-flex justify-space-between">
        <p><span class="font-weight-bold">Sort by: </span>popular</p>
        <v-icon>mdi-sort</v-icon>
      </v-col>
      <v-col cols="12" class="Q_A pt-0">
        <v-row no-gutters>
          <template v-for="DrList of Doc_Prof">
            <v-col cols="12" class="py-5" :key="DrList" >
              <v-card>
                <v-row>
                  <v-col cols="2" class="d-flex justify-center pr-0" >
                    <v-avatar rounded size="90">
                      <v-img :src="DrList.avatar"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10" class="pl-0">
                    <v-col cols="12" class="d-flex justify-space-between pa-0">
                      <v-card-title class="pa-0"> {{ DrList.title }}</v-card-title>
                      <v-btn text small>follow</v-btn>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-text class="pa-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sed voluptate deleniti fugit dignissimos cupiditate provident....</v-card-text>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-text class="pa-0">Specialist: Dentist</v-card-text>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-text class="pa-0">follower: 15</v-card-text>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      Doc_Prof: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
        },
        {
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }
      ]
    })
  }
</script>