<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>仓库名称</span>
            <input type="text" placeholder="请输入仓库名称" v-model="searchForm.warehouseName" />
          </div>
          <div>
            <span>仓库编号</span>
            <input type="text" placeholder="请输入仓库编号" v-model="searchForm.warehouseCode" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>仓库列表</div>
          <div>
            <button @click="handleAdd">+新增仓库</button>
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
                <th><div class="th-inner">仓库名称</div></th>
                <th><div class="th-inner">仓库编号</div></th>
                <th><div class="th-inner">备注</div></th>
                <th><div class="th-inner">排序</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.warehouseCode">
                <td>{{ item.warehouseName }}</td>
                <td style="color: #006be6">{{ item.warehouseCode }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleEdit(item)">编辑</button>
                  <button @click="handleDelete(item)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入仓库管理相关 API（src/api/wms/warehousing/index.js）==========
// getWarehousingList : 获取仓库列表（GET /wms/warehousing/list）
// deleteWarehousing  : 删除仓库（DELETE /wms/warehousing/delete?id=xxx）
import { getWarehousingList, deleteWarehousing } from '#/api/wms/warehousing';

export default {
  data() {
    return {
      // ========== 搜索表单 ==========
      // 与顶部两个搜索输入框(v-model)绑定，供搜索时传给后端
      searchForm: {
        warehouseName: "", // 仓库名称
        warehouseCode: "", // 仓库编号
      },
      // ========== 分页信息 ==========
      // 页面底部"共X条记录 / 20条/页"就是引用这里的 total 和 pageSize
      pagination: {
        pageNo: 1,   // 当前页码
        pageSize: 20, // 每页条数（与底部"20条/页"保持一致）
        total: 0,     // 总条数（后端返回）
      },
      // ========== 表格数据 ==========
      // 原先是写死的假数据，现在由接口返回后赋值
      tabValue: [],
    };
  },
  mounted() {
    // 页面加载完成后自动拉取一次仓库列表
    this.loadWarehouseList();
  },
  methods: {
    // ========== 获取仓库列表 ==========
    async loadWarehouseList() {
      try {
        // 调用后端接口，携带分页参数 + 搜索条件
        const data = await getWarehousingList({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          name: this.searchForm.warehouseName, // 仓库名称（后端参数名以实际为准，可调整）
          code: this.searchForm.warehouseCode, // 仓库编号（后端参数名以实际为准，可调整）
        });
        // /list 接口通常直接返回数组；若后端返回 { list, total } 结构也能兼容
        const list = Array.isArray(data) ? data : (data && data.list) || [];
        // 字段映射：把后端字段名转换成页面模板里使用的字段名（warehouseName/warehouseCode/...）
        this.tabValue = list.map((item) => ({
          id: item.id,                                   // 主键，删除时要用到
          warehouseName: item.name || item.warehouseName || "",   // 仓库名称
          warehouseCode: item.code || item.warehouseCode || "",   // 仓库编号
          remark: item.remark || "",                     // 备注
          sort: item.sort || 0,                          // 排序
          createTime: this.formatTimestamp(item.createTime), // 创建时间（毫秒时间戳 → 格式化字符串）
        }));
        // 记录总条数；接口若没返回 total 则用数组长度兜底
        this.pagination.total =
          data && data.total !== undefined ? data.total : list.length;
      } catch (err) {
        // 接口异常（如未登录/网络错误），打印日志，页面保持空表格
        console.error("获取仓库列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    // 后端 createTime 是毫秒时间戳，转成 "YYYY-MM-DD HH:mm:ss" 便于阅读
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
    },
    // ========== 搜索 ==========
    // 点击"搜索"按钮：回到第一页并重新请求
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadWarehouseList();
    },
    // ========== 重置 ==========
    // 点击"重置"按钮：清空搜索条件并重新请求
    handleReset() {
      this.searchForm = { warehouseName: "", warehouseCode: "" };
      this.pagination.pageNo = 1;
      this.loadWarehouseList();
    },
    // ========== 新增仓库 ==========
    handleAdd() {
      alert("新增仓库功能待实现");
    },
    // ========== 编辑仓库 ==========
    handleEdit(row) {
      alert(`编辑仓库：${row.warehouseName}`);
    },
    // ========== 删除仓库 ==========
    async handleDelete(row) {
      // 二次确认，避免误删
      if (!confirm(`确定要删除「${row.warehouseName}」吗？`)) return;
      try {
        // 调用后端删除接口（DELETE /wms/warehousing/delete?id=xxx）
        await deleteWarehousing(row.id);
        alert("删除成功");
        // 删除成功后刷新列表
        this.loadWarehouseList();
      } catch (err) {
        console.error("删除仓库失败", err);
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
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
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
  padding: 0 12px;
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
  padding: 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.ol-col {
  width: 140px;
  min-width: 140px;
  position: sticky;
  right: 0;
  z-index: 2;
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