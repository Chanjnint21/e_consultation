<template>
  <v-main>
  <v-container class="px-10" fluid>
    <v-row>
      <v-col cols="6" class="d-flex align-center justify-start pl-16">
        <v-row no-gutters>
          <v-col cols="12">
            <h1><span style="color: #365BC2">Fastest Way</span> for Health Check</h1>
          </v-col>
          <v-col cols="12">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.</p>
          </v-col>
          <v-col cols="12">
            <v-btn color="#E84D72" class="white--text"> Get start <v-icon>mdi-chevron-right</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-end">
        <v-img src="../assets/331061424_3055443658091127_7821642083439530498_n.png" max-width="450"/>
      </v-col>
      <v-col cols="12" class="d-flex justify-center"><p class="text--upperCase">over 100+ partnership</p></v-col>
    </v-row>
    <v-row>
      <v-col class="12 d-flex justify-center" cols="12">
        <h1>About us</h1>
      </v-col>
      <v-col cols="6" style="border-right: 2px solid #365BC2">
        <v-row no-gutters>
          <v-col cols="12" class="text-center pb-5">
            <h3>Our Story</h3>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis illo, autem deserunt officia sapiente nisi laborum quod, atque veniam quaerat? Officiis facere, illo dolorem voluptatem laudantium maiores expedita est?
            Cum, inventore similique sit, odit laboriosam totam magnam rem enim aut voluptas cupiditate sunt error omnis, neque iusto hic dolorum fuga mollitia ea atque consequuntur autem dolor deserunt ducimus. Iste.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row no-gutters>
          <v-col cols="12" class="text-center pb-5">
            <h3>Our Members</h3>
          </v-col>
          <!-- <template v-for="(item, i) in memberList">
            <v-col :key="i" cols="6">
              <v-col cols="12" class="d-flex justify-center" >
                <v-img :src='item.image' max-width="150"/>
              </v-col>
              <v-col class="text-center">
                <p>
                  <span style="color: #E84D72">
                    {{ memberList[i].name }}
                  </span>
                  {{ memberList[i].details }}
                </p>
              </v-col>
            </v-col>
          </template> -->
          <v-col cols="6">
            <v-col cols="12" class="d-flex justify-center" >
              <v-img src="../assets/Members/Mony.jpg" max-width="150"/>
            </v-col>
            <v-col class="text-center">
              <p>
                <span style="color: #E84D72">
                  Chansovanmony youen
                </span>
                , An Information Technology Engineering student in Royal
                University of Phnom Penh.
              </p>
            </v-col>
          </v-col>
          <v-col cols="6">
            <v-col cols="12" class="d-flex justify-center" >
              <v-img src="../assets/Members/Vitou.jpg" max-width="150"/>
            </v-col>
            <v-col class="text-center">
              <p>
                <span style="color: #365BC2">
                  Vitou Hun
                </span>
                , An Information Technology Engineering student in Royal
                University of Phnom Penh.
              </p>
            </v-col>
          </v-col>
          <v-col cols="6">
            <v-col cols="12" class="d-flex justify-center" >
              <v-img src="../assets/Members/Jnint.jpg" max-width="150"/>
            </v-col>
            <v-col class="text-center">
              <p>
                <span style="color: #365BC2">
                  Chanjnint Lim
                </span>
                , An Information Technology Engineering student in Royal
                University of Phnom Penh.
              </p>
            </v-col>
          </v-col>
          <v-col cols="6" class="pb-5">
            <v-col cols="12" class="d-flex justify-center" >
              <v-img src="../assets/Members/Hok.jpg" max-width="150"/>
            </v-col>
            <v-col class="text-center">
              <p>
                <span style="color: #365BC2">
                  Hok Soy
                </span>
                , An Information Technology Engineering student in Royal
                University of Phnom Penh.
              </p>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center pb-5">
        <h1>Services</h1>
      </v-col>
      <v-container class="d-flex">
        <v-col cols="4">
          <v-col cols="12" class="d-flex justify-center">
            <v-img src="../assets/Img/Service1.png" max-width="150"></v-img>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>Posting Question and Seeking for the answer related to physical or mental health</p>
          </v-col>
        </v-col>
        <v-col cols="4">
          <v-col cols="12" class="d-flex justify-center">
            <v-img src="../assets/Img/Service2.png" max-width="150"></v-img>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>Face to Face (F2F) Video call directly with Doctor or professional Consultant</p>
          </v-col>
        </v-col>
        <v-col cols="4">
          <v-col cols="12" class="d-flex justify-center">
            <v-img src="../assets/Img/Service3.png" max-width="150"></v-img>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>Calculate your Calories, health and many more useful tip for your health</p>
          </v-col>
        </v-col>
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center pb-5">
        <h1>Partnership</h1>
      </v-col>
      <template v-for="n in 8">
        <v-col :key="n" cols="3 pa-5">
          <p class="text-center"> PartnerShip Logo</p>
        </v-col> 
      </template>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center pb-5">
        <h1>Contact</h1>
      </v-col>
      <v-container>
        <v-col class="d-flex justify-center">
          <v-img src="../assets/Img/eC2.png" max-width="200"/>
        </v-col>
        <v-col cols="12" class="text-center">
          <p>RUPP Auditorium, Russian Federation Blvd (110) </p>
          <p>Phnom Penh, Cambodia</p>
          <p>+85581808091</p>
          <p><span class="">Email :</span><a>example123@gmail.com</a></p>
        </v-col>
      </v-container>
    </v-row>
  </v-container>
  <v-footer color="#ffffff" class="d-flex justify-space-between">
    <p>Terms & condition</p>
    <p>Back to Top</p>
  </v-footer>
  </v-main>
</template>

<script>
  export default {
    name: 'IntroView',
    data() {
      return {
        memberList: [
          { name: 'Chansovamony Youen', image:'../assets/Members/Mony.jpg', details: 'An Information Technology Engineering student in RoyalUniversity of Phnom Penh.'},
          { name: 'Vitou Hun', image:'../assets/Members/Vitou.jpg', details: 'An Information Technology Engineering student in RoyalUniversity of Phnom Penh.'},
          { name: 'Chanjnint Lim', image:'Jnint.jpg', details: 'An Information Technology Engineering student in RoyalUniversity of Phnom Penh.'},
          { name: 'Hok Soy', image:'Hok.jpg', details: 'An Information Technology Engineering student in RoyalUniversity of Phnom Penh.'}
        ]
      }
    }
  }
</script>
