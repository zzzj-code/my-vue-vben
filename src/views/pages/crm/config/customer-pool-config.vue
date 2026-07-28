<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">客户公海规则设置</div>
      <div class="app-main">
        <div class="main-inp">
          <div>
            <span>客户公海规则设置</span>
            <label>
              <input type="radio" name="gender1" checked />
              开启
            </label>
            <label>
              <input type="radio" name="gender1"/>
              关闭
            </label>
          </div>
          <div>
            <span>未跟进天数</span>
            <input type="text" value="31">
          </div>
          <div>
            <span>未成交天数</span>
            <input type="text" value="5">
          </div>
          <div>
            <span>提前提醒设置</span>
            <label>
              <input type="radio" name="gender" checked />
              开启
            </label>
            <label>
              <input type="radio" name="gender"/>
              关闭
            </label>
          </div>
          <div>
            <span>提前提醒天数</span>
            <input type="text" value="2">
          </div>
          <div>
            <button>重置</button>
            <button>提交</button>
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
  width: 1006px;
  height: 383px;
  position: absolute;
  top: -375px;
  background-color: #fff;
  border-radius: 10px;
}
.app-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.app-main {
  width: 100px;
  height: 326px;
  padding: 24px;
}
.main-inp {
  width: 720px;
  height: 278px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.main-inp div {
  width: 100%;
  height: 40px;
  /* border: 1px solid red; */
}
.main-inp div span{
    display: inline-block;
    width: 120px;
    height: 26px;
    font-size: 14px;
    text-align: right;
    margin-right: 8px;
}
.main-inp div input{
    width: 580px;
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
}
.main-inp div:first-child input,
.main-inp div:nth-child(4) input{
    width: 15px;
    height: 15px;
}
.main-inp div:last-child{
    text-align: right;
}
.main-inp div:last-child button:first-child{
    width: 63px;
    height: 32px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 10px;
}
.main-inp div:last-child button:last-child{
    width: 63px;
    height: 32px;
    border: 0;
    color: #fff;
    background-color: #006be6;
    border-radius: 10px;
}

</style>
