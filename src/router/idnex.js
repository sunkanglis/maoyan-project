import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 验证是否已登录
import auth from '@util/auth';

import AppMovie from '@views/movie/AppMovie';
import HotMovie from '@views/movie/HotMovie';
import ComingMovie from '@views/movie/ComingMovie';
import AppCinema from '@views/cinema/AppCinema';
import AppMine from '@views/mine/AppMine';
import AppLogin from '@views/mine/AppLogin';
import AppDetail from '@views/detail/AppDetail';
import AppNotFound from '@views/not-found/AppNotFound';
import AppCity from '@views/city/AppCity';
import AppSearch from '@views/search/AppSearch';

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
                name : 'comgingmovie',
                component : ComingMovie
            }
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component:AppDetail,
        props:true
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
        component: AppMine,
        beforeEnter:(to,from,next) =>{
            let result = auth.authLogin()
            next(result.date ? true : {name: 'login'})
        }
    },
    {
        path : '/city',
        name : 'city',
        component: AppCity
    },
    {
        path : '/search',
        name : 'search',
        component: AppSearch
    },
    {
        path : '/not-found',
        name : 'not-found',
        component: AppNotFound
    },
    {
        path:'**',
        redirect:'/not-found'
    }
];

// 路由工具
const router = new VueRouter({
    mode:'history',
    routes,
})

export default router