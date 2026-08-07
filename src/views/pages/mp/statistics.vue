<template>
    <div class="page-wrapper">
        <div class="app">
            <div class="app-top">
                <div>
                    <span>公众号</span>
                    <input type="text">
                </div>
                <div>
                    <span>时间范围</span>
                    <input type="text">
                </div>
                <div></div>
                <div>
                    <button>重置</button>
                    <button>提交</button>
                </div>
            </div>
            <div class="app-main">
                <div class="a">
                    <div>用户增减数据</div>
                </div>
                <div class="a">
                    <div>累计用户数据</div>
                </div>
                <div class="a">
                    <div>消息发送概况数据</div>
                </div>
                <div class="a">
                    <div>接口分析数据</div>
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
  background-color: #ffffff;
  position: absolute;
  top: -375px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 15px;
}
.app-top{
    width: 100%;
    height: 98px;
    display: flex;
    flex-wrap: wrap;  
    gap: 16px;
}
.app-top div{
    flex: 0 0 calc(50% - 8px);
    height: 50px;
}
.app-top div span{
    display: inline-block;
    width: 100px;
    height: 24px;
    text-align: right;
    margin-right: 8px;
    font-size: 14px;
}
.app-top div input{
    width: 360px;
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
}
.app-top div:last-child{
    text-align: right;
}
.app-top div button{
    width: 63px;
    height: 34px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-right: 10px;
}
.app-top div button:last-child{
    border: 0;
    background-color: #006be6;
    color: #fff;
}
.app-main{
    width: 100%;
    height: 430px;
    margin-top: 20px;
    /* border: 1px solid; */
    display: flex;
    flex-wrap: wrap;  
    gap: 16px;
}
.app-main .a{
    flex: 0 0 calc(50% - 8px);
    height: 210px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.a div{
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #ccc;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
}
</style>