<template>
    <v-app-bar app clipped-right flat>
      <v-app-bar-title class="mr-10">PC Tool Bar</v-app-bar-title>
      <v-tabs show-arrows>
        <v-tab v-for="item in props.items" :key="item.name" @click="addActiveItem(item)">
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon @click="pcSearchStatus">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['items'])
console.log('AdminHeaderPC props -> ', props);

const emit = defineEmits([
    'pcSearchStatus',
    'addActiveItem'
])

const pcSearchStatus = () => {
    return emit('pcSearchStatus');
}

const addActiveItem = (item) => {
  return emit('addActiveItem', item);
}
</script>