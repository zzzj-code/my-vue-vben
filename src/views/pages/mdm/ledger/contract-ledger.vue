<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>台账主编码</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div>
            <span>合同编号</span>
            <input type="text" placeholder="请输入" />
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
          <div>合同主数据</div>
          <div>
            <button>+新增计量单位</button>
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
                <th><div class="th-cell">台账主编码</div></th>
                <th><div class="th-cell">合同编号</div></th>
                <th><div class="th-cell">合同名称</div></th>
                <th><div class="th-cell">我方签约主体</div></th>
                <th><div class="th-cell">客商主编码</div></th>
                <th><div class="th-cell">对方单位</div></th>
                <th><div class="th-cell">合同金额</div></th>
                <th><div class="th-cell">数据来源</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.code }}</td>
                <td>{{ item.contractNo }}</td>
                <td>{{ item.contractName }}</td>
                <td>{{ item.ourParty }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.otherParty }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.source }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div class="left-info">
            共{{ tabValue.length }}条记录
            <span>20条/页</span>
          </div>
        </div>
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
          code: "HT-2024-001",
          contractNo: "CON-2024-0001",
          contractName: "年度采购框架协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-001",
          otherParty: "华为技术有限公司",
          amount: 2500000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          code: "HT-2024-002",
          contractNo: "CON-2024-0002",
          contractName: "设备采购合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-003",
          otherParty: "腾讯科技（深圳）有限公司",
          amount: 1800000.0,
          source: "系统同步",
          status: "审批中",
          createTime: "2024-01-18 14:20:00",
        },
        {
          id: 3,
          code: "HT-2024-003",
          contractNo: "CON-2024-0003",
          contractName: "技术服务合作协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-005",
          otherParty: "京东集团股份有限公司",
          amount: 3200000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-01-20 11:45:00",
        },
        {
          id: 4,
          code: "HT-2024-004",
          contractNo: "CON-2024-0004",
          contractName: "原材料供应合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-007",
          otherParty: "上海汽车集团股份有限公司",
          amount: 5600000.0,
          source: "系统同步",
          status: "已废止",
          createTime: "2024-01-22 16:10:00",
        },
        {
          id: 5,
          code: "HT-2024-005",
          contractNo: "CON-2024-0005",
          contractName: "物流服务框架合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-010",
          otherParty: "顺丰速运有限公司",
          amount: 980000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-01-25 10:00:00",
        },
        {
          id: 6,
          code: "HT-2024-006",
          contractNo: "CON-2024-0006",
          contractName: "品牌授权合作协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-002",
          otherParty: "阿里巴巴集团控股有限公司",
          amount: 15000000.0,
          source: "系统同步",
          status: "审批中",
          createTime: "2024-01-28 13:30:00",
        },
        {
          id: 7,
          code: "HT-2024-007",
          contractNo: "CON-2024-0007",
          contractName: "设备租赁合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-009",
          otherParty: "珠海格力电器股份有限公司",
          amount: 860000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-02-01 09:15:00",
        },
        {
          id: 8,
          code: "HT-2024-008",
          contractNo: "CON-2024-0008",
          contractName: "软件开发服务合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-006",
          otherParty: "百度网络技术有限公司",
          amount: 4200000.0,
          source: "系统同步",
          status: "已废止",
          createTime: "2024-02-03 15:40:00",
        },
        {
          id: 9,
          code: "HT-2024-009",
          contractNo: "CON-2024-0009",
          contractName: "保险服务框架协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-008",
          otherParty: "中国平安保险（集团）股份有限公司",
          amount: 1200000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-02-05 11:20:00",
        },
        {
          id: 10,
          code: "HT-2024-010",
          contractNo: "CON-2024-0010",
          contractName: "仓储服务合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-012",
          otherParty: "网易（杭州）网络有限公司",
          amount: 750000.0,
          source: "系统同步",
          status: "审批中",
          createTime: "2024-02-08 08:50:00",
        },
        {
          id: 11,
          code: "HT-2024-011",
          contractNo: "CON-2024-0011",
          contractName: "新能源汽车采购合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-011",
          otherParty: "比亚迪股份有限公司",
          amount: 28000000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-02-10 14:00:00",
        },
        {
          id: 12,
          code: "HT-2024-012",
          contractNo: "CON-2024-0012",
          contractName: "通讯设备采购合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-013",
          otherParty: "中兴通讯股份有限公司",
          amount: 5600000.0,
          source: "系统同步",
          status: "已废止",
          createTime: "2024-02-12 10:30:00",
        },
        {
          id: 13,
          code: "HT-2024-013",
          contractNo: "CON-2024-0013",
          contractName: "移动通信服务合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-014",
          otherParty: "中国移动通信集团有限公司",
          amount: 2300000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-02-15 16:45:00",
        },
        {
          id: 14,
          code: "HT-2024-014",
          contractNo: "CON-2024-0014",
          contractName: "家电采购框架协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-015",
          otherParty: "美的集团股份有限公司",
          amount: 6800000.0,
          source: "系统同步",
          status: "审批中",
          createTime: "2024-02-18 09:00:00",
        },
        {
          id: 15,
          code: "HT-2024-015",
          contractNo: "CON-2024-0015",
          contractName: "商业地产租赁合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-016",
          otherParty: "万达集团股份有限公司",
          amount: 3500000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-02-20 13:20:00",
        },
        {
          id: 16,
          code: "HT-2024-016",
          contractNo: "CON-2024-0016",
          contractName: "计算机设备采购合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-017",
          otherParty: "联想（北京）有限公司",
          amount: 4200000.0,
          source: "系统同步",
          status: "已生效",
          createTime: "2024-02-22 11:10:00",
        },
        {
          id: 17,
          code: "HT-2024-017",
          contractNo: "CON-2024-0017",
          contractName: "出行服务合作协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-018",
          otherParty: "滴滴出行科技有限公司",
          amount: 1500000.0,
          source: "手工录入",
          status: "已废止",
          createTime: "2024-02-25 15:30:00",
        },
        {
          id: 18,
          code: "HT-2024-018",
          contractNo: "CON-2024-0018",
          contractName: "零售合作框架协议",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-019",
          otherParty: "苏宁易购集团股份有限公司",
          amount: 8900000.0,
          source: "系统同步",
          status: "审批中",
          createTime: "2024-02-28 08:40:00",
        },
        {
          id: 19,
          code: "HT-2024-019",
          contractNo: "CON-2024-0019",
          contractName: "智能终端采购合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-020",
          otherParty: "TCL科技集团股份有限公司",
          amount: 12000000.0,
          source: "手工录入",
          status: "已生效",
          createTime: "2024-03-01 14:50:00",
        },
        {
          id: 20,
          code: "HT-2024-020",
          contractNo: "CON-2024-0020",
          contractName: "电子元器件供应合同",
          ourParty: "深圳科技有限公司",
          customerCode: "CUST-2024-004",
          otherParty: "北京小米科技有限责任公司",
          amount: 7300000.0,
          source: "系统同步",
          status: "已生效",
          createTime: "2024-03-03 10:25:00",
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
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
  cursor: pointer;
}

.main-tab {
  width: 100%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1440px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 130px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>
