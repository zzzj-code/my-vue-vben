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
            <span>批次号</span>
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
            <button>+批量生号</button>
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
                <th><div class="th-inner"><input type="checkbox" disabled></div></th>
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">预分配编号</div></th>
                <th><div class="th-inner">批次号</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">预设分类</div></th>
                <th><div class="th-inner">预设位置</div></th>
                <th><div class="th-inner">二维码</div></th>
                <th><div class="th-inner">打印次数</div></th>
                <th><div class="th-inner">最近打印</div></th>
                <th><div class="th-inner">建档时间</div></th>
                <th><div class="th-inner">生成时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="13" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td><input type="checkbox"></td>
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.preAssignNo }}</td>
                <td>{{ item.batchNo }}</td>
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
                <td>{{ item.presetCategory }}</td>
                <td>{{ item.presetLocation }}</td>
                <td>
                  <span style="font-size: 20px; cursor: pointer;">📱</span>
                </td>
                <td>{{ item.printCount }}</td>
                <td>{{ item.lastPrint || '-' }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.generateTime }}</td>
                <td class="ol-col">
                  <button>查看</button>
                  <button>打印</button>
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
          preAssignNo: "ZC-2026-001",
          batchNo: "BATCH-2026-001",
          status: "待分配",
          presetCategory: "电子设备",
          presetLocation: "A栋-1楼-101室",
          printCount: 0,
          lastPrint: null,
          createTime: "2026-07-01 09:30:00",
          generateTime: "2026-07-01 09:30:00",
        },
        {
          id: 2,
          preAssignNo: "ZC-2026-002",
          batchNo: "BATCH-2026-001",
          status: "待分配",
          presetCategory: "电子设备",
          presetLocation: "A栋-2楼-201室",
          printCount: 0,
          lastPrint: null,
          createTime: "2026-07-01 09:30:00",
          generateTime: "2026-07-01 09:30:00",
        },
        {
          id: 3,
          preAssignNo: "ZC-2026-003",
          batchNo: "BATCH-2026-001",
          status: "已分配",
          presetCategory: "办公设备",
          presetLocation: "A栋-3楼-301室",
          printCount: 1,
          lastPrint: "2026-07-02 14:20:00",
          createTime: "2026-07-01 09:30:00",
          generateTime: "2026-07-01 09:30:00",
        },
        {
          id: 4,
          preAssignNo: "ZC-2026-004",
          batchNo: "BATCH-2026-002",
          status: "待分配",
          presetCategory: "机电设备",
          presetLocation: "B栋-1楼-101室",
          printCount: 0,
          lastPrint: null,
          createTime: "2026-07-05 10:15:00",
          generateTime: "2026-07-05 10:15:00",
        },
        {
          id: 5,
          preAssignNo: "ZC-2026-005",
          batchNo: "BATCH-2026-002",
          status: "已分配",
          presetCategory: "办公设备",
          presetLocation: "B栋-2楼-202室",
          printCount: 2,
          lastPrint: "2026-07-06 16:30:00",
          createTime: "2026-07-05 10:15:00",
          generateTime: "2026-07-05 10:15:00",
        },
        {
          id: 6,
          preAssignNo: "ZC-2026-006",
          batchNo: "BATCH-2026-003",
          status: "待分配",
          presetCategory: "电子设备",
          presetLocation: "A栋-4楼-401室",
          printCount: 0,
          lastPrint: null,
          createTime: "2026-07-10 08:30:00",
          generateTime: "2026-07-10 08:30:00",
        },
        {
          id: 7,
          preAssignNo: "ZC-2026-007",
          batchNo: "BATCH-2026-003",
          status: "已分配",
          presetCategory: "网络设备",
          presetLocation: "C栋-1楼-101室",
          printCount: 1,
          lastPrint: "2026-07-11 11:00:00",
          createTime: "2026-07-10 08:30:00",
          generateTime: "2026-07-10 08:30:00",
        },
        {
          id: 8,
          preAssignNo: "ZC-2026-008",
          batchNo: "BATCH-2026-003",
          status: "待分配",
          presetCategory: "机电设备",
          presetLocation: "C栋-2楼-201室",
          printCount: 0,
          lastPrint: null,
          createTime: "2026-07-10 08:30:00",
          generateTime: "2026-07-10 08:30:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '待分配': '#faad14',
        '已分配': '#52c41a'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待分配': '#fffbe6',
        '已分配': '#f6ffed'
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
  min-width: 1674px;
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

/* 序号列 */
.main-tab td:nth-child(2),
.main-tab th:nth-child(2) {
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