<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-title">
        <!-- 使用 v-for 动态渲染，并绑定点击事件 -->
        <div
          v-for="item in tabs"
          :key="item.key"
          class="tab-item"
          :class="{ active: currentTab === item.key }"
          @click="switchTab(item.key)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="app-top">
        <div>
          <span>工单编号</span>
          <input type="text" placeholder="请输入工单编号" />
        </div>
        <div>
          <span>工单标题</span>
          <input type="text" placeholder="请输入工单标题" />
        </div>
        <div>
          <span>工单分类</span>
          <input type="text" placeholder="请输入工单分类" />
        </div>
        <div>
          <button>重置</button>
          <button>搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>工单池</div>
          <div><button>🔍</button></div>
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
                <th>
                    <div>工单编号</div>
                </th>
                <th>
                    <div>工单标题</div>
                </th>
                <th>
                    <div>工单状态</div>
                </th>
                <th>
                    <div>工单分类</div>
                </th>
                <th>
                    <div>优先级</div>
                </th>
                <th>
                    <div>SLA 响应</div>
                </th>
                <th>
                    <div>SLA 解决</div>
                </th>
                <th>
                    <div>处理人</div>
                </th>
                <th>
                    <div>申请人</div>
                </th>
                <th>
                    <div>提交时间</div>
                </th>
                <th class="ol-col">
                    <div>操作</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <div class="asd">暂无数据</div>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{tabValue.length}}条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: [
        
      ],
      // 当前选中的 tab
      currentTab: "aaf",
      // tab 列表
      tabs: [
        { key: "aaf", label: "待接单" },
        { key: "draft", label: "我处理的" },
        { key: "all", label: "全部" },
      ],
    };
  },
  methods: {
    switchTab(key) {
      this.currentTab = key;
    },
  },
};
</script>

<style scoped>
.asd{
    position: absolute;
    top: 60%;
    left: 45%;
    font-size: 14px;
    color: #ccc;
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
  height: 650px;
  margin-bottom: 20px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-title {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-left: 16px;
}
.app-title .tab-item {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  padding: 0 4px;
  transition: all 0.3s ease;
}
.app-title .tab-item:hover {
  color: #1890ff;
}
.app-title .tab-item.active {
  color: #1890ff;
  font-weight: 600;
  border-bottom: 2px solid #1890ff;
}
.app-top {
  width: 100%;
  height: 86px;
  padding: 12px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
.app-top div {
  width: 243px;
  height: 42px;
  /* border: 1px solid red; */
  margin-top: 20px;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-right: 8px;
}
.app-top div input {
  width: 133px;
  height: 32px;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div:last-child {
  color: #006be6;
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
}
.app-top div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.app-top div button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 444px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:first-child {
  width: 84%;
  height: 100%;
}
.main-top div:nth-child(2) {
  width: 4%;
  height: 100%;
  /* border: 1px solid red; */
}
.main-top div:last-child {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.main-top div:nth-child(2) button {
  width: 30px;
  height: 30px;
  background-color: #006be6;
  border: 0;
  border-radius: 50%;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.main-tab {
  width: 100%;
  height: 355px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.main-tab table {
  width: max-content;
  min-width: 1320px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
  font-size: 14px;
}
.main-tab th,
.main-tab td {
  padding: 0 12px;
  white-space: nowrap;
  text-align: left;
}
.main-tab th {
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #f7f4f4;
  text-align: center;
}
.main-tab th div{
    padding: 0 8px;
    border-right: 1px solid #ccc;
}
.main-tab td {
  height: 40px;
  font-size: 13px;
}
.ol-col{
    width: 140px;
    position: sticky;
    right: 0;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
}
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  text-align: center;
  border: 1px solid #ccc;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
