<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>表名称</span>
            <input type="text" placeholder="请输入表名称" />
          </div>
          <div>
            <span>表描述</span>
            <input type="text" placeholder="请输入表描述" />
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
          <div>代码生成列表</div>
          <div>
            <button style="background-color: #fff">+新增角色</button>
            <button>导入</button>
            <button disabled>批量删除</button>
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
                <th><input type="checkbox" /></th>
                <th>数据源</th>
                <th>表名称</th>
                <th>表描述</th>
                <th>实体</th>
                <th>创建时间</th>
                <th>更新时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.dataSource }}</td>
                <td>{{ item.tableName }}</td>
                <td>{{ item.tableDesc }}</td>
                <td>{{ item.entity }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.updateTime }}</td>
                <td class="ol-col">
                  <button>预览</button>
                  <button>生成代码</button>
                  <button>更多</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          dataSource: "主库",
          tableName: "sys_user",
          tableDesc: "用户信息表",
          entity: "SysUser",
          createTime: "2026-08-01 09:00:00",
          updateTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          dataSource: "主库",
          tableName: "sys_role",
          tableDesc: "角色信息表",
          entity: "SysRole",
          createTime: "2026-08-01 10:30:00",
          updateTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          dataSource: "主库",
          tableName: "sys_menu",
          tableDesc: "菜单权限表",
          entity: "SysMenu",
          createTime: "2026-07-31 14:20:00",
          updateTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          dataSource: "主库",
          tableName: "sys_dept",
          tableDesc: "部门信息表",
          entity: "SysDept",
          createTime: "2026-07-31 16:45:00",
          updateTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          dataSource: "业务库",
          tableName: "order_info",
          tableDesc: "订单信息表",
          entity: "OrderInfo",
          createTime: "2026-07-30 11:00:00",
          updateTime: "2026-07-30 14:30:00",
        },
        {
          id: 6,
          dataSource: "业务库",
          tableName: "order_detail",
          tableDesc: "订单明细表",
          entity: "OrderDetail",
          createTime: "2026-07-30 09:30:00",
          updateTime: "2026-07-30 15:20:00",
        },
        {
          id: 7,
          dataSource: "业务库",
          tableName: "product_info",
          tableDesc: "商品信息表",
          entity: "ProductInfo",
          createTime: "2026-07-29 13:50:00",
          updateTime: "2026-07-29 17:10:00",
        },
        {
          id: 8,
          dataSource: "业务库",
          tableName: "product_category",
          tableDesc: "商品分类表",
          entity: "ProductCategory",
          createTime: "2026-07-29 15:10:00",
          updateTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          dataSource: "主库",
          tableName: "sys_dict",
          tableDesc: "字典配置表",
          entity: "SysDict",
          createTime: "2026-07-28 10:00:00",
          updateTime: "2026-07-28 10:00:00",
        },
        {
          id: 10,
          dataSource: "主库",
          tableName: "sys_config",
          tableDesc: "系统配置表",
          entity: "SysConfig",
          createTime: "2026-07-28 08:20:00",
          updateTime: "2026-07-28 08:20:00",
        },
        {
          id: 11,
          dataSource: "业务库",
          tableName: "warehouse_info",
          tableDesc: "仓库信息表",
          entity: "WarehouseInfo",
          createTime: "2026-07-27 14:00:00",
          updateTime: "2026-07-27 14:00:00",
        },
        {
          id: 12,
          dataSource: "业务库",
          tableName: "stock_record",
          tableDesc: "库存记录表",
          entity: "StockRecord",
          createTime: "2026-07-27 11:30:00",
          updateTime: "2026-07-27 16:20:00",
        },
        {
          id: 13,
          dataSource: "业务库",
          tableName: "supplier_info",
          tableDesc: "供应商信息表",
          entity: "SupplierInfo",
          createTime: "2026-07-26 09:00:00",
          updateTime: "2026-07-26 09:00:00",
        },
        {
          id: 14,
          dataSource: "主库",
          tableName: "sys_log",
          tableDesc: "操作日志表",
          entity: "SysLog",
          createTime: "2026-07-26 16:00:00",
          updateTime: "2026-07-26 16:00:00",
        },
        {
          id: 15,
          dataSource: "业务库",
          tableName: "customer_info",
          tableDesc: "客户信息表",
          entity: "CustomerInfo",
          createTime: "2026-07-25 10:30:00",
          updateTime: "2026-07-25 10:30:00",
        },
        {
          id: 16,
          dataSource: "业务库",
          tableName: "invoice_info",
          tableDesc: "发票信息表",
          entity: "InvoiceInfo",
          createTime: "2026-07-25 15:00:00",
          updateTime: "2026-07-25 15:00:00",
        },
        {
          id: 17,
          dataSource: "主库",
          tableName: "sys_notice",
          tableDesc: "通知公告表",
          entity: "SysNotice",
          createTime: "2026-07-24 13:45:00",
          updateTime: "2026-07-24 13:45:00",
        },
        {
          id: 18,
          dataSource: "业务库",
          tableName: "payment_record",
          tableDesc: "支付记录表",
          entity: "PaymentRecord",
          createTime: "2026-07-24 09:00:00",
          updateTime: "2026-07-24 09:00:00",
        },
        {
          id: 19,
          dataSource: "业务库",
          tableName: "logistics_info",
          tableDesc: "物流信息表",
          entity: "LogisticsInfo",
          createTime: "2026-07-23 14:30:00",
          updateTime: "2026-07-23 14:30:00",
        },
        {
          id: 20,
          dataSource: "主库",
          tableName: "sys_tenant",
          tableDesc: "租户信息表",
          entity: "SysTenant",
          createTime: "2026-07-23 02:00:00",
          updateTime: "2026-07-23 02:00:00",
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
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 35%;
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
.main-top div:nth-child(2) button:nth-child(3) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
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
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1400px;
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
  width: 280px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:nth-child(2) {
  width: 84px;
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
