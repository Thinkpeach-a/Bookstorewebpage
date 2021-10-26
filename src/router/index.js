import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/Home.vue'
import  index from '../views/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        children:[
            {
                path: '/',
                redirect:'Home'
            },
            {
                path:'Home',
                name:'Home',
                component:Home
            },
            {
                path: 'Book',
                name: 'Book',
                component:()=>import('../views/main/Book'),
                redirect:'Book/Book02',
                children:[
                    {
                        path:"Book02",
                        name:'Book02',
                        component:()=>import('../views/main/Book/Book02'),
                    },
                    {
                        path:"Book03",
                        name:'Book03',
                        component:()=>import('../views/main/Book/Book03'),

                    },
                    {
                        path:"Book04",
                        name:'Book04',
                        component:()=>import('../views/main/Book/Book04'),

                    },
                    {
                        path:"Book05",
                        name:'Book05',
                        component:()=>import('../views/main/Book/Book05'),
                    }
                ]
            },
            {
                path:"Details",
                name:'Details',
                component:()=>import('../views/main/Details/Details'),
            },
            {
                path: 'Admin',
                name: 'Admin',
                component:()=>import('../views/main/Admin'),
                children:[
                    {
                        path:'Address',
                        name:'Address',
                        component:()=>import ('../views/main/Admin/Address'),
                    }
                ]
            },
            {
                path: 'Login',
                name: 'Login',
                component:()=>import('../views/main/Login')
            },
            {
                path: 'Register',
                name: 'Register',
                component:()=>import('../views/main/Register')
            },
            {
                path: 'Shop',
                name: 'Shop',
                component:()=>import('../views/main/Shop')
            }
        ]
    },
]

const router = new VueRouter({
    routes
})


//路由守卫
router.beforeEach((to, from, next)=>{
    //获取token的值
    const token = window.sessionStorage.getItem('token')
    if(to.path === '/Shop' || to.path ==='/Admin'){
        //若没有token则跳转至登录页
        if (!token) return next('/Login')
        next()
    }else {
        next()
    }
})


export default router
