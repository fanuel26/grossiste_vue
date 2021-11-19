import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

// admin import page
import Produit_create from '../views/admin/produit/create.vue'
import Produit_liste from '../views/admin/produit/liste.vue'
import Categorie_create from '../views/admin/categories/create.vue'
import Categorie_liste from '../views/admin/categories/liste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // administration route
  {
    path: '/admin/produit/create',
    name: 'produit_create',
    component: Produit_create
  },
  {
    path: '/admin/produit/liste',
    name: 'produit_liste',
    component: Produit_liste
  },
  {
    path: '/admin/categorie/create',
    name: 'categorie_create',
    component: Categorie_create
  },
  {
    path: '/admin/categorie/liste',
    name: 'categorie_liste',
    component: Categorie_liste
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
