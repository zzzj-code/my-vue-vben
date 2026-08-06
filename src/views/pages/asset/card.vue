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
            <span>资产名称</span>
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
            <button>+新增资产</button>
            <button>导入</button>
            <button>导出</button>
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
                <th><div class="th-inner">资产编号</div></th>
                <th><div class="th-inner">资产名称</div></th>
                <th><div class="th-inner">资产分类</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">品牌</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">原值</div></th>
                <th><div class="th-inner">净值</div></th>
                <th><div class="th-inner">使用人</div></th>
                <th><div class="th-inner">使用部门</div></th>
                <th><div class="th-inner">存放位置</div></th>
                <th><div class="th-inner">标签已打印</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="16" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td><input type="checkbox"></td>
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.assetNo }}</td>
                <td>{{ item.assetName }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.brand }}</td>
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
                <td>¥{{ item.originalValue.toLocaleString() }}</td>
                <td>¥{{ item.netValue.toLocaleString() }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.location }}</td>
                <td>
                  <span
                    :style="{
                      color: item.labelPrinted ? '#52c41a' : '#8c8c8c'
                    }"
                  >{{ item.labelPrinted ? '已打印' : '未打印' }}</span>
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
          assetNo: "ZC-2024-001",
          assetName: "台式计算机",
          category: "电子设备",
          spec: "联想 ThinkCentre M950t",
          brand: "联想",
          status: "正常",
          originalValue: 5800,
          netValue: 4350,
          user: "张伟",
          department: "技术研发部",
          location: "A栋-2楼-201室",
          labelPrinted: true,
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          assetNo: "ZC-2024-002",
          assetName: "便携式计算机",
          category: "电子设备",
          spec: "华为 MateBook X Pro",
          brand: "华为",
          status: "正常",
          originalValue: 8200,
          netValue: 6150,
          user: "李芳",
          department: "产品交付部",
          location: "A栋-3楼-301室",
          labelPrinted: true,
          createTime: "2024-01-20 14:20:00",
        },
        {
          id: 3,
          assetNo: "ZC-2024-003",
          assetName: "打印机",
          category: "办公设备",
          spec: "惠普 LaserJet Pro M405d",
          brand: "惠普",
          status: "维修中",
          originalValue: 3200,
          netValue: 2400,
          user: "王磊",
          department: "AI实验室",
          location: "A栋-1楼-102室",
          labelPrinted: true,
          createTime: "2024-02-01 10:15:00",
        },
        {
          id: 4,
          assetNo: "ZC-2024-004",
          assetName: "服务器",
          category: "电子设备",
          spec: "戴尔 PowerEdge R740",
          brand: "戴尔",
          status: "正常",
          originalValue: 45000,
          netValue: 33750,
          user: "陈静",
          department: "移动开发部",
          location: "B栋-3楼-301室",
          labelPrinted: true,
          createTime: "2024-02-15 16:45:00",
        },
        {
          id: 5,
          assetNo: "ZC-2024-005",
          assetName: "投影仪",
          category: "办公设备",
          spec: "爱普生 CB-2065",
          brand: "爱普生",
          status: "正常",
          originalValue: 6800,
          netValue: 5100,
          user: "赵明",
          department: "运维保障部",
          location: "A栋-4楼-401室",
          labelPrinted: false,
          createTime: "2024-03-01 08:30:00",
        },
        {
          id: 6,
          assetNo: "ZC-2024-006",
          assetName: "交换机",
          category: "网络设备",
          spec: "华为 S5735S-L24T4S-A",
          brand: "华为",
          status: "正常",
          originalValue: 2800,
          netValue: 2100,
          user: "孙婷",
          department: "区块链事业部",
          location: "B栋-2楼-202室",
          labelPrinted: true,
          createTime: "2024-03-15 11:20:00",
        },
        {
          id: 7,
          assetNo: "ZC-2024-007",
          assetName: "空调",
          category: "机电设备",
          spec: "格力 3匹 变频冷暖",
          brand: "格力",
          status: "维修中",
          originalValue: 9200,
          netValue: 6900,
          user: "刘洋",
          department: "物联网部",
          location: "C栋-1楼-101室",
          labelPrinted: false,
          createTime: "2024-04-01 14:00:00",
        },
        {
          id: 8,
          assetNo: "ZC-2024-008",
          assetName: "复印机",
          category: "办公设备",
          spec: "佳能 iR-ADV C5560",
          brand: "佳能",
          status: "已报废",
          originalValue: 56000,
          netValue: 2800,
          user: "周梅",
          department: "数据智能部",
          location: "A栋-4楼-402室",
          labelPrinted: true,
          createTime: "2024-04-20 09:00:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '正常': '#52c41a',
        '维修中': '#faad14',
        '已报废': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '正常': '#f6ffed',
        '维修中': '#fffbe6',
        '已报废': '#f5f5f5'
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
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button {
  width: 56px;
  height: 32px;
  border: 0;
  color: #006be6;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.top-2 button:hover {
  background-color: #f0f4f9;
}
.top-2 button:first-child {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:first-child:hover {
  background-color: #0056b3;
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
  min-width: 2024px;
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
  max-width: 120px;
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