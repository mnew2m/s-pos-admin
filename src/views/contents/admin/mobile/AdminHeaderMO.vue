<template>
    <v-app-bar app clipped-left flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>Mobile Tool Bar</v-app-bar-title>
        <v-spacer />
        <v-btn icon @click="drawerStatus">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'moSearchStatus'
])

const drawerStatus = () => {
    return emit('moSearchStatus');
}
</script>