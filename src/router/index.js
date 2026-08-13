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

//资产
import asset from '@/views/asset.vue'

//MES
import mes from '@/views/mes.vue'

//财务
import finance from '@/views/finance.vue'

//wms
import wms from '@/views/wms.vue'

//系统管理
import management from '@/views/management.vue'

//基础设施
import infra from '@/views/infra.vue'

//支付管理
import pay from '@/views/pay.vue'

//报表管理
import report from '@/views/report.vue'

//主数据
import mdm from '@/views/mdm.vue'

//工单管理
import ticket from '@/views/ticket.vue'

//公众号管理
import mp from '@/views/mp.vue'

//ai大模型
import ai from '@/views/ai.vue'

//im即时通讯
import im from '@/views/im.vue'

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
        },
        {
          //资产模块
          path: '/asset',
          component: asset,
          redirect: '/dashboard',
          children: [
            {
              path: '/dashboard',
              component: () => import('@/views/pages/asset/dashboard.vue')//资产首页
            },
            {
              path: '/base/category',
              component: () =>import('@/views/pages/asset/base/category.vue') //资产分类
            },
            {
              path: '/base/location',
              component: () => import('@/views/pages/asset/base/location.vue') //存放位置
            },
            {
              path: '/base/config',
              component: () => import('@/views/pages/asset/base/config.vue') //模块配置
            },
            {
              path: '/label-template',
              component: () => import('@/views/pages/asset/base/label-template.vue')//标签模块 
            },
            {
              path: '/custom-field',
              component: () => import('@/views/pages/asset/base/custom-field.vue') //自定义字段
            },
            {
              path: '/card',
              component: () => import('@/views/pages/asset/card.vue') //资产台账
            },
            {
              path: '/asset/receive',
              component: () => import('@/views/pages/asset/receive.vue') //资产入库
            },
            {
              path: '/allocate',
              component: () => import('@/views/pages/asset/change/allocate.vue')//领用/借用
            },
            {
              path: '/transfer',
              component: () => import('@/views/pages/asset/change/transfer.vue') //资产调拨
            },
            {
              path: '/repair',
              component: () => import('@/views/pages/asset/change/repair.vue') //资产维修
            },
            {
              path: '/stocktake',
              component: () => import('@/views/pages/asset/stocktake.vue') //资产盘点
            },
            {
              path: '/depreciation',
              component: () => import('@/views/pages/asset/depreciation.vue') //资产折旧
            },
            {
              path: '/dispose',
              component: () => import('@/views/pages/asset/dispose.vue') //资产处置
            },
            {
              path: '/asset/stats',
              component: () => import('@/views/pages/asset/stats.vue')//统计报表
            },
            {
              path: '/label-print',
              component: () => import('@/views/pages/asset/label-print.vue')//标签打印
            },
            {
              path: '/code-reserve',
              component: () => import('@/views/pages/asset/code-reserve.vue')//编号预分配
            },
            {
              path: '/inspection',
              component: () => import('@/views/pages/asset/inspection.vue') //巡检保养
            },
            {
              path: '/inspection-item',
              component: () => import('@/views/pages/asset/inspection-item.vue')//巡检记录
            }
          ]
        },
        {
          //MES模块
          path: '/mes',
          component: mes,
          redirect: '/mes/home',
          children: [
            {
              path: '/mes/home',
              component:() => import('@/views/pages/mes/home.vue') //首页
            },
            {
              path: '/md/item',
              component: () => import('@/views/pages/mes/md/item.vue')//物料产品管理
            },
            {
              path: '/md/item-type',
              component: () => import('@/views/pages/mes/md/item-type.vue') //物料产品分类
            },
            {
              path: '/md/unit-measure',
              component: () => import('@/views/pages/mes/md/unit-measure.vue')//计量单位
            },
            {
              path:'/md/client',
              component: () => import('@/views/pages/mes/md/client.vue')//客户管理
            },
            {
              path: '/md/vendor',
              component: () => import('@/views/pages/mes/md/vendor.vue')//供应商管理
            },
            {
              path: '/md/workshop',
              component: () => import('@/views/pages/mes/md/workshop.vue')//车间设置
            },
            {
              path: '/md/workstation',
              component: () => import('@/views/pages/mes/md/workstation.vue')//工作站设置
            },
            {
              path: '/md/auto-code',
              component: () => import('@/views/pages/mes/md/auto-code.vue')//编码规则
            },
            {
              path: '/wm/warehouse',
              component: () => import('@/views/pages/mes/wm/warehouse.vue')//仓库设置
            },
            {
              path: '/wm/material-stock',
              component: () => import('@/views/pages/mes/wm/material-stock.vue')//库存现有量
            },
            {
              path: '/wm/item-receipt',
              component: () => import('@/views/pages/mes/wm/item-receipt.vue')//采购入库
            },
            {
              path: '/wm/arrival-notice',
              component: () => import('@/views/pages/mes/wm/arrival-notice.vue')//到货通知
            },
            {
              path: '/wm/return-vendor',
              component: () => import('@/views/pages/mes/wm/return-vendor.vue')//采购退货
            },
            {
              path: '/wm/product-issue',
              component: () => import('@/views/pages/mes/wm/product-issue.vue')//生产领料
            },
            {
              path: '/wm/return-issue',
              component: () => import('@/views/pages/mes/wm/return-issue.vue')//生产退料
            },
            {
              path: '/wm/product-receipt',
              component: () => import('@/views/pages/mes/wm/product-receipt.vue')//产品入库
            },
            {
              path: '/wm/sales-notice',
              component: () => import('@/views/pages/mes/wm/sales-notice.vue')//发货通知
            },
            {
              path: '/wm/product-sales',
              component: () => import('@/views/pages/mes/wm/product-sales.vue')//销售出库
            },
            {
              path: '/wm/return-sales',
              component: () => import('@/views/pages/mes/wm/return-sales.vue')//销售退货
            },
            {
              path: '/wm/transfer',
              component: () => import('@/views/pages/mes/wm/transfer.vue') //转移调拨
            },
            {
              path: '/stock-taking/plan',
              component: () => import('@/views/pages/mes/wm/stock-taking/plan.vue')//盘点方案
            },
            {
              path: '/stock-taking/task',
              component: () => import('@/views/pages/mes/wm/stock-taking/task.vue')//盘点任务
            },
            {
              path: '/wm/packages',
              component: () => import('@/views/pages/mes/wm/packages.vue')//装箱管理
            },
            {
              path: '/wm/barcode',
              component: () => import('@/views/pages/mes/wm/barcode.vue')//赋能管理
            },
            {
              path: '/wm/sn',
              component: () => import('@/views/pages/mes/wm/sn.vue') //sn码
            },
            {
              path: '/wm/outsource-issue',
              component: () => import('@/views/pages/mes/wm/outsource-issue.vue')//外协发料
            },
            {
              path: '/wm/outsource-receipt',
              component: () => import('@/views/pages/mes/wm/outsource-receipt.vue')//外协入库
            },
            {
              path: '/wm/misc-receipt',
              component: () => import('@/views/pages/mes/wm/misc-receipt.vue')//杂项入库
            },
            {
              path: '/wm/misc-issue',
              component: () => import('@/views/pages/mes/wm/misc-issue.vue')//杂项出库
            },
            {
              path: '/dv/type',
              component: () => import('@/views/pages/mes/dv/type.vue')//设备类型
            },
            {
              path: '/dv/machinery',
              component: () => import('@/views/pages/mes/dv/machinery.vue')//设备台账
            },
            {
              path: '/dv/subject',
              component: () => import('@/views/pages/mes/dv/subject.vue')//点检保养项目
            },
            {
              path: '/dv/checkplan',
              component: () => import('@/views/pages/mes/dv/checkplan.vue')//点检保养方案
            },
            {
              path: '/dv/check-record',
              component: () => import('@/views/pages/mes/dv/check-record.vue')//点检记录
            },
            {
              path: '/dv/mainten-record',
              component: () => import('@/views/pages/mes/dv/mainten-record.vue')//保养记录
            },
            {
              path: '/dv/repair',
              component: () => import('@/views/pages/mes/dv/repair.vue')//维修单
            },
            {
              path: '/tm/type',
              component: () => import('@/views/pages/mes/tm/type.vue')//工具类型设置
            },
            {
              path: '/tm/tool',
              component: () => import('@/views/pages/mes/tm/tool.vue')//工装夹具台账
            },
            {
              path: '/pro/work-order',
              component: () => import('@/views/pages/mes/pro/work-order.vue')//生产工单
            },
            {
              path: '/pro/process',
              component: () => import('@/views/pages/mes/pro/process.vue')//工序设置
            },
            {
              path: '/pro/route',
              component: () => import('@/views/pages/mes/pro/route.vue')//工艺流程
            },
            {
              path: '/pro/feedback',
              component: () => import('@/views/pages/mes/pro/feedback.vue')//生产报工
            },
            {
              path: '/pro/card',
              component: () => import('@/views/pages/mes/pro/card.vue')//工序流转
            },
            {
              path: '/pro/andon',
              component: () => import('@/views/pages/mes/pro/andon.vue')//安灯呼叫
            },
            {
              path: '/pro/workrecord',
              component: () => import('@/views/pages/mes/pro/workrecord.vue')//工作记录
            },
            {
              path: '/qc/defect',
              component: () => import('@/views/pages/mes/qc/defect.vue')//常见缺陷
            },
            {
              path: '/qc/indicator',
              component: () => import('@/views/pages/mes/qc/indicator.vue')//检测项设置
            },
            {
              path: '/qc/template',
              component: () => import('@/views/pages/mes/qc/template.vue')//质检方案
            },
            {
              path: '/qc/pending-inspect',
              component: () => import('@/views/pages/mes/qc/pending-inspect.vue')//待检任务
            },
            {
              path: '/qc/iqc',
              component: () => import('@/views/pages/mes/qc/iqc.vue')//来料检验
            },
            {
              path: '/qc/ipqc',
              component: () => import('@/views/pages/mes/qc/ipqc.vue')//过程检验
            },
            {
              path: '/qc/rqc',
              component: () => import('@/views/pages/mes/qc/rqc.vue')//退料检验
            },
            {
              path: '/qc/oqc',
              component: () => import('@/views/pages/mes/qc/oqc.vue')//出货检验
            },
            {
              path: '/qc/batch-trace',
              component: () => import('@/views/pages/mes/qc/batch-trace.vue')//批次追溯
            },
            {
              path: '/cal/team',
              component: () => import('@/views/pages/mes/cal/team.vue')//班组设置
            },
            {
              path: '/cal/plan',
              component: () => import('@/views/pages/mes/cal/plan.vue')//排班计划
            },
            {
              path: '/cal/holiday',
              component: () => import('@/views/pages/mes/cal/holiday.vue')//节假日设置
            },
            {
              path: '/cal/calendar',
              component: () => import('@/views/pages/mes/cal/calendar.vue')//排班日历
            }
          ]
        },
        {
          //财务模块
          path:'/finance',
          component: finance,
          redirect: '/invoice-apply',
          children: [
            {
              path: '/invoice-apply',
              component: () => import('@/views/pages/finance/invoice/invoice-apply.vue')//开票申请
            },
            {
              path: '/output-invoice',
              component: () => import('@/views/pages/finance/invoice/output-invoice.vue')//销项开票
            },
            {
              path: '/input-invoice',
              component: () => import('@/views/pages/finance/invoice/input-invoice.vue')//进项开票
            },
            {
              path: '/invoice-pool',
              component: () => import('@/views/pages/finance/invoice/invoice-pool.vue')//票夹/全票池
            },
            {
              path: '/invoice-title',
              component: () => import('@/views/pages/finance/invoice/invoice-title.vue')//发票抬头
            },
            {
              path: '/invoice-goods',
              component: () => import('@/views/pages/finance/invoice/invoice-goods.vue')//开票项目
            }
          ]
        },
        {
          //wms模块
          path: '/wms',
          component: wms,
          redirect: '/wms/home',
          children: [
            {
              path: '/wms/home',
              component: () => import('@/views/pages/wms/home.vue')//wms首页
            },
            {
              path: '/wms/receipt',
              component: () => import('@/views/pages/wms/receipt.vue')//入库管理
            },
            {
              path: '/wms/shipment',
              component: () => import('@/views/pages/wms/shipment.vue')//出库管理
            },
            {
              path: '/wms/movement',
              component: () => import('@/views/pages/wms/movement.vue')//移库管理
            },
            {
              path: '/wms/check',
              component: () => import('@/views/pages/wms/check.vue')//盘库管理
            },
            {
              path: '/inventory/index',
              component: () => import('@/views/pages/wms/inventory/index.vue')//库存统计
            },
            {
              path: '/inventory/history',
              component: () => import('@/views/pages/wms/inventory/history.vue')//库存流水
            },
            {
              path: '/md/warehouse',
              component: () => import('@/views/pages/wms/md/warehouse.vue')//仓库管理
            },
            {
              path: '/md/category',
              component: () => import('@/views/pages/wms/md/category.vue')//商品分类
            },
            {
              path: '/md/brand',
              component: () => import('@/views/pages/wms/md/brand.vue')//商品品牌
            },
            {
              path: '/wms/md/item',
              component: () => import('@/views/pages/wms/md/item.vue')//商品管理
            },
            {
              path: '/md/merchant',
              component: () => import('@/views/pages/wms/md/merchant.vue')//来往企业
            }
          ]
        },
        {
          //系统管理模块
          path: '/management',
          component: management,
          redirect: '/tenant/list',
          children: [
            {
              path: '/tenant/list',
              component: () => import('@/views/pages/management/tenant/list.vue')//租户列表
            },
            {
              path: '/tenant/package',
              component: () => import('@/views/pages/management/tenant/package.vue')//租户套餐
            },
            {
              path: '/management/dept',
              component: () => import('@/views/pages/management/dept.vue')//组织管理
            },
            {
              path: '/management/user',
              component: () => import('@/views/pages/management/user.vue')//用户管理
            },
            {
              path: '/management/role',
              component: () => import('@/views/pages/management/role.vue')//角色管理
            },
            {
              path: '/management/post',
              component: () => import('@/views/pages/management/post.vue')//岗位管理
            },
            {
              path: '/management/menu',
              component: () => import('@/views/pages/management/menu.vue')//菜单管理
            },
            {
              path: '/management/dict',
              component: () => import('@/views/pages/management/dict.vue')//字典管理
            },
            {
              path: '/messages/scene',
              component: () => import('@/views/pages/management/messages/scene.vue')//消息定义
            },
            {
              path: '/messages/route',
              component: () => import('@/views/pages/management/messages/route.vue')//跳转路由
            },
            {
              path: '/messages/instance',
              component: () => import('@/views/pages/management/messages/instance.vue')//消息实例
            },
            {
              path: '/messages/log',
              component: () => import('@/views/pages/management/messages/log.vue')//发送日志
            },
            {
              path: '/sms-channel',
              component: () => import('@/views/pages/management/messages/sms/sms-channel.vue')//短信渠道
            },
            {
              path: '/sms-template',
              component: () => import('@/views/pages/management/messages/sms/sms-template.vue')//短信模板
            },
            {
              path: '/sms-log',
              component: () => import('@/views/pages/management/messages/sms/sms-log.vue')//短信日志
            },
            {
              path: '/mail-account',
              component: () => import('@/views/pages/management/messages/mail/mail-account.vue')//邮箱账号
            },
            {
              path: '/mail-template',
              component: () => import('@/views/pages/management/messages/mail/mail-template.vue')//邮件模板
            },
            {
              path: '/mail-log',
              component: () => import('@/views/pages/management/messages/mail/mail-log.vue')//邮件记录
            },
            {
              path: '/notify-template',
              component: () => import('@/views/pages/management/messages/notify/notify-template.vue')//模板管理
            },
            {
              path:'/notify-message',
              component: () => import('@/views/pages/management/messages/notify/notify-message.vue')//消息记录
            },
            {
              path: '/messages/notice',
              component: () => import('@/views/pages/management/messages/notice.vue')//通知公告
            },
            {
              path: '/bill-type',
              component: () => import('@/views/pages/management/bill-type.vue')//单据类型字典
            },
            {
              path: '/log/operate-log',
              component: () => import('@/views/pages/management/log/operate-log.vue')//操作日志
            },
            {
              path: '/log/login-log',
              component: () => import('@/views/pages/management/log/login-log.vue')//登录日志
            },
            {
              path: '/oauth2/application',
              component: () => import('@/views/pages/management/oauth2/application.vue')//应用管理
            },
            {
              path: '/oauth2/token',
              component: () => import('@/views/pages/management/oauth2/token.vue')//令牌管理
            },
            {
              path: '/social/client',
              component: () => import('@/views/pages/management/social/client.vue')//三方应用
            },
            {
              path: '/social/user',
              component: () => import('@/views/pages/management/social/user.vue')//三方应用
            },
            {
              path: '/management/area',
              component: () => import('@/views/pages/management/area.vue')//地区管理
            }
          ]
        },
        {
          //基础设施模块
          path: '/infra',
          component: infra,
          redirect: '/infra/codegen',
          children: [
            {
              path: '/infra/codegen',
              component: () => import('@/views/pages/infra/codegen.vue')//代码生成
            },
            {
              path: '/infra/demo01-contact',
              component: () => import('@/views/pages/infra/demo/demo01-contact.vue')//单表(增删改查)
            },
            {
              path: '/infra/demo02-category',
              component: () => import('@/views/pages/infra/demo/demo02-category.vue')//树表(增删改查)
            },
            {
              path: '/infra/demo03-normal',
              component: () => import('@/views/pages/infra/demo/demo03-normal.vue')//主子表(标准)
            },
            {
              path: '/infra/demo03-erp',
              component: () => import('@/views/pages/infra/demo/demo03-erp.vue')//主子表(ERP)
            },
            {
              path: '/infra/demo03-inner',
              component: () => import('@/views/pages/infra/demo/demo03-inner.vue')//主子表(内嵌)
            },
            {
              path: '/infra/data-source-config',
              component: () => import('@/views/pages/infra/data-source-config.vue')//数据源配置
            },
            {
              path: '/infra/build',
              component: () => import('@/views/pages/infra/build.vue')//表单构建
            },
            {
              path: '/infra/swagger',
              component: () => import('@/views/pages/infra/swagger.vue')//API接口
            },
            {
              path: '/infra/api-access-log',
              component: () => import('@/views/pages/infra/log/api-access-log.vue')//访问日志
            },
            {
              path: '/infra/api-error-log',
              component: () => import('@/views/pages/infra/log/api-error-log.vue')//错误日志
            },
            {
              path: '/infra/websocket',
              component: () => import('@/views/pages/infra/websocket.vue')//websocket
            },
            {
              path: '/infra/file-config',
              component: () => import('@/views/pages/infra/file/file-config.vue')//文件配置
            },
            {
              path: '/infra/file/file',
              component: () => import('@/views/pages/infra/file/file.vue')//文件列表
            },
            {
              path: '/infra/config',
              component: () => import('@/views/pages/infra/config.vue')//配置管理
            },
            {
              path: '/infra/monitors/druid',
              component: () => import('@/views/pages/infra/monitors/druid.vue')//mysql监控
            },
            {
              path: '/infra/monitors/redis',
              component: () => import('@/views/pages/infra/monitors/redis.vue')//redis监控
            },
            {
              path: '/infra/admin-server',
              component: () => import('@/views/pages/infra/monitors/admin-server.vue')//java监控
            },
            {
              path: '/infra/skywalking',
              component: () => import('@/views/pages/infra/monitors/skywalking.vue')//链路监控
            },
            {
              path: '/infra/job-ops',
              component: () => import('@/views/pages/infra/operation/job-ops.vue')//定时任务运维
            }
          ]
        },
        {
          //支付管理模块
          path: '/pay',
          component: pay,
          redirect: '/pay/app',
          children: [
            {
              path: '/pay/app',
              component: () => import('@/views/pages/pay/app.vue')//应用信息
            },
            {
              path: '/pay/order',
              component: () => import('@/views/pages/pay/order.vue')//支付订单
            },
            {
              path: '/pay/refund',
              component: () => import('@/views/pages/pay/refund.vue')//退款订单
            },
            {
              path: '/pay/transfer',
              component: () => import('@/views/pages/pay/transfer.vue')//转账订单
            },
            {
              path: '/wallet-balance',
              component: () => import('@/views/pages/pay/wallet/wallet-balance.vue')//钱包余额
            },
            {
              path: '/wallet-recharge-package',
              component: () => import('@/views/pages/pay/wallet/wallet-recharge-package.vue')//充值套餐
            },
            {
              path: '/pay/notify',
              component: () => import('@/views/pages/pay/notify.vue')//回调通知
            },
            {
              path: '/demo/order',
              component: () => import('@/views/pages/pay/demo/order.vue')//支付&退款案例
            },
            {
              path: '/demo/transfer',
              component: () => import('@/views/pages/pay/demo/transfer.vue')//提现转账案例
            }
          ]
        },
        {
          //报表管理模块
          path: '/report',
          component: report,
          redirect: '/jimu-report',
          children: [
            {
              path: '/jimu-report',
              component: () => import('@/views/pages/report/jimu-report.vue')//报表设计器
            },
            {
              path: '/jimu-bi',
              component: () => import('@/views/pages/report/jimu-bi.vue')//仪表盘设计器
            },
            {
              path: '/go-view',
              component: () => import('@/views/pages/report/go-view.vue')//大屏设计器
            }
          ]
        },
        {
          //主数据模块
          path: '/mdm',
          component: mdm,
          redirect: '/basic/dict',
          children: [
            {
              path: '/basic/dict',
              component: () => import('@/views/pages/mdm/basic/dict.vue')//基础字典
            },
            {
              path: '/basic/partner',
              component: () => import('@/views/pages/mdm/basic/partner.vue')//客商信息
            },
            {
              path: '/basic/partner-category',
              component: () => import('@/views/pages/mdm/basic/partner-category.vue')//客商分类
            },
            {
              path: '/basic/unit',
              component: () => import('@/views/pages/mdm/basic/unit.vue')//计量单位
            },
            {
              path: '/basic/material',
              component: () => import('@/views/pages/mdm/basic/material.vue')//物料信息
            },
            {
              path: '/basic/material-category',
              component: () => import('@/views/pages/mdm/basic/material-category.vue')//物料分类
            },
            {
              path: '/ledger/contract-ledger',
              component: () => import('@/views/pages/mdm/ledger/contract-ledger.vue')//合同主数据
            },
            {
              path: '/ledger/project-ledger',
              component: () => import('@/views/pages/mdm/ledger/project-ledger.vue')//项目台账
            }
          ]
        },
        {
          path: '/ticket',
          component: ticket,
          redirect: '/ticket-bill-list',
          children: [
            {
              path: '/ticket-bill-list',
              component: () => import('@/views/pages/ticket/ticket-bill-list.vue')//工单列表
            },
            {
              path: '/ticket-pool',
              component: () => import('@/views/pages/ticket/ticket-pool.vue')//工单池
            },
            {
              path: '/handler-group',
              component: () => import('@/views/pages/ticket/handler-group.vue')//处理组管理
            },
            {
              path: '/sla-rule',
              component: () => import('@/views/pages/ticket/sla-rule.vue')//SLA规则
            }
          ]
        },
        {
          path: '/mp',
          component: mp,
          redirect: '/mp/account',
          children: [
            {
              path: '/mp/account',
              component: () => import('@/views/pages/mp/account.vue')//账号管理
            },
            {
              path: '/mp/statistics',
              component: () => import('@/views/pages/mp/statistics.vue')//数据统计
            },
            {
              path: '/mp/tag',
              component: () => import('@/views/pages/mp/tag.vue')//标签管理
            },
            {
              path: '/mp/user',
              component: () => import('@/views/pages/mp/user.vue')//粉丝管理类
            },
            {
              path: '/mp/message',
              component: () => import('@/views/pages/mp/message.vue')//消息管理
            },
            {
              path: '/mp/menu',
              component: () => import('@/views/pages/mp/menu.vue')//菜单管理
            },
            {
              path: '/mp/auto-reply',
              component: () => import('@/views/pages/mp/auto-reply.vue')//自动回复
            },
            {
              path:'/mp/material',
              component: () => import('@/views/pages/mp/material.vue')//素材管理
            },
            {
              path: '/mp/draft',
              component: () => import('@/views/pages/mp/draft.vue')//图文草稿箱
            },
            {
              path: '/mp/free-publish',
              component: () => import('@/views/pages/mp/free-publish.vue')//图文发表记录
            }
          ]
        },
        {
          path: '/ai',
          component: ai,
          redirect: '/ai/chat',
          children: [
            {
              path: '/ai/chat',
              component: () => import('@/views/pages/ai/chat.vue')//ai对话
            },
            {
              path: '/ai/image',
              component: () => import('@/views/pages/ai/image.vue')//ai绘画
            },
            {
              path: '/ai/write',
              component: () => import('@/views/pages/ai/write.vue')//ai写作
            },
            {
              path: '/ai/music',
              component: () => import('@/views/pages/ai/music.vue')//ai音乐
            },
            {
              path: '/ai/knowledge',
              component: () => import('@/views/pages/ai/knowledge.vue')//ai知识库
            },
            {
              path: '/ai/workflow',
              component: () => import('@/views/pages/ai/workflow.vue')//ai工作流
            },
            {
              path: '/ai/mind-map',
              component: () => import('@/views/pages/ai/mind-map.vue')//ai思维导图
            },
            {
              path: '/api-key',
              component: () => import('@/views/pages/ai/console/api-key.vue')//api密钥
            },
            {
              path: '/console/model',
              component: () => import('@/views/pages/ai/console/model.vue')//模型配置
            },
            {
              path: '/console/chat-role',
              component: () => import('@/views/pages/ai/console/chat-role.vue')//聊天角色
            },
            {
              path: '/console/tool',
              component: () => import('@/views/pages/ai/console/tool.vue')//工具管理
            },
            {
              path: '/chat-conversation',
              component: () => import('@/views/pages/ai/console/chat-conversation.vue')//聊天管理
            },
            {
              path: '/console/image',
              component: () => import('@/views/pages/ai/console/image.vue')//绘画管理
            },
            {
              path: '/console/music',
              component: () => import('@/views/pages/ai/console/music.vue')//音乐管理
            },
            {
              path: '/console/write',
              component: () => import('@/views/pages/ai/console/write.vue')//写作管理
            },
            {
              path: '/console/mind-map',
              component: () => import('@/views/pages/ai/console/mind-map.vue')//导图管理
            }
          ]
        },
        {
          path: '/ims',
          component: im,
          redirect: '/im/statistics',
          children: [
            {
              path: '/im/statistics',
              component: () => import('@/views/pages/im/statistics.vue')//数据统计
            },
            {
              path: '/private/friend',
              component: () => import('@/views/pages/im/private/friend.vue')//好友列表
            },
            {
              path: '/private/friend-request',
              component: () => import('@/views/pages/im/private/friend-request.vue')//好友申请
            },
            {
              path: '/private/message',
              component: () => import('@/views/pages/im/private/message.vue')//好友消息
            },
            {
              path: '/group/list',
              component: () => import('@/views/pages/im/group/list.vue')//群聊列表
            },
            {
              path: '/group/request',
              component: () => import('@/views/pages/im/group/request.vue')//群聊申请
            },
            {
              path: '/group/message',
              component: () => import('@/views/pages/im/group/message.vue')//群聊消息
            },
            {
              path: '/im/rtc',
              component: () => import('@/views/pages/im/rtc.vue')//通话记录
            },
            {
              path: '/im/sensitive-word',
              component: () => import('@/views/pages/im/sensitive-word.vue')//敏感词管理
            },
            {
              path: '/face/pack',
              component: () => import('@/views/pages/im/face/pack.vue')//系统表情
            },
            {
              path: '/face/user-item',
              component: () => import('@/views/pages/im/face/user-item.vue')//用户表情
            },
            {
              path: '/channel/list',
              component: () => import('@/views/pages/im/channel/list.vue')//频道列表
            },
            {
              path: '/channel/material',
              component: () => import('@/views/pages/im/channel/material.vue')//频道素材
            },
            {
              path: '/channel/message',
              component: () => import('@/views/pages/im/channel/message.vue')//频道消息
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