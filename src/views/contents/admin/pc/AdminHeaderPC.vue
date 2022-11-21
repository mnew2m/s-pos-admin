<template>
    <v-app-bar app clipped-left flat>
      <v-app-bar-title>PC Tool Bar</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawerStatus">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!--<template v-slot:extension>
          <v-tabs
            align-with-title
            class="d-none d-sm-flex"
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>-->
    </v-app-bar>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'pcSearchStatus'
])

const drawerStatus = () => {
    return emit('pcSearchStatus');
}

//let items = ['1', '2', '3']
</script>