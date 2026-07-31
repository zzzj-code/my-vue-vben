<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">资产统计报表</div>
      <div class="app-main">
        <div class="main-nav">
          <div class="nav-tab">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ active: currentTab === index }"
              @click="currentTab = index"
            >
              {{ tab }}
            </div>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>数量</th>
                <th>金额(原值合计)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3">暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      tabs: ["分类统计", "部门统计", "状态统计", "折旧统计"],
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
  width: 1014px;
  height: 357px;
  position: absolute;
  top: -380px;
  background-color: #fff;
  border-radius: 10px;
}
.app-top {
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #ccc;
}
.app-main {
  width: 100%;
  height: 300px;
  padding: 24px;
}
.main-nav {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.nav-tab {
  width: 320px;
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-tab div {
  width: max-content;
  height: 100%;
  color: #918f8f;
  margin-right: 10px;
  font-size: 14px;
  padding-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}
.nav-tab div:hover {
  color: #333;
}
.nav-tab div.active {
  color: #000;
  font-weight: 500;
}
.nav-tab div.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #006be6;
  border-radius: 2px;
}
.main-tab {
  width: 100%;
  height: 190px;
}
.main-tab table {
  width: 100%;
  height: 100%;
  font-size: 14px;
  border-collapse: separate;
  border-spacing: 0;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #eeeded;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child{
    border-right: 0;
}
.main-tab td{
    text-align: center;
    border-bottom: 1px solid #ccc;
}
</style>
