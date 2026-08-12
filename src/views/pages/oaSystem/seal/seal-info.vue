<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-title">
          <div>印章分类</div>
        </div>
        <div class="left-main">
          <ul class="main-tab">
            <li
              v-for="(cat, index) in categories"
              :key="cat"
              :class="{ active: selectedCategoryIndex === index }"
              @click="selectCategory(index)"
            >
              {{ cat }}
            </li>
          </ul>
        </div>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-w">
            <span>所属公司</span>
            <input type="text" v-model="searchForm.companyName" />
          </div>
          <div class="top-w">
            <span>印章编号</span>
            <input type="text" v-model="searchForm.sealNo" />
          </div>
          <div class="top-w">
            <span>印章名称</span>
            <input type="text" v-model="searchForm.sealName" />
          </div>
          <div class="top-w">
            <button class="btn" @click="handleReset">重置</button>
            <button class="btn1" @click="handleSearch">搜索</button>
            <span class="a">展开▽</span>
          </div>
        </div>
        <div class="right-tab">
          <div class="right-header">
            <div class="header-title">印章信息列表</div>
            <div class="header-actions">
              <button class="btn-add" @click="handleAdd">+新增印章信息</button>
              <button class="btn-export">导出</button>
              <div class="batch-delete" aria-disabled="true">
                <span class="del-icon">🗑</span> 批量删除
              </div>
              <div class="icon-actions">
                <button class="icon-btn search" title="搜索" @click="handleSearch">🔍</button>
                <button class="icon-btn" title="刷新" @click="loadSealList">↻</button>
                <button class="icon-btn" title="全屏">⛶</button>
                <button class="icon-btn" title="布局">◧</button>
              </div>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 40px"><input type="checkbox" /></th>
                  <th>公司ID</th>
                  <th>公司名称</th>
                  <th>印章编号</th>
                  <th>印章名称</th>
                  <th>状态</th>
                  <th>印章分类</th>
                  <th>保管人</th>
                  <th class="op-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(seal, idx) in filteredSeals" :key="seal.id">
                  <td><input type="checkbox" /></td>
                  <td>101</td>
                  <td>{{ seal.company }}</td>
                  <td>{{ seal.sealNo }}</td>
                  <td>{{ seal.sealName }}</td>
                  <td>{{ seal.status }}</td>
                  <td>{{ seal.category }}</td>
                  <td>{{ seal.keeperName }}</td>
                  <td class="op-col">
                    <button @click.prevent="editSeal(seal)">编辑</button>
                    <button @click.prevent="deleteSeal(seal)">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <div class="footer-left">共 {{ pagination.total }} 条记录</div>
            <div class="footer-right">
              <select>
                <option>{{ pagination.pageSize }}条/页</option>
              </select>
              <div class="pager">
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
  </div>
</template>

<script>
// ========== 导入印章信息相关API ==========
// getSealPage: 分页查询印章列表
// getSeal: 获取单条印章详情
// createSeal: 新增印章
// updateSeal: 更新印章
// deleteSeal: 删除印章
import { getSealPage, deleteSeal } from '#/api/oa/seal/sealinfo';

export default {
  data() {
    return {
      // ========== 左侧印章分类（静态分类，用于筛选） ==========
      categories: [
        "全部",
        "行政类",
        "业务类",
        "财务类",
        "其他",
      ],
      // 当前选中的分类索引
      selectedCategoryIndex: 0,

      // ========== 搜索表单数据 ==========
      searchForm: {
        companyName: "",  // 所属公司
        sealNo: "",       // 印章编号
        sealName: "",     // 印章名称
      },

      // ========== 分页数据 ==========
      pagination: {
        pageNo: 1,        // 当前页码
        pageSize: 10,     // 每页条数
        total: 0,         // 总记录数
      },

      // ========== 表格数据（从接口获取，初始为空） ==========
      seals: [],
    };
  },

  // ========== 计算属性：根据左侧选中的分类筛选印章 ==========
  computed: {
    filteredSeals() {
      // 获取当前选中的分类名称
      const cat = this.categories[this.selectedCategoryIndex];
      // 如果是"全部"，返回所有印章
      if (cat === "全部") return this.seals;
      // 否则按分类筛选（接口返回的sealCls字段对应印章分类）
      return this.seals.filter((s) => s.category === cat);
    },
  },

  // ========== 页面挂载后自动加载印章列表 ==========
  mounted() {
    this.loadSealList();
  },

  methods: {
    // ========== 接口对接方法：获取印章列表 ==========
    async loadSealList() {
      try {
        // 调用分页查询接口，传入页码、每页条数和搜索条件
        const data = await getSealPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          companyName: this.searchForm.companyName,
          sealNo: this.searchForm.sealNo,
          sealName: this.searchForm.sealName,
        });

        // 将接口返回的数据转换为页面需要的格式
        // 接口字段 -> 页面字段映射：
        // id -> id（印章ID）
        // companyName -> company（所属公司名称）
        // sealNo -> sealNo（印章编号）
        // sealName -> sealName（印章名称）
        // status -> status（状态：0=正常，1=停用）
        // sealCls -> category（印章分类：1=行政类，2=业务类，3=财务类，4=其他）
        // keeperName -> keeperName（保管人姓名）
        // keeperDeptName -> keeperDeptName（保管人部门）
        // createTime -> createTime（创建时间，时间戳格式）
        this.seals = data.list.map((item) => ({
          id: item.id,
          company: item.companyName || "",
          sealNo: item.sealNo || "",
          sealName: item.sealName || "",
          status: item.status === 0 ? "正常" : "停用",
          category: this.getCategoryText(item.sealCls),
          keeperName: item.keeperName || "",
          keeperDeptName: item.keeperDeptName || "",
          createTime: this.formatTimestamp(item.createTime),
        }));

        // 更新总记录数
        this.pagination.total = data.total;
      } catch (err) {
        // 接口调用失败时打印错误信息
        console.error("获取印章列表失败", err);
      }
    },

    // ========== 工具方法：印章分类编码转中文文本 ==========
    // 接口返回的sealCls是数字编码，需要转换为中文显示
    getCategoryText(sealCls) {
      const map = {
        1: "行政类",
        2: "业务类",
        3: "财务类",
        4: "其他",
      };
      return map[sealCls] || "其他";
    },

    // ========== 工具方法：时间戳格式化 ==========
    // 将后端返回的毫秒时间戳转换为 "YYYY-MM-DD HH:mm:ss" 格式
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    // ========== 左侧分类切换 ==========
    selectCategory(index) {
      this.selectedCategoryIndex = index;
    },

    // ========== 搜索按钮 ==========
    handleSearch() {
      // 搜索时重置到第一页
      this.pagination.pageNo = 1;
      this.loadSealList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      // 清空搜索条件
      this.searchForm = { companyName: "", sealNo: "", sealName: "" };
      // 重置到第一页
      this.pagination.pageNo = 1;
      this.loadSealList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadSealList();
    },

    // ========== 新增印章 ==========
    handleAdd() {
      // TODO: 打开新增印章弹窗
      alert("新增印章功能待实现");
    },

    // ========== 编辑印章 ==========
    editSeal(seal) {
      // TODO: 打开编辑弹窗，传入当前印章数据
      alert(`编辑印章：${seal.sealName}`);
    },

    // ========== 删除印章 ==========
    async deleteSeal(seal) {
      // 弹出确认框，防止误删
      if (!confirm(`确定要删除印章「${seal.sealName}」吗？`)) return;
      try {
        // 调用删除接口
        await deleteSeal(seal.id);
        alert("删除成功");
        // 删除成功后重新加载列表
        this.loadSealList();
      } catch (err) {
        console.error("删除印章失败", err);
      }
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
  width: 1014px;
  height: 590px;
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
  display: flex;
  justify-content: space-between;
}
/* 左边 */
.app-left {
  width: 256px;
  height: 100%;
  /* border: 1px solid red; */
}
.left-title {
  width: 100%;
  height: 38px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  border: 0.5px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-title div {
  width: 230px;
  font-weight: 600;
  font-size: 14px;
}
.left-main {
  width: 100%;
  height: 552px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  border: 0.5px solid #ccc;
  padding: 10px;
}
.main-tab {
  list-style: none;
  width: 222px;
  /* border: 1px solid red; */
}
.main-tab li {
  width: 100%;
  height: 36px;
  margin-bottom: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main-tab li:hover {
  background-color: #ccc;
  color: rgb(15, 138, 238);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(238, 233, 233, 0.15);
}
.active {
  background-color: rgb(175, 218, 253);
  color: rgb(15, 138, 238);
}
/* ———————————————————————— */
/* 右边 */
.app-right {
  width: 720px;
  height: 100%;
  /* border: 1px solid red; */
}
.right-top {
  width: 100%;
  height: 93px;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-header {
  /* width: 100%; */
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 8px;
}
.right-header .btn-add {
  width: 100px;
  height: 36px;
  border-radius: 10px;
  border: 0;
  background-color: #2b88ff;
  color: #fff;
}
.right-header .btn-add .plus {
  margin-right: 0;
  font-size: 18px;
}
.right-header .btn-export {
  width: 60px;
  height: 36px;
  background: #2b88ff;
  color: #fff;
  border: 0;
  padding: 10px 16px;
  border-radius: 10px;
  margin-left: 12px;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(43, 136, 255, 0.12);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.batch-delete {
  display: inline-flex;
  align-items: center;
  background: #f5f7fa;
  border: 1px solid #e6e9ef;
  color: #9aa3b2;
  padding: 5px 10px;
  border-radius: 10px;
  margin-left: 12px;
  font-size: 14px;
}
.batch-delete .del-icon {
  font-size: 14px;
}
.right-header .icon-actions {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
}
.icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e9eef6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
}
.icon-btn.search {
  background: #2b88ff;
  color: #fff;
  border: 0;
  box-shadow: 0 4px 10px rgba(43, 136, 255, 0.12);
}
.icon-btn:hover {
  transform: translateY(-1px);
}
.top-w {
  width: 178px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.top-w span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 5px;
}
.top-w input {
  width: 68px;
  height: 32px;
  border-radius: 10px;
  border: 0.5px solid;
  cursor: pointer;
}
.top-w input:hover {
  border: 0.5px solid rgb(107, 174, 250);
}
.top-w button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  cursor: pointer;
}
.top-w .btn {
  background-color: #fff;
  border: 1px solid #ccc;
  margin-right: 5px;
}
.top-w .btn:hover {
  border: 1px solid rgb(107, 174, 250);
  color: rgb(107, 174, 250);
}
.top-w .btn1 {
  background-color: blue;
  color: #fff;
  border: 0;
}
.top-w .btn1:hover {
  background-color: rgb(107, 174, 250);
}
.top-w .a {
  width: 30px;
  font-size: 12px;
  color: rgb(107, 174, 250);
}
.right-tab {
  width: 100%;
  height: 487px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 10px;
}
/* 表格容器，超出区域滚动但表格宽度受限于父元素 */
.right-tab {
  width: 100%;
  height: 487px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
}
.right-tab .table-wrap {
  width: 100%;
  /* 右侧容器高度 487px，减去 header(48px)+header间距(8px)+footer(48px)=104px */
  height: calc(100% - 104px);
  max-height: calc(100% - 104px);
  overflow: auto; /* 横向和纵向滚动 */
  box-sizing: border-box;
}
.right-tab table {
  width: max-content; /* 允许表格宽度超过容器，出现横向滚动 */
  min-width: 1100px; /* 保证在窄屏出现横向滚动，按需调整 */
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6; /* 外框边框 */
}
.right-tab th,
.right-tab td {
  padding: 8px 10px;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f3f3f3; /* 列分隔线 */
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 去掉最后一列右边框（操作列除外） */
.right-tab thead th:last-child,
.right-tab tbody td:last-child {
  border-right: 0;
}

.right-tab thead th {
  background: #fafafa;
  font-weight: 600;
  color: #333;
  height: 52px;
}
/* 操作列固定在表格右侧 */
.right-tab .op-col {
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 5;
  width: 140px;
  box-shadow: -6px 0 8px rgba(0, 0, 0, 0.03);
}
.right-tab .op-col button {
  margin-right: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.right-tab .op-col button:hover {
  border-color: rgb(107, 174, 250);
  color: rgb(107, 174, 250);
}
.table-footer {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-top: 1px solid #eee;
  background: #fafafa;
}
.table-footer .footer-left {
  color: #666;
}
.table-footer .footer-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.table-footer select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
}
.table-footer .pager {
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #e6e6e6;
  color: #666;
}
/* ————————————————————- */
</style>
