<template>
  <v-carousel
    cycle
    height="250"
    hide-delimiter-background
    show-arrows-on-hover
    class="rounded-lg"
    >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  import homeImage1 from '../assets/Img/home_img1.jpg'
  import homeImage2 from '../assets/Img/home_img2.jpg'
  import homeImage3 from '../assets/Img/home_img3.jpg'
  import homeImage4 from '../assets/Img/home_img4.jpg'
  export default {
    data () {
      return {
        items: [
          {
            src: homeImage1,
          },
          {
            src: homeImage2,
          },
          {
            src: homeImage3,
          },
          {
            src: homeImage4,
          },
        ],
      }
    },
  }
</script>