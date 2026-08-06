<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>规则编码</span>
            <input type="text" placeholder="请输入规则编码" />
          </div>
          <div>
            <span>规则名称</span>
            <input type="text" placeholder="请输入规则名称" />
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
          <div>编码规则列表</div>
          <div>
            <button>+新增编码规则</button>
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
                <th><div class="th-inner">规则编码</div></th>
                <th><div class="th-inner">规则名称</div></th>
                <th><div class="th-inner">规则描述</div></th>
                <th><div class="th-inner">最大长度</div></th>
                <th><div class="th-inner">是否补齐</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">备注</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.maxLength }}</td>
                <td>
                  <span
                    :style="{
                      color: item.isPadding === '是' ? '#52c41a' : '#8c8c8c'
                    }"
                  >{{ item.isPadding }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
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
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
          code: "CR-2024-001",
          name: "物料编码规则",
          description: "M-YYYY-XXX",
          maxLength: 12,
          isPadding: "是",
          status: "启用",
          remark: "物料主数据编码",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "CR-2024-002",
          name: "客户编码规则",
          description: "CUST-YYYY-XXX",
          maxLength: 14,
          isPadding: "是",
          status: "启用",
          remark: "客户主数据编码",
          createTime: "2024-01-20 14:20",
        },
        {
          id: 3,
          code: "CR-2024-003",
          name: "供应商编码规则",
          description: "SUP-YYYY-XXX",
          maxLength: 14,
          isPadding: "是",
          status: "启用",
          remark: "供应商主数据编码",
          createTime: "2024-02-01 09:15",
        },
        {
          id: 4,
          code: "CR-2024-004",
          name: "生产工单编码规则",
          description: "MO-YYYYMMDD-XXX",
          maxLength: 18,
          isPadding: "否",
          status: "启用",
          remark: "生产工单流水号",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 5,
          code: "CR-2024-005",
          name: "采购订单编码规则",
          description: "PO-YYYYMM-XXX",
          maxLength: 15,
          isPadding: "是",
          status: "启用",
          remark: "采购订单编码",
          createTime: "2024-03-01 11:00",
        },
        {
          id: 6,
          code: "CR-2024-006",
          name: "销售订单编码规则",
          description: "SO-YYYYMM-XXX",
          maxLength: 15,
          isPadding: "是",
          status: "启用",
          remark: "销售订单编码",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 7,
          code: "CR-2024-007",
          name: "仓库编码规则",
          description: "WH-XXX",
          maxLength: 8,
          isPadding: "否",
          status: "启用",
          remark: "仓库主数据编码",
          createTime: "2024-04-01 08:50",
        },
        {
          id: 8,
          code: "CR-2024-008",
          name: "车间编码规则",
          description: "WS-XXX",
          maxLength: 8,
          isPadding: "是",
          status: "停用",
          remark: "车间主数据编码，已弃用",
          createTime: "2024-04-10 10:20",
        },
        {
          id: 9,
          code: "CR-2024-009",
          name: "设备编码规则",
          description: "EQ-YYYY-XXX",
          maxLength: 13,
          isPadding: "是",
          status: "启用",
          remark: "设备资产管理编码",
          createTime: "2024-05-01 15:00",
        },
        {
          id: 10,
          code: "CR-2024-010",
          name: "员工编码规则",
          description: "EMP-YYYY-XXX",
          maxLength: 14,
          isPadding: "是",
          status: "启用",
          remark: "员工工号编码",
          createTime: "2024-05-15 09:30",
        },
        {
          id: 11,
          code: "CR-2024-011",
          name: "BOM编码规则",
          description: "BOM-YYYYMMDD-XXX",
          maxLength: 20,
          isPadding: "否",
          status: "启用",
          remark: "物料清单编码",
          createTime: "2024-06-01 14:10",
        },
        {
          id: 12,
          code: "CR-2024-012",
          name: "工艺路线编码规则",
          description: "ROUTE-XXX",
          maxLength: 10,
          isPadding: "否",
          status: "启用",
          remark: "工艺路线编码",
          createTime: "2024-06-20 11:45",
        },
        {
          id: 13,
          code: "CR-2024-013",
          name: "质量批次编码规则",
          description: "QC-YYYYMMDD-XXX",
          maxLength: 19,
          isPadding: "是",
          status: "启用",
          remark: "质量检验批次编码",
          createTime: "2024-07-01 08:00",
        },
        {
          id: 14,
          code: "CR-2024-014",
          name: "发货单编码规则",
          description: "DN-YYYYMMDD-XXX",
          maxLength: 19,
          isPadding: "是",
          status: "启用",
          remark: "发货单流水号",
          createTime: "2024-07-10 16:20",
        },
        {
          id: 15,
          code: "CR-2024-015",
          name: "收货单编码规则",
          description: "RN-YYYYMMDD-XXX",
          maxLength: 19,
          isPadding: "是",
          status: "启用",
          remark: "收货单流水号",
          createTime: "2024-07-20 13:00",
        },
        {
          id: 16,
          code: "CR-2024-016",
          name: "盘点单编码规则",
          description: "INV-YYYYMM-XXX",
          maxLength: 17,
          isPadding: "否",
          status: "停用",
          remark: "盘点单编码，待优化",
          createTime: "2024-08-01 09:10",
        },
        {
          id: 17,
          code: "CR-2024-017",
          name: "退货单编码规则",
          description: "RET-YYYYMMDD-XXX",
          maxLength: 20,
          isPadding: "是",
          status: "启用",
          remark: "退货单编码",
          createTime: "2024-08-10 10:30",
        },
        {
          id: 18,
          code: "CR-2024-018",
          name: "调拨单编码规则",
          description: "TR-YYYYMMDD-XXX",
          maxLength: 19,
          isPadding: "是",
          status: "启用",
          remark: "库存调拨单编码",
          createTime: "2024-08-20 15:50",
        },
        {
          id: 19,
          code: "CR-2024-019",
          name: "检验报告编码规则",
          description: "IR-YYYYMMDD-XXX",
          maxLength: 20,
          isPadding: "否",
          status: "启用",
          remark: "质量检验报告编码",
          createTime: "2024-09-01 14:20",
        },
        {
          id: 20,
          code: "CR-2024-020",
          name: "计件工资编码规则",
          description: "PW-YYYYMM-XXX",
          maxLength: 17,
          isPadding: "是",
          status: "启用",
          remark: "计件工资单编码",
          createTime: "2024-09-10 11:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5'
      };
      return map[status] || '#fff';
    }
  }
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
  min-width: 1320px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.ol-col {
  width: 130px;
  min-width: 130px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 40px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
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