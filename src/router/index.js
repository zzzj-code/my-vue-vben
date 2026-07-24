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
import home from '@/views/home.vue'
import homes from '@/views/pages/workspace/pages/homes.vue'
import workbench from '@/views/pages/workspace/pages/workbench.vue'
import analytics from '@/views/pages/workspace/pages/analytics.vue'
import manage from '@/views/pages/workspace/pages/manage.vue'
import component from '@/views/pages/workspace/pages/component.vue'

// 制度体系
import bpm from '@/views/bpm.vue'
import startProcess from '@/views/pages/system/start-process.vue'
import my from '@/views/pages/system/task/my.vue'

// oa
import oa from '@/views/oa.vue'

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
      // 用户功能页
      path: '/home',
      component: home,
      redirect: '/homes',  // 默认跳转到 homes
      children: [
        {
          path: '/homes',
          component: homes,
          redirect: '/workbench',  // 默认跳转到 workbench
          children: [
            {
              path: '/workbench',
              component: workbench //工作台首页
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
          // 制度体系
          path: '/bpm',
          component: bpm,
          redirect: '/startProcess', //默认跳转
          children:[
            {
              path: '/startProcess',
              component: startProcess  //发起流程
            },
            {
              path: '/my',
              component: my  //我的流程
            },
            {
              path: '/copy',
              component: () => import('@/views/pages/system/task/copy.vue')  //抄送我的
            },
            {
              path: '/done',
              component: () => import('@/views/pages/system/task/done.vue')  //已办结
            },
            {
              path: '/todo',
              component: () => import('@/views/pages/system/task/todo.vue')  //待办任务
            },
            {
              path: '/model',
              component: () => import('@/views/pages/system/manager/model.vue')  //流程模型
            },
            {
              path: '/form',
              component: () => import('@/views/pages/system/manager/form.vue') //流程表单
            },
            {
              path: '/category',
              component: () => import('@/views/pages/system/manager/category.vue') //流程分类
            },
            {
              path: '/userGroup',
              component: () => import('@/views/pages/system/manager/user-group.vue') //用户分组
            },
            {
              path: '/processListener',
              component: () => import('@/views/pages/system/manager/process-listener.vue') //流程监听器
            },
            {
              path: '/processExpression',
              component: () => import('@/views/pages/system/manager/process-expression.vue') //流程表达式
            },
            {
              path: '/instance',
              component: () => import('@/views/pages/system/manager/instance.vue') //流程实例
            },
            {
              path: '/processTasnk',
              component: () => import('@/views/pages/system/manager/process-tasnk.vue') //流程任务
            },
            {
              path: '/ops',
              component: () => import('@/views/pages/system/manager/ops.vue') //流程实例运维
            },
            {
              path: '/leave',
              component: () => import('@/views/pages/system/oa/leave.vue') //请假流程
            }
          ]
        },
        {
          // OA
          path: '/oa',
          component: oa,
          redirect: '/carInfo',
          children:[
            {
              path: '/carInfo',
              component: () => import('@/views/pages/oaSystem/car/car-info.vue') //车辆信息管理
            },
            {
              path: '/carApplyList',
              component: () => import('@/views/pages/oaSystem/car/car-apply-list.vue') //用车申请单管理
            },
            {
              path: '/carReturnList',
              component: () => import('@/views/pages/oaSystem/car/car-return-list.vue') //换车申请单管理
            },
            {
              path: '/sealInfo',
              component: () => import('@/views/pages/oaSystem/seal/seal-info.vue') //印章信息管理
            },
            {
              path: '/sealApplyList',
              component: () => import('@/views/pages/oaSystem/seal/seal-apply-list.vue') //用印申请单
            },
            {
              path: '/file',
              component: () => import('@/views/pages/oaSystem/cloud/file.vue') //企业云盘
            },
            {
              path: '/roomInfo',
              component: () => import('@/views/pages/oaSystem/meetingroom/room-info.vue') //会议室信息管理
            },
            {
              path: '/booking',
              component: () => import('@/views/pages/oaSystem/meetingroom/booking.vue') //会议室预定
            },
            {
              path: '/template',
              component: () => import('@/views/pages/oaSystem/officedoc/template.vue') //套红模板
            },
            {
              path: '/send',
              component: () => import('@/views/pages/oaSystem/officedoc/send.vue') //公文发文
            },
            {
              path: '/receive',
              component: () => import('@/views/pages/oaSystem/officedoc/receive.vue') //公文收文
            },
            {
              path: '/outside',
              component: () => import('@/views/pages/oaSystem/officedoc/outside.vue') //外部公文
            },
            {
              path: '/archive',
              component: () => import('@/views/pages/oaSystem/officedoc/archive.vue') //归档台账
            },
            {
              path: '/schedule',
              component: () => import('@/views/pages/oaSystem/schedule.vue') //日程管理
            },
            {
              path: '/supplyinfo',
              component: () => import('@/views/pages/oaSystem/supply/supplyinfo.vue') //办公用品台账
            },
            {
              path: '/supplyapply',
              component: () => import('@/views/pages/oaSystem/supply/supplyapply.vue') //领用申请管理
            },
            {
              path: '/supplyrecord',
              component: () => import('@/views/pages/oaSystem/supply/supplyrecord.vue') //领用发放管理
            },
            {
              path: '/tripApplyList',
              component: () => import('@/views/pages/oaSystem/trip/trip-apply-list.vue') //出差申请
            },
            {
              path: '/tripReimburseList',
              component: () => import('@/views/pages/oaSystem/trip/trip-reimburse-list.vue') //差旅报销
            },
            {
              path: '/dailyReportList',
              component: () => import('@/views/pages/oaSystem/workreport/daily-report-list.vue') //工作日报列表
            },
            {
              path: '/weeklyReportList',
              component: () => import('@/views/pages/oaSystem/workreport/weekly-report-list.vue') //工作周报列表
            },
            {
              path: '/monthlyReportList',
              component: () => import('@/views/pages/oaSystem/workreport/monthly-report-list.vue') //工作月报列表
            },
            {
              path: '/reportStatistics',
              component: () => import('@/views/pages/oaSystem/workreport/report-statistics.vue') //汇报统计
            },
            {
              path: '/im',
              component: () => import('@/views/pages/oaSystem/im.vue') //即时通讯
            }
          ]
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