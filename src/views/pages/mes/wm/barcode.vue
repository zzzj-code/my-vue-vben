<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>业务类型</span>
            <input type="text" placeholder="请输入业务类型" />
          </div>
          <div>
            <span>业务编码</span>
            <input type="text" placeholder="请输入业务编码" />
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
          <div>条码列表</div>
          <div>
            <button>+新增条码</button>
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
                <th><input type="checkbox" name="" id="" /></th>
                <th>条码</th>
                <th>条码格式</th>
                <th>业务类型</th>
                <th>条码内容</th>
                <th>业务编码</th>
                <th>业务名称</th>
                <th>状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" name="" id="" /></td>
                <td>{{ item.barcode }}</td>
                <td>{{ item.format }}</td>
                <td>{{ item.bizName }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.bizCode }}</td>
                <td>{{ item.bizName }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>详情</button>
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          barcode: "BC20240001",
          format: "CODE128",
          bizType: "物料",
          content: "M-2024-001",
          bizCode: "M-2024-001",
          bizName: "碳钢螺丝 M4×20",
          status: "已使用",
        },
        {
          id: 2,
          barcode: "BC20240002",
          format: "CODE128",
          bizType: "物料",
          content: "M-2024-002",
          bizCode: "M-2024-002",
          bizName: "ABS塑料外壳",
          status: "已使用",
        },
        {
          id: 3,
          barcode: "BC20240003",
          format: "CODE39",
          bizType: "产品",
          content: "P-2024-006",
          bizCode: "P-2024-006",
          bizName: "智能网关成品",
          status: "已使用",
        },
        {
          id: 4,
          barcode: "BC20240004",
          format: "EAN-13",
          bizType: "产品",
          content: "P-2024-012",
          bizCode: "P-2024-012",
          bizName: "智能灯泡成品",
          status: "已使用",
        },
        {
          id: 5,
          barcode: "BC20240005",
          format: "CODE128",
          bizType: "物料",
          content: "M-2024-007",
          bizCode: "M-2024-007",
          bizName: "不锈钢弹簧",
          status: "未使用",
        },
        {
          id: 6,
          barcode: "BC20240006",
          format: "QR Code",
          bizType: "产品",
          content: "P-2024-005",
          bizCode: "P-2024-005",
          bizName: "电源适配器半成品",
          status: "已使用",
        },
        {
          id: 7,
          barcode: "BC20240007",
          format: "CODE128",
          bizType: "物料",
          content: "M-2024-003",
          bizCode: "M-2024-003",
          bizName: "瓦楞纸箱",
          status: "未使用",
        },
        {
          id: 8,
          barcode: "BC20240008",
          format: "CODE39",
          bizType: "产品",
          content: "P-2024-018",
          bizCode: "P-2024-018",
          bizName: "智能插座成品",
          status: "已使用",
        },
        {
          id: 9,
          barcode: "BC20240009",
          format: "EAN-13",
          bizType: "物料",
          content: "M-2024-010",
          bizCode: "M-2024-010",
          bizName: "散热硅脂",
          status: "未使用",
        },
        {
          id: 10,
          barcode: "BC20240010",
          format: "CODE128",
          bizType: "产品",
          content: "P-2024-011",
          bizCode: "P-2024-011",
          bizName: "主板半成品",
          status: "已使用",
        },
        {
          id: 11,
          barcode: "BC20240011",
          format: "QR Code",
          bizType: "物料",
          content: "M-2024-008",
          bizCode: "M-2024-008",
          bizName: "PC透明面板",
          status: "未使用",
        },
        {
          id: 12,
          barcode: "BC20240012",
          format: "CODE128",
          bizType: "产品",
          content: "P-2024-017",
          bizCode: "P-2024-017",
          bizName: "传感器半成品",
          status: "已使用",
        },
        {
          id: 13,
          barcode: "BC20240013",
          format: "CODE39",
          bizType: "物料",
          content: "M-2024-013",
          bizCode: "M-2024-013",
          bizName: "铜接线端子",
          status: "已使用",
        },
        {
          id: 14,
          barcode: "BC20240014",
          format: "EAN-13",
          bizType: "物料",
          content: "M-2024-014",
          bizCode: "M-2024-014",
          bizName: "橡胶密封圈",
          status: "未使用",
        },
        {
          id: 15,
          barcode: "BC20240015",
          format: "CODE128",
          bizType: "产品",
          content: "P-2024-006",
          bizCode: "P-2024-006",
          bizName: "智能网关成品（第二批）",
          status: "已使用",
        },
        {
          id: 16,
          barcode: "BC20240016",
          format: "QR Code",
          bizType: "物料",
          content: "M-2024-015",
          bizCode: "M-2024-015",
          bizName: "PE缠绕膜",
          status: "未使用",
        },
        {
          id: 17,
          barcode: "BC20240017",
          format: "CODE128",
          bizType: "产品",
          content: "P-2024-012",
          bizCode: "P-2024-012",
          bizName: "智能灯泡成品（第二批）",
          status: "已使用",
        },
        {
          id: 18,
          barcode: "BC20240018",
          format: "CODE39",
          bizType: "物料",
          content: "M-2024-009",
          bizCode: "M-2024-009",
          bizName: "气泡膜卷材",
          status: "未使用",
        },
        {
          id: 19,
          barcode: "BC20240019",
          format: "EAN-13",
          bizType: "产品",
          content: "P-2024-005",
          bizCode: "P-2024-005",
          bizName: "电源适配器半成品（第二批）",
          status: "已使用",
        },
        {
          id: 20,
          barcode: "BC20240020",
          format: "CODE128",
          bizType: "物料",
          content: "M-2024-004",
          bizCode: "M-2024-004",
          bizName: "焊接助焊剂",
          status: "未使用",
        },
      ],
    };
  },
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
  /* border: 1px solid red; */
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
  min-width: 1170px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 200px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 46px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  color: red;
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
