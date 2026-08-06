<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>设备名称</span>
            <input type="text" placeholder="请输入设备名称" />
          </div>
          <div>
            <span>点检时间</span>
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
          <div>点检记录列表</div>
          <div>
            <button>+新增点检记录</button>
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
                <th><div class="th-inner">设备编码</div></th>
                <th><div class="th-inner">设备名称</div></th>
                <th><div class="th-inner">计划名称</div></th>
                <th><div class="th-inner">点检时间</div></th>
                <th><div class="th-inner">点检人</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.equipmentCode }}</td>
                <td style="color: #006be6">{{ item.equipmentName }}</td>
                <td>{{ item.planName }}</td>
                <td>{{ item.checkTime }}</td>
                <td>{{ item.checker }}</td>
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
          equipmentCode: "EQ-2024-001",
          equipmentName: "冲压机A",
          planName: "冲压设备点检保养方案",
          checkTime: "2024-07-15 10:30",
          checker: "张伟",
          status: "合格",
          createTime: "2024-07-15 10:35",
        },
        {
          id: 2,
          equipmentCode: "EQ-2024-002",
          equipmentName: "注塑机A",
          planName: "注塑机月度保养方案",
          checkTime: "2024-07-15 09:00",
          checker: "李明",
          status: "合格",
          createTime: "2024-07-15 09:05",
        },
        {
          id: 3,
          equipmentCode: "EQ-2024-003",
          equipmentName: "CNC加工中心A",
          planName: "CNC设备周点检方案",
          checkTime: "2024-07-14 14:20",
          checker: "王芳",
          status: "异常",
          createTime: "2024-07-14 14:25",
        },
        {
          id: 4,
          equipmentCode: "EQ-2024-004",
          equipmentName: "三坐标测量仪",
          planName: "测量设备校准方案",
          checkTime: "2024-07-14 11:00",
          checker: "刘洋",
          status: "合格",
          createTime: "2024-07-14 11:05",
        },
        {
          id: 5,
          equipmentCode: "EQ-2024-005",
          equipmentName: "叉车A",
          planName: "叉车季度保养方案",
          checkTime: "2024-07-13 08:30",
          checker: "陈静",
          status: "合格",
          createTime: "2024-07-13 08:35",
        },
        {
          id: 6,
          equipmentCode: "EQ-2024-006",
          equipmentName: "AGV小车A",
          planName: "AGV小车日常点检方案",
          checkTime: "2024-07-13 09:30",
          checker: "赵刚",
          status: "异常",
          createTime: "2024-07-13 09:35",
        },
        {
          id: 7,
          equipmentCode: "EQ-2024-007",
          equipmentName: "空压机A",
          planName: "空压机半年保养方案",
          checkTime: "2024-07-12 08:00",
          checker: "孙丽",
          status: "合格",
          createTime: "2024-07-12 08:05",
        },
        {
          id: 8,
          equipmentCode: "EQ-2024-008",
          equipmentName: "货架系统A",
          planName: "货架系统定期检查方案",
          checkTime: "2024-07-12 10:00",
          checker: "周明",
          status: "合格",
          createTime: "2024-07-12 10:05",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '合格': '#52c41a',
        '异常': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '合格': '#f6ffed',
        '异常': '#fff2f0'
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
  min-width: 1240px;
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
  max-width: 150px;
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