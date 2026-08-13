<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <ul class="left-nav">
          <li @click="handleMenuClick('today')">今日需联系客户</li>
          <li @click="handleMenuClick('clue')">分配给我的线索</li>
          <li @click="handleMenuClick('customer')">分配给我的客户</li>
          <li @click="handleMenuClick('pool')">待进入公海的客户</li>
          <li @click="handleMenuClick('contract')">待审核合同</li>
          <li @click="handleMenuClick('receivable')">待审核回款</li>
          <li @click="handleMenuClick('remind')">待回款提醒</li>
          <li @click="handleMenuClick('expire')">即将到期的合同</li>
        </ul>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-inp">
            <div>
              <span>状态</span>
              <input type="text" placeholder="今日需练习" v-model="searchForm.status" />
            </div>
            <div>
              <span>归属</span>
              <input type="text" placeholder="我负责的" v-model="searchForm.owner" />
            </div>
            <div>
              <button @click="handleReset">重置</button>
              <button @click="handleSearch">搜索</button>
              收起▽
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-tab">
            <table>
              <thead>
                <tr>
                  <th class="col-name">
                    <div class="th-inner">客户名称</div>
                  </th>
                  <th><div class="th-inner">客商主编码</div></th>
                  <th><div class="th-inner">客户来源</div></th>
                  <th><div class="th-inner">客户联系人</div></th>
                  <th><div class="th-inner">手机</div></th>
                  <th><div class="th-inner">电话</div></th>
                  <th><div class="th-inner">邮箱</div></th>
                  <th><div class="th-inner">客户级别</div></th>
                  <th><div class="th-inner">客户行业</div></th>
                  <th><div class="th-inner">下次联系时间</div></th>
                  <th><div class="th-inner">备注</div></th>
                  <th><div class="th-inner">锁定状态</div></th>
                  <th><div class="th-inner">成交状态</div></th>
                  <th><div class="th-inner">最后跟进时间</div></th>
                  <th><div class="th-inner">最后跟进记录</div></th>
                  <th><div class="th-inner">地址</div></th>
                  <th><div class="th-inner">客户网址</div></th>
                  <th><div class="th-inner">客户规模</div></th>
                  <th><div class="th-inner">客户价值</div></th>
                  <th><div class="th-inner">客户状态</div></th>
                  <th><div class="th-inner">距离进入公海天数</div></th>
                  <th><div class="th-inner">负责人</div></th>
                  <th><div class="th-inner">所属部门</div></th>
                  <th><div class="th-inner">更新时间</div></th>
                  <th><div class="th-inner">创建时间</div></th>
                  <th><div class="th-inner">创建人</div></th>
                  <th class="ol-col">
                    <div class="th-inner no-border">操作</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in rows" :key="item.id">
                  <td class="col-name">{{ item.name }}</td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.source }}</td>
                  <td>{{ item.contact }}</td>
                  <td>{{ item.mobile }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.level }}</td>
                  <td>{{ item.industry }}</td>
                  <td>{{ item.nextContact }}</td>
                  <td>{{ item.remark }}</td>
                  <td>{{ item.lockStatus }}</td>
                  <td>{{ item.dealStatus }}</td>
                  <td>{{ item.lastFollowTime }}</td>
                  <td>{{ item.lastFollowRecord }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.website }}</td>
                  <td>{{ item.scale }}</td>
                  <td>{{ item.value }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.poolDays }}</td>
                  <td>{{ item.owner }}</td>
                  <td>{{ item.department }}</td>
                  <td>{{ item.updateTime }}</td>
                  <td>{{ item.createTime }}</td>
                  <td>{{ item.creator }}</td>
                  <td class="ol-col">
                    <a href="#" @click.prevent="handleEdit(item)">编辑</a>
                  </td>
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
  </div>
</template>

<script>
// ========== 导入客户管理相关API ==========
// 待办页面使用客户管理接口查询今日需联系客户
import { getCustomerPage, getTodayContactCustomerCount } from '#/api/crm/customer';

export default {
  data() {
    return {
      activeMenu: "today", // 当前选中的左侧菜单
      searchForm: {
        status: "",  // 状态
        owner: "",   // 归属
      },
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      rows: [],
    };
  },
  mounted() {
    this.loadBacklogList();
  },
  methods: {
    async loadBacklogList() {
      try {
        const data = await getCustomerPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        });
        this.rows = data.list.map((item) => ({
          id: item.id,
          name: item.name || "",
          code: item.no || "",
          source: item.sourceName || "",
          contact: item.contactName || "",
          mobile: item.mobile || "",
          phone: item.telephone || "",
          email: item.email || "",
          level: item.levelName || "",
          industry: item.industryName || "",
          nextContact: item.contactNextTime || "",
          remark: item.remark || "",
          lockStatus: item.lockStatusName || "",
          dealStatus: item.dealStatusName || "",
          lastFollowTime: this.formatTimestamp(item.followLastTime),
          lastFollowRecord: item.followLastContent || "",
          address: item.address || "",
          website: item.website || "",
          scale: item.scaleName || "",
          value: item.valueName || "",
          status: item.statusName || "",
          poolDays: item.poolDays || "",
          owner: item.ownerUserName || "",
          department: item.ownerDeptName || "",
          updateTime: this.formatTimestamp(item.updateTime),
          createTime: this.formatTimestamp(item.createTime),
          creator: item.creatorName || "",
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取待办列表失败", err);
      }
    },
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    handleMenuClick(menu) {
      this.activeMenu = menu;
      this.loadBacklogList();
    },
    handleSearch() { this.pagination.pageNo = 1; this.loadBacklogList(); },
    handleReset() { this.searchForm = { status: "", owner: "" }; this.pagination.pageNo = 1; this.loadBacklogList(); },
    handlePageChange(page) { this.pagination.pageNo = page; this.loadBacklogList(); },
    handleEdit(row) { alert(`编辑客户：${row.name}`); },
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
  display: flex;
}
.app-left {
  width: 184px;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 20px;
}
.left-nav {
  list-style: none;
}
.left-nav li {
  width: 136px;
  min-height: 51px;
  border-bottom: 1px solid #ccc;
  padding: 15px 24px;
  font-size: 14px;
  cursor: pointer;
}
.left-nav li:last-child {
  border: 0;
}
.left-nav li:hover {
  background-color: #e9e9e9;
}
.app-right {
  width: 802px;
  height: 100%;
  /* border: 1px solid red; */
}
.right-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 259px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  margin-right: 8px;
  text-align: right;
  font-size: 14px;
}
.top-inp div input {
  width: 194px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  font-size: 14px;
  color: #006be6;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.right-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-tab {
  width: 100%;
  height: 440px;
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
  /* border: 1px solid #e6e6e6; */
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e6e1e1;
  border-right: none;
  min-width: 60px;
  max-width: 200px;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}

/* 表头内部 div：承载右边框 */
.th-inner {
  padding: 0 12px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

/* 固定列：左侧固定（客户名称） */
.col-name {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #e6e1e1;
}
/* 固定列：右侧固定（操作） */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.428);
}
.ol-col a{
  text-decoration: none;
}

/* 表格主体 td 保持原有边框 */
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 3px;
}
</style>
