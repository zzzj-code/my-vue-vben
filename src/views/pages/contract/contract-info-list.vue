<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-title">
        <!-- 使用 v-for 动态渲染，并绑定点击事件 -->
        <div
          v-for="item in tabs"
          :key="item.key"
          class="tab-item"
          :class="{ active: currentTab === item.key }"
          @click="switchTab(item.key)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="app-top">
        <div>
          <span>合同编号</span>
          <input type="text" placeholder="请输入合同编号" />
        </div>
        <div>
          <span>合同名称</span>
          <input type="text" placeholder="请输入合同名称" />
        </div>
        <div>
          <span>合同类型</span>
          <input type="text" placeholder="请输入合同类型" />
        </div>
        <div>
          <button>重置</button>
          <button>搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>合同台账</div>
          <div><button>🔍</button></div>
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
                <th>合同编号</th>
                <th>合同名称</th>
                <th>合同类型</th>
                <th>对方单位</th>
                <th>客商主编码</th>
                <th>合同金额</th>
                <th>合同状态</th>
                <th>履约进度</th>
                <th>负责人</th>
                <th>生效日期</th>
                <th>截至日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.contractNo }}</td>
                <td>{{ item.contractName }}</td>
                <td>{{ item.contractType }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.progress }}</td>
                <td>{{ item.leader }}</td>
                <td>{{ item.effectiveDate }}</td>
                <td>{{ item.expireDate }}</td>
                <td>
                    登记履约&nbsp;&nbsp;发起变更&nbsp;&nbsp;
                    确认完成&nbsp;&nbsp;归档&nbsp;&nbsp;
                    终止
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共25条记录<span>20条/页</span></div>
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
          contractNo: "HT202605284724",
          contractName: "采购052801",
          contractType: "采购合同",
          company: "华信科技有限公司",
          customerCode: "CU001234",
          amount: "￥3,000.00",
          status: "已生效",
          progress: "33.33%",
          leader: "张伟",
          effectiveDate: "2026-05-28",
          expireDate: "2026-08-28",
        },
        {
          contractNo: "HT20260307001",
          contractName: "原材料年度采购框架协议",
          contractType: "框架协议",
          company: "宏远供应链管理有限公司",
          customerCode: "CU005678",
          amount: "￥2,000,000.00",
          status: "履约中",
          progress: "22.5%",
          leader: "李娜",
          effectiveDate: "2026-03-07",
          expireDate: "2027-03-06",
        },
        {
          contractNo: "HT20260303001",
          contractName: "服务器设备采购合同",
          contractType: "设备采购",
          company: "浪潮电子信息产业股份有限公司",
          customerCode: "CU009012",
          amount: "￥320,000.00",
          status: "已生效",
          progress: "0.04%",
          leader: "王强",
          effectiveDate: "2026-03-03",
          expireDate: "2026-06-01",
        },
        {
          contractNo: "HT20260308001",
          contractName: "云服务采购合同",
          contractType: "服务采购",
          company: "阿里云计算有限公司",
          customerCode: "CU003456",
          amount: "￥86,000.00",
          status: "已生效",
          progress: "0.04%",
          leader: "刘洋",
          effectiveDate: "2026-03-08",
          expireDate: "2026-06-08",
        },
        {
          contractNo: "HT202605216826",
          contractName: "采购202601",
          contractType: "采购合同",
          company: "华盛贸易有限公司",
          customerCode: "CU007890",
          amount: "￥0.00",
          status: "已起草",
          progress: "0%",
          leader: "陈明",
          effectiveDate: "2026-05-21",
          expireDate: "2026-08-21",
        },
        {
          contractNo: "HT20260301001",
          contractName: "宇擎ERP系统销售合同",
          contractType: "软件销售",
          company: "宇擎软件科技有限公司",
          customerCode: "CU002345",
          amount: "￥580,000.00",
          status: "已起草",
          progress: "0%",
          leader: "赵敏",
          effectiveDate: "2026-03-01",
          expireDate: "2026-09-01",
        },
        {
          contractNo: "HT20260304001",
          contractName: "办公场地租赁合同",
          contractType: "租赁合同",
          company: "宏泰置业有限公司",
          customerCode: "CU006789",
          amount: "￥240,000.00",
          status: "签署中",
          progress: "0%",
          leader: "孙丽",
          effectiveDate: "2026-03-04",
          expireDate: "2027-03-03",
        },
        {
          contractNo: "HT20260306001",
          contractName: "员工劳动合同-张伟",
          contractType: "劳动合同",
          company: "张伟",
          customerCode: "CU008901",
          amount: "￥0.00",
          status: "已归档",
          progress: "0%",
          leader: "周婷",
          effectiveDate: "2026-03-06",
          expireDate: "2027-03-05",
        },
        {
          contractNo: "HT202604028823",
          contractName: "项目实施服务合同",
          contractType: "实施服务",
          company: "中软国际科技服务有限公司",
          customerCode: "CU004567",
          amount: "￥1,500,000.00",
          status: "履约中",
          progress: "35.6%",
          leader: "吴刚",
          effectiveDate: "2026-04-02",
          expireDate: "2026-10-02",
        },
        {
          contractNo: "HT20260515001",
          contractName: "设备维护保养协议",
          contractType: "服务合同",
          company: "维保技术服务有限公司",
          customerCode: "CU001111",
          amount: "￥120,000.00",
          status: "已生效",
          progress: "12.5%",
          leader: "郑华",
          effectiveDate: "2026-05-15",
          expireDate: "2027-05-14",
        },
      ],
      // 当前选中的 tab
      currentTab: "all",
      // tab 列表
      tabs: [
        { key: "all", label: "全部" },
        { key: "draft", label: "已起草" },
        { key: "signing", label: "签署中" },
        { key: "effective", label: "已生效" },
        { key: "performing", label: "履约中" },
        { key: "completed", label: "已完成" },
        { key: "terminated", label: "已终止" },
        { key: "archived", label: "已归档" },
      ],
    };
  },
  methods: {
    switchTab(key) {
      this.currentTab = key;
    },
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
  height: 650px;
  margin-bottom: 20px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-title {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-left: 16px;
}
.app-title .tab-item {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  padding: 0 4px;
  transition: all 0.3s ease;
}
.app-title .tab-item:hover {
  color: #1890ff;
}
.app-title .tab-item.active {
  color: #1890ff;
  font-weight: 600;
  border-bottom: 2px solid #1890ff;
}
.app-top {
  width: 100%;
  height: 86px;
  padding: 12px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
.app-top div {
  width: 243px;
  height: 42px;
  /* border: 1px solid red; */
  margin-top: 20px;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-right: 8px;
}
.app-top div input {
  width: 133px;
  height: 32px;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div:last-child {
  color: #1890ff;
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
}
.app-top div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.app-top div button:last-child {
  border: 0;
  background-color: #1890ff;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 444px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:first-child {
  width: 84%;
  height: 100%;
}
.main-top div:nth-child(2) {
  width: 4%;
  height: 100%;
  /* border: 1px solid red; */
}
.main-top div:last-child {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.main-top div:nth-child(2) button {
  width: 30px;
  height: 30px;
  background-color: #1890ff;
  border: 0;
  border-radius: 50%;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.main-tab {
  width: 100%;
  height: 355px;
  /* border: 1px solid red; */
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.main-tab table {
  width: max-content;
  min-width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
}
.main-tab th,
.main-tab td {
  padding: 0 12px;
  white-space: nowrap;
  text-align: left;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #e6e6e6;
  text-align: center;
}
.main-tab td {
  height: 40px;
  font-size: 13px;
}
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  text-align: center;
  border: 1px solid #ccc;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
