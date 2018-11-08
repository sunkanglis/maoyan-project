import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppMovie from '@views/movie/AppMovie';
import HotMovie from '@views/movie/HotMovie';
import ComingMovie from '@views/movie/ComingMovie';
import AppCinema from '@views/cinema/AppCinema';
import AppMine from '@views/mine/AppMine';
import AppLogin from '@views/mine/AppLogin';

// 路由表 
const routes = [
    {
        path : '/',
        redirect:{name:'movie'}
    },
    {
        path : '/movie',
        name : 'movie',
        component: AppMovie,
        redirect:{name :'hotmovie'},
        children:[
            {
                path : 'hotmovie',
                name : 'hotmovie',
                component : HotMovie
            },
            {
                path : 'comingmovie',
                component : ComingMovie
            }
        ]
    },
    {
        path : '/cinema',
        name : 'cinema',
        component: AppCinema
    },
    {
        path : '/login',
        name : 'login',
        component: AppLogin
    },
    {
        path : '/mine',
        name : 'mine',
        component: AppMine
    },
];

// 路由工具
const router = new VueRouter({
    mode:'history',
    routes,
})

export default router