<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>单位名称</span>
            <input type="text" placeholder="请输入单位名称" />
          </div>
          <div>
            <span>单位编码</span>
            <input type="text" placeholder="请输入单位主编码" />
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
          <div>计量单位</div>
          <div>
            <button>+新增计量单位</button>
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
                <th><div class="th-cell">单位名称</div></th>
                <th><div class="th-cell">单位编码</div></th>
                <th><div class="th-cell">单位类型</div></th>
                <th><div class="th-cell">换算比例</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">排序</div></th>
                <th><div class="th-cell">备注</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.ratio }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.sort }}</td>
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
          name: "个",
          code: "PCS",
          type: "基本单位",
          ratio: 1,
          status: "启用",
          sort: 1,
          remark: "计数单位",
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          name: "千克",
          code: "KG",
          type: "基本单位",
          ratio: 1,
          status: "启用",
          sort: 2,
          remark: "重量单位",
          createTime: "2024-01-15 10:20:00",
        },
        {
          id: 3,
          name: "克",
          code: "G",
          type: "辅助单位",
          ratio: 0.001,
          status: "启用",
          sort: 3,
          remark: "与千克换算",
          createTime: "2024-01-16 14:15:00",
        },
        {
          id: 4,
          name: "米",
          code: "M",
          type: "基本单位",
          ratio: 1,
          status: "启用",
          sort: 4,
          remark: "长度单位",
          createTime: "2024-01-16 16:40:00",
        },
        {
          id: 5,
          name: "厘米",
          code: "CM",
          type: "辅助单位",
          ratio: 0.01,
          status: "停用",
          sort: 5,
          remark: "与米换算",
          createTime: "2024-01-17 11:10:00",
        },
        {
          id: 6,
          name: "箱",
          code: "BOX",
          type: "辅助单位",
          ratio: 12,
          status: "启用",
          sort: 6,
          remark: "1箱=12个",
          createTime: "2024-01-18 09:45:00",
        },
        {
          id: 7,
          name: "包",
          code: "PKG",
          type: "辅助单位",
          ratio: 10,
          status: "启用",
          sort: 7,
          remark: "1包=10个",
          createTime: "2024-01-18 13:30:00",
        },
        {
          id: 8,
          name: "升",
          code: "L",
          type: "基本单位",
          ratio: 1,
          status: "启用",
          sort: 8,
          remark: "容量单位",
          createTime: "2024-01-19 10:00:00",
        },
        {
          id: 9,
          name: "毫升",
          code: "ML",
          type: "辅助单位",
          ratio: 0.001,
          status: "停用",
          sort: 9,
          remark: "与升换算",
          createTime: "2024-01-19 15:20:00",
        },
        {
          id: 10,
          name: "吨",
          code: "T",
          type: "辅助单位",
          ratio: 1000,
          status: "启用",
          sort: 10,
          remark: "1吨=1000千克",
          createTime: "2024-01-20 08:50:00",
        },
        {
          id: 11,
          name: "打",
          code: "DZN",
          type: "辅助单位",
          ratio: 12,
          status: "启用",
          sort: 11,
          remark: "1打=12个",
          createTime: "2024-01-20 14:30:00",
        },
        {
          id: 12,
          name: "套",
          code: "SET",
          type: "辅助单位",
          ratio: 1,
          status: "启用",
          sort: 12,
          remark: "套装单位",
          createTime: "2024-01-21 09:15:00",
        },
        {
          id: 13,
          name: "件",
          code: "PCE",
          type: "基本单位",
          ratio: 1,
          status: "停用",
          sort: 13,
          remark: "服装计数单位",
          createTime: "2024-01-21 16:40:00",
        },
        {
          id: 14,
          name: "双",
          code: "PR",
          type: "辅助单位",
          ratio: 2,
          status: "启用",
          sort: 14,
          remark: "1双=2个",
          createTime: "2024-01-22 11:20:00",
        },
        {
          id: 15,
          name: "桶",
          code: "BAR",
          type: "辅助单位",
          ratio: 50,
          status: "启用",
          sort: 15,
          remark: "1桶=50升",
          createTime: "2024-01-22 15:00:00",
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
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
  min-width: 1160px;
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
  width: 160px;
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
