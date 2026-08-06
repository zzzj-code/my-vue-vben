<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>资产编号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>资产名称</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1"></div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">巡检计划</div></th>
                <th><div class="th-inner">资产编号</div></th>
                <th><div class="th-inner">资产名称</div></th>
                <th><div class="th-inner">计划日期</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">结果</div></th>
                <th><div class="th-inner">执行人</div></th>
                <th><div class="th-inner">执行时间</div></th>
                <th><div class="th-inner">异常描述</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="11" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.inspectionPlan }}</td>
                <td style="color: #006be6">{{ item.assetNo }}</td>
                <td>{{ item.assetName }}</td>
                <td>{{ item.planDate }}</td>
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
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getResultBg(item.result),
                      color: getResultColor(item.result),
                      border: `1px solid ${getResultColor(item.result)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.result }}</span>
                </td>
                <td>{{ item.executor || '-' }}</td>
                <td>{{ item.executeTime || '-' }}</td>
                <td>{{ item.exceptionDesc || '-' }}</td>
                <td class="ol-col">
                  <button>查看</button>
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
          inspectionPlan: "2024-01-第1周",
          assetNo: "ZC-2024-001",
          assetName: "台式计算机",
          planDate: "2024-01-05",
          status: "已完成",
          result: "正常",
          executor: "张伟",
          executeTime: "2024-01-05 10:30:00",
          exceptionDesc: "-",
        },
        {
          id: 2,
          inspectionPlan: "2024-01-第1周",
          assetNo: "ZC-2024-002",
          assetName: "便携式计算机",
          planDate: "2024-01-05",
          status: "已完成",
          result: "正常",
          executor: "李芳",
          executeTime: "2024-01-05 14:20:00",
          exceptionDesc: "-",
        },
        {
          id: 3,
          inspectionPlan: "2024-01-第2周",
          assetNo: "ZC-2024-003",
          assetName: "打印机",
          planDate: "2024-01-12",
          status: "已完成",
          result: "异常",
          executor: "王磊",
          executeTime: "2024-01-12 09:15:00",
          exceptionDesc: "打印出现条纹，需要维修",
        },
        {
          id: 4,
          inspectionPlan: "2024-01-第2周",
          assetNo: "ZC-2024-004",
          assetName: "服务器",
          planDate: "2024-01-12",
          status: "已完成",
          result: "正常",
          executor: "陈静",
          executeTime: "2024-01-12 16:45:00",
          exceptionDesc: "-",
        },
        {
          id: 5,
          inspectionPlan: "2024-01-第3周",
          assetNo: "ZC-2024-005",
          assetName: "投影仪",
          planDate: "2024-01-19",
          status: "进行中",
          result: "-",
          executor: "赵明",
          executeTime: "-",
          exceptionDesc: "-",
        },
        {
          id: 6,
          inspectionPlan: "2024-01-第3周",
          assetNo: "ZC-2024-006",
          assetName: "交换机",
          planDate: "2024-01-19",
          status: "待执行",
          result: "-",
          executor: "-",
          executeTime: "-",
          exceptionDesc: "-",
        },
        {
          id: 7,
          inspectionPlan: "2024-01-第4周",
          assetNo: "ZC-2024-007",
          assetName: "空调",
          planDate: "2024-01-26",
          status: "已完成",
          result: "异常",
          executor: "孙婷",
          executeTime: "2024-01-26 11:20:00",
          exceptionDesc: "制冷效果不佳，需添加制冷剂",
        },
        {
          id: 8,
          inspectionPlan: "2024-01-第4周",
          assetNo: "ZC-2024-008",
          assetName: "复印机",
          planDate: "2024-01-26",
          status: "已逾期",
          result: "-",
          executor: "-",
          executeTime: "-",
          exceptionDesc: "-",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '待执行': '#8c8c8c',
        '进行中': '#1890ff',
        '已完成': '#52c41a',
        '已逾期': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待执行': '#f5f5f5',
        '进行中': '#e6f7ff',
        '已完成': '#f6ffed',
        '已逾期': '#fff2f0'
      };
      return map[status] || '#fff';
    },
    getResultColor(result) {
      const map = {
        '正常': '#52c41a',
        '异常': '#ff4d4f',
        '-': '#8c8c8c'
      };
      return map[result] || '#333';
    },
    getResultBg(result) {
      const map = {
        '正常': '#f6ffed',
        '异常': '#fff2f0',
        '-': '#f5f5f5'
      };
      return map[result] || '#fff';
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
.main-tab {
  width: 100%;
  height: 450px;
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

/* 序号列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 50px;
  min-width: 50px;
  max-width: 50px;
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
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:first-child,
.ol-col button:nth-child(2) {
  color: #006be6;
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