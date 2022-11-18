<template>
    <v-app-bar app clipped-left flat>
        <v-app-bar-nav-icon @click="drawerStatus"></v-app-bar-nav-icon>
        <v-toolbar-title>Mobile Tool Bar</v-toolbar-title>
    </v-app-bar>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'drawerStatus'
])

const drawerStatus = () => {
    return emit('drawerStatus');
}
</script>