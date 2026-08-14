<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>公众号</span>
            <input type="text" placeholder="1" v-model="searchForm.accountId" />
          </div>
          <div>
            
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
          <div class="top-1">
            <div class="top-1-1">
                <div class="top-item" :class="{active: currentType === 'image'}" @click="switchType('image')">图片</div>
                <div class="top-item" :class="{active: currentType === 'voice'}" @click="switchType('voice')">语音</div>
                <div class="top-item" :class="{active: currentType === 'video'}" @click="switchType('video')">视频</div>
            </div>
          </div>
          <div>
            <button @click="handleUpload">+点击上传</button>
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
                <th><div class="th-cell">编号</div></th>
                <th><div class="th-cell">文件名</div></th>
                <th><div class="th-cell">图片</div></th>
                <th><div class="th-cell">上传时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td><img :src="item.url" style="width:40px;height:40px" v-if="item.url" /></td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleDelete(item)">删除</button>
                </td>
              </tr>
              <tr v-if="tabValue.length === 0">
                <td colspan="5"><div class="asd">暂无数据</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div class="left-info">
            共{{ pagination.total }}条记录
            <span>{{ pagination.pageSize }}条/页</span>
          </div>
          <div style="float: right;">
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">></button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入公众号素材相关API ==========
import { getMaterialPage, deletePermanentMaterial } from '#/api/mp/material';

export default {
  data() {
    return {
      // 当前素材类型
      currentType: 'image',
      // 搜索表单
      searchForm: {
        accountId: '',
      },
      // 分页数据
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    // 加载列表
    async loadList() {
      try {
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          type: this.currentType,
        };
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        const data = await getMaterialPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          name: item.name || '',
          url: item.url || '',
          createTime: item.createTime || '',
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 切换素材类型
    switchType(type) {
      this.currentType = type;
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // 搜索
    handleSearch() { this.pagination.pageNo = 1; this.loadList(); },
    // 重置
    handleReset() {
      Object.keys(this.searchForm).forEach((key) => { this.searchForm[key] = ''; });
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // 分页
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
    // 上传
    handleUpload() { alert('上传功能待实现'); },
    // 删除
    async handleDelete(item) {
      if (!confirm('确定要删除该素材吗？')) return;
      try {
        await deletePermanentMaterial(item.id);
        alert('删除成功');
        this.loadList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
  },
};
</script>

<style scoped>
.asd{
    position: absolute;
    top: 61%;
    left: 45%;
}
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
.main-top .top-1 {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
}
.main-top .top-1 .top-1-1{
    /* 删掉 width:100%; 不要占满父容器 */
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
    flex-shrink: 0;
}
.top-1-1 .top-item{
    /* width: 84px; */
    padding:0 24px;
    height: 100%;
    margin-right: 0;
    display:flex;
    align-items:center;
    position:relative;
    cursor:pointer;
    white-space: nowrap;
}
/* 激活态下划线，第一个tab激活 */
.top-1-1 .top-item:first-child::after{
    content:"";
    position:absolute;
    bottom:-1px;
    left:0;
    width:100%;
    height:3px;
    background:#006be6;
}
.main-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 146px;
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
  height: 380px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 10px;
}
.main-tab table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
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
  width: 46px;
  min-width: 80px;
  position: sticky;
  right: 0;
  /* box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08); */
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
