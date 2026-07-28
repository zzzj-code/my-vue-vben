<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>分类名称</span>
            <input type="text" placeholder="请输入分类名称" />
          </div>
          <div></div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div></div>
          <div>
            <button>+新增分类</button>
            <button>展开</button>
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
                        <th>分类名称</th>
                        <th>分类编号</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>普通分类</td>
                        <td>1</td>
                        <td>2023-12-05 14:54:34</td>
                        <td>+新增下级&nbsp;&nbsp;编辑&nbsp;&nbsp;删除</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

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
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
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
  color: #006be6;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  margin-right: 8px;
  text-align: right;
  color: black;
}
.top-inp div input {
  width: 200px;
  height: 32px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
}
.top-inp div:last-child {
  text-align: right;
  font-size: 14px;
}
.top-inp div:last-child button:first-child {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div:last-child button:last-child {
  width: 63px;
  height: 32px;
  color: #fff;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  margin-right: 10px;
}
.app-main {
  width: 100%;
  height: 494px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.main-top div:first-child {
  width: 67%;
}
.main-top div:nth-child(2) {
  width: 23%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
}
.main-top div:nth-child(2) button {
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.main-top div:nth-child(2) button:first-child {
  width: 106px;
  height: 32px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
  height: 32px;
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
  justify-content: space-between;
  align-items: center;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-tab th {
  height: 40px;
  background-color: #e6e1e1;
  border-right: 1px solid #ccc;
  min-width: 60px; 
  max-width: 200px; 
  white-space: nowrap;
  padding: 0 12px;
}
.main-tab td{
    height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    font-size: 14px;
}
.main-tab tr:hover{
    background-color: #e6e6e6;
}
</style>
