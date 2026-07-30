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

// 人力
import hrm from '@/views/hrm.vue'

// 合同
import contract from '@/views/contract.vue'

//crm
import crm from '@/views/crm.vue'

// erp
import erp from '@/views/erp.vue'

//项目
import project from '@/views/project.vue'

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
        },
        {
          // 人力
          path: '/hrm',
          component: hrm,
          redirect: '/orginfo',
          children:[
            {
              path: '/orginfo',
              component: () => import('@/views/pages/hrm/org/orginfo.vue') //组织管理
            },
            {
              path: '/orgChart',
              component: () => import('@/views/pages/hrm/org/org-chart.vue') //组织架构图
            },
            {
              path: '/employeeArchiveList',
              component: () => import('@/views/pages/hrm/employee/employee-archive-list.vue') //员工档案
            },
            {
              path: '/employeeContractExpiring',
              component: () => import('@/views/pages/hrm/employee/employee-contract-expiring.vue') //劳动合同到期预警
            },
            {
              path: '/employeeContractRenewable',
              component: () => import('@/views/pages/hrm/employee/employee-contract-renewable.vue') //待续签合同
            },
            {
              path: '/entryList',
              component: () => import('@/views/pages/hrm/employee-relation/entry-list.vue') //员工入职
            },
            {
              path: '/regularList',
              component: () => import('@/views/pages/hrm/employee-relation/regular-list.vue') //员工转正
            },
            {
              path: '/transferList',
              component: () => import('@/views/pages/hrm/employee-relation/transfer-list.vue') //人事调动
            },
            {
              path: '/resignationList',
              component: () => import('@/views/pages/hrm/employee-relation/resignation-list.vue') //员工离职
            },
            {
              path: '/attendanceConfig',
              component: () => import('@/views/pages/hrm/attendance/attendance-config.vue') //假勤配置
            },
            {
              path: '/attendancePunch',
              component: () => import('@/views/pages/hrm/attendance/attendance-punch.vue') //考勤打卡
            },
            {
              path: '/punchRecord',
              component: () => import('@/views/pages/hrm/attendance/punch-record.vue') //打卡记录
            },
            {
              path: '/leaveCancelList',
              component: () => import('@/views/pages/hrm/attendance/leave-cancel-list.vue') //请假销假
            },
            {
              path: '/cardReplacementList',
              component: () => import('@/views/pages/hrm/attendance/card-replacement-list.vue') //补卡管理
            },
            {
              path: '/requirementList',
              component: () => import('@/views/pages/hrm/recruitment/requirement-list.vue') //招聘需求
            },
            {
              path: '/positionList',
              component: () => import('@/views/pages/hrm/recruitment/position-list.vue') //招聘职位
            },
            {
              path: '/candidateList',
              component: () => import('@/views/pages/hrm/recruitment/candidate-list.vue') //候选人中心
            },
            {
              path: '/offerList',
              component: () => import('@/views/pages/hrm/recruitment/offer-list.vue') //录用审批
            },
            {
              path: '/subject',
              component: () => import('@/views/pages/hrm/salary/setting/subject.vue') //薪资主体
            },
            {
              path: '/plan',
              component: () => import('@/views/pages/hrm/salary/setting/plan.vue') //薪资方案
            },
            {
              path: '/item',
              component: () => import('@/views/pages/hrm/salary/setting/item.vue') //薪资项目
            },
            {
              path: '/archiveList',
              component: () => import('@/views/pages/hrm/salary/archive-list.vue') //员工薪资档案
            },
            {
              path: '/specialDeduction',
              component: () => import('@/views/pages/hrm/salary/tax/special-deduction.vue') //专项附加扣除
            },
            {
              path: '/taxOpening',
              component: () => import('@/views/pages/hrm/salary/tax/tax-opening.vue') //个税累计初期
            },
            {
              path: '/taxProfile',
              component: () => import('@/views/pages/hrm/salary/tax/tax-profile.vue') //员工个税档案
            },
            {
              path: '/batch',
              component: () => import('@/views/pages/hrm/salary/batch.vue') //薪资批次
            },
            {
              path: '/payslip',
              component: () => import('@/views/pages/hrm/salary/payslip.vue') //工资条管理
            },
            {
              path: '/confirmList',
              component: () => import('@/views/pages/hrm/salary/confirm-list.vue') //薪资确认审批
            },
            {
              path: '/paymentList',
              component: () => import('@/views/pages/hrm/salary/payment-list.vue') //发薪登记
            },
            {
              path: '/statistics',
              component: () => import('@/views/pages/hrm/salary/statistics.vue') //薪资统计
            },
            {
              path: '/scheme',
              component: () => import('@/views/pages/hrm/performance/setting/scheme.vue') //绩效方案
            },
            {
              path: '/indicator',
              component: () => import('@/views/pages/hrm/performance/setting/indicator.vue') //指标库
            },
            {
              path: '/template1',
              component: () => import('@/views/pages/hrm/performance/setting/template.vue') //模板管理
            },
            {
              path: '/periodList',
              component: () => import('@/views/pages/hrm/performance/period-list.vue') //绩效批次
            },
            {
              path: '/planList',
              component: () => import('@/views/pages/hrm/performance/plan-list.vue') //目标确认
            },
            {
              path: '/selfReviewList',
              component: () => import('@/views/pages/hrm/performance/assessment-task/self-review-list.vue') //自评填报
            },
            {
              path: '/leaderReviewList',
              component: () => import('@/views/pages/hrm/performance/assessment-task/leader-review-list.vue') //评审填报
            },
            {
              path: '/resultConfirmTaskList',
              component: () => import('@/views/pages/hrm/performance/assessment-task/result-confirm-task-list.vue') //结果确认
            },
            {
              path: '/resultList',
              component: () => import('@/views/pages/hrm/performance/result-list.vue') //绩效结果
            },
            {
              path: '/resultConfirmList',
              component: () => import('@/views/pages/hrm/performance/result-confirm-list.vue') //绩效批次结果审批
            },
            {
              path: '/statistics',
              component: () => import('@/views/pages/hrm/performance/statistics.vue') //绩效统计
            }
          ]
        },
        {
          // 合同模块
          path: '/contract',
          component: contract,
          redirect: '/contractStats',
          children:[
            {
              path: '/contractStats',
              component: () => import('@/views/pages/contract/contract-stats.vue') //统计分析
            },
            {
              path: '/contractInfoList',
              component: () => import('@/views/pages/contract/contract-info-list.vue') //合同台账
            },
            {
              path: '/contractDraftList',
              component: () => import('@/views/pages/contract/contract-draft-list.vue') //合同起草
            },
            {
              path: '/Category1',
              component: () => import('@/views/pages/contract/config/category.vue') //合同分类
            },
            {
              path: '/Template2',
              component: () => import('@/views/pages/contract/config/template.vue') //合同模板
            },
            {
              path: '/basic',
              component: () => import('@/views/pages/contract/config/basic.vue') //基础配置
            }
          ]
        },
        {
          //crm模块
          path: '/crm',
          component: crm,
          redirect: '/backlog',
          children:[
            {
              path: '/backlog',
              component: () => import('@/views/pages/crm/backlog.vue') //待办事项
            },
            {
              path: '/clue',
              component: () => import('@/views/pages/crm/clue.vue') //线索管理
            },
            {
              path: '/customer',
              component: () => import('@/views/pages/crm/customer.vue') //客户管理
            },
            {
              path: '/contact',
              component: () => import('@/views/pages/crm/contact.vue') //联系人管理
            },
            {
              path: '/pool',
              component: () => import('@/views/pages/crm/pool.vue') //客户公海
            },
            {
              path: '/business',
              component: () => import('@/views/pages/crm/business.vue') //商机管理
            },
            {
              path: '/contract1',
              component: () => import('@/views/pages/crm/contract.vue') //销售合同
            },
            {
              path: '/receivable',
              component: () => import('@/views/pages/crm/receivable.vue') //回款管理
            },
            {
              path: '/receivablePlan',
              component: () => import('@/views/pages/crm/receivable-plan.vue') //回款计划
            },
            {
              path: '/product',
              component: () => import('@/views/pages/crm/product.vue') //产品管理
            },
            {
              path: '/customer1',
              component: () => import('@/views/pages/crm/statistics/customer.vue') //客户分析
            },
            {
              path: '/ranking',
              component: () => import('@/views/pages/crm/statistics/ranking.vue') //排行榜
            },
            {
              path: '/performance',
              component: () => import('@/views/pages/crm/statistics/performance.vue') //员工业绩
            },
            {
              path: '/portrait',
              component: () => import('@/views/pages/crm/statistics/portrait.vue') //客户画像
            },
            {
              path: '/funnel',
              component: () => import('@/views/pages/crm/statistics/funnel.vue') //销售漏斗
            },
            {
              path: '/customer-pool-config',
              component: () => import('@/views/pages/crm/config/customer-pool-config.vue') //客户公海配置
            },
            {
              path: '/customer-limit-config',
              component: () => import('@/views/pages/crm/config/customer-limit-config.vue') //客户限制配置
            },
            {
              path: '/product1',
              component: () => import('@/views/pages/crm/config/product.vue') //产品分类配置
            },
            {
              path: '/business-status',
              component: () => import('@/views/pages/crm/config/business-status.vue') //商机状态配置
            },
            {
              path: '/contract-config',
              component: () => import('@/views/pages/crm/config/contract-config.vue') //合同配置
            }
          ]
        },
        {
          //erp模块
          path: '/erp',
          component: erp,
          redirect: '/erp-home',
          children: [
            {
              path:'/erp-home',
              component: () => import('@/views/pages/erp/erp-home.vue') //erp首页
            },
            {
              path: '/order',
              component: () => import('@/views/pages/erp/purchase/order.vue') //采购订单
            },
            {
              path: '/in',
              component: () => import('@/views/pages/erp/purchase/in.vue') //采购入库
            },
            {
              path: '/return',
              component: () => import('@/views/pages/erp/purchase/return.vue') //采购退货
            },
            {
              path: '/supplier',
              component: () => import('@/views/pages/erp/purchase/supplier.vue') //供应商信息
            },
            {
              path: '/sale/order',
              component: () => import('@/views/pages/erp/sale/order.vue') //销售订单
            },
            {
              path: '/out',
              component: () => import('@/views/pages/erp/sale/out.vue') //销售出库
            },
            {
              path: '/sale/return',
              component: () => import('@/views/pages/erp/sale/return.vue') //销售退货
            },
            {
              path: '/sale/customer',
              component: () => import('@/views/pages/erp/sale/customer.vue') //客户信息
            },
            {
              path: '/warehouse',
              component: () => import('@/views/pages/erp/stock/warehouse.vue') //仓库信息
            },
            {
              path: '/stock',
              component: () => import('@/views/pages/erp/stock/stock.vue') //产品库存
            },
            {
              path: '/record',
              component: () => import('@/views/pages/erp/stock/record.vue') //出入库明细
            },
            {
              path: '/stock/in',
              component: () => import('@/views/pages/erp/stock/in.vue') //其他入库
            },
            {
              path: '/stock/out',
              component: () => import('@/views/pages/erp/stock/out.vue') //其他出库
            },
            {
              path: '/move',
              component: () => import('@/views/pages/erp/stock/move.vue') //库存调拨
            },
            {
              path: '/check',
              component: () => import('@/views/pages/erp/stock/check.vue') //库存盘点
            },
            {
              path: '/product/product',
              component: () => import('@/views/pages/erp/product/product.vue') //产品信息
            },
            {
              path: '/product-category',
              component: () => import('@/views/pages/erp/product/product-category.vue') //产品分类
            },
            {
              path: '/unit',
              component: () => import('@/views/pages/erp/product/unit.vue') //产品单位
            },
            {
              path: '/payment',
              component: () => import('@/views/pages/erp/finance/payment.vue') //付款单
            },
            {
              path: '/receipt',
              component: () => import('@/views/pages/erp/finance/receipt.vue') //收款单
            },
            {
              path: '/account',
              component: () => import('@/views/pages/erp/finance/account.vue') //结算账户
            }
          ]
        },
        {
          //项目模块
          path: '/project',
          component: project,
          redirect: '/project-home',
          children: [
            {
              path:'/project-home',
              component: () => import('@/views/pages/project/project-home.vue') //项目工作台
            },
            {
              path: '/project-apply-list',
              component: () => import('@/views/pages/project/project-apply-list.vue') //项目立项
            },
            {
              path: '/project-ledger-list',
              component: () => import('@/views/pages/project/project-ledger-list.vue') //项目台账
            },
            {
              path: '/project-task-list',
              component: () => import('@/views/pages/project/project-task-list.vue') //项目任务
            },
            {
              path: '/worktime-report',
              component: () => import('@/views/pages/project/worktime-center/worktime-report.vue') //工时周报
            },
            {
              path: '/worktime-fill',
              component: () => import('@/views/pages/project/worktime-center/worktime-fill.vue')//我的工时
            },
            {
              path: '/project-change-list',
              component: () => import('@/views/pages/project/project-change-list.vue') //项目变更
            },
            {
              path: '/project-stats',
              component: () => import('@/views/pages/project/project-stats.vue')//统计看板
            },
            {
              path: '/project-resource',
              component: () => import('@/views/pages/project/project-resource.vue') //资源负荷
            },
            {
              path: '/project-group',
              component: () => import('@/views/pages/project/project-group.vue') //项目集
            },
            {
              path: '/base-config/category',
              component: () => import('@/views/pages/project/base-config/category.vue') //项目分类
            },
            {
              path: '/base-config/template',
              component: () => import('@/views/pages/project/base-config/template.vue') //项目模板
            },
            {
              path: '/type-config',
              component: () => import('@/views/pages/project/base-config/type-config.vue') //项目类型配置
            },
            {
              path: '/module-config',
              component: () => import('@/views/pages/project/base-config/module-config.vue') //能力包管理
            },
            {
              path: '/base-config/settings',
              component: () => import('@/views/pages/project/base-config/settings.vue') //项目配置
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