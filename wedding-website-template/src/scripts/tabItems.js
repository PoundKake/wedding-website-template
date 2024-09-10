import { routerMap } from '@/router/index.js'

const listItems = {
  Home: {
    title: 'Home',
    value: 1,
    link: routerMap.get('home')
  },

  About: {
    title: 'About',
    value: 2,
    link: routerMap.get('about')
  },

  Photos: {
    title: 'Photos',
    value: 3,
    link: routerMap.get('photos')
  },

  Registry: {
    title: 'Registry',
    value: 4,
    link: routerMap.get('registry')
  },

  Rsvp: {
    title: 'Rsvp',
    value: 5,
    link: routerMap.get('rsvp')
  },

  Schedule: {
    title: 'Schedule',
    value: 6,
    link: routerMap.get('schedule')
  },

  Cast: {
    title: 'Cast',
    value: 7,
    link: routerMap.get('cast')
  },

  ToDo: {
    title: 'ToDo',
    value: 8,
    link: routerMap.get('todo')
  },

  Travel: {
    title: 'Travel',
    value: 9,
    link: routerMap.get('travel')
  }
}

export default listItems
