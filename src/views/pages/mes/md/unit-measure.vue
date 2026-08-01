<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>单位编码</span>
            <input type="text" placeholder="请输入单位编码" />
          </div>
          <div>
            <span>单位名称</span>
            <input type="text" placeholder="请输入单位名称" />
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
          <div>计量单位列表</div>
          <div>
            <button>+新增计量单位</button>
            <button>收缩</button>
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
                <th>单位编码</th>
                <th>单位名称</th>
                <th>是否主单位</th>
                <th>与主单位换算比例</th>
                <th>状态</th>
                <th>备注</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.isMain }}</td>
                <td>{{ item.ratio }}</td>
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
        <div class="main-floot">共15条记录<span>20条/页</span></div>
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
          code: "PCS",
          name: "个",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "基础单位",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "BOX",
          name: "盒",
          isMain: "否",
          ratio: "1:50",
          status: "启用",
          remark: "1盒=50个",
          createTime: "2024-01-20 14:20",
        },
        {
          id: 3,
          code: "CTN",
          name: "箱",
          isMain: "否",
          ratio: "1:100",
          status: "启用",
          remark: "1箱=100个",
          createTime: "2024-02-01 09:15",
        },
        {
          id: 4,
          code: "KG",
          name: "千克",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "重量单位",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 5,
          code: "G",
          name: "克",
          isMain: "否",
          ratio: "1000:1",
          status: "启用",
          remark: "1000克=1千克",
          createTime: "2024-03-01 11:00",
        },
        {
          id: 6,
          code: "M",
          name: "米",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "长度单位",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 7,
          code: "CM",
          name: "厘米",
          isMain: "否",
          ratio: "100:1",
          status: "停用",
          remark: "100厘米=1米",
          createTime: "2024-04-01 08:50",
        },
        {
          id: 8,
          code: "L",
          name: "升",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "容积单位",
          createTime: "2024-04-10 10:20",
        },
        {
          id: 9,
          code: "ML",
          name: "毫升",
          isMain: "否",
          ratio: "1000:1",
          status: "启用",
          remark: "1000毫升=1升",
          createTime: "2024-05-01 15:00",
        },
        {
          id: 10,
          code: "SET",
          name: "套",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "成套单位",
          createTime: "2024-05-15 09:30",
        },
        {
          id: 11,
          code: "PRS",
          name: "双",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "成对单位",
          createTime: "2024-06-01 14:10",
        },
        {
          id: 12,
          code: "ROL",
          name: "卷",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "卷状物料",
          createTime: "2024-06-20 11:45",
        },
        {
          id: 13,
          code: "BTL",
          name: "瓶",
          isMain: "是",
          ratio: "1:1",
          status: "启用",
          remark: "液体包装",
          createTime: "2024-07-01 08:00",
        },
        {
          id: 14,
          code: "PKG",
          name: "包",
          isMain: "否",
          ratio: "1:10",
          status: "启用",
          remark: "1包=10个",
          createTime: "2024-07-10 16:20",
        },
        {
          id: 15,
          code: "T",
          name: "吨",
          isMain: "是",
          ratio: "1:1",
          status: "停用",
          remark: "大重量单位",
          createTime: "2024-07-20 13:00",
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
  min-width: 1230px;
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
