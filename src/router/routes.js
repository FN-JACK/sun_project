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
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        props(route){
            return{
                keyword3:route.params.keyword,
                keyword4:route.query.keyword1
            }
        }
    }
]