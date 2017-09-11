import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import User from '@/components/user'
import List from '@/components/list'
import Post from '@/components/post'
import Editpost from '@/components/edit'
import Newpost from '@/components/newpost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/user/:id',
    	name: 'User',
    	component: User
    },
     {
    	path: '/user/',
    	name: 'List',
    	component: List
    },
    {
    	path: '/user/:id/post',
    	name: 'Post',
    	component: Post
    },
    {
    	path: '/user/:id/post/:postId',
    	name: 'Edit',
    	component: Editpost
    },
    {
      path: '/user/:id/newpost',
      name: 'New',
      component: Newpost
    }
  ]
})
