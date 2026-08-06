<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>处置单号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>处置类型</span>
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
            <button>+新建处置单</button>
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
                <th><div class="th-inner">处置单号</div></th>
                <th><div class="th-inner">类型</div></th>
                <th><div class="th-inner">处置日期</div></th>
                <th><div class="th-inner">总净值</div></th>
                <th><div class="th-inner">审批状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="8" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.disposalNo }}</td>
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
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.disposalDate }}</td>
                <td>¥{{ item.totalNetValue.toLocaleString() }}</td>
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
          disposalNo: "CZ-2024-001",
          type: "报废",
          disposalDate: "2024-03-15",
          totalNetValue: 2800,
          status: "已审批",
          createTime: "2024-03-15 10:30:00",
        },
        {
          id: 2,
          disposalNo: "CZ-2024-002",
          type: "出售",
          disposalDate: "2024-04-20",
          totalNetValue: 4350,
          status: "待审批",
          createTime: "2024-04-20 14:20:00",
        },
        {
          id: 3,
          disposalNo: "CZ-2024-003",
          type: "捐赠",
          disposalDate: "2024-05-10",
          totalNetValue: 3200,
          status: "已审批",
          createTime: "2024-05-10 09:15:00",
        },
        {
          id: 4,
          disposalNo: "CZ-2024-004",
          type: "报废",
          disposalDate: "2024-06-05",
          totalNetValue: 6900,
          status: "已驳回",
          createTime: "2024-06-05 16:45:00",
        },
        {
          id: 5,
          disposalNo: "CZ-2024-005",
          type: "出售",
          disposalDate: "2024-07-01",
          totalNetValue: 5100,
          status: "已审批",
          createTime: "2024-07-01 08:30:00",
        },
        {
          id: 6,
          disposalNo: "CZ-2024-006",
          type: "报废",
          disposalDate: "2024-07-15",
          totalNetValue: 2100,
          status: "待审批",
          createTime: "2024-07-15 11:00:00",
        },
        {
          id: 7,
          disposalNo: "CZ-2024-007",
          type: "捐赠",
          disposalDate: "2024-08-01",
          totalNetValue: 4500,
          status: "已审批",
          createTime: "2024-08-01 09:20:00",
        },
        {
          id: 8,
          disposalNo: "CZ-2024-008",
          type: "报废",
          disposalDate: "2024-08-15",
          totalNetValue: 33750,
          status: "待审批",
          createTime: "2024-08-15 13:40:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '已审批': '#52c41a',
        '待审批': '#faad14',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
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
  min-width: 1030px;
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
  width: 180px;
  min-width: 180px;
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