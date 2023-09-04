<template>
  <div>
    <v-row>
      <v-col cols="12">
        <carousel-slide/>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-row no-gutters>
          <template v-for="shortcut of shortcutList">
            <v-col :key="shortcut" cols="3" class="d-flex justify-center"><v-btn color="#365BC2" :to="shortcut.path" text x-large><v-icon color="#E84D72">{{ shortcut.icon }}</v-icon> {{ shortcut.title }}</v-btn></v-col>
          </template>
        </v-row>
      </v-col>
      <v-col cols="12">
        <carousel-slide/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shortcutList: [
        {
          title: 'Q & A',
          icon: 'mdi-help',
          path: '/q&a'
        },
        {
          title: 'Explore',
          icon: 'mdi-magnify',
          path: '/explore'
        },
        {
          title: 'Extra Service',
          icon: 'mdi-calculator',
          path: '/more_service'
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          path: '/profile'
        }
      ]
    }
  }
}
</script>