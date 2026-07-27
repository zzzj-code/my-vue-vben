<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>项目名称</span>
          <input type="text" placeholder="请输入项目名称" />
        </div>
        <div>
          <span>项目编码</span>
          <input type="text" placeholder="请输入项目编码" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>薪资项目列表</div>
          <div>
            <button>+新增</button>
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
                <th style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th>方案名称</th>
                <th>薪酬主体</th>
                <th>适用人员状态</th>
                <th>结算周期</th>
                <th>发薪日</th>
                <th>币种</th>
                <th>配置完整度</th>
                <th style="width: 80px;">状态</th>
                <th>创建时间</th>
                <th class="oc-col" style="width: 180px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.planName }}</td>
                <td>{{ item.subject }}</td>
                <td>{{ item.personnelStatus }}</td>
                <td>{{ item.settlementCycle }}</td>
                <td>{{ item.payDay }}</td>
                <td>{{ item.currency }}</td>
                <td>{{ item.completeness }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="oc-col">编辑 删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共11条记录<span>20条/页</span></div>
          <div></div>
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
          planName: "管理层薪酬方案",
          subject: "宇擎科技集团",
          personnelStatus: "正式员工",
          settlementCycle: "月度",
          payDay: "每月15日",
          currency: "人民币(CNY)",
          completeness: "100%",
          status: "已启用",
          createTime: "2026-01-01 09:00:00",
        },
        {
          id: 2,
          planName: "技术研发岗薪酬方案",
          subject: "宇擎深圳分公司",
          personnelStatus: "正式员工",
          settlementCycle: "月度",
          payDay: "每月20日",
          currency: "人民币(CNY)",
          completeness: "100%",
          status: "已启用",
          createTime: "2026-01-15 14:30:00",
        },
        {
          id: 3,
          planName: "市场营销岗薪酬方案",
          subject: "宇擎上海分公司",
          personnelStatus: "正式员工、试用期",
          settlementCycle: "月度",
          payDay: "每月25日",
          currency: "人民币(CNY)",
          completeness: "95%",
          status: "已启用",
          createTime: "2026-02-01 10:20:00",
        },
        {
          id: 4,
          planName: "实习生薪酬方案",
          subject: "宇擎北京研发中心",
          personnelStatus: "实习生",
          settlementCycle: "月度",
          payDay: "每月10日",
          currency: "人民币(CNY)",
          completeness: "80%",
          status: "配置中",
          createTime: "2026-02-15 16:00:00",
        },
        {
          id: 5,
          planName: "高管绩效薪酬方案",
          subject: "宇擎科技集团",
          personnelStatus: "高管人员",
          settlementCycle: "季度",
          payDay: "每季度末月25日",
          currency: "人民币(CNY)",
          completeness: "100%",
          status: "已启用",
          createTime: "2026-03-01 11:30:00",
        },
        {
          id: 6,
          planName: "销售提成薪酬方案",
          subject: "宇擎成都分公司",
          personnelStatus: "销售岗位",
          settlementCycle: "月度",
          payDay: "每月18日",
          currency: "人民币(CNY)",
          completeness: "90%",
          status: "已启用",
          createTime: "2026-03-15 09:45:00",
        },
        {
          id: 7,
          planName: "财务人员薪酬方案",
          subject: "宇擎杭州分公司",
          personnelStatus: "正式员工",
          settlementCycle: "月度",
          payDay: "每月22日",
          currency: "人民币(CNY)",
          completeness: "100%",
          status: "已启用",
          createTime: "2026-04-01 14:10:00",
        },
        {
          id: 8,
          planName: "兼职人员薪酬方案",
          subject: "宇擎武汉分公司",
          personnelStatus: "兼职人员",
          settlementCycle: "周度",
          payDay: "每周五",
          currency: "人民币(CNY)",
          completeness: "70%",
          status: "配置中",
          createTime: "2026-04-15 13:20:00",
        },
        {
          id: 9,
          planName: "项目制薪酬方案",
          subject: "宇擎南京分公司",
          personnelStatus: "项目人员",
          settlementCycle: "项目结算",
          payDay: "项目验收后5日",
          currency: "人民币(CNY)",
          completeness: "85%",
          status: "已停用",
          createTime: "2026-05-01 10:00:00",
        },
        {
          id: 10,
          planName: "海外业务薪酬方案",
          subject: "宇擎西安分公司",
          personnelStatus: "外派人员",
          settlementCycle: "月度",
          payDay: "每月28日",
          currency: "美元(USD)",
          completeness: "60%",
          status: "配置中",
          createTime: "2026-05-20 15:30:00",
        },
        {
          id: 11,
          planName: "新员工试用期薪酬方案",
          subject: "宇擎重庆分公司",
          personnelStatus: "试用期",
          settlementCycle: "月度",
          payDay: "每月12日",
          currency: "人民币(CNY)",
          completeness: "100%",
          status: "已启用",
          createTime: "2026-06-01 09:50:00",
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div {
  width: 246px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 500;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div input:hover {
  border: 0.5px solid #35bbfa;
}
.app-top div input:focus {
  outline: none;
  border: 0.5px solid #35bbfa;
}
.app-top div:last-child {
  display: flex;
  padding-left: 50px;
  color: #35bbfa;
  font-size: 14px;
}
.app-top div button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 0.5px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.app-top .btn1:hover {
  border: 0.5px solid #35bbfa;
  color: #35bbfa;
}
.app-top .btn2 {
  border: 0;
  background-color: #35bbfa;
  color: #fff;
}
.app-top .btn2:hover {
  background-color: #76d2fd;
}

.app-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 78px;
  height: 32px;
  color: #fff;
  border: 0;
  background-color: #0a33e7;
  border-radius: 10px;
}
.main-title div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  /* margin-right: 5px; */
}

.main-tab {
  width: 100%;
  height: 385px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-tab table th {
  border-right: 1px solid #ccc;
  text-align: center;
  background-color: #e9e6e6;
  height: 40px;
}
.main-tab table td {
  font-size: 14px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 50px;
}
.col-name {
  position: sticky;
  left: 170px;
}
.oc-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.main-floot div span {
  display: inline-block;
  width: 100px;
  height: 26px;
  margin-left: 5px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  padding-top: 3px;
}
</style>
