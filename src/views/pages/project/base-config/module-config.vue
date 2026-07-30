<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        能力包管理(租户级)<span
          >关闭后，项目台账详情页对应 Tab 将对本租户隐藏（项目类型配置 /
          项目级配置可覆盖）</span
        >
      </div>
      <div class="app-main">
        <div class="main-box" v-for="value in 8">
          <div class="module-card">
            <div class="card-head">
              <div>
                <div class="module-title">成本核算<span class="status-badge">已落地</span></div>
                <div class="module-subtitle">cost</div>
              </div>
              <div class="module-status">
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div class="card-body">
              <div class="module-desc">工时归集、预算基线与盈利分析</div>
              <div class="module-tip">启用效果：显示「工时记录」「预算/成本」「盈利分析」Tab</div>
            </div>
          </div>
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
  width: 1014px;
  height: 620px;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.app-top span {
  font-size: 12px;
  font-weight: lighter;
}
.app-main {
  width: 100%;
  height: 534px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.main-box{
    flex: 0 0 calc(33.333% - 16px);
}
.module-card{
    width: 100%;
    min-height: 130px;
    padding: 16px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-head{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}
.module-title{
    font-size: 16px;
    font-weight: 700;
    color: #111827;
}
.module-subtitle{
    margin-top: 6px;
    font-size: 12px;
    color: #6b7280;
}
.module-status{
    display: flex;
    align-items: center;
    gap: 10px;
}
.status-badge{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    padding: 4px 8px;
    border-radius: 12px;
    background-color: #e6ffed;
    color: #15803d;
    font-size: 12px;
    font-weight: 600;
}
.switch{
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}
.switch input{
    opacity: 0;
    width: 0;
    height: 0;
}
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d1d5db;
    border-radius: 999px;
    transition: 0.2s ease;
}
.slider:before{
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s ease;
}
.switch input:checked + .slider{
    background-color: #2563eb;
}
.switch input:checked + .slider:before{
    transform: translateX(20px);
}
.card-body{
    margin-top: 12px;
}
.module-desc{
    font-size: 14px;
    color: #374151;
    margin-bottom: 8px;
}
.module-tip{
    font-size: 13px;
    color: #2563eb;
    line-height: 1.6;
}
</style>
