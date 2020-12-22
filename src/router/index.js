import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
const originalreplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location,onResolve,onReject){
    if(onResolve || onReject){
        originalPush.call(this,location,onResolve,onReject)
    }
    return originalPush.call(this,location).catch(
        (err)=>{
            if(VueRouter.isNavigationFailure(err)){
                return err
            }
            return Promise.reject(err)
        }
    )
}

VueRouter.prototype.replace = function (location,onResolve,onReject){
    if(onResolve || onReject){
        originalreplace.call(this,location,onResolve,onReject)
    }
    return originalreplace.call(this,location).catch(
        (err)=>{
            if(VueRouter.isNavigationFailure(err)){
                return err
            }
            return Promise.reject(err)
        }
    )
}

export default new VueRouter({
    mode:'history',
    routes
})
