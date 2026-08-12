<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="app-left-top">
            <div class="left-top-title">我的Cloud</div>
            <div class="left-top-main">
                <div class="top-main1">
                    <div style="font-size: 14px; margin-bottom: 5px;">存储空间</div>
                    <div 
                    style="width: 100%; 
                    height: 5px; 
                    border: 1px solid black; 
                    border-radius: 25px;
                    margin-bottom: 5px;
                ">
                    <div style="width: 20%; height: 100%; background-color: blue;
                    border-radius: 25px;"></div>
                </div>
                    <div style="width: 100%; display: flex; justify-content: space-between;">
                        <span style="display: inline-block; font-size: 12px;">已用872.57MB</span>
                        <span style="display: inline-block; font-size: 12px;">总计:5.00GB</span>
                    </div>
                </div>
                <div class="top-main2">
                    <div style="display: flex; align-items: center; width: 111px; height: 100%; background-color: #ccc; font-size: 12px;">
                        文件数量<br>15
                    </div>
                    <div style="display: flex; align-items: center; width: 111px; height: 100%; background-color: #ccc; font-size: 12px;">
                        共享文件<br>17
                    </div>
                </div>
            </div>
        </div>
        <div class="left-title">
          <div>文件筛选</div>
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
          <div class="left-floot">按分类筛选</div>
          <ul class="main-tab">
            <li
              v-for="(cat, index) in categories1"
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
            <span>文件名称</span>
            <input type="text" v-model="searchForm.fileName" />
          </div>
          <div class="top-w">
            <span>文件类型</span>
            <input type="text" v-model="searchForm.fileType" />
          </div>
          <div class="top-w">
            <span>所有者</span>
            <input type="text" v-model="searchForm.ownerName" />
          </div>
          <div class="top-w">
            <button class="btn" @click="handleReset">重置</button>
            <button class="btn1" @click="handleSearch">搜索</button>
            <span class="a">展开▽</span>
          </div>
        </div>
        <div class="right-tab">
          <div class="right-header">
            <div class="header-title">我都文件</div>
            <div class="header-actions">
              <button class="btn-add" @click="handleCreateFolder">新建文件夹</button>
              <button class="btn-add" @click="handleUpload">上传文件</button>
              <div class="batch-delete" aria-disabled="true">
                <span class="del-icon">🗑</span> 批量删除
              </div>
              <button class="btn-export">导出</button>
              <div class="icon-actions">
                <button class="icon-btn" title="刷新" @click="loadFileList">↻</button>
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
                  <th>名称</th>
                  <th>大小</th>
                  <th>所有者</th>
                  <th>修改时间</th>
                  <th class="op-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(file, idx) in filteredFiles" :key="file.id">
                  <td><input type="checkbox" /></td>
                  <td>{{ file.fileName }}</td>
                  <td>{{ file.fileSizeText }}</td>
                  <td>{{ file.ownerName }}</td>
                  <td>{{ file.updateTime }}</td>
                  <td class="op-col">
                    <button @click.prevent="handleOpen(file)">打开</button>
                    <button @click.prevent="handleRename(file)">重命名</button>
                    <button @click.prevent="handleFavorite(file)">{{ file.isFavorite ? "取消收藏" : "收藏" }}</button>
                    <button @click.prevent="handleShare(file)">分享</button>
                    <button @click.prevent="handleDelete(file)" style="color: red;">删除</button>
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
// ========== 导入云盘文件相关API ==========
// getFileInfoPage: 分页查询文件列表
// getFileInfo: 获取单条文件详情
// createFileInfo: 新建文件夹
// updateFileInfo: 更新文件信息
// deleteFileInfo: 删除文件
// renameFileInfo: 重命名文件
// favoriteFile: 收藏文件
// unfavoriteFile: 取消收藏
import { getFileInfoPage, deleteFileInfo, renameFileInfo, favoriteFile, unfavoriteFile } from '#/api/oa/file';

export default {
  data() {
    return {
      // ========== 左侧文件筛选分类 ==========
      categories: [
        "我的文件",
        "共享文件",
        "收藏文件",
        "最近文件",
      ],
      // 文件类型分类
      categories1: [
        "全部",
        "文档",
        "图片",
        "视频",
        "音频",
        "其他",
      ],
      // 当前选中的分类索引
      selectedCategoryIndex: 0,

      // ========== 搜索表单数据 ==========
      searchForm: {
        fileName: "",    // 文件名称
        fileType: "",    // 文件类型
        ownerName: "",   // 所有者
      },

      // ========== 分页数据 ==========
      pagination: {
        pageNo: 1,        // 当前页码
        pageSize: 10,     // 每页条数
        total: 0,         // 总记录数
      },

      // ========== 表格数据（从接口获取，初始为空） ==========
      files: [],
    };
  },

  // ========== 计算属性：根据左侧选中的分类筛选文件 ==========
  computed: {
    filteredFiles() {
      // 获取当前选中的分类名称
      const cat = this.categories[this.selectedCategoryIndex];
      // 根据不同分类筛选文件
      if (cat === "共享文件") return this.files.filter((f) => f.isShared);
      if (cat === "收藏文件") return this.files.filter((f) => f.isFavorite);
      // "我的文件"和"最近文件"返回所有
      return this.files;
    },
  },

  // ========== 页面挂载后自动加载文件列表 ==========
  mounted() {
    this.loadFileList();
  },

  methods: {
    // ========== 接口对接方法：获取文件列表 ==========
    async loadFileList() {
      try {
        // 调用分页查询接口，传入页码、每页条数和搜索条件
        const data = await getFileInfoPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          fileName: this.searchForm.fileName,
          fileType: this.searchForm.fileType,
          ownerName: this.searchForm.ownerName,
        });

        // 将接口返回的数据转换为页面需要的格式
        // 接口字段 -> 页面字段映射：
        // id -> id（文件ID）
        // fileName -> fileName（文件名称）
        // fileType -> fileTypeText（文件类型：0=文件夹，1=文件）
        // fileSize -> fileSizeText（文件大小，字节转可读格式）
        // ownerName -> ownerName（所有者姓名）
        // updateTime -> updateTime（修改时间，接口返回字符串格式）
        // isShared -> isShared（是否共享）
        // isFavorite -> isFavorite（是否收藏）
        this.files = data.list.map((item) => ({
          id: item.id,
          fileName: item.fileName || "",
          fileTypeText: item.fileType === 0 ? "文件夹" : "文件",
          fileSizeText: this.formatFileSize(item.fileSize),
          ownerName: item.ownerName || "",
          updateTime: item.updateTime || item.createTime || "",
          isShared: item.isShared || false,
          isFavorite: item.isFavorite || false,
        }));

        // 更新总记录数
        this.pagination.total = data.total;
      } catch (err) {
        // 接口调用失败时打印错误信息
        console.error("获取文件列表失败", err);
      }
    },

    // ========== 工具方法：文件大小格式化 ==========
    // 将字节数转换为可读格式（B/KB/MB/GB）
    formatFileSize(bytes) {
      if (!bytes || bytes === 0) return "-";
      if (bytes < 1024) return bytes + " B";
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
      if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + " MB";
      return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    },

    // ========== 左侧分类切换 ==========
    selectCategory(index) {
      this.selectedCategoryIndex = index;
    },

    // ========== 搜索按钮 ==========
    handleSearch() {
      // 搜索时重置到第一页
      this.pagination.pageNo = 1;
      this.loadFileList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      // 清空搜索条件
      this.searchForm = { fileName: "", fileType: "", ownerName: "" };
      // 重置到第一页
      this.pagination.pageNo = 1;
      this.loadFileList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadFileList();
    },

    // ========== 新建文件夹 ==========
    handleCreateFolder() {
      // TODO: 弹出输入框，输入文件夹名称后调用createFileInfo
      const name = prompt("请输入文件夹名称");
      if (!name) return;
      alert("新建文件夹功能待实现：" + name);
    },

    // ========== 上传文件 ==========
    handleUpload() {
      // TODO: 打开文件选择器，调用uploadFile接口
      alert("上传文件功能待实现");
    },

    // ========== 打开文件/文件夹 ==========
    handleOpen(file) {
      if (file.fileTypeText === "文件夹") {
        // TODO: 进入文件夹，调用getFileInfoListByParentId
        alert(`打开文件夹：${file.fileName}`);
      } else {
        // TODO: 下载或预览文件
        alert(`打开文件：${file.fileName}`);
      }
    },

    // ========== 重命名文件 ==========
    async handleRename(file) {
      const newName = prompt("请输入新名称", file.fileName);
      if (!newName || newName === file.fileName) return;
      try {
        await renameFileInfo(file.id, newName);
        alert("重命名成功");
        this.loadFileList();
      } catch (err) {
        console.error("重命名失败", err);
      }
    },

    // ========== 收藏/取消收藏 ==========
    async handleFavorite(file) {
      try {
        if (file.isFavorite) {
          await unfavoriteFile(file.id);
          alert("已取消收藏");
        } else {
          await favoriteFile(file.id);
          alert("已收藏");
        }
        this.loadFileList();
      } catch (err) {
        console.error("收藏操作失败", err);
      }
    },

    // ========== 分享文件 ==========
    handleShare(file) {
      // TODO: 打开分享弹窗，调用shareFile接口
      alert(`分享文件：${file.fileName}`);
    },

    // ========== 删除文件 ==========
    async handleDelete(file) {
      // 弹出确认框，防止误删
      if (!confirm(`确定要删除文件「${file.fileName}」吗？`)) return;
      try {
        // 调用删除接口
        await deleteFileInfo(file.id);
        alert("删除成功");
        // 删除成功后重新加载列表
        this.loadFileList();
      } catch (err) {
        console.error("删除文件失败", err);
      }
    },
  },
};
</script>

<style scoped>
.left-floot{
    width: 100%;
    height: 32px;
    font-size: 12px;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
}
.app-left-top{
    width: 100%;
    height: 179px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 5px;
}
.left-top-title{
    width: 100%;
    height: 38px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
}
.left-top-main{
    width: 100%;
    height: 140px;
    padding: 12px;
}
.top-main1{
    width: 100%;
    height: 56px;
    /* border: 1px solid red; */
    margin-bottom: 12px;
}
.top-main2{
    width: 100%;
    height: 48px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}
/* _____________________________ */
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
  border: 0;
  color: #2b88ff;
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
