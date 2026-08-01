<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>检验单编号</span>
            <input type="text" placeholder="请输入检验单编号" />
          </div>
          <div>
            <span>供应商</span>
            <input type="text" placeholder="" />
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
          <div>来料检验单列表</div>
          <div>
            <button>+新增来料检验单</button>
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
                <th>来料检验单编号</th>
                <th>来料检验单名称</th>
                <th>供应商简称</th>
                <th>供应商批次号</th>
                <th>产品物料编码</th>
                <th>产品物料名称</th>
                <th>接收数量</th>
                <th>检测数量</th>
                <th>不合格数</th>
                <th>检测结果</th>
                <th>来料日期</th>
                <th>检测日期</th>
                <th>检测人员</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.supplierName }}</td>
                <td>{{ item.batchNo }}</td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.receiveQty }}</td>
                <td>{{ item.checkQty }}</td>
                <td>{{ item.defectQty }}</td>
                <td>{{ item.result }}</td>
                <td>{{ item.receiveDate }}</td>
                <td>{{ item.checkDate }}</td>
                <td>{{ item.checker }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共9条记录<span>20条/页</span></div>
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
          code: "IQC-2024-001",
          name: "碳钢螺丝来料检验",
          supplierName: "华强电子",
          batchNo: "B20240115001",
          materialCode: "M-2024-001",
          materialName: "碳钢螺丝",
          receiveQty: 5000,
          checkQty: 80,
          defectQty: 2,
          result: "合格",
          receiveDate: "2024-01-15",
          checkDate: "2024-01-15",
          checker: "李明",
          status: "已检验",
        },
        {
          id: 2,
          code: "IQC-2024-002",
          name: "ABS塑料外壳来料检验",
          supplierName: "盛源塑胶",
          batchNo: "B20240120002",
          materialCode: "M-2024-002",
          materialName: "ABS塑料外壳",
          receiveQty: 2000,
          checkQty: 50,
          defectQty: 3,
          result: "不合格",
          receiveDate: "2024-01-20",
          checkDate: "2024-01-20",
          checker: "王芳",
          status: "已检验",
        },
        {
          id: 3,
          code: "IQC-2024-003",
          name: "瓦楞纸箱来料检验",
          supplierName: "恒达五金",
          batchNo: "B20240201003",
          materialCode: "M-2024-003",
          materialName: "瓦楞纸箱",
          receiveQty: 3000,
          checkQty: 60,
          defectQty: 0,
          result: "合格",
          receiveDate: "2024-02-01",
          checkDate: "2024-02-01",
          checker: "刘洋",
          status: "已检验",
        },
        {
          id: 4,
          code: "IQC-2024-004",
          name: "不锈钢弹簧来料检验",
          supplierName: "德力机械",
          batchNo: "B20240301004",
          materialCode: "M-2024-007",
          materialName: "不锈钢弹簧",
          receiveQty: 8000,
          checkQty: 100,
          defectQty: 1,
          result: "合格",
          receiveDate: "2024-03-01",
          checkDate: "2024-03-01",
          checker: "陈静",
          status: "已检验",
        },
        {
          id: 5,
          code: "IQC-2024-005",
          name: "铜接线端子来料检验",
          supplierName: "安达五金",
          batchNo: "B20240615005",
          materialCode: "M-2024-013",
          materialName: "铜接线端子",
          receiveQty: 10000,
          checkQty: 120,
          defectQty: 5,
          result: "不合格",
          receiveDate: "2024-06-15",
          checkDate: "2024-06-15",
          checker: "赵刚",
          status: "已检验",
        },
        {
          id: 6,
          code: "IQC-2024-006",
          name: "散热硅脂来料检验",
          supplierName: "顺达电子",
          batchNo: "B20240501006",
          materialCode: "M-2024-010",
          materialName: "散热硅脂",
          receiveQty: 300,
          checkQty: 20,
          defectQty: 0,
          result: "合格",
          receiveDate: "2024-05-01",
          checkDate: "2024-05-01",
          checker: "孙丽",
          status: "已检验",
        },
        {
          id: 7,
          code: "IQC-2024-007",
          name: "橡胶密封圈来料检验",
          supplierName: "丰源塑胶",
          batchNo: "B20240701007",
          materialCode: "M-2024-014",
          materialName: "橡胶密封圈",
          receiveQty: 6000,
          checkQty: 80,
          defectQty: 0,
          result: "合格",
          receiveDate: "2024-07-01",
          checkDate: "2024-07-01",
          checker: "周明",
          status: "已检验",
        },
        {
          id: 8,
          code: "IQC-2024-008",
          name: "PC透明面板来料检验",
          supplierName: "创新包装",
          batchNo: "B20240415008",
          materialCode: "M-2024-008",
          materialName: "PC透明面板",
          receiveQty: 1500,
          checkQty: 40,
          defectQty: 2,
          result: "不合格",
          receiveDate: "2024-04-15",
          checkDate: "2024-04-15",
          checker: "吴凯",
          status: "已检验",
        },
        {
          id: 9,
          code: "IQC-2024-009",
          name: "焊接助焊剂来料检验",
          supplierName: "金源化工",
          batchNo: "B20240515009",
          materialCode: "M-2024-004",
          materialName: "焊接助焊剂",
          receiveQty: 200,
          checkQty: 15,
          defectQty: 0,
          result: "合格",
          receiveDate: "2024-05-15",
          checkDate: "2024-05-15",
          checker: "郑华",
          status: "已检验",
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
  min-width: 1100px;
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
