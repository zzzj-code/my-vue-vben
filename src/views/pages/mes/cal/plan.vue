<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>计划编码</span>
            <input type="text" placeholder="请输入计划编码" />
          </div>
          <div>
            <span>计划名称</span>
            <input type="text" placeholder="请输入计划名称" />
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
          <div>排班计划列表</div>
          <div>
            <button>+新增排班计划</button>
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
                <th><div class="th-inner">计划编码</div></th>
                <th><div class="th-inner">计划名称</div></th>
                <th><div class="th-inner">班组类型</div></th>
                <th><div class="th-inner">开始日期</div></th>
                <th><div class="th-inner">结束日期</div></th>
                <th><div class="th-inner">轮班方式</div></th>
                <th><div class="th-inner">倒班方式</div></th>
                <th><div class="th-inner">单据状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
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
                  >{{ item.teamType }}</span>
                </td>
                <td>{{ item.startDate }}</td>
                <td>{{ item.endDate }}</td>
                <td>{{ item.shiftMode }}</td>
                <td>{{ item.rotationMode }}</td>
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
          code: "SCH-2024-001",
          name: "冲压车间1月排班计划",
          teamType: "生产班组",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          shiftMode: "两班倒",
          rotationMode: "每周轮换",
          status: "已启用",
          createTime: "2023-12-25 10:30",
        },
        {
          id: 2,
          code: "SCH-2024-002",
          name: "注塑车间1月排班计划",
          teamType: "生产班组",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          shiftMode: "两班倒",
          rotationMode: "每月轮换",
          status: "已启用",
          createTime: "2023-12-25 14:20",
        },
        {
          id: 3,
          code: "SCH-2024-003",
          name: "组装车间1月排班计划",
          teamType: "生产班组",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          shiftMode: "常白班",
          rotationMode: "无轮换",
          status: "已启用",
          createTime: "2023-12-26 09:15",
        },
        {
          id: 4,
          code: "SCH-2024-004",
          name: "冲压车间2月排班计划",
          teamType: "生产班组",
          startDate: "2024-02-01",
          endDate: "2024-02-29",
          shiftMode: "两班倒",
          rotationMode: "每周轮换",
          status: "已启用",
          createTime: "2024-01-20 11:00",
        },
        {
          id: 5,
          code: "SCH-2024-005",
          name: "注塑车间2月排班计划",
          teamType: "生产班组",
          startDate: "2024-02-01",
          endDate: "2024-02-29",
          shiftMode: "三班倒",
          rotationMode: "每周轮换",
          status: "已启用",
          createTime: "2024-01-20 16:40",
        },
        {
          id: 6,
          code: "SCH-2024-006",
          name: "质检班组年度排班计划",
          teamType: "质检班组",
          startDate: "2024-01-01",
          endDate: "2024-12-31",
          shiftMode: "常白班",
          rotationMode: "无轮换",
          status: "已启用",
          createTime: "2023-12-20 08:50",
        },
        {
          id: 7,
          code: "SCH-2024-007",
          name: "维修班组年度排班计划",
          teamType: "辅助班组",
          startDate: "2024-01-01",
          endDate: "2024-12-31",
          shiftMode: "常白班",
          rotationMode: "无轮换",
          status: "已启用",
          createTime: "2023-12-20 13:30",
        },
        {
          id: 8,
          code: "SCH-2024-008",
          name: "组装车间3月排班计划",
          teamType: "生产班组",
          startDate: "2024-03-01",
          endDate: "2024-03-31",
          shiftMode: "两班倒",
          rotationMode: "每周轮换",
          status: "草稿",
          createTime: "2024-02-20 10:20",
        },
        {
          id: 9,
          code: "SCH-2024-009",
          name: "包装班组排班计划",
          teamType: "生产班组",
          startDate: "2024-01-01",
          endDate: "2024-06-30",
          shiftMode: "常白班",
          rotationMode: "无轮换",
          status: "已启用",
          createTime: "2023-12-28 15:00",
        },
        {
          id: 10,
          code: "SCH-2024-010",
          name: "仓储班组排班计划",
          teamType: "辅助班组",
          startDate: "2024-01-01",
          endDate: "2024-06-30",
          shiftMode: "常白班",
          rotationMode: "无轮换",
          status: "已启用",
          createTime: "2023-12-28 09:30",
        },
        {
          id: 11,
          code: "SCH-2024-011",
          name: "冲压车间3月排班计划",
          teamType: "生产班组",
          startDate: "2024-03-01",
          endDate: "2024-03-31",
          shiftMode: "三班倒",
          rotationMode: "每周轮换",
          status: "草稿",
          createTime: "2024-02-25 14:10",
        },
        {
          id: 12,
          code: "SCH-2024-012",
          name: "注塑车间3月排班计划",
          teamType: "生产班组",
          startDate: "2024-03-01",
          endDate: "2024-03-31",
          shiftMode: "两班倒",
          rotationMode: "每周轮换",
          status: "已启用",
          createTime: "2024-02-25 11:45",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '已启用': '#52c41a',
        '草稿': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已启用': '#f6ffed',
        '草稿': '#f5f5f5'
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
  min-width: 1100px;
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
  max-width: 130px;
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
  width: 56px;
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
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
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