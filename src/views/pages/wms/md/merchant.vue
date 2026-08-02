<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>来往企业编号</span>
            <input type="text" placeholder="请输入来往企业编号" />
          </div>
          <div>
            <span>来往企业名称</span>
            <input type="text" placeholder="请输入来往企业名称" />
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
          <div>往来企业列表</div>
          <div>
            <button>+新增往来企业</button>
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
                <th>往来企业编号</th>
                <th>往来企业名称</th>
                <th>往来企业类型</th>
                <th>级别</th>
                <th>联系人</th>
                <th>备注</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.enterpriseCode }}</td>
                <td>{{ item.enterpriseName }}</td>
                <td>{{ item.enterpriseType }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.remark }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
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
          enterpriseCode: "EP-001",
          enterpriseName: "华为技术有限公司",
          enterpriseType: "供应商",
          level: "A级",
          contact: "张伟",
          remark: "战略合作伙伴",
        },
        {
          enterpriseCode: "EP-002",
          enterpriseName: "阿里巴巴集团",
          enterpriseType: "客户",
          level: "A级",
          contact: "李娜",
          remark: "长期合作",
        },
        {
          enterpriseCode: "EP-003",
          enterpriseName: "腾讯科技有限公司",
          enterpriseType: "供应商",
          level: "B级",
          contact: "王强",
          remark: "试合作",
        },
        {
          enterpriseCode: "EP-004",
          enterpriseName: "字节跳动有限公司",
          enterpriseType: "客户",
          level: "A级",
          contact: "刘洋",
          remark: "重点客户",
        },
        {
          enterpriseCode: "EP-005",
          enterpriseName: "美团科技有限公司",
          enterpriseType: "供应商",
          level: "B级",
          contact: "陈静",
          remark: "试合作",
        },
        {
          enterpriseCode: "EP-006",
          enterpriseName: "京东物流有限公司",
          enterpriseType: "客户",
          level: "C级",
          contact: "赵敏",
          remark: "新客户",
        },
        {
          enterpriseCode: "EP-007",
          enterpriseName: "小米科技有限公司",
          enterpriseType: "供应商",
          level: "A级",
          contact: "孙浩",
          remark: "优质供应商",
        },
        {
          enterpriseCode: "EP-008",
          enterpriseName: "网易科技有限公司",
          enterpriseType: "客户",
          level: "B级",
          contact: "周婷",
          remark: "试合作",
        },
        {
          enterpriseCode: "EP-009",
          enterpriseName: "滴滴出行科技有限公司",
          enterpriseType: "供应商",
          level: "C级",
          contact: "吴刚",
          remark: "试合作",
        },
        {
          enterpriseCode: "EP-010",
          enterpriseName: "拼多多有限公司",
          enterpriseType: "客户",
          level: "B级",
          contact: "郑丽",
          remark: "试合作",
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
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
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
  width: 160px;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  color: red;
}
</style>
