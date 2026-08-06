<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>维修单编码</span>
            <input type="text" placeholder="请输入维修单编码" />
          </div>
          <div>
            <span>维修单名称</span>
            <input type="text" placeholder="请输入维修单名称" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>维修工单列表</div>
          <div>
            <button>+新增维修工单</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">维修单编码</div></th>
                <th><div class="th-inner">维修单名称</div></th>
                <th><div class="th-inner">设备名称</div></th>
                <th><div class="th-inner">报修日期</div></th>
                <th><div class="th-inner">维修人</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.equipmentName }}</td>
                <td>{{ item.repairDate }}</td>
                <td>{{ item.repairer }}</td>
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
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                  <button style="color: #faad14;">派单</button>
                  <button style="color: #52c41a;">完成</button>
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
          code: "WX-2024-001",
          name: "冲压机A异响维修",
          equipmentName: "冲压机A",
          repairDate: "2024-07-15",
          repairer: "张伟",
          status: "待派单",
          createTime: "2024-07-15 10:35",
        },
        {
          id: 2,
          code: "WX-2024-002",
          name: "注塑机A模具更换",
          equipmentName: "注塑机A",
          repairDate: "2024-07-14",
          repairer: "李明",
          status: "进行中",
          createTime: "2024-07-14 09:05",
        },
        {
          id: 3,
          code: "WX-2024-003",
          name: "CNC加工中心A主轴维修",
          equipmentName: "CNC加工中心A",
          repairDate: "2024-07-13",
          repairer: "王芳",
          status: "已完成",
          createTime: "2024-07-13 14:25",
        },
        {
          id: 4,
          code: "WX-2024-004",
          name: "三坐标测量仪精度校准",
          equipmentName: "三坐标测量仪",
          repairDate: "2024-07-12",
          repairer: "刘洋",
          status: "待派单",
          createTime: "2024-07-12 11:05",
        },
        {
          id: 5,
          code: "WX-2024-005",
          name: "叉车A液压系统维修",
          equipmentName: "叉车A",
          repairDate: "2024-07-11",
          repairer: "陈静",
          status: "进行中",
          createTime: "2024-07-11 08:35",
        },
        {
          id: 6,
          code: "WX-2024-006",
          name: "AGV小车A导航故障维修",
          equipmentName: "AGV小车A",
          repairDate: "2024-07-10",
          repairer: "赵刚",
          status: "已驳回",
          createTime: "2024-07-10 09:35",
        },
        {
          id: 7,
          code: "WX-2024-007",
          name: "空压机A压力异常维修",
          equipmentName: "空压机A",
          repairDate: "2024-07-09",
          repairer: "孙丽",
          status: "已完成",
          createTime: "2024-07-09 08:05",
        },
        {
          id: 8,
          code: "WX-2024-008",
          name: "货架系统A结构加固",
          equipmentName: "货架系统A",
          repairDate: "2024-07-08",
          repairer: "周明",
          status: "待派单",
          createTime: "2024-07-08 10:05",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '待派单': '#8c8c8c',
        '进行中': '#1890ff',
        '已完成': '#52c41a',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待派单': '#f5f5f5',
        '进行中': '#e6f7ff',
        '已完成': '#f6ffed',
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
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
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
}
.main-top div:first-child {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1480px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
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
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.ol-col {
  width: 200px;
  min-width: 200px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:first-child {
  color: #006be6;
}
.ol-col button:nth-child(2) {
  color: red;
}
.ol-col button:nth-child(2):hover {
  background-color: #fff2f0;
}
.ol-col button:nth-child(3) {
  color: #faad14;
}
.ol-col button:nth-child(3):hover {
  background-color: #fffbe6;
}
.ol-col button:last-child {
  color: #52c41a;
}
.ol-col button:last-child:hover {
  background-color: #f6ffed;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>