<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top1">
          <div class="top-left">流程模型</div>
          <div class="top-right">
            <input type="text" placeholder="搜索流程" />
            <button class="right1">+新建模型</button>
            <button class="right2">导入模型</button>
            <button class="right3">⚙️</button>
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="model-list">
          <div v-for="(group, index) in groups" :key="group.title" class="model-group">
            <div class="model-item" :class="{ expanded: group.expanded }" @click="toggleGroup(index)">
              <div class="item-left">
                <span class="item-arrow">{{ group.expanded ? '⌄' : '›' }}</span>
                <div class="item-title">{{ group.title }}</div>
                <div class="item-count">{{ group.count }}</div>
              </div>
              <div class="item-right">
                <button class="item-action" @click.stop>排序</button>
                <button class="item-action" @click.stop>分类</button>
              </div>
            </div>
            <div v-show="group.expanded" class="group-content">
              <div class="table-header">
                <div>流程名称</div>
                <div>可见范围</div>
                <div>流程类型</div>
                <div>表单分类</div>
                <div>表单地址</div>
                <div>最后发布</div>
                <div>操作</div>
              </div>
              <div v-for="item in group.items" :key="item.code" class="table-row">
                <div class="flow-name">
                  <div class="flow-tag">{{ item.tag }}</div>
                  <div class="flow-title">{{ item.name }}</div>
                  <div class="flow-sub">{{ item.code }}</div>
                </div>
                <div>{{ item.visible }}</div>
                <div><span class="type-badge">{{ item.type }}</span></div>
                <div><span class="category-badge">{{ item.category }}</span></div>
                <div class="link-cell"><a :href="item.link" target="_blank">{{ item.linkText }}</a></div>
                <div>{{ item.updated }}</div>
                <div class="actions-cell">
                  <button class="table-action">修改</button>
                  <button class="table-action">发布</button>
                  <button class="table-action">更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          title: 'OA协同办公',
          count: 22,
          expanded: true,
          items: [
            {
              tag: 'OA',
              name: '公文传阅申请',
              code: 'oa_car_return_bill',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/oa/car/car-return-info',
              linkText: '/oa/car/car-return-info',
              updated: '2026-07-23 16:27:50',
            },
            {
              tag: 'OA',
              name: 'OA用印申请单',
              code: 'oa_seal_apply_bill',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '流程表单',
              link: '/oa/meetingroom/booking-info',
              linkText: '/oa/meetingroom/booking-info',
              updated: '2026-07-22 15:26:24',
            },
            {
              tag: '会议',
              name: '会议室预定申请',
              code: 'oa_meeting_room_booking',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '流程表单',
              link: '/bpm/oa/leave/create',
              linkText: 'leave-form',
              updated: '2026-07-23 15:54:39',
            },
          ],
        },
        {
          title: '仓储管理',
          count: 6,
          expanded: false,
          items: [
            {
              tag: '仓储',
              name: '物料出库申请',
              code: 'wh_stock_out',
              visible: '部门可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/wh/stock/out-info',
              linkText: '/wh/stock/out-info',
              updated: '2026-07-21 11:04:41',
            },
          ],
        },
        {
          title: '人力资源管理',
          count: 13,
          expanded: false,
          items: [
            {
              tag: '人事',
              name: '请假申请',
              code: 'oa_leave',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/oa/office/doc/send-info',
              linkText: '/oa/office/doc/send-info',
              updated: '2026-07-20 16:22:42',
            },
          ],
        },
        {
          title: '合同管理',
          count: 3,
          expanded: false,
          items: [
            {
              tag: '合同',
              name: '合同审批流程',
              code: 'oa_contract_approve',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '流程表单',
              link: '/oa/contract/approval-info',
              linkText: '/oa/contract/approval-info',
              updated: '2026-07-19 14:10:47',
            },
          ],
        },
        {
          title: '项目管理',
          count: 4,
          expanded: false,
          items: [
            {
              tag: '项目',
              name: '项目立项申请',
              code: 'project_initiation',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/project/initiate/info',
              linkText: '/project/initiate/info',
              updated: '2026-07-18 12:34:21',
            },
          ],
        },
        {
          title: 'CRM客户关系',
          count: 2,
          expanded: false,
          items: [
            {
              tag: 'CRM',
              name: '客户拜访记录',
              code: 'crm_visit_record',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/crm/visit/record-info',
              linkText: '/crm/visit/record-info',
              updated: '2026-07-16 09:21:56',
            },
          ],
        },
        {
          title: '财务管理',
          count: 3,
          expanded: false,
          items: [
            {
              tag: '财务',
              name: '费用报销单',
              code: 'finance_reimburse',
              visible: '全部可见',
              type: 'SIMPLE设计器',
              category: '业务表单',
              link: '/finance/reimburse/info',
              linkText: '/finance/reimburse/info',
              updated: '2026-07-15 17:45:09',
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleGroup(index) {
      this.groups[index].expanded = !this.groups[index].expanded;
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}
.app {
  width: 1006px;
  min-height: 477px;
  background-color: #ffffff;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  border-radius: 10px;
  border: 0.5px solid #e5e5e5;
}
/* 头部 */
.app-top {
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 0.5px solid #e5e5e5;
  border-radius: 10px 10px 0 0;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-top .top1 {
  width: 950px;
  height: 34px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-left {
  width: 45%;
  height: 25px;
  font-size: 16px;
  font-weight: 600;
}
.top-right {
  width: 55%;
  height: 34px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.top-right input {
  width: 240px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px 16px;
  border-radius: 5px;
}
.top-right input:hover {
  border: 0.5px solid #409eff;
}
.top-right input:focus {
  outline: none;
  border: 0.5px solid #409eff;
}
.top-right .right1 {
  width: 108px;
  height: 32px;
  border: 0;
  background-color: rgb(43, 43, 233);
  margin-left: 8px;
  color: #fff;
  border-radius: 5px;
}
.top-right .right1:hover {
  background-color: rgb(57, 57, 189);
}
.top-right .right2 {
  width: 108px;
  height: 32px;
  outline: none;
  border: 0.5px solid #ccc;
  margin-left: 8px;
  border-radius: 5px;
  background-color: #fff;
}
.top-right .right2:hover {
  color: #409eff;
  border: 0.5px solid #409eff;
}
.top-right .right3 {
  width: 32px;
  height: 32px;
  border: 0.5px solid #ccc;
  background-color: #fff;
  margin-left: 8px;
  border-radius: 5px;
}
.top-right .right3:hover {
  color: #409eff;
  border: 0.5px solid #409eff;
}
/* ———————————————————————————————— */
.app-main {
  width: 100%;
  padding: 16px 0 20px;
}
.model-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 16px 16px;
}
.model-group {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
}
.model-item {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 10px;
  border: 0.5px solid #e5e5e5;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
}
.model-item.expanded {
  border-color: #409eff;
}
.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.item-arrow {
  display: inline-flex;
  width: 16px;
  justify-content: center;
  color: #409eff;
  font-size: 12px;
}
.item-title {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
}
.item-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  color: #409eff;
  background-color: #edf6ff;
  border-radius: 10px;
}
.item-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.item-action {
  min-width: 56px;
  height: 28px;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  color: #409eff;
  cursor: pointer;
  font-size: 13px;
}
.item-action:hover {
  background-color: rgba(64, 158, 255, 0.08);
}
.group-content {
  width: 100%;
  padding: 0;
  border: 0.5px solid #e5e5e5;
  border-top: none;
  background-color: #ffffff;
  box-sizing: border-box;
}
.table-header,
.table-row {
  display: grid;
  grid-template-columns: 2.4fr 0.9fr 0.9fr 0.9fr 1.8fr 1fr 1.1fr;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  padding: 0 18px;
}
.table-header {
  color: #909399;
  padding: 12px 18px;
  border-bottom: 1px solid #eef0f6;
  background-color: #fafbfc;
}
.table-row {
  padding: 14px 18px;
  border-bottom: 1px solid #f2f3f7;
}
.table-row:last-child {
  border-bottom: none;
}
.flow-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.flow-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 20px;
  border-radius: 3px;
  background-color: #edf6ff;
  color: #409eff;
  font-size: 12px;
}
.flow-title {
  font-size: 13px;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.flow-sub {
  color: #909399;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.type-badge,
.category-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 24px;
  padding: 0 8px;
  border-radius: 12px;
  background-color: #ecf5ff;
  color: #409eff;
  font-size: 12px;
}
.link-cell a {
  display: inline-block;
  max-width: 100%;
  color: #409eff;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.actions-cell {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  min-width: 0;
}
.table-action {
  min-width: 40px;
  height: 28px;
  border: 0;
  border-radius: 4px;
  background-color: #f4f6fc;
  color: #606266;
  cursor: pointer;
  font-size: 12px;
  padding: 0 8px;
}
.table-action:hover {
  background-color: #e8f0ff;
}
</style>