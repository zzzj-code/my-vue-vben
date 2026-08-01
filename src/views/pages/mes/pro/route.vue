<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>路线编码</span>
            <input type="text" placeholder="请输入路线编码" />
          </div>
          <div>
            <span>路线名称</span>
            <input type="text" placeholder="请输入路线名称" />
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
          <div>工艺路线列表</div>
          <div>
            <button>+新增工艺路线</button>
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
                <th>路线编码</th>
                <th>路线名称</th>
                <th>路线说明</th>
                <th>状态</th>
                <th>备注</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共8条记录<span>20条/页</span></div>
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
          code: "ROUTE-001",
          name: "智能网关生产工艺路线",
          description: "智能网关产品从SMT到组装测试的完整工艺路线",
          status: "启用",
          remark: "适用于智能网关全系列产品",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "ROUTE-002",
          name: "智能灯泡生产工艺路线",
          description: "智能灯泡从灯珠贴装到成品包装的工艺路线",
          status: "启用",
          remark: "适用于RGB系列智能灯泡",
          createTime: "2024-01-20 14:20",
        },
        {
          id: 3,
          code: "ROUTE-003",
          name: "电源适配器生产工艺路线",
          description: "电源适配器从插件到测试的完整工艺路线",
          status: "启用",
          remark: "适用于12V/2A电源适配器",
          createTime: "2024-02-01 09:15",
        },
        {
          id: 4,
          code: "ROUTE-004",
          name: "主板半成品生产工艺路线",
          description: "主板从SMT贴片到ICT测试的工艺路线",
          status: "启用",
          remark: "适用于四层PCB主板",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 5,
          code: "ROUTE-005",
          name: "智能插座生产工艺路线",
          description: "智能插座从组装到功能测试的工艺路线",
          status: "启用",
          remark: "适用于WiFi版智能插座",
          createTime: "2024-03-01 11:00",
        },
        {
          id: 6,
          code: "ROUTE-006",
          name: "传感器半成品生产工艺路线",
          description: "传感器从贴片到标定的工艺路线",
          status: "启用",
          remark: "适用于温湿度传感器",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 7,
          code: "ROUTE-007",
          name: "冲压件生产工艺路线",
          description: "五金冲压件从下料到清洗的工艺路线",
          status: "启用",
          remark: "适用于精密冲压件",
          createTime: "2024-04-01 08:50",
        },
        {
          id: 8,
          code: "ROUTE-008",
          name: "注塑件生产工艺路线",
          description: "塑胶件从注塑到修边的工艺路线",
          status: "停用",
          remark: "已合并到综合注塑路线",
          createTime: "2024-04-10 10:20",
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
  min-width: 1150px;
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
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 56px;
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
