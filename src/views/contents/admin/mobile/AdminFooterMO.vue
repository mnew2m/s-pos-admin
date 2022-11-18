<template>
    <v-bottom-navigation :value="value" color="primary">
        <v-btn>
            <span>Reset</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn>
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn>
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
import { ref } from 'vue';

let value = ref(1);
</script>