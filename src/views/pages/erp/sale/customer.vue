<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>客户名称</span>
            <input type="text" placeholder="请输入客户名称" v-model="searchForm.name" />
          </div>
          <div>
            <span>手机号码</span>
            <input type="text" placeholder="请输入手机号码" v-model="searchForm.mobile" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">客户列表（主数据只读）</div>
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
                <th>客商主编码</th>
                <th>客户名称</th>
                <th>联系人</th>
                <th>手机号码</th>
                <th>联系电话</th>
                <th>电子邮箱</th>
                <th>状态</th>
                <th>排序</th>
                <th>备注</th>
                <th>创建时间</th>
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
                <td>{{ item.status }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.createTime }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span>
          <div style="float: right;">
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">&gt;</button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入销售客户相关API ==========
import { getCustomerPage } from '#/api/erp/sale/customer';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        name: "",   // 客户名称
        mobile: "", // 手机号码
      },
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadCustomerList();
  },
  methods: {
    // ========== 获取客户列表 ==========
    async loadCustomerList() {
      try {
        const data = await getCustomerPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          name: this.searchForm.name,
          mobile: this.searchForm.mobile,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          name: item.name || "",             // 客户名称
          contact: item.contact || "",       // 联系人
          phone: item.mobile || "",          // 手机号码
          tel: item.telephone || "",         // 联系电话
          email: item.email || "",           // 电子邮箱
          status: item.status === 0 ? "启用" : "禁用", // 状态
          sort: item.sort || 0,              // 排序
          remark: item.remark || "",         // 备注
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取客户列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadCustomerList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { name: "", mobile: "" };
      this.pagination.pageNo = 1;
      this.loadCustomerList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadCustomerList();
    },
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
  /* border: 1px solid red; */
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
}
.main-tab th {
  height: 40px;
  font-size: 14px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
  text-align: center;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 24px;
  background-color: #fff;
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
