<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>项目编码</span>
            <input type="text" placeholder="请输入项目编码" />
          </div>
          <div>
            <span>项目名称</span>
            <input type="text" placeholder="请输入项目名称" />
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
          <div>点检保养项目列表</div>
          <div>
            <button>+新增点检保养项目</button>
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
                <th><div class="th-inner">项目编码</div></th>
                <th><div class="th-inner">项目名称</div></th>
                <th><div class="th-inner">项目类型</div></th>
                <th><div class="th-inner">项目内容</div></th>
                <th><div class="th-inner">标准</div></th>
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
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.content }}</td>
                <td>{{ item.standard }}</td>
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
          code: "INSP-2024-001",
          name: "冲压机安全检查",
          type: "点检项目",
          content: "检查冲压机安全防护装置、急停按钮、安全光幕是否正常",
          standard: "所有安全装置灵敏有效，急停按钮正常",
          status: "启用",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "INSP-2024-002",
          name: "注塑机温度检查",
          type: "点检项目",
          content: "检查注塑机料筒温度、模具温度是否在设定范围内",
          standard: "各段温度偏差不超过±5℃",
          status: "启用",
          createTime: "2024-01-15 14:20",
        },
        {
          id: 3,
          code: "MAIN-2024-001",
          name: "CNC主轴保养",
          type: "保养项目",
          content: "清洁主轴锥孔、更换主轴润滑油、检查主轴皮带松紧度",
          standard: "主轴无异响、无振动，油位正常",
          status: "启用",
          createTime: "2024-01-20 09:15",
        },
        {
          id: 4,
          code: "INSP-2024-003",
          name: "叉车制动检查",
          type: "点检项目",
          content: "检查叉车制动系统、转向系统、液压系统是否正常",
          standard: "制动距离≤2米，转向灵活无卡滞",
          status: "停用",
          createTime: "2024-02-01 11:00",
        },
        {
          id: 5,
          code: "MAIN-2024-002",
          name: "空压机保养",
          type: "保养项目",
          content: "更换空压机润滑油、空气滤芯、油滤芯，检查散热器",
          standard: "运行温度≤85℃，振动值≤2.5mm/s",
          status: "启用",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 6,
          code: "INSP-2024-004",
          name: "AGV小车运行检查",
          type: "点检项目",
          content: "检查AGV小车导航系统、电池电量、安全避障传感器",
          standard: "导航精度±10mm，电量≥30%，避障灵敏",
          status: "启用",
          createTime: "2024-03-01 08:50",
        },
        {
          id: 7,
          code: "MAIN-2024-003",
          name: "焊接机器人保养",
          type: "保养项目",
          content: "清洁机器人焊枪喷嘴、检查电缆磨损、校准各轴零点",
          standard: "焊枪清理干净，电缆无破损，零点精度≤0.1mm",
          status: "启用",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 8,
          code: "INSP-2024-005",
          name: "三坐标测量仪精度检查",
          type: "点检项目",
          content: "使用标准球检查三坐标测量仪各轴精度",
          standard: "各轴精度≤0.005mm，重复精度≤0.003mm",
          status: "停用",
          createTime: "2024-04-01 10:20",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5'
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
  min-width: 1220px;
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
  max-width: 180px;
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