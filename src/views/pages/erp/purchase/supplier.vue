<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>供应商名称</span>
            <input type="text" placeholder="请输入供应商名称" />
          </div>
          <div>
            <span>手机号码</span>
            <input type="text" placeholder="请输入手机号码" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">供应商列表（主数据只读）</div>
          <div class="top-2">
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">客商主编码</div></th>
                <th><div class="th-inner">供应商名称</div></th>
                <th><div class="th-inner">联系人</div></th>
                <th><div class="th-inner">手机号码</div></th>
                <th><div class="th-inner">联系电话</div></th>
                <th><div class="th-inner">电子邮箱</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">排序</div></th>
                <th><div class="th-inner no-border">备注</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.tel }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <span :style="{
                    color: item.status === '启用' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: item.status === '启用' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }">
                    {{ item.status }}
                  </span>
                </td>
                <td>{{ item.sort }}</td>
                <td>{{ item.remark }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条数据<span>20条/页</span></div>
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
          id: "SUP-2024-001",
          name: "华为技术有限公司",
          contact: "张建国",
          phone: "13800138001",
          tel: "0755-88886666",
          email: "supplier@huawei.com",
          status: "启用",
          sort: 1,
          remark: "核心供应商，优先合作",
        },
        {
          id: "SUP-2024-002",
          name: "联想集团有限公司",
          contact: "李明辉",
          phone: "13800138002",
          tel: "010-88886666",
          email: "purchase@lenovo.com",
          status: "启用",
          sort: 2,
          remark: "长期合作伙伴",
        },
        {
          id: "SUP-2024-003",
          name: "小米科技有限公司",
          contact: "王芳",
          phone: "13800138003",
          tel: "010-66668888",
          email: "supply@xiaomi.com",
          status: "启用",
          sort: 3,
          remark: "",
        },
        {
          id: "SUP-2024-004",
          name: "苹果电子产品商贸有限公司",
          contact: "刘洋",
          phone: "13800138004",
          tel: "021-88886666",
          email: "procurement@apple.com",
          status: "启用",
          sort: 4,
          remark: "国际品牌供应商",
        },
        {
          id: "SUP-2024-005",
          name: "三星电子有限公司",
          contact: "陈静",
          phone: "13800138005",
          tel: "0512-88886666",
          email: "samsung@supplier.com",
          status: "暂停",
          sort: 5,
          remark: "暂停合作，待评估",
        },
        {
          id: "SUP-2024-006",
          name: "戴尔中国有限公司",
          contact: "赵磊",
          phone: "13800138006",
          tel: "010-77776666",
          email: "dell@supplier.com",
          status: "启用",
          sort: 6,
          remark: "电脑供应商",
        },
        {
          id: "SUP-2024-007",
          name: "索尼中国有限公司",
          contact: "孙悦",
          phone: "13800138007",
          tel: "020-88886666",
          email: "sony@supplier.com",
          status: "启用",
          sort: 7,
          remark: "电子元件供应商",
        },
        {
          id: "SUP-2024-008",
          name: "珠海格力电器股份有限公司",
          contact: "周明",
          phone: "13800138008",
          tel: "0756-88886666",
          email: "gree@supplier.com",
          status: "启用",
          sort: 8,
          remark: "空调设备供应商",
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
  margin-bottom: 15px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 330px;
  height: 100%;
  font-size: 14px;
  color: #006be6;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  color: black;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp div input {
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 10px;
}
.top-inp div:last-child button:first-child {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.top-inp div:last-child button:last-child {
  width: 63px;
  height: 32px;
  border: 0;
  color: #fff;
  background-color: #006be6;
  border-radius: 10px;
}
.app-main {
  width: 100%;
  height: 489px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 77%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 13%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #006be6;
  border: 0;
}
.top-3 {
  width: 10%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 398px;
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
  background-color: #f0eaea;
  border-right: none;
  text-align: center;
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

/* 最后一列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 8px;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
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
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>