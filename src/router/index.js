import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

// admin import page
import Vendeur_create from '../views/admin/vendeur/create.vue'
import Vendeur_liste from '../views/admin/vendeur/liste.vue'
import Vendeur_detail from '../views/admin/vendeur/detail.vue'
import Produit_create from '../views/admin/produit/create.vue'
import Produit_liste from '../views/admin/produit/liste.vue'
import Categorie_create from '../views/admin/categories/create.vue'
import Marque_create from '../views/admin/marque/create.vue'
import Couleur_create from '../views/admin/couleur/create.vue'
import Size_create from '../views/admin/size/create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // administration route
  {
    path: '/admin/vendeur/create',
    name: 'vendeur_create',
    component: Vendeur_create
  },
  {
    path: '/admin/vendeur/liste',
    name: 'vendeur_liste',
    component: Vendeur_liste
  },
  {
    path: '/admin/vendeur/:id',
    name: 'vendeur_detail',
    component: Vendeur_detail
  },
  {
    path: '/admin/vendeur/:id/publier',
    name: 'produit_create',
    component: Produit_create
  },
  {
    path: '/admin/vendeur/:id/liste',
    name: 'produit_liste',
    component: Produit_liste
  },
  {
    path: '/admin/categorie/create',
    name: 'categorie_create',
    component: Categorie_create
  },
  {
    path: '/admin/marque/create',
    name: 'marque_create',
    component: Marque_create
  },
  {
    path: '/admin/couleur/create',
    name: 'couleur_create',
    component: Couleur_create
  },
  {
    path: '/admin/size/create',
    name: 'size_create',
    component: Size_create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
