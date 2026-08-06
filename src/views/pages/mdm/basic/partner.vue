<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>名称</span>
            <input type="text" placeholder="请输入名称" />
          </div>
          <div>
            <span>客商主编码</span>
            <input type="text" placeholder="请输入客商主编码" />
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
          <div>客商信息</div>
          <div>
            <button>+新增客商</button>
            <button>查重合并</button>
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
                <th><div class="th-cell">名称</div></th>
                <th><div class="th-cell">客商主编码</div></th>
                <th><div class="th-cell">客户</div></th>
                <th><div class="th-cell">供应商</div></th>
                <th><div class="th-cell">统一社会信用代码</div></th>
                <th><div class="th-cell">主联系人</div></th>
                <th><div class="th-cell">手机</div></th>
                <th><div class="th-cell">详细地址</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.isCustomer }}</td>
                <td>{{ item.isSupplier }}</td>
                <td>{{ item.creditCode }}</td>
                <td>{{ item.contactPerson }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>停用</button>
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
          name: "华为技术有限公司",
          code: "CUST-2024-001",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91440300192345678X",
          contactPerson: "张明",
          phone: "13800138001",
          address: "深圳市龙岗区坂田街道华为基地",
          status: "启用",
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          name: "阿里巴巴集团控股有限公司",
          code: "CUST-2024-002",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91330100752567890X",
          contactPerson: "李静",
          phone: "13900139002",
          address: "杭州市余杭区五常街道文一西路969号",
          status: "启用",
          createTime: "2024-01-18 14:20:00",
        },
        {
          id: 3,
          name: "腾讯科技（深圳）有限公司",
          code: "CUST-2024-003",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91440300608456789X",
          contactPerson: "王浩",
          phone: "13700137003",
          address: "深圳市南山区粤海街道腾讯大厦",
          status: "启用",
          createTime: "2024-01-20 11:45:00",
        },
        {
          id: 4,
          name: "北京小米科技有限责任公司",
          code: "CUST-2024-004",
          isCustomer: "否",
          isSupplier: "是",
          creditCode: "91110108113456789X",
          contactPerson: "陈芳",
          phone: "13600136004",
          address: "北京市海淀区西二旗中路33号小米科技园",
          status: "停用",
          createTime: "2024-01-22 16:10:00",
        },
        {
          id: 5,
          name: "京东集团股份有限公司",
          code: "CUST-2024-005",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91110302674567890X",
          contactPerson: "刘洋",
          phone: "13500135005",
          address: "北京市大兴区亦庄经济技术开发区科创十一街18号",
          status: "启用",
          createTime: "2024-01-25 10:00:00",
        },
        {
          id: 6,
          name: "百度网络技术有限公司",
          code: "CUST-2024-006",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91440300896543210X",
          contactPerson: "赵敏",
          phone: "13400134006",
          address: "北京市海淀区上地十街10号百度大厦",
          status: "启用",
          createTime: "2024-01-28 13:30:00",
        },
        {
          id: 7,
          name: "上海汽车集团股份有限公司",
          code: "CUST-2024-007",
          isCustomer: "否",
          isSupplier: "是",
          creditCode: "91310000123456789X",
          contactPerson: "孙强",
          phone: "13300133007",
          address: "上海市浦东新区张江高科技园区松涛路563号",
          status: "启用",
          createTime: "2024-02-01 09:15:00",
        },
        {
          id: 8,
          name: "中国平安保险（集团）股份有限公司",
          code: "CUST-2024-008",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91440300456789012X",
          contactPerson: "周丽",
          phone: "13200132008",
          address: "深圳市福田区福华三路平安金融中心",
          status: "停用",
          createTime: "2024-02-03 15:40:00",
        },
        {
          id: 9,
          name: "珠海格力电器股份有限公司",
          code: "CUST-2024-009",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91440400123456789X",
          contactPerson: "吴刚",
          phone: "13100131009",
          address: "珠海市香洲区前山金鸡西路789号",
          status: "启用",
          createTime: "2024-02-05 11:20:00",
        },
        {
          id: 10,
          name: "顺丰速运有限公司",
          code: "CUST-2024-010",
          isCustomer: "否",
          isSupplier: "是",
          creditCode: "91440300456789012X",
          contactPerson: "郑杰",
          phone: "13000130010",
          address: "深圳市宝安区航城街道顺丰总部大厦",
          status: "启用",
          createTime: "2024-02-08 08:50:00",
        },
        {
          id: 11,
          name: "比亚迪股份有限公司",
          code: "CUST-2024-011",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91440300678901234X",
          contactPerson: "王芳",
          phone: "18800188011",
          address: "深圳市坪山区比亚迪路3009号",
          status: "启用",
          createTime: "2024-02-10 14:00:00",
        },
        {
          id: 12,
          name: "网易（杭州）网络有限公司",
          code: "CUST-2024-012",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91330100789012345X",
          contactPerson: "林峰",
          phone: "18700187012",
          address: "杭州市滨江区网商路599号网易大厦",
          status: "停用",
          createTime: "2024-02-12 10:30:00",
        },
        {
          id: 13,
          name: "中兴通讯股份有限公司",
          code: "CUST-2024-013",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91440300678901234X",
          contactPerson: "黄丽",
          phone: "18600186013",
          address: "深圳市南山区高新南四道中兴通讯大厦",
          status: "启用",
          createTime: "2024-02-15 16:45:00",
        },
        {
          id: 14,
          name: "中国移动通信集团有限公司",
          code: "CUST-2024-014",
          isCustomer: "否",
          isSupplier: "是",
          creditCode: "91110000567890123X",
          contactPerson: "何军",
          phone: "18500185014",
          address: "北京市西城区金融大街29号中国移动大厦",
          status: "启用",
          createTime: "2024-02-18 09:00:00",
        },
        {
          id: 15,
          name: "美的集团股份有限公司",
          code: "CUST-2024-015",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91440600123456789X",
          contactPerson: "罗敏",
          phone: "18400184015",
          address: "佛山市顺德区北滘镇美的大道6号",
          status: "启用",
          createTime: "2024-02-20 13:20:00",
        },
        {
          id: 16,
          name: "万达集团股份有限公司",
          code: "CUST-2024-016",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91110000890123456X",
          contactPerson: "刘辉",
          phone: "18300183016",
          address: "北京市朝阳区建国路万达广场",
          status: "停用",
          createTime: "2024-02-22 11:10:00",
        },
        {
          id: 17,
          name: "联想（北京）有限公司",
          code: "CUST-2024-017",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91110108012345678X",
          contactPerson: "陈晨",
          phone: "18200182017",
          address: "北京市海淀区上地西路6号联想总部",
          status: "启用",
          createTime: "2024-02-25 15:30:00",
        },
        {
          id: 18,
          name: "滴滴出行科技有限公司",
          code: "CUST-2024-018",
          isCustomer: "否",
          isSupplier: "是",
          creditCode: "91110302789012345X",
          contactPerson: "李婷",
          phone: "18100181018",
          address: "北京市海淀区东北旺西路8号中关村软件园",
          status: "启用",
          createTime: "2024-02-28 08:40:00",
        },
        {
          id: 19,
          name: "苏宁易购集团股份有限公司",
          code: "CUST-2024-019",
          isCustomer: "是",
          isSupplier: "否",
          creditCode: "91320000123456789X",
          contactPerson: "张磊",
          phone: "18000180019",
          address: "南京市玄武区苏宁大道1号",
          status: "停用",
          createTime: "2024-03-01 14:50:00",
        },
        {
          id: 20,
          name: "TCL科技集团股份有限公司",
          code: "CUST-2024-020",
          isCustomer: "是",
          isSupplier: "是",
          creditCode: "91440300789012345X",
          contactPerson: "王鹏",
          phone: "18900189020",
          address: "惠州市惠城区鹅岭南路TCL工业大厦",
          status: "启用",
          createTime: "2024-03-03 10:25:00",
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
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 40%;
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
  min-width: 1550px;
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
