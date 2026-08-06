<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>设备编码</span>
            <input type="text" placeholder="请输入设备编码" />
          </div>
          <div>
            <span>设备名称</span>
            <input type="text" placeholder="请输入设备名称" />
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
          <div>设备台账列表</div>
          <div>
            <button>+新增设备台账</button>
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
                <th><div class="th-inner">品牌</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">设备类型</div></th>
                <th><div class="th-inner">所属车间</div></th>
                <th><div class="th-inner">设备状态</div></th>
                <th><div class="th-inner">最近点检时间</div></th>
                <th><div class="th-inner">最近保养时间</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.brand }}</td>
                <td>{{ item.spec }}</td>
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
                <td>{{ item.workshop }}</td>
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
                <td>{{ item.lastCheckTime }}</td>
                <td>{{ item.lastMaintainTime }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                  <button>详情</button>
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
          code: "EQ-2024-001",
          name: "冲压机A",
          brand: "德国舒勒",
          spec: "SU-2000T",
          type: "冲压设备",
          workshop: "冲压车间",
          status: "运行中",
          lastCheckTime: "2024-07-15 10:30",
          lastMaintainTime: "2024-07-10 14:00",
          createTime: "2024-01-15 10:35",
        },
        {
          id: 2,
          code: "EQ-2024-002",
          name: "注塑机A",
          brand: "日本东芝",
          spec: "TZ-850",
          type: "注塑设备",
          workshop: "注塑车间",
          status: "运行中",
          lastCheckTime: "2024-07-14 09:00",
          lastMaintainTime: "2024-07-08 16:30",
          createTime: "2024-01-15 10:40",
        },
        {
          id: 3,
          code: "EQ-2024-003",
          name: "CNC加工中心A",
          brand: "日本马扎克",
          spec: "MZ-5X",
          type: "机加工设备",
          workshop: "机加工车间",
          status: "维修中",
          lastCheckTime: "2024-07-12 14:20",
          lastMaintainTime: "2024-07-12 08:00",
          createTime: "2024-01-15 10:45",
        },
        {
          id: 4,
          code: "EQ-2024-004",
          name: "三坐标测量仪",
          brand: "德国蔡司",
          spec: "ZEISS-710",
          type: "检测设备",
          workshop: "质检车间",
          status: "运行中",
          lastCheckTime: "2024-07-15 11:00",
          lastMaintainTime: "2024-07-05 10:00",
          createTime: "2024-02-01 09:05",
        },
        {
          id: 5,
          code: "EQ-2024-005",
          name: "叉车A",
          brand: "中国合力",
          spec: "HL-3T",
          type: "运输设备",
          workshop: "原材料仓库",
          status: "闲置",
          lastCheckTime: "2024-07-10 08:30",
          lastMaintainTime: "2024-06-20 15:00",
          createTime: "2024-03-01 14:05",
        },
        {
          id: 6,
          code: "EQ-2024-006",
          name: "AGV小车A",
          brand: "中国极智嘉",
          spec: "JZ-500",
          type: "运输设备",
          workshop: "成品仓库",
          status: "运行中",
          lastCheckTime: "2024-07-15 09:30",
          lastMaintainTime: "2024-07-06 11:00",
          createTime: "2024-03-01 14:10",
        },
        {
          id: 7,
          code: "EQ-2024-007",
          name: "空压机A",
          brand: "瑞典阿特拉斯",
          spec: "AT-75",
          type: "辅助设备",
          workshop: "动力车间",
          status: "运行中",
          lastCheckTime: "2024-07-15 08:00",
          lastMaintainTime: "2024-07-01 09:00",
          createTime: "2024-05-01 16:05",
        },
        {
          id: 8,
          code: "EQ-2024-008",
          name: "货架系统A",
          brand: "中国精星",
          spec: "JX-4M",
          type: "仓储设备",
          workshop: "半成品仓库",
          status: "运行中",
          lastCheckTime: "2024-07-13 10:00",
          lastMaintainTime: "2024-06-25 14:30",
          createTime: "2024-04-01 11:05",
        },
        {
          id: 9,
          code: "EQ-2024-009",
          name: "焊接机器人",
          brand: "瑞士ABB",
          spec: "ABB-IRB",
          type: "焊接设备",
          workshop: "焊接车间",
          status: "停机",
          lastCheckTime: "2024-07-11 15:00",
          lastMaintainTime: "2024-07-11 09:00",
          createTime: "2024-01-20 09:00",
        },
        {
          id: 10,
          code: "EQ-2024-010",
          name: "光谱分析仪",
          brand: "美国热电",
          spec: "Thermo-800",
          type: "检测设备",
          workshop: "质检车间",
          status: "运行中",
          lastCheckTime: "2024-07-15 10:00",
          lastMaintainTime: "2024-07-03 13:30",
          createTime: "2024-02-01 09:10",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '运行中': '#52c41a',
        '维修中': '#faad14',
        '闲置': '#8c8c8c',
        '停机': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '运行中': '#f6ffed',
        '维修中': '#fffbe6',
        '闲置': '#f5f5f5',
        '停机': '#fff2f0'
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
  min-width: 1700px;
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
  width: 180px;
  min-width: 180px;
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
.ol-col button:first-child,
.ol-col button:last-child {
  color: #006be6;
}
.ol-col button:first-child:hover,
.ol-col button:last-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: red;
}
.ol-col button:nth-child(2):hover {
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