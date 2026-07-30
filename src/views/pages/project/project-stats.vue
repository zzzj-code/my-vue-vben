<template>
  <div class="title">项目统计看板</div>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-box">
          <div class="box1">
            <div>项目总数</div>
            <div>4</div>
          </div>
          <div class="box1">
            <div>进行中</div>
            <div style="color: greenyellow">0</div>
          </div>
          <div class="box1">
            <div>已完成</div>
            <div style="color: blue">0</div>
          </div>
          <div class="box1">
            <div>逾期项目</div>
            <div style="color: red">0</div>
          </div>
        </div>
        <div class="top-cen">
          <div class="cen-left">
            <div class="left-top">任务完成率</div>
            <div class="left-main">
              <div class="left-main-1">
                <div class="progress-ring">
                  <div class="progress-circle">
                    <span>9%</span>
                  </div>
                </div>
              </div>
              <div class="left-main-2">4 / 46 个任务已完成，逾期 30 个</div>
            </div>
          </div>
          <div class="cen-right">
            <div class="right-top">预算使用率</div>
            <div class="right-main">
              <div class="right-main-1">
                <div class="progress-ring1">
                  <div class="progress-circle">
                    <span>28%</span>
                  </div>
                </div>
              </div>
              <div class="right-main-2">
                ¥450,000 / ¥1,625,000 （预算明细汇总）
              </div>
            </div>
          </div>
        </div>
        <div class="top-floot">
            <div class="floot-top">项目进度对比</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.title {
  position: absolute;
  top: 1px;
  left: -0.2px;
  width: 1030px;
  height: 69px;
  background-color: #fff;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 600;
}
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}
.app {
  width: 1014px;
  /* height: 680px; */
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 1354px;
  margin-top: 70px;
  padding: 10px;
}
.top-box {
  width: 100%;
  height: 113px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
.top-box .box1 {
  width: 231px;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
}
.top-box .box1 div:first-child {
  font-size: 14px;
}
.top-box .box1 div:last-child {
  font-size: 24px;
  color: #006be6;
}
.top-cen {
  width: 100%;
  height: 351px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cen-left {
  width: 483px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.cen-left .left-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.right-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.left-main {
  width: 100%;
  height: 294px;
  padding: 24px;
}
.right-main {
  width: 100%;
  height: 294px;
  padding: 24px;
}
.left-main-1 {
  width: 100%;
  height: 224px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-main-1 {
  width: 100%;
  height: 224px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-ring {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: conic-gradient(
    #f44 0deg,
    #f44 32.4deg,
    #f0f0f0 32.4deg,
    #f0f0f0 360deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-ring1 {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: conic-gradient(
    rgb(68, 255, 146) 100deg,
    #f0f0f0 32.4deg,
    #f0f0f0 360deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: #333;
}
.left-main-2 {
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
}
.right-main-2 {
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
}
.cen-right {
  width: 483px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.top-floot{
    width: 100%;
    height: 405px;
    background-color: #fff;
    border-radius: 10px;
}
.floot-top{
    width: 100%;
    height: 56px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
</style>
