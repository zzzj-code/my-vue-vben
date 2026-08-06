<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div>项目任务</div>
          <input type="text" value="软件研发项目2026060602" />
          <input type="text" placeholder="搜索任务名称/负责人/指派人" />
          <button class="btn1">搜索</button>
          <button class="btn2">重置</button>
          <div>软件研发项目2026060602</div>
        </div>
        <div class="top-2">
          <button
            v-for="item in btnValue"
            :class="{ active: activeNav === item }"
            @click="switchNav(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div class="app-main">
        <div class="main-left">
          <div class="wbs-header">
            <div class="wbs-title">WBS 树</div>
            <div class="wbs-tip">选父级联动右表</div>
          </div>
          <div class="wbs-tree">
            <template v-for="node in wbsNodes" :key="node.title">
              <div class="wbs-node level-1">
                <div class="node-row" @click="toggleNode(node)">
                  <span class="node-title">
                    <i
                      class="arrow"
                      :class="{
                        open: node.expanded,
                        hide: !node.children.length,
                      }"
                    ></i>
                    {{ node.title }}
                  </span>
                  <span>{{ node.summary }}</span>
                </div>
                <div
                  v-if="node.children.length && node.expanded"
                  class="wbs-node level-2"
                >
                  <template v-for="sub in node.children" :key="sub.title">
                    <div class="node-row" @click.stop="toggleNode(sub)">
                      <span class="node-title">
                        <i
                          class="arrow"
                          :class="{
                            open: sub.expanded,
                            hide: !sub.children.length,
                          }"
                        ></i>
                        {{ sub.title }}
                      </span>
                      <span>{{ sub.summary }}</span>
                    </div>
                    <div
                      v-if="sub.children.length && sub.expanded"
                      class="wbs-node level-3"
                    >
                      <div
                        class="node-row"
                        v-for="leaf in sub.children"
                        :key="leaf.title"
                      >
                        <span>{{ leaf.title }}</span>
                        <span>{{ leaf.summary }}</span>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="main-right">
          <div class="right-top">
            <div>
              <span>执行明细</span>
              <input type="text" />
            </div>
            <div>
              <span>任务状态</span>
              <input type="text" />
            </div>
            <div>
              <span>优先级</span>
              <input type="text" />
            </div>
            <div>
              <span>负责人</span>
              <input type="text" />
            </div>
            <div>
              <button>重置</button>
              <button>搜索</button>
              展开▽
            </div>
          </div>
          <div class="right-main">
            <div class="right-main-top">
              <div class="title-1">执行明细</div>
              <div class="title-2">
                <button>+新增执行明细</button>
                <button>批量指派</button>
                <button>批量归档</button>
                <button>导出</button>
                <button>🔍</button>
              </div>
              <div class="title-3">
                <button>⟳</button>
                <button>⛶</button>
                <button>☷</button>
              </div>
            </div>
            <div class="right-main-1">
              <table>
                <thead>
                  <tr>
                    <th><div class="th-inner"><input type="checkbox"></div></th>
                    <th><div class="th-inner">执行明细</div></th>
                    <th><div class="th-inner">所属主任务</div></th>
                    <th><div class="th-inner">负责人</div></th>
                    <th><div class="th-inner">指派人</div></th>
                    <th><div class="th-inner">进度</div></th>
                    <th><div class="th-inner">状态</div></th>
                    <th><div class="th-inner">优先级</div></th>
                    <th><div class="th-inner">计划结束</div></th>
                    <th><div class="th-inner">已耗/预估工时</div></th>
                    <th><div class="th-inner">实际成本</div></th>
                    <th><div class="th-inner">创建时间</div></th>
                    <th class="ol-col"><div class="th-inner no-border">操作</div></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tabValue" :key="item.id">
                    <td><input type="checkbox"></td>
                    <td>{{ item.taskName }}</td>
                    <td>{{ item.parentTask }}</td>
                    <td>{{ item.assignee }}</td>
                    <td>{{ item.assigner }}</td>
                    <td>
                      <div class="progress-wrapper">
                        <div class="progress-bar">
                          <div class="progress-fill" :style="{ width: item.progress }"></div>
                        </div>
                        <span class="progress-text">{{ item.progress }}</span>
                      </div>
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
                    <td>{{ item.planEnd }}</td>
                    <td>{{ item.hours }}</td>
                    <td>{{ item.actualCost }}</td>
                    <td>{{ item.createTime }}</td>
                    <td class="ol-col">
                      <button>详情</button>
                      <button>编辑</button>
                      <button>归档</button>
                      <button style="color: red;">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="right-main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
      activeNav: "全部",
      btnValue: [
        "全部",
        "我的任务",
        "我指派的",
        "未完成",
        "进行中",
        "已完成",
        "已延期",
        "未归档",
        "已归档",
      ],
      tabValue: [
        {
          id: 1,
          taskName: "OA需求调研",
          parentTask: "需求分析",
          assignee: "张伟",
          assigner: "王磊",
          progress: "65%",
          status: "进行中",
          priority: "高",
          planEnd: "2026-08-15",
          hours: "16/24h",
          actualCost: "¥4,800",
          createTime: "2026-07-01",
        },
        {
          id: 2,
          taskName: "HR需求调研",
          parentTask: "需求分析",
          assignee: "李芳",
          assigner: "王磊",
          progress: "80%",
          status: "进行中",
          priority: "高",
          planEnd: "2026-08-10",
          hours: "20/25h",
          actualCost: "¥6,000",
          createTime: "2026-07-02",
        },
        {
          id: 3,
          taskName: "需求规格说明书编写",
          parentTask: "需求分析",
          assignee: "陈静",
          assigner: "张伟",
          progress: "100%",
          status: "已完成",
          priority: "中",
          planEnd: "2026-07-30",
          hours: "18/18h",
          actualCost: "¥5,400",
          createTime: "2026-07-03",
        },
        {
          id: 4,
          taskName: "需求评审",
          parentTask: "需求分析",
          assignee: "赵明",
          assigner: "张伟",
          progress: "0%",
          status: "未开始",
          priority: "中",
          planEnd: "2026-08-20",
          hours: "0/8h",
          actualCost: "¥0",
          createTime: "2026-07-05",
        },
        {
          id: 5,
          taskName: "概要设计",
          parentTask: "系统设计",
          assignee: "孙婷",
          assigner: "刘洋",
          progress: "30%",
          status: "进行中",
          priority: "高",
          planEnd: "2026-08-25",
          hours: "12/40h",
          actualCost: "¥3,600",
          createTime: "2026-07-06",
        },
        {
          id: 6,
          taskName: "详细设计",
          parentTask: "系统设计",
          assignee: "周梅",
          assigner: "刘洋",
          progress: "0%",
          status: "未开始",
          priority: "中",
          planEnd: "2026-09-10",
          hours: "0/32h",
          actualCost: "¥0",
          createTime: "2026-07-08",
        },
        {
          id: 7,
          taskName: "开发环境搭建",
          parentTask: "开发实现",
          assignee: "吴强",
          assigner: "郑健",
          progress: "100%",
          status: "已完成",
          priority: "低",
          planEnd: "2026-07-20",
          hours: "10/10h",
          actualCost: "¥3,000",
          createTime: "2026-07-04",
        },
        {
          id: 8,
          taskName: "核心功能开发",
          parentTask: "开发实现",
          assignee: "冯宇",
          assigner: "郑健",
          progress: "45%",
          status: "已延期",
          priority: "高",
          planEnd: "2026-08-01",
          hours: "36/80h",
          actualCost: "¥10,800",
          createTime: "2026-07-07",
        },
      ],
      wbsNodes: [
        {
          title: "需求分析",
          summary: "27.1% · 待办5 · 逾期5",
          expanded: true,
          children: [
            {
              title: "需求分析",
              summary: "71.82% · 待办2 · 逾期2",
              expanded: true,
              children: [
                { title: "OA需求调研", summary: "53.57%", children: [] },
                { title: "HR需求调研", summary: "80.95%", children: [] },
                { title: "需求规格说明书编写", summary: "0%", children: [] },
                { title: "需求评审", summary: "0%", children: [] },
              ],
            },
          ],
        },
        {
          title: "系统设计",
          summary: "0% · 待办3 · 逾期3",
          expanded: false,
          children: [
            { title: "概要设计", summary: "0%", expanded: false, children: [] },
            { title: "详细设计", summary: "0%", expanded: false, children: [] },
            { title: "设计评审", summary: "0%", expanded: false, children: [] },
          ],
        },
        {
          title: "开发实现",
          summary: "0% · 待办3 · 逾期1",
          expanded: false,
          children: [
            {
              title: "开发环境搭建",
              summary: "0%",
              expanded: false,
              children: [],
            },
            {
              title: "核心功能开发",
              summary: "0%",
              expanded: false,
              children: [],
            },
            {
              title: "联调与自测",
              summary: "0%",
              expanded: false,
              children: [],
            },
          ],
        },
        {
          title: "测试与上线",
          summary: "0% · 待办3",
          expanded: false,
          children: [
            { title: "集成测试", summary: "0%", expanded: false, children: [] },
            { title: "UAT测试", summary: "0%", expanded: false, children: [] },
            { title: "部署上线", summary: "0%", expanded: false, children: [] },
          ],
        },
      ],
    };
  },
  methods: {
    switchNav(item) {
      this.activeNav = item;
    },
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.expanded = !node.expanded;
      }
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
        '进行中': '#1890ff',
        '已完成': '#52c41a',
        '未开始': '#8c8c8c',
        '已延期': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '进行中': '#e6f7ff',
        '已完成': '#f6ffed',
        '未开始': '#f5f5f5',
        '已延期': '#fff2f0'
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
  height: 680px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 108px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}
.top-1 {
  width: 100%;
  height: 32px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-1 div:first-child {
  font-size: 14px;
  font-weight: 500;
}
.top-1 div:last-child {
  color: #71717a;
  font-size: 14px;
}
.top-1 input {
  width: 280px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-1 .btn1 {
  width: 63px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  cursor: pointer;
}
.top-1 .btn2 {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
}
.top-2 {
  width: 100%;
  height: 30px;
}
.top-2 button {
  height: 100%;
  padding: 4px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 8px;
  cursor: pointer;
}
.active {
  background-color: #006be6;
  border: 0;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 556px;
  display: flex;
  justify-content: space-between;
}
.main-left {
  width: 258px;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  overflow: auto;
}
.wbs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.wbs-title {
  font-size: 18px;
  font-weight: 700;
}
.wbs-tip {
  font-size: 12px;
  color: #71717a;
}
.wbs-tree {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wbs-node {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.node-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 13px;
  line-height: 1.4;
  cursor: pointer;
  padding: 6px 0;
}
.node-row:hover {
  background: rgba(0, 107, 230, 0.05);
}
.node-title {
  display: inline-flex;
  align-items: center;
}
.arrow {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid #6b7280;
  border-bottom: 2px solid #6b7280;
  transform: rotate(-45deg);
  margin-right: 8px;
  transition: transform 0.2s ease;
}
.arrow.open {
  transform: rotate(45deg);
}
.arrow.hide {
  visibility: hidden;
}
.node-row span:last-child {
  color: #71717a;
}
.level-2 {
  padding-left: 12px;
  border-left: 1px solid #e5e7eb;
}
.level-3 {
  padding-left: 24px;
}
.main-right {
  width: 732px;
  height: 100%;
}
.right-top {
  width: 100%;
  height: 92px;
  padding: 10px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-top div {
  width: 141px;
  height: 48px;
  white-space: nowrap;
}
.right-top div span {
  display: inline-block;
  width: 80px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
  font-weight: 500;
}
.right-top div input {
  width: 33px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.right-top div:last-child {
  width: 180px;
  font-size: 14px;
  color: #006be6;
  white-space: nowrap;
}
.right-top div button {
  width: 63px;
  margin-right: 10px;
  height: 32px;
  border-radius: 10px;
}
.right-top div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.right-top div button:last-child {
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.right-main {
  width: 100%;
  height: 452px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.right-main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.title-1 {
  width: 35%;
  height: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.title-2 {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.title-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.title-2 button:nth-child(2),
.title-2 button:nth-child(3) {
  width: 66px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.title-2 button:nth-child(4) {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.title-2 button:last-child {
  width: 30px;
  height: 30px;
  background-color: #006be6;
  color: #fff;
  border: 0;
  border-radius: 50%;
}
.title-3 {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}

.right-main-1 {
  width: 100%;
  height: 361px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.right-main-1 table {
  width: max-content;
  min-width: 1350px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.right-main-1 th {
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

.right-main-1 td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

/* 复选框列 */
.right-main-1 td:first-child,
.right-main-1 th:first-child {
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
  width: 50px;
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
  width: 220px;
  min-width: 220px;
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
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2),
.ol-col button:nth-child(3) {
  color: #006be6;
}
.ol-col button:first-child {
  color: #006be6;
}
.right-main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.right-main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-top: 3px;
  margin-left: 5px;
}
</style>