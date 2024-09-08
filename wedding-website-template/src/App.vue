<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header></header>
  <v-layout>
    <!-- Main Application Content -->
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-card> decorative image here </v-card>
          </v-row>
          <v-row>
            <v-card> wedding Image Here </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style scoped></style>
