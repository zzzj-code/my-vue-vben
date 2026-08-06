<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>用户</span>
            <input type="text" placeholder="请输入用户" />
          </div>
          <div>
            <span>工作站</span>
            <input type="text" placeholder="" />
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
          <div>工作记录列表</div>
          <div>
            <button style="background-color: #fff"></button>
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
                <th><div class="th-inner">编号</div></th>
                <th><div class="th-inner">用户</div></th>
                <th><div class="th-inner">工作站编码</div></th>
                <th><div class="th-inner">工作站名称</div></th>
                <th><div class="th-inner">操作类型</div></th>
                <th><div class="th-inner">创建时间</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.user }}</td>
                <td style="color: #006be6">{{ item.stationCode }}</td>
                <td>{{ item.stationName }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getOperationTypeBg(item.operationType),
                      color: getOperationTypeColor(item.operationType),
                      border: `1px solid ${getOperationTypeColor(item.operationType)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.operationType }}</span>
                </td>
                <td>{{ item.createTime }}</td>
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
          user: "张伟",
          stationCode: "WS-001-01",
          stationName: "冲压机台A",
          operationType: "开始生产",
          createTime: "2024-07-15 08:00:00",
        },
        {
          id: 2,
          user: "张伟",
          stationCode: "WS-001-01",
          stationName: "冲压机台A",
          operationType: "暂停生产",
          createTime: "2024-07-15 10:30:00",
        },
        {
          id: 3,
          user: "王芳",
          stationCode: "WS-002-01",
          stationName: "注塑机A",
          operationType: "开始生产",
          createTime: "2024-07-15 09:00:00",
        },
        {
          id: 4,
          user: "刘洋",
          stationCode: "WS-006-01",
          stationName: "CNC加工中心A",
          operationType: "设备点检",
          createTime: "2024-07-14 14:20:00",
        },
        {
          id: 5,
          user: "陈静",
          stationCode: "WS-003-01",
          stationName: "组装线A",
          operationType: "报工",
          createTime: "2024-07-14 11:00:00",
        },
        {
          id: 6,
          user: "孙丽",
          stationCode: "WS-005-01",
          stationName: "包装线A",
          operationType: "结束生产",
          createTime: "2024-07-13 17:00:00",
        },
        {
          id: 7,
          user: "周明",
          stationCode: "WS-008-01",
          stationName: "QC检验台A",
          operationType: "质检完成",
          createTime: "2024-07-13 16:30:00",
        },
        {
          id: 8,
          user: "吴凯",
          stationCode: "WS-002-02",
          stationName: "注塑机B",
          operationType: "异常报告",
          createTime: "2024-07-12 15:00:00",
        },
      ],
    };
  },
  methods: {
    getOperationTypeColor(type) {
      const map = {
        '开始生产': '#52c41a',
        '暂停生产': '#faad14',
        '结束生产': '#1890ff',
        '报工': '#006be6',
        '设备点检': '#722ed1',
        '质检完成': '#52c41a',
        '异常报告': '#ff4d4f'
      };
      return map[type] || '#333';
    },
    getOperationTypeBg(type) {
      const map = {
        '开始生产': '#f6ffed',
        '暂停生产': '#fffbe6',
        '结束生产': '#e6f7ff',
        '报工': '#e6f6ff',
        '设备点检': '#f9f0ff',
        '质检完成': '#f6ffed',
        '异常报告': '#fff2f0'
      };
      return map[type] || '#fff';
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
  width: 100%;
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

/* 最后一列不显示右边框 */
.main-tab th:last-child .th-inner {
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
  max-width: 160px;
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