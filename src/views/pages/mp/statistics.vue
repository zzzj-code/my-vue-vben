<template>
    <div class="page-wrapper">
        <div class="app">
            <div class="app-top">
                <div>
                    <span>公众号</span>
                    <input type="text" v-model="searchForm.accountId">
                </div>
                <div>
                    <span>时间范围</span>
                    <input type="text" v-model="searchForm.date">
                </div>
                <div></div>
                <div>
                    <button @click="handleReset">重置</button>
                    <button @click="handleSearch">提交</button>
                </div>
            </div>
            <div class="app-main">
                <div class="a">
                    <div>用户增减数据</div>
                    <div style="padding: 10px;">
                        <p>新增用户：{{ userSummary.newUser || 0 }}</p>
                        <p>取消关注：{{ userSummary.cancelUser || 0 }}</p>
                        <p>净增用户：{{ userSummary.netUser || 0 }}</p>
                    </div>
                </div>
                <div class="a">
                    <div>累计用户数据</div>
                    <div style="padding: 10px;">
                        <p>累计用户：{{ userCumulate.cumulateUser || 0 }}</p>
                    </div>
                </div>
                <div class="a">
                    <div>消息发送概况数据</div>
                    <div style="padding: 10px;">
                        <p>消息发送次数：{{ upstreamMessage.msgCount || 0 }}</p>
                        <p>消息发送人数：{{ upstreamMessage.msgUser || 0 }}</p>
                    </div>
                </div>
                <div class="a">
                    <div>接口分析数据</div>
                    <div style="padding: 10px;">
                        <p>接口调用次数：{{ interfaceSummary.callbackCount || 0 }}</p>
                        <p>接口失败次数：{{ interfaceSummary.failCount || 0 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// ========== 导入公众号统计相关API ==========
import { getUserSummary, getUserCumulate, getUpstreamMessage, getInterfaceSummary } from '#/api/mp/statistics';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        accountId: '',
        date: '',
      },
      // 用户增减数据
      userSummary: {},
      // 累计用户数据
      userCumulate: {},
      // 消息发送概况数据
      upstreamMessage: {},
      // 接口分析数据
      interfaceSummary: {},
    };
  },
  mounted() {
    this.loadStatistics();
  },
  methods: {
    // 加载统计数据
    async loadStatistics() {
      try {
        const params = {};
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        // 并行加载4个统计数据
        const [summary, cumulate, upstream] = await Promise.all([
          getUserSummary(params).catch(() => ({})),
          getUserCumulate(params).catch(() => ({})),
          getUpstreamMessage(params).catch(() => ({})),
          getInterfaceSummary(params).catch(() => ({})),
        ]);
        this.userSummary = summary;
        this.userCumulate = cumulate;
        this.upstreamMessage = upstream;
        //this.interfaceSummary = interface;
      } catch (err) {
        console.error('获取统计数据失败', err);
      }
    },
    // 搜索
    handleSearch() { this.loadStatistics(); },
    // 重置
    handleReset() {
      Object.keys(this.searchForm).forEach((key) => { this.searchForm[key] = ''; });
      this.loadStatistics();
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