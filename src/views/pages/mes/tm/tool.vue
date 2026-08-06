<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>工具编码</span>
            <input type="text" placeholder="请输入工具编码" />
          </div>
          <div>
            <span>工具名称</span>
            <input type="text" placeholder="请输入工具名称" />
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
          <div>工具列表</div>
          <div>
            <button>+新增工具</button>
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
                <th><div class="th-inner">工具编码</div></th>
                <th><div class="th-inner">工具名称</div></th>
                <th><div class="th-inner">工具类型</div></th>
                <th><div class="th-inner">品牌</div></th>
                <th><div class="th-inner">型号规格</div></th>
                <th><div class="th-inner">库存数量</div></th>
                <th><div class="th-inner">可用数量</div></th>
                <th><div class="th-inner">保养维护类型</div></th>
                <th><div class="th-inner">下次保养</div></th>
                <th><div class="th-inner">状态</div></th>
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
                  >{{ item.toolType }}</span>
                </td>
                <td>{{ item.brand }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.stockQty }}</td>
                <td>{{ item.availableQty }}</td>
                <td>{{ item.maintenanceType }}</td>
                <td>{{ item.nextMaintenance || '-' }}</td>
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
          code: "T00001",
          name: "游标卡尺",
          toolType: "量具",
          brand: "三丰",
          spec: "0-150mm 0.02mm",
          stockQty: 5,
          availableQty: 5,
          maintenanceType: "定期校准",
          nextMaintenance: "2026-08-15",
          status: "启用",
          createTime: "2023-01-15 09:30:00",
        },
        {
          id: 2,
          code: "T00002",
          name: "千分尺",
          toolType: "量具",
          brand: "三丰",
          spec: "0-25mm 0.01mm",
          stockQty: 3,
          availableQty: 2,
          maintenanceType: "定期校准",
          nextMaintenance: "2026-09-01",
          status: "启用",
          createTime: "2023-02-20 14:20:00",
        },
        {
          id: 3,
          code: "T00003",
          name: "数控刀架",
          toolType: "刀具",
          brand: "山特维克",
          spec: "SDNCN-12-08",
          stockQty: 8,
          availableQty: 6,
          maintenanceType: "日常保养",
          nextMaintenance: "2026-08-20",
          status: "启用",
          createTime: "2023-03-10 10:00:00",
        },
        {
          id: 4,
          code: "T00004",
          name: "铣刀",
          toolType: "刀具",
          brand: "肯纳",
          spec: "D10×R0.5×100L",
          stockQty: 12,
          availableQty: 8,
          maintenanceType: "日常保养",
          nextMaintenance: "2026-08-25",
          status: "启用",
          createTime: "2023-04-05 16:40:00",
        },
        {
          id: 5,
          code: "T00005",
          name: "百分表",
          toolType: "量具",
          brand: "上工",
          spec: "0-10mm 0.01mm",
          stockQty: 2,
          availableQty: 1,
          maintenanceType: "定期校准",
          nextMaintenance: "2026-07-30",
          status: "维修中",
          createTime: "2023-05-12 11:20:00",
        },
        {
          id: 6,
          code: "T00006",
          name: "角磨机",
          toolType: "电动工具",
          brand: "博世",
          spec: "GWS 7-125",
          stockQty: 3,
          availableQty: 3,
          maintenanceType: "定期维护",
          nextMaintenance: "2026-09-10",
          status: "启用",
          createTime: "2023-06-18 08:50:00",
        },
        {
          id: 7,
          code: "T00007",
          name: "气动扳手",
          toolType: "气动工具",
          brand: "英格索兰",
          spec: "2135TiMAX",
          stockQty: 2,
          availableQty: 2,
          maintenanceType: "定期维护",
          nextMaintenance: "2026-08-28",
          status: "启用",
          createTime: "2023-07-22 13:30:00",
        },
        {
          id: 8,
          code: "T00008",
          name: "旧量具",
          toolType: "量具",
          brand: "国产",
          spec: "LJ-50",
          stockQty: 1,
          availableQty: 0,
          maintenanceType: "定期维护",
          nextMaintenance: "-",
          status: "报废",
          createTime: "2022-10-01 10:00:00",
        },
        {
          id: 9,
          code: "T00009",
          name: "电烙铁",
          toolType: "电动工具",
          brand: "白光",
          spec: "936 恒温",
          stockQty: 4,
          availableQty: 3,
          maintenanceType: "日常保养",
          nextMaintenance: "2026-09-05",
          status: "启用",
          createTime: "2023-08-15 15:10:00",
        },
        {
          id: 10,
          code: "T00010",
          name: "内六角扳手组",
          toolType: "手工具",
          brand: "世达",
          spec: "09101 9件套",
          stockQty: 6,
          availableQty: 6,
          maintenanceType: "-",
          nextMaintenance: "-",
          status: "启用",
          createTime: "2023-09-20 09:00:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c',
        '维修中': '#faad14',
        '报废': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5',
        '维修中': '#fffbe6',
        '报废': '#fff2f0'
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
  min-width: 1690px;
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
  width: 140px;
  min-width: 140px;
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