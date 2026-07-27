<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <input type="text" placeholder="搜索模板名称" />
          <input type="text" placeholder="合同类型" />
          <input type="text" placeholder="状态" />
          <button>重置</button>
        </div>
        <div>
          <button>刷新</button>
          <button>+新增模板</button>
        </div>
      </div>
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
      <div class="app-main">
        <div class="main-box" v-for="value in 7">
          <div class="a"><span>销售合同</span></div>
          <div class="b">
            <div>111</div>
            <div>销售合同·v2·引用0</div>
            <div>暂无说明</div>
          </div>
          <div class="c">
            <div>
              <button>起草</button>
              <button>配置</button>
              <button>预览</button>
              <button>编辑</button>
            </div>
            <div><button>删除</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前选中的 tab
      currentTab: "all",
      // tab 列表
      tabs: [
        { key: "all", label: "全部" },
        { key: "draft", label: "销售合同" },
        { key: "signing", label: "劳动合同" },
        { key: "effective", label: "软件销售" },
        { key: "performing", label: "框架协议" },
        { key: "completed", label: "租聘合同" },
        { key: "terminated", label: "设备采购" },
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
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 32px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.app-top div:first-child {
  width: 650px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-top div:first-child input {
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.app-top div:first-child input:first-child {
  width: 220px;
}
.app-top div:first-child input:nth-child(2) {
  width: 150px;
}
.app-top div:first-child input:last-child {
  width: 120px;
}
.app-top div:first-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.app-top div:last-child {
  width: 173px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.app-top div:last-child button {
  height: 32px;
  border-radius: 10px;
}
.app-top div:last-child button:first-child {
  width: 63px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.app-top div:last-child button:last-child {
  width: 101px;
  border: 0;
  background-color: blue;
  color: #fff;
}

.app-title {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-left: 16px;
  margin-bottom: 10px;
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

.app-main {
  width: 100%;
  height: 625px;
  /* border: 1px solid red; */
  padding: 4px 2px 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.main-box {
  flex: 0 0 calc(25% - 12px);
  height: 298px;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.main-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(40, 123, 231, 0.116);
  /* border: 1px solid blue; */
}
.main-box .a {
  width: 100%;
  height: 150px;
  /* border: 1px solid red; */
}
.a span {
  display: inline-block;
  width: 64px;
  height: 22px;
  text-align: center;
  border: 1px solid blue;
  background-color: #446df5a2;
  font-size: 12px;
  border-radius: 5px;
  color: blue;
  margin-left: 5px;
  margin-top: 3px;
}
.main-box .b {
  width: 100%;
  height: 83px;
  padding: 10px 12px 4px;
  /* border: 1px solid red; */
  font-size: 12px;
}
.b div {
  margin-bottom: 5px;
}
.main-box .c {
  width: 100%;
  height: 63px;
  font-size: 14px;
  padding: 4px 8px 8px;
  /* border: 1px solid red; */
}
.c div {
  text-align: right;
}
.c div:last-child button {
  color: red;
}
.c div button {
  width: 44px;
  height: 24px;
  border: 0;
  color: blue;
  background-color: #fff;
}
</style>
