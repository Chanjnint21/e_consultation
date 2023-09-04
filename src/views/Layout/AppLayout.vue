<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <!-- <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar> -->
      <!-- <h3>E_Consultation</h3> -->
      <div class="d-flex align-center ">
        <v-avatar size="40">
          <v-img src="../../assets/Img/eC2.png"/>
        </v-avatar>
        <h3 class="ml-3">E_Consultation</h3>
      </div>

      <v-tabs
        centered
        class="ml-n9 text-h3"
        color="#E84D72"
      >
        <v-tab
          v-for="link in links"
          :key="link"
          :to="link.path"
          class="font-weight-bold"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
      <v-menu
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            class="hidden-sm-and-down"
            color="#E84D72"
            size="32"
            v-bind="attrs"
            v-on="on"
          ></v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.path"
          >
            <v-list-item-title class="px-5">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main class="blue lighten-5 px-10">
      <v-container fluid class="px-16">
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <v-col>Doctor and Professional</v-col>
              <template v-for="list of Doc_Prof">
                <v-col cols="12" class="py-1" :key="list"> 
                  <v-avatar size="30">
                    <v-img :src="list.avatar"></v-img>
                  </v-avatar>
                  <a href="" class="pl-10 black--text">{{ list.title }}</a>
                </v-col>
              </template>
              <v-col class="pa-0 text-center"><router-link to="/explore" class="text-decoration-none text--disabled">See more...</router-link></v-col>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="86vh"
              rounded="lg"
            >
              <v-main class="pa-5">
                <router-view/>
              </v-main>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <v-col cols="12">Most Ask Answer</v-col>
              <template v-for="(question, index) of popular_questions">
                <v-col class="py-0" :key="question"> <a href="">{{ popular_questions[index] }}</a></v-col>
              </template>
              <v-col class="pa-0 text-center"><router-link to="/q&a" class="text-decoration-none text--disabled">See more...</router-link></v-col>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [ 
      {
        name: 'Home', path: '/home'
      },
      {
        name: 'Q & A', path: '/q&a'
      },
      {
        name: 'Explore', path: '/explore'
      },
      {
        name: 'Service', path: '/more_service'
      }],
      items: [
        {
          title: 'Profile',
          path: '/profile'
        },
        {
          title: 'Sitting',
          path: '/setting'
        },
        {
          title: 'Log out',
          path: '/'
        }],
        popular_questions: [
          'How to cure covid-19 ?',
          'What is the best way for me to get rid of corona virus?',
          'How to overcome depression ?',
          'The most popular Hospital in phnom penh',
          'Get well from flu in 3 days !'
        ],
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
    // methods: {
    //   CutdownText () {
    //     if (this.popular_questions[1].length > 23) {
    //       alert(this.popular_questions[1].slice(0, 30) + '...')
    //     }
    //   }
    // },
    // mounted () {
    //   this.CutdownText()
    // }
  }
</script>