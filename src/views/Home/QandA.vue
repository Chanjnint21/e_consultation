<template>
  <div>
    <v-row>
      <v-col cols="12" class="Q_A d-flex justify-space-between pb-0">
        <p>Q & A Forum</p>
        <v-btn color="#E84D72" class="white--text" small rounded dense><v-icon>mdi-plus</v-icon>New Question</v-btn>     
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          outlined
          rounded
          dense
          hide-details="auto"
          label="Searching question..."
          append-icon="mdi-magnify"/>
      </v-col>
      <v-col cols="12" class="Q_A d-flex justify-space-between">
        <p><span class="font-weight-bold">Sort by: </span>Date Modify</p>
        <v-icon>mdi-sort</v-icon>
      </v-col>
      <v-col cols="12" class="Q_A pt-0">
        <v-row no-gutters>
          <template v-for="n of 3">
            <v-col cols="12" class="pb-5" :key="n" >
              <v-card>
                <v-card-title>How to cure the covid-19 faster?</v-card-title>
                <v-card-text><span class="font-weight-bold">Top answer: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit iusto eius perspiciatis beatae. Assumenda impedit corporis a incidunt rerum earum dolor suscipit officia? Nihil veniam in a doloribus natus?</v-card-text>
                <v-card-subtitle class="d-flex justify-space-between"> 
                  <p><span class="font-weight-bold">Post by: </span>Dr.Henma</p>
                  <p><span class="font-weight-bold">answers: </span>77</p>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
