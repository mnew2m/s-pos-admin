<template>
    <v-app-bar app clipped-left flat>
        <v-app-bar-nav-icon @click="moMenuStatus"></v-app-bar-nav-icon>
        <v-app-bar-title>Mobile Tool Bar</v-app-bar-title>
        <v-spacer />
        <v-btn icon @click="moSearchStatus">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'moMenuStatus',
    'moSearchStatus'
])

const moMenuStatus = () => {
    return emit('moMenuStatus');
}

const moSearchStatus = () => {
    return emit('moSearchStatus');
}
</script>