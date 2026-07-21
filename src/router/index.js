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
import workbench from '@/views/pages/workspace/pages/workbench.vue'
import analytics from '@/views/pages/workspace/pages/analytics.vue'
import manage from '@/views/pages/workspace/pages/manage.vue'
import component from '@/views/pages/workspace/pages/component.vue'

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
      component: home,
      redirect: '/workbench',
      children:[
        {
          path: '/workbench',
          component: workbench //我都首页
        },
        {
          path: '/analytics',
          component: analytics //数据分析页面
        },
        {
          path: '/manage',
          component: manage  //首页管理
        },
        {
          path: '/component',
          component: component //组件管理
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',  // 404页面
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router