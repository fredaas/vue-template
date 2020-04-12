// NPM
import Vue from "vue"
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// Components
const Home = () => import ("./components/Home.vue");
const X = () => import ("./components/X.vue");
const Y = () => import ("./components/Y.vue");

import App from "./App.vue"

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);


//------------------------------------------------------------------------------
//
// Router
//
//------------------------------------------------------------------------------


const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: "/X",
    component: X,
    meta: { requiresAuth: false }
  },
  {
    path: "/Y",
    component: Y,
    meta: { requiresAuth: false }
  },
];

const router = new VueRouter({
  base: process.env.VUE_APP_PUBLIC_PATH,
  mode: process.env.VUE_APP_MODE,
  routes: routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Login user
  } else {
    next();
  }
});


//------------------------------------------------------------------------------
//
// Store
//
//------------------------------------------------------------------------------


const store  = new Vuex.Store();


//------------------------------------------------------------------------------
//
// Vuetify
//
//------------------------------------------------------------------------------


const vuetify = new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary:   "#00abbb",
        secondary: "#8bc34a",
        accent:    "#009688",
        error:     "#f44336",
        warning:   "#ff8600",
        info:      "#00abbb",
        success:   "#4caf50"
      },
    },
  },
})


//------------------------------------------------------------------------------
//
// App
//
//------------------------------------------------------------------------------


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app")
