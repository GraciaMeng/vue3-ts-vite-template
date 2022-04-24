import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

export default () => {
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  return router
}
