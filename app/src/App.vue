<script setup>
import { RouterView } from 'vue-router'
import listItems from '@/scripts/tabItems'

import { ref } from 'vue'

const tab = ref('Home')

const bgColor = '#fffbe6'
const fgColor = '#356859'
const baseColor = '#71958a'

const items = [
  {
    name: listItems.Home.title,
    link: listItems.Home.link
  },
  {
    name: listItems.About.title,
    link: listItems.About.link
  },
  {
    name: listItems.Photos.title,
    link: listItems.Photos.link
  },
  {
    name: listItems.Registry.title,
    link: listItems.Registry.link
  },
  {
    name: listItems.Rsvp.title,
    link: listItems.Rsvp.link
  },
  {
    name: listItems.Schedule.title,
    link: listItems.Schedule.link
  },
  {
    name: listItems.Cast.title,
    link: listItems.Cast.link
  },
  {
    name: listItems.ToDo.title,
    link: listItems.ToDo.link
  },
  {
    name: listItems.Travel.title,
    link: listItems.Travel.link
  }
]
</script>

<template>
  <v-layout>
    <!-- Main Application Content -->
    <v-container class="mx-auto">
      <v-row class="my-1">
        <v-col>
          <v-card class="text-center justify-center" :color="bgColor" :elevation="0">
            decorative image here
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-1">
        <v-col class="d-flex justify-center">
          <v-card :color="bgColor" :elevation="0">
            <v-card-title class="text-center justify-center">
              <h1 class="text-h2 fc">Wedding Title</h1>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-1">
        <v-col>
          <v-card class="d-flex justify-center" :color="bgColor" :elevation="0">
            <img src="https://loremflickr.com/200/200?random=2" />
          </v-card>
        </v-col>
      </v-row>

      <v-row class="d-felx justify-center my-16 px-3 mx-3">
        <v-tabs v-model="tab" bg-color="transparent" :color="fgColor">
          <v-tab
            v-for="item in items"
            :key="item"
            :text="item.name"
            :value="item"
            :to="item.link"
            :base-color="baseColor"
            class="tabs-font"
          ></v-tab>
        </v-tabs>
      </v-row>
      <v-row class="d-flex justify-center my-5 class-content">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="item in items" :key="item" :value="item">
            <v-card color="#fffbe6" flat class="mx-16">
              <router-view></router-view>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style>
#template {
  font-family: Didot;
}

.tabs-font {
  font-size: 10px;
}

#v-container {
  min-width: 1024px;
}
</style>
