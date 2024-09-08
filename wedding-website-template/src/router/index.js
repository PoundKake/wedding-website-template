import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routerRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

// mapping array of routes into a key value pair where the key is the name of the route,
// and the value is the path of the rout in a string format.
const routerMap = new Map()
const compileRouteMap = (element, parentPath) => {
  let currPath
  element.path.charAt(0) == '/'
    ? (currPath = element.path)
    : parentPath == '/'
      ? (currPath = parentPath + element.path)
      : (currPath = parentPath + '/' + element.path)
  routerMap.set(element.name, `${currPath}`)
  element.children
    ? element.children.forEach((child) => compileRouteMap(child, currPath))
    : (currPath = parentPath)
}
routerRoutes.forEach((element) => compileRouteMap(element, ''))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerRoutes
})

export default router

export { routerRoutes, routerMap }
