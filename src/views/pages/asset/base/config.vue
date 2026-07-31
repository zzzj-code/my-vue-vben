<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">资产模块配置<button>保存</button></div>
      <div class="app-main">
        <form action="">
          <div>
            <span>编号前缀：</span>
            <input type="text" placeholder="ZC" />
          </div>
          <div>
            <span>日期格式：</span>
            <input type="text" placeholder="yyyyMMdd" />
          </div>
          <div>
            <span>序号长度：</span>
            <input type="text" placeholder="4" />
          </div>
          <div>
            <span>启用折旧：</span>
            <label class="switch">
              <input type="checkbox" checked/>
              <span class="slider" style="width: 44px; height: 22px;"></span>
            </label>
          </div>
          <div>
            <span>默认使用年份(月)：</span>
            <input type="text" placeholder="60" />
          </div>
          <div>
            <span>默认残值率(%)：</span>
            <input type="text" placeholder="5.00" />
          </div>
          <div>
            <span>保修提醒天数：</span>
            <input type="text" placeholder="30" />
          </div>
          <div>
            <span>借用逾期提醒：</span>
            <label class="switch">
              <input type="checkbox" checked/>
              <span class="slider" style="width: 44px; height: 22px;"></span>
            </label>
          </div>
          <div>
            <span>短链基地址：</span>
            <input type="text" placeholder="......" />
          </div>
          <div>
            <span>允许扫码建档：</span>
            <label class="switch">
              <input type="checkbox" checked/>
              <span class="slider" style="width: 44px; height: 22px;"></span>
            </label>
          </div>
          <div>
            <span>建档自动生成二维码：</span>
            <label class="switch">
              <input type="checkbox" checked/>
              <span class="slider" style="width: 44px; height: 22px;"></span>
            </label>
          </div>
        </form>
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
  height: 787px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.app-top button {
  width: 63px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}
.app-main {
  width: 100%;
  height: 730px;
  padding: 24px;
}
form {
  width: 720px;
  height: 658px;
}
form div {
  width: 100%;
  height: 32px;
  margin-bottom: 20px;
}
form div span {
  display: inline-block;
  width: 180px;
  height: 32px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
form div input {
  width: 420px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* 滑块轨道 */
.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  border-radius: 24px;
  transition: all 0.3s;
}

/* 滑块圆点 */
.slider::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  bottom: 1px;
  background: #fff;
  border-radius: 50%;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* 选中状态 */
.switch input:checked + .slider {
  background: #006be6;
}

.switch input:checked + .slider::before {
  transform: translateX(24px);
}

/* 禁用状态 */
.switch input:disabled + .slider {
  background: #e8e8e8;
  cursor: not-allowed;
}

.switch-label {
  font-size: 14px;
  color: #666;
  user-select: none;
}
</style>
