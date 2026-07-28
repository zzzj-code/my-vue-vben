<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-box">
          <div>
            <span>线索名称</span>
            <input type="text" placeholder="请输入线索名称" />
          </div>
          <div>
            <span>转化状态</span>
            <label>
              <input type="radio" name="gender" value="male" checked /> 未转化
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> 已转化
            </label>
          </div>
          <div>
            <span>手机号</span>
            <input type="text" placeholder="请输入手机号" />
          </div>
          <div>
            <span>电话</span>
            <input type="text" placeholder="请输入电话" />
          </div>
          <div>
            <span>创建时间</span>
            <input type="text" placeholder=">" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">
            <div class="top-tab">
              <div
                :class="{ active: activeTab === 'mine' }"
                @click="activeTab = 'mine'"
              >
                我负责的
              </div>
              <div
                :class="{ active: activeTab === 'participate' }"
                @click="activeTab = 'participate'"
              >
                我参与的
              </div>
              <div
                :class="{ active: activeTab === 'subordinate' }"
                @click="activeTab = 'subordinate'"
              >
                下属负责的
              </div>
            </div>
          </div>
          <div class="top-2">
            <button>+新增线索</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
                <tr>
                    <th class="col-name">线索名称</th>
                    <th>线索来源</th>
                    <th>手机</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>地址</th>
                    <th>客户行业</th>
                    <th>客户级别</th>
                    <th>下次联系时间</th>
                    <th>备注</th>
                    <th>最后跟进时间</th>
                    <th>最后跟进记录</th>
                    <th>负责人</th>
                    <th>所属部门</th>
                    <th>更新时间</th>
                    <th>创建时间</th>
                    <th class="ol-col">操作</th>
                </tr>
            </thead>
          </table>
        </div>
        <div class="main-floot">共1条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "mine",
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
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 128px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-box {
  width: 100%;
  height: 84px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.top-box div {
  flex: 0 0 calc(33.333% - 10px);
  height: 42px;
  /* border: 1px solid red; */
}
.top-box div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
}
.top-box div input {
  width: 200px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-box div:nth-child(2) input {
  width: 10px;
  height: 10px;
}
.top-box div:last-child {
  display: flex;
  justify-content: space-between;
  padding-left: 130px;
  font-size: 14px;
  color: #006be6;
  align-items: center;
}
.top-box div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.top-box div:last-child button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-box div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 452px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 77px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-1 {
  width: 65%;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.top-tab {
  width: 246px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.top-tab div {
  width: 76px;
  height: 100%;
  /* border: 1px solid red; */
  font-size: 14px;
  /* color: #ccc; */
  display: flex;
  align-items: center;
  cursor: pointer;
}
.active {
  color: black;
  font-weight: 500;
  border-bottom: 1px solid #006be6;
}
.top-2 {
  width: 25%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding-right: 10px;
}
.top-2 button {
  height: 32px;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.top-2 button:first-child {
  width: 106px;
}
.top-2 button:nth-child(2) {
  width: 78px;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.top-3 {
  width: 10%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
}

.main-tab {
  width: 100%;
  height: 331px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
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
.col-name{
    position: sticky;
    left: 0;
}
.ol-col{
    position: sticky;
    right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  /* border: 1px solid red; */
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 3px;
  text-align: center;
}
</style>
