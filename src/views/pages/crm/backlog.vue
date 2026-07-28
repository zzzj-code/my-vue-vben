<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <ul class="left-nav">
          <li>今日需联系客户</li>
          <li>分配给我的线索</li>
          <li>分配给我的客户</li>
          <li>待进入公海的客户</li>
          <li>待审核合同</li>
          <li>待审核回款</li>
          <li>待回款提醒</li>
          <li>即将到期的合同</li>
        </ul>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-inp">
            <div>
              <span>状态</span>
              <input type="text" placeholder="今日需练习" />
            </div>
            <div>
              <span>归属</span>
              <input type="text" placeholder="我负责的" />
            </div>
            <div>
              <button>重置</button>
              <button>搜索</button>
              收起▽
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-tab">
            <table>
              <thead>
                <tr>
                  <th class="col-name">客户名称</th>
                  <th>客商主编码</th>
                  <th>客户来源</th>
                  <th>客户联系人</th>
                  <th>手机</th>
                  <th>电话</th>
                  <th>邮箱</th>
                  <th>客户级别</th>
                  <th>客户行业</th>
                  <th>下次联系时间</th>
                  <th>备注</th>
                  <th>锁定状态</th>
                  <th>成交状态</th>
                  <th>最后跟进时间</th>
                  <th>最后跟进记录</th>
                  <th>地址</th>
                  <th>客户网址</th>
                  <th>客户规模</th>
                  <th>客户价值</th>
                  <th>客户状态</th>
                  <th>距离进入公海天数</th>
                  <th>负责人</th>
                  <th>所属部门</th>
                  <th>更新时间</th>
                  <th>创建时间</th>
                  <th>创建人</th>
                  <th class="ol-col">操作</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="main-floot">共0条记录<span>20条/页</span></div>
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
  display: flex;
}
.app-left {
  width: 184px;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 20px;
}
.left-nav {
  list-style: none;
}
.left-nav li {
  width: 136px;
  min-height: 51px;
  border-bottom: 1px solid #ccc;
  padding: 15px 24px;
  font-size: 14px;
  cursor: pointer;
}
.left-nav li:last-child {
  border: 0;
}
.left-nav li:hover {
  background-color: #e9e9e9;
}
.app-right {
  width: 802px;
  height: 100%;
  /* border: 1px solid red; */
}
.right-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 259px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  margin-right: 8px;
  text-align: right;
  font-size: 14px;
}
.top-inp div input {
  width: 194px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  font-size: 14px;
  color: #006be6;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.right-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-tab {
  width: 100%;
  height: 440px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 3px;
}
</style>
