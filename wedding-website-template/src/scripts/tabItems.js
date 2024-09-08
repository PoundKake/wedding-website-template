import { routerMap } from '@/router/index.js'

const listItems = {
  Home: {
    title: 'Home',
    value: 1,
    props: {
      color: 'grey-darken-1'
    },
    link: routerMap.get('home')
  },

  About: {
    title: 'About',
    value: 2,
    link: routerMap.get('about')
  }
}

export default listItems
