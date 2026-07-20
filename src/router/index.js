import { createRouter, createWebHashHistory } from 'vue-router'

// 导入页面组件
import general from '@/views/general.vue'
import login from '@/views/pages/auth/login.vue'
import forgetPassword from '@/views/pages/auth/forget-password.vue'
import codeLogin from '@/views/pages/auth/code-login.vue'
import qrcodeLogin from '@/views/pages/auth/qrcode-login.vue'
import register from '@/views/pages/auth/register.vue'
import NotFound from '@/views/NotFound.vue'

// 用户功能页
import home from '@/views/pages/workspace/home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: general,
      redirect: '/login',  // 默认跳转到 login
      children: [ //二级路由
        {
          path: '/login',   
          component: login
        },
        {
          path: '/forgetPassword', 
          component: forgetPassword
        },
        {
          path: '/codeLogin',
          component: codeLogin
        },
        {
          path: '/qrcodeLogin',
          component: qrcodeLogin
        },
        {
          path: '/register',
          component: register
        }
      ]
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/:pathMatch(.*)*',  // 404页面
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router