<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>单据编号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>资产编号</span>
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
        <div class="main-top">
          <div class="top-1"></div>
          <div class="top-2">
            <button>+新增维修单</button>
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
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">单据编号</div></th>
                <th><div class="th-inner">资产编号</div></th>
                <th><div class="th-inner">资产名称</div></th>
                <th><div class="th-inner">申请日期</div></th>
                <th><div class="th-inner">维修状态</div></th>
                <th><div class="th-inner">审批状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="9" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.documentNo }}</td>
                <td>{{ item.assetNo }}</td>
                <td>{{ item.assetName }}</td>
                <td>{{ item.applyDate }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getRepairStatusBg(item.repairStatus),
                      color: getRepairStatusColor(item.repairStatus),
                      border: `1px solid ${getRepairStatusColor(item.repairStatus)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.repairStatus }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getApprovalStatusBg(item.approvalStatus),
                      color: getApprovalStatusColor(item.approvalStatus),
                      border: `1px solid ${getApprovalStatusColor(item.approvalStatus)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.approvalStatus }}</span>
                </td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
                  <button>编辑</button>
                  <button>删除</button>
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
          documentNo: "WX-2026-001",
          assetNo: "ZC-2024-001",
          assetName: "台式计算机",
          applyDate: "2026-07-10",
          repairStatus: "待维修",
          approvalStatus: "已审批",
          createTime: "2026-07-10 09:30:00",
        },
        {
          id: 2,
          documentNo: "WX-2026-002",
          assetNo: "ZC-2024-005",
          assetName: "打印机",
          applyDate: "2026-07-15",
          repairStatus: "维修中",
          approvalStatus: "已审批",
          createTime: "2026-07-15 14:20:00",
        },
        {
          id: 3,
          documentNo: "WX-2026-003",
          assetNo: "ZC-2024-012",
          assetName: "服务器",
          applyDate: "2026-07-20",
          repairStatus: "已完成",
          approvalStatus: "已审批",
          createTime: "2026-07-20 10:15:00",
        },
        {
          id: 4,
          documentNo: "WX-2026-004",
          assetNo: "ZC-2024-008",
          assetName: "空调",
          applyDate: "2026-07-25",
          repairStatus: "待维修",
          approvalStatus: "待审批",
          createTime: "2026-07-25 16:45:00",
        },
        {
          id: 5,
          documentNo: "WX-2026-005",
          assetNo: "ZC-2024-003",
          assetName: "便携式计算机",
          applyDate: "2026-08-01",
          repairStatus: "维修中",
          approvalStatus: "已驳回",
          createTime: "2026-08-01 08:30:00",
        },
        {
          id: 6,
          documentNo: "WX-2026-006",
          assetNo: "ZC-2024-020",
          assetName: "投影仪",
          applyDate: "2026-08-05",
          repairStatus: "已完成",
          approvalStatus: "已审批",
          createTime: "2026-08-05 11:00:00",
        },
        {
          id: 7,
          documentNo: "WX-2026-007",
          assetNo: "ZC-2024-015",
          assetName: "交换机",
          applyDate: "2026-08-08",
          repairStatus: "待维修",
          approvalStatus: "已审批",
          createTime: "2026-08-08 09:20:00",
        },
        {
          id: 8,
          documentNo: "WX-2026-008",
          assetNo: "ZC-2024-018",
          assetName: "复印机",
          applyDate: "2026-08-12",
          repairStatus: "已报废",
          approvalStatus: "已审批",
          createTime: "2026-08-12 13:40:00",
        },
      ],
    };
  },
  methods: {
    getRepairStatusColor(status) {
      const map = {
        '待维修': '#faad14',
        '维修中': '#1890ff',
        '已完成': '#52c41a',
        '已报废': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getRepairStatusBg(status) {
      const map = {
        '待维修': '#fffbe6',
        '维修中': '#e6f7ff',
        '已完成': '#f6ffed',
        '已报废': '#f5f5f5'
      };
      return map[status] || '#fff';
    },
    getApprovalStatusColor(status) {
      const map = {
        '已审批': '#52c41a',
        '待审批': '#faad14',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getApprovalStatusBg(status) {
      const map = {
        '已审批': '#f6ffed',
        '待审批': '#fffbe6',
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
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
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
  min-width: 1230px;
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
  width: 200px;
  min-width: 200px;
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
.ol-col button:nth-child(3) {
  color: red;
}
.ol-col button:nth-child(3):hover {
  background-color: #fff2f0;
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