<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>用户编号</span>
            <input type="text" placeholder="请输入用户编号" />
          </div>
          <div>
            <span>用户类型</span>
            <input type="text" placeholder="请输入用户类型" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>编号</th>
                <th>用户编号</th>
                <th>用户类型</th>
                <th>余额</th>
                <th>累计支出</th>
                <th>累计充值</th>
                <th>冻结金额</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.userNo }}</td>
                <td>{{ item.userType }}</td>
                <td>{{ item.balance }}</td>
                <td>{{ item.totalExpense }}</td>
                <td>{{ item.totalRecharge }}</td>
                <td>{{ item.frozenAmount }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ tabValue.length }}条记录<span>20条/页</span>
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
          userNo: "U100001",
          userType: "个人用户",
          balance: 3280.5,
          totalExpense: 15680.0,
          totalRecharge: 20000.0,
          frozenAmount: 0.0,
          createTime: "2026-01-15 10:30:00",
        },
        {
          id: 2,
          userNo: "U100002",
          userType: "企业用户",
          balance: 15680.0,
          totalExpense: 84320.0,
          totalRecharge: 100000.0,
          frozenAmount: 5000.0,
          createTime: "2026-01-20 14:20:00",
        },
        {
          id: 3,
          userNo: "U100003",
          userType: "个人用户",
          balance: 567.8,
          totalExpense: 25432.2,
          totalRecharge: 26000.0,
          frozenAmount: 0.0,
          createTime: "2026-02-01 09:15:00",
        },
        {
          id: 4,
          userNo: "U100004",
          userType: "商户用户",
          balance: 28340.0,
          totalExpense: 215660.0,
          totalRecharge: 250000.0,
          frozenAmount: 12000.0,
          createTime: "2026-02-10 16:45:00",
        },
        {
          id: 5,
          userNo: "U100005",
          userType: "VIP用户",
          balance: 18920.5,
          totalExpense: 31079.5,
          totalRecharge: 50000.0,
          frozenAmount: 0.0,
          createTime: "2026-02-15 11:20:00",
        },
        {
          id: 6,
          userNo: "U100006",
          userType: "个人用户",
          balance: 234.5,
          totalExpense: 9765.5,
          totalRecharge: 10000.0,
          frozenAmount: 0.0,
          createTime: "2026-02-20 08:50:00",
        },
        {
          id: 7,
          userNo: "U100007",
          userType: "企业用户",
          balance: 45200.0,
          totalExpense: 254800.0,
          totalRecharge: 300000.0,
          frozenAmount: 8000.0,
          createTime: "2026-03-01 13:30:00",
        },
        {
          id: 8,
          userNo: "U100008",
          userType: "个人用户",
          balance: 1250.0,
          totalExpense: 8750.0,
          totalRecharge: 10000.0,
          frozenAmount: 0.0,
          createTime: "2026-03-10 15:10:00",
        },
        {
          id: 9,
          userNo: "U100009",
          userType: "商户用户",
          balance: 16780.0,
          totalExpense: 83220.0,
          totalRecharge: 100000.0,
          frozenAmount: 3000.0,
          createTime: "2026-03-15 09:40:00",
        },
        {
          id: 10,
          userNo: "U100010",
          userType: "VIP用户",
          balance: 35890.0,
          totalExpense: 64110.0,
          totalRecharge: 100000.0,
          frozenAmount: 15000.0,
          createTime: "2026-03-20 12:00:00",
        },
        {
          id: 11,
          userNo: "U100011",
          userType: "个人用户",
          balance: 890.0,
          totalExpense: 19110.0,
          totalRecharge: 20000.0,
          frozenAmount: 0.0,
          createTime: "2026-04-01 10:20:00",
        },
        {
          id: 12,
          userNo: "U100012",
          userType: "企业用户",
          balance: 78900.0,
          totalExpense: 421100.0,
          totalRecharge: 500000.0,
          frozenAmount: 25000.0,
          createTime: "2026-04-05 14:30:00",
        },
        {
          id: 13,
          userNo: "U100013",
          userType: "个人用户",
          balance: 345.6,
          totalExpense: 12654.4,
          totalRecharge: 13000.0,
          frozenAmount: 0.0,
          createTime: "2026-04-10 08:15:00",
        },
        {
          id: 14,
          userNo: "U100014",
          userType: "商户用户",
          balance: 23450.0,
          totalExpense: 176550.0,
          totalRecharge: 200000.0,
          frozenAmount: 5000.0,
          createTime: "2026-04-15 16:50:00",
        },
        {
          id: 15,
          userNo: "U100015",
          userType: "VIP用户",
          balance: 56780.0,
          totalExpense: 93220.0,
          totalRecharge: 150000.0,
          frozenAmount: 20000.0,
          createTime: "2026-04-20 11:30:00",
        },
        {
          id: 16,
          userNo: "U100016",
          userType: "个人用户",
          balance: 2300.0,
          totalExpense: 17700.0,
          totalRecharge: 20000.0,
          frozenAmount: 0.0,
          createTime: "2026-05-01 09:00:00",
        },
        {
          id: 17,
          userNo: "U100017",
          userType: "企业用户",
          balance: 123400.0,
          totalExpense: 876600.0,
          totalRecharge: 1000000.0,
          frozenAmount: 50000.0,
          createTime: "2026-05-05 13:40:00",
        },
        {
          id: 18,
          userNo: "U100018",
          userType: "个人用户",
          balance: 678.9,
          totalExpense: 8321.1,
          totalRecharge: 9000.0,
          frozenAmount: 0.0,
          createTime: "2026-05-10 15:25:00",
        },
        {
          id: 19,
          userNo: "U100019",
          userType: "商户用户",
          balance: 45670.0,
          totalExpense: 454330.0,
          totalRecharge: 500000.0,
          frozenAmount: 15000.0,
          createTime: "2026-05-15 10:10:00",
        },
        {
          id: 20,
          userNo: "U100020",
          userType: "个人用户",
          balance: 12340.0,
          totalExpense: 37660.0,
          totalRecharge: 50000.0,
          frozenAmount: 0.0,
          createTime: "2026-05-20 14:55:00",
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
.main-tab {
  width: 100%;
  height: 450px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1080px;
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
  width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
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
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
