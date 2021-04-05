import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import WhatDoIDo from '@/views/WhatDoIDo'
import Hobbies from '@/views/Hobbies'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/experience',
            name: 'What Do I Do',
            component: WhatDoIDo
        },
        {
            path: '/hobbies',
            name: 'Hobbies',
            component: Hobbies
        }
    ]
})