import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import add from '@/views/add'
import bian from '@/views/bian'
import login from '@/views/login'
import my from '@/views/my'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/add',
      component: add
    },
    {
      path:'/bian/:ind',
      component:bian
    },
    {
      path:'/my',
      component:my,
      beforeEnter: (to, from, next) => {
        if(localStorage.user){
          next()
        }else{
          next('/login')
        }
      }
    },
    {
      path:'/login',
      component:login
    }
  ]
})
