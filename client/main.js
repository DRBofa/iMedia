import Vue from 'vue';
import App from './App.vue';
import './main.html';

import VueRouter from 'vue-router'


Vue.use(VueRouter)

import routes from './routes'
const router = new VueRouter({
  mode: 'history',
  routes 
})

Meteor.startup(() => {
  new Vue({
    router,
    render: h => h(App)
    // ...App
  }).$mount('app')
});