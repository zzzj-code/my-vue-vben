<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>资产编号</span>
            <input type="text" placeholder="请输入" v-model="searchForm.assetNo" />
          </div>
          <div class="inp-1">
            <span>资产名称</span>
            <input type="text" placeholder="请输入" v-model="searchForm.assetName" />
          </div>
          <div class="inp-1"></div>
          <div class="inp-1">
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1"></div>
          <div class="top-2">
            <button @click="handleAdd">+新增资产</button>
            <button>导入</button>
            <button>导出</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner"><input type="checkbox" disabled></div></th>
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">资产编号</div></th>
                <th><div class="th-inner">资产名称</div></th>
                <th><div class="th-inner">资产分类</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">品牌</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">原值</div></th>
                <th><div class="th-inner">净值</div></th>
                <th><div class="th-inner">使用人</div></th>
                <th><div class="th-inner">使用部门</div></th>
                <th><div class="th-inner">存放位置</div></th>
                <th><div class="th-inner">标签已打印</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="16" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td><input type="checkbox"></td>
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.assetNo }}</td>
                <td>{{ item.assetName }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.brand }}</td>
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
                  >{{ getStatusText(item.status) }}</span>
                </td>
                <td>¥{{ (item.originalValue || 0).toLocaleString() }}</td>
                <td>¥{{ (item.netValue || 0).toLocaleString() }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.location }}</td>
                <td>
                  <span
                    :style="{
                      color: item.labelPrinted ? '#52c41a' : '#8c8c8c'
                    }"
                  >{{ item.labelPrinted ? '已打印' : '未打印' }}</span>
                </td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleEdit(item)">查看</button>
                  <button @click="handleEdit(item)">编辑</button>
                  <button @click="handleDelete(item)">删除</button>
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
</template>

<script>
// ========== 导入资产信息相关API ==========
import { getInfoPage, deleteInfo } from '#/api/asset/info';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        assetNo: "",    // 资产编号
        assetName: "",  // 资产名称
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
    this.loadAssetList();
  },
  methods: {
    // ========== 获取资产列表 ==========
    async loadAssetList() {
      try {
        const data = await getInfoPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          assetCode: this.searchForm.assetNo,
          assetName: this.searchForm.assetName,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          assetNo: item.assetCode || "",           // 资产编号
          assetName: item.assetName || "",       // 资产名称
          category: item.categoryName || "",     // 资产分类
          spec: item.specification || "",        // 规格型号
          brand: item.brand || "",               // 品牌
          status: item.assetStatus, // 状态
          originalValue: item.originalValue || 0, // 原值
          netValue: item.netValue || 0,          // 净值
          user: item.useUserName || "",             // 使用人
          department: item.useDeptName || "",       // 使用部门
          location: item.locationName || "",     // 存放位置
          labelPrinted: (item.labelPrintCount || 0) > 0, // 标签已打印
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取资产列表失败", err);
      }
    },
    // ========== 状态名称转换 ==========
    getStatusName(status) {
      const map = { 0: "正常", 1: "维修中", 2: "已报废" };
      return map[status] || "正常";
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
      this.loadAssetList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { assetNo: "", assetName: "" };
      this.pagination.pageNo = 1;
      this.loadAssetList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadAssetList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增资产功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑资产：${row.assetName}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.assetName}」吗？`)) return;
      try {
        await deleteInfo(row.id);
        alert("删除成功");
        this.loadAssetList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
    getStatusColor(status) {
      const map = { 0: '#8c8c8c', 1: '#52c41a', 2: '#faad14', 3: '#ff4d4f', 4: '#1890ff', '闲置': '#8c8c8c', '在用': '#52c41a', '维修': '#faad14', '报废': '#ff4d4f', '调拨中': '#1890ff' };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = { 0: '#f5f5f5', 1: '#f6ffed', 2: '#fffbe6', 3: '#fff2f0', 4: '#e6f7ff', '闲置': '#f5f5f5', '在用': '#f6ffed', '维修': '#fffbe6', '报废': '#fff2f0', '调拨中': '#e6f7ff' };
      return map[status] || '#fff';
    },
    getStatusText(status) {
      const map = { 0: '闲置', 1: '在用', 2: '维修', 3: '报废', 4: '调拨中' };
      return map[status] || status;
    },
    formatTime(timestamp) {
      if (!timestamp) return '';
      const d = new Date(timestamp);
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
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
  align-items: center;
}
.top-1 {
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button {
  width: 56px;
  height: 32px;
  border: 0;
  color: #006be6;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.top-2 button:hover {
  background-color: #f0f4f9;
}
.top-2 button:first-child {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:first-child:hover {
  background-color: #0056b3;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 2024px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e9e6e6;
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
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

/* 复选框列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
}

/* 序号列 */
.main-tab td:nth-child(2),
.main-tab th:nth-child(2) {
  width: 50px;
  min-width: 50px;
  max-width: 50px;
}

/* 空状态 */
.empty-cell {
  text-align: center;
  color: #ccc;
  font-size: 14px;
  padding: 60px 0;
  height: 200px;
}

.ol-col {
  width: 180px;
  min-width: 180px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:first-child,
.ol-col button:nth-child(2) {
  color: #006be6;
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
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>