<script setup>
import { ref } from 'vue'

const tab = ref('Home')

const items = ['Home', 'About']
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
</script>

<template>
  <v-card color="#fffbe6" :elevation="0">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 fc">Weddin Title</h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="fc" grow>
      <v-tab v-for="item in items" :key="item" :text="item" :value="item"></v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in items" :key="item" :value="item">
        <v-card color="#fffbe6" flat>
          <v-card-text style="color: fc">{{ text }}</v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
