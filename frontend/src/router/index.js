import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from "../views/Admin";
import Scoreboard from "../views/Scoreboard";

Vue.use(VueRouter)

const routes = [
  {
    path: "/scoreboard/:eventId/:round/:mode/:display",
    name: "Scoreboard",
    component: Scoreboard,
    props: true,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
