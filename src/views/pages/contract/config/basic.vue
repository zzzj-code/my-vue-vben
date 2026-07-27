<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-title">编号规则<span>示例：HT20260727001</span></div>
        <div class="top-main">
          <div class="main-form">
            <div>
              <span>编号前缀：</span>
              <input type="text" placeholder="HT" />
            </div>
            <div>
              <span>日期格式：</span>
              <input type="text" placeholder="yyyMMdd(年月日)" />
            </div>
            <div>
              <span>流水号位数：</span>
              <input type="text" placeholder="3" />
            </div>
          </div>
        </div>
      </div>
      <div class="app-center">
        <div class="top-title">编号规则<span></span></div>
        <div class="center-main">
          <div class="main-form1">
            <div>
              <span>到期提醒：</span>
              <button>开启</button>
            </div>
            <div>
              <span>提前提醒天数：</span>
              <input type="text" placeholder="30" />
            </div>
          </div>
        </div>
      </div>
      <div class="app-floot">
        <div class="top-title">签署配置<span></span></div>
        <div class="floot-btn">
            <span>签署环节：</span>
            <button>开启</button>
        </div>
      </div>
      <div class="btn1"><button>保存配置</button></div>
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
  height: 731px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 273px;
  background-color: #fff;
  border-radius: 10px;
}
.top-title {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.top-title span {
  font-size: 12px;
  font-weight: lighter;
}
.top-main {
  width: 100%;
  height: 217px;
  padding: 24px;
}
.main-form {
  width: 560px;
  height: 144px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
}
.main-form div {
  width: 100%;
  height: 32px;
  /* border: 1px solid red; */
}
.main-form div span {
  display: inline-block;
  width: 140px;
  height: 100%;
  text-align: right;
  font-size: 14px;
}
.main-form div input {
  width: 280px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.app-center {
  width: 100%;
  height: 217px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
}
.center-main {
  width: 100%;
  height: 161px;
  padding: 24px;
}
.main-form1 {
  width: 560px;
  height: 88px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
}
.main-form1 div {
  width: 100%;
  height: 32px;
}
.main-form1 div span {
  display: inline-block;
  width: 140px;
  height: 100%;
  text-align: right;
  font-size: 14px;
}
.main-form1 div input {
  width: 280px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.app-floot{
    width: 100%;
    height: 161px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 10px;
}
.floot-btn{
    /* width: ; */
    margin-top: 30px;
    margin-left: 100px;
    font-size: 14px;
}
.btn1{
    width: 100%;
    height: 32px;
    margin-top: 10px;
    text-align: right;
}
.btn1 button{
    width: 88px;
    height: 32px;
    border: 0;
    border-radius: 10px;
    background-color: blue;
    color: #fff;
}
</style>
