<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-a">
          <div class="nav">
            <div class="nav-1">
              <div
                :class="{ active: activeTab === 'customer' }"
                @click="switchTab('customer')"
              >
                拥有客户数限制
              </div>
              <div
                :class="{ active: activeTab === 'locked' }"
                @click="switchTab('locked')"
              >
                锁定客户数限制
              </div>
            </div>
          </div>
        </div>
        <div class="top-b">
          <button>+新增规则</button>
        </div>
        <div class="top-c">
          <button>⟳</button>
          <button>⛶</button>
          <button>⊞</button>
        </div>
      </div>
      <div class="app-main">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>规则适用人群</th>
                    <th>规则适用部门</th>
                    <th>拥有客户数上限</th>
                    <th>成交客户是否占用拥有客户数</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
        </table>
      </div>
      <div class="app-floot">共0条记录<span>20条/页</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "customer",
    };
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
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
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -375px;
  padding: 0 10px;
}
.app-top {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
}
.app-top .top-a {
  width: 75%;
  height: 62px;
}
.nav {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.nav-1 {
  width: 228px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-1 div {
  width: 98px;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer; /* 添加鼠标指针样式 */
  transition: all 0.3s ease; /* 平滑过渡 */
}
.nav-1 div:hover {
  color: #006be6; /* 悬停效果 */
}
.active {
  font-weight: 600;
  color: #006be6; /* 激活状态文字颜色 */
  border-bottom: 2px solid #006be6; /* 修复下划线样式 */
}
.app-top .top-b {
  width: 15%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-b button {
  width: 106px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  cursor: pointer;
}
.top-b button:hover {
  background-color: #0052b3;
}
.app-top .top-c {
  width: 10%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-c button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-c button:hover {
  background-color: #f0f0f0;
}

.app-main {
  width: 100%;
  height: 469px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.app-main table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
}
.app-main th {
  height: 56px;
  background-color: #e6e1e1;
  border-right: 1px solid #ccc;
  min-width: 60px;
  max-width: 200px;
  white-space: nowrap;
  padding: 0 12px;
}
.app-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  /* border: 1px solid red; */
  font-size: 12px;
}
.app-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
