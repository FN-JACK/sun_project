import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'


export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        name:'search',
        path:'/search/:keyword',
        component:Search
    }
]