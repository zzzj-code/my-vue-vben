<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>所属项目</span>
            <input type="text" placeholder="请输入所属项目" />
          </div>
          <div class="inp-1">
            <span>变更类型</span>
            <input type="text" placeholder="全部" />
          </div>
          <div class="inp-1">
            <span>流程状态</span>
            <input type="text" placeholder="请输入流程状态" />
          </div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">项目变更</div>
          <div class="top-2">
            <button>+新增变更</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner"><input type="checkbox" disabled /></div></th>
                <th><div class="th-inner">变更单号</div></th>
                <th><div class="th-inner">所属项目</div></th>
                <th><div class="th-inner">变更类型</div></th>
                <th><div class="th-inner">变更原因</div></th>
                <th><div class="th-inner">变更金额</div></th>
                <th><div class="th-inner">流程状态</div></th>
                <th><div class="th-inner">申请人</div></th>
                <th><div class="th-inner">申请时间</div></th>
                <th><div class="th-inner">审核人</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="11" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="item in tabValue" :key="item.id">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.changeNo }}</td>
                <td>{{ item.projectName }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: '#e6f6ff',
                      color: '#006be6',
                      border: '1px solid #006be6',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.changeType }}</span>
                </td>
                <td>{{ item.reason }}</td>
                <td>¥{{ item.amount.toLocaleString() }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td>{{ item.applicant }}</td>
                <td>{{ item.applyTime }}</td>
                <td>{{ item.approver || '-' }}</td>
                <td class="ol-col">
                  <button>详情</button>
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: [
        {
          id: 1,
          changeNo: "BG-2026-001",
          projectName: "智慧城市数据中台",
          changeType: "范围变更",
          reason: "新增数据采集模块",
          amount: 350000,
          status: "待审核",
          applicant: "张伟",
          applyTime: "2026-07-15 10:30",
          approver: "",
        },
        {
          id: 2,
          changeNo: "BG-2026-002",
          projectName: "企业ERP升级改造",
          changeType: "进度变更",
          reason: "客户需求调整，延期2周",
          amount: 0,
          status: "审核中",
          applicant: "李芳",
          applyTime: "2026-07-14 14:20",
          approver: "王经理",
        },
        {
          id: 3,
          changeNo: "BG-2026-003",
          projectName: "AI智能客服系统",
          changeType: "人员变更",
          reason: "项目经理更换",
          amount: 0,
          status: "已通过",
          applicant: "王磊",
          applyTime: "2026-07-13 09:15",
          approver: "赵总监",
        },
        {
          id: 4,
          changeNo: "BG-2026-004",
          projectName: "移动办公APP开发",
          changeType: "预算变更",
          reason: "新增支付功能开发",
          amount: 180000,
          status: "已驳回",
          applicant: "陈静",
          applyTime: "2026-07-12 16:40",
          approver: "钱经理",
        },
        {
          id: 5,
          changeNo: "BG-2026-005",
          projectName: "数据中心容灾备份",
          changeType: "范围变更",
          reason: "新增异地备份节点",
          amount: 520000,
          status: "待审核",
          applicant: "赵明",
          applyTime: "2026-07-11 11:00",
          approver: "",
        },
        {
          id: 6,
          changeNo: "BG-2026-006",
          projectName: "区块链溯源平台",
          changeType: "进度变更",
          reason: "技术方案调整",
          amount: 0,
          status: "已通过",
          applicant: "孙婷",
          applyTime: "2026-07-10 08:50",
          approver: "李总监",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '待审核': '#faad14',
        '审核中': '#1890ff',
        '已通过': '#52c41a',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待审核': '#fffbe6',
        '审核中': '#e6f7ff',
        '已通过': '#f6ffed',
        '已驳回': '#fff2f0'
      };
      return map[status] || '#fff';
    }
  }
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
}
.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(2) {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  border-radius: 10px;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: #006be6;
  color: #fff;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1200px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e9e6e6;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

/* 复选框列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
}

/* 空状态 */
.empty-cell {
  text-align: center;
  color: #ccc;
  font-size: 14px;
  padding: 60px 0;
  height: 200px;
}

.ol-col {
  width: 160px;
  min-width: 160px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: #006be6;
}
.ol-col button:nth-child(2):hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
}
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>