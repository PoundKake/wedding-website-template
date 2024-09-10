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
  <header></header>
  <v-layout>
    <!-- Main Application Content -->
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-card class="text-center justify-center" :color="bgColor" :elevation="0">
                decorative image here
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="text-center justify-center" :color="bgColor" :elevation="0">
                wedding Image Here
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card :color="bgColor" :elevation="0">
            <v-card-title class="text-center justify-center py-6">
              <h1 class="text-h2 fc">Wedding Title</h1>
            </v-card-title>

            <v-tabs v-model="tab" bg-color="transparent" :color="fgColor" grow>
              <v-tab
                v-for="item in items"
                :key="item"
                :text="item.name"
                :value="item"
                :to="item.link"
                :base-color="baseColor"
              ></v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item v-for="item in items" :key="item" :value="item">
                <v-card color="#fffbe6" flat>
                  <router-view></router-view>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style>
#template {
  font-family: Didot;
}
</style>
