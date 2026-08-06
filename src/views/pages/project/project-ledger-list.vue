<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>项目编号</span>
            <input type="text" placeholder="请输入项目编号" />
          </div>
          <div class="inp-1">
            <span>项目名称</span>
            <input type="text" placeholder="请输入项目名称" />
          </div>
          <div class="inp-1">
            <span>项目类型</span>
            <input type="text" placeholder="请输入项目类型" />
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
          <div class="top-1">
            项目台账
            <div class="top-nav">
              <div
                v-for="item in ['全部', '我负责的', '我参与的', '进行中', '已逾期']"
                :key="item"
                :class="{ active: activeNav === item }"
                @click="switchNav(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="top-2">
            <button>批量归档</button>
            <button>批量终止</button>
            <button>导出</button>
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
                <th><div class="th-inner"><input type="checkbox" /></div></th>
                <th><div class="th-inner">项目编号</div></th>
                <th><div class="th-inner">项目名称</div></th>
                <th><div class="th-inner">项目类型</div></th>
                <th><div class="th-inner">优先级</div></th>
                <th><div class="th-inner">立项状态</div></th>
                <th><div class="th-inner">进度</div></th>
                <th><div class="th-inner">项目经理</div></th>
                <th><div class="th-inner">所属部门</div></th>
                <th><div class="th-inner">对方单位</div></th>
                <th><div class="th-inner">计划开始</div></th>
                <th><div class="th-inner">计划结束</div></th>
                <th><div class="th-inner">预算金额</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.projectNo }}</td>
                <td>{{ item.projectName }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 10px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: '#e6f6ff',
                      color: '#006be6',
                      border: '1px solid #006be6',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.projectType }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 8px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getPriorityBg(item.priority),
                      color: getPriorityColor(item.priority),
                      border: `1px solid ${getPriorityColor(item.priority)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.priority }}</span>
                </td>
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
                <td>
                  <div class="progress-wrapper">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: item.progress }"></div>
                    </div>
                    <span class="progress-text">{{ item.progress }}</span>
                  </div>
                </td>
                <td>{{ item.manager }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.counterparty }}</td>
                <td>{{ item.planStart }}</td>
                <td>{{ item.planEnd }}</td>
                <td>¥{{ item.budget.toLocaleString() }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleDetail(item)">详情</button>
                  <button @click="handleEdit(item)">编辑</button>
                  <button @click="handleDelete(item)">删除</button>
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
      activeNav: "全部",
      tabValue: [
        {
          id: 1,
          projectNo: "XM-2026-001",
          projectName: "智慧城市数据中台",
          projectType: "研发",
          priority: "高",
          status: "已立项",
          progress: "65%",
          manager: "张伟",
          department: "技术研发部",
          counterparty: "市政数局",
          planStart: "2026-07-01",
          planEnd: "2026-12-31",
          budget: 2800000,
          createTime: "2026-07-01",
        },
        {
          id: 2,
          projectNo: "XM-2026-002",
          projectName: "企业ERP升级改造",
          projectType: "实施",
          priority: "中",
          status: "审核中",
          progress: "30%",
          manager: "李芳",
          department: "产品交付部",
          counterparty: "恒通集团",
          planStart: "2026-07-15",
          planEnd: "2026-11-30",
          budget: 1500000,
          createTime: "2026-07-03",
        },
        {
          id: 3,
          projectNo: "XM-2026-003",
          projectName: "AI智能客服系统",
          projectType: "研发",
          priority: "高",
          status: "已立项",
          progress: "45%",
          manager: "王磊",
          department: "AI实验室",
          counterparty: "云创科技",
          planStart: "2026-06-20",
          planEnd: "2026-10-15",
          budget: 3200000,
          createTime: "2026-06-28",
        },
        {
          id: 4,
          projectNo: "XM-2026-004",
          projectName: "移动办公APP开发",
          projectType: "开发",
          priority: "低",
          status: "已驳回",
          progress: "0%",
          manager: "陈静",
          department: "移动开发部",
          counterparty: "内部项目",
          planStart: "2026-07-10",
          planEnd: "2026-09-20",
          budget: 800000,
          createTime: "2026-07-05",
        },
      ],
    };
  },
  methods: {
    switchNav(item) {
      this.activeNav = item;
    },
    getPriorityColor(priority) {
      const map = { '高': '#ff4d4f', '中': '#faad14', '低': '#52c41a' };
      return map[priority] || '#333';
    },
    getPriorityBg(priority) {
      const map = { '高': '#fff2f0', '中': '#fffbe6', '低': '#f6ffed' };
      return map[priority] || '#fff';
    },
    getStatusColor(status) {
      const map = {
        '已立项': '#52c41a',
        '审核中': '#faad14',
        '已驳回': '#ff4d4f',
        '进行中': '#1890ff',
        '已逾期': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已立项': '#f6ffed',
        '审核中': '#fffbe6',
        '已驳回': '#fff2f0',
        '进行中': '#e6f7ff',
        '已逾期': '#fff2f0'
      };
      return map[status] || '#fff';
    },
    handleDetail(item) {
      alert(`项目详情：${item.projectName}\n编号：${item.projectNo}\n预算：¥${item.budget.toLocaleString()}`);
    },
    handleEdit(item) {
      alert(`编辑项目：${item.projectName}`);
    },
    handleDelete(item) {
      if (confirm(`确定要删除项目"${item.projectName}"吗？`)) {
        this.tabValue = this.tabValue.filter(i => i.id !== item.id);
      }
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
  width: 62%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
}
.top-1 .top-nav {
  width: 338px;
  height: 32px;
  border-radius: 10px;
  background-color: #f1f3f6;
  padding: 2px;
  display: flex;
}
.top-nav div {
  width: auto;
  height: 100%;
  padding: 0 11px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: lighter;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.top-nav .active {
  background-color: #fff;
}
.top-2 {
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 66px;
  height: 32px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  color: #006be6;
}
.top-2 button:nth-child(2) {
  width: 66px;
  height: 32px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  color: #ff3860;
}
.top-2 button:nth-child(3) {
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
  cursor: pointer;
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
  min-width: 1450px;
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
  max-width: 130px;
}

/* 复选框列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
}

/* 进度条样式 */
.progress-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}
.progress-bar {
  width: 60px;
  height: 6px;
  background-color: #e8eaed;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #006be6, #4a9eff);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.progress-text {
  font-size: 12px;
  color: #333;
  min-width: 36px;
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