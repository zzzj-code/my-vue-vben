<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">客户公海规则设置</div>
      <div class="app-main">
        <div class="main-inp">
          <div>
            <span>客户公海规则设置</span>
            <label>
              <input type="radio" name="gender1" :checked="form.enabled" @change="form.enabled = true" />
              开启
            </label>
            <label>
              <input type="radio" name="gender1" :checked="!form.enabled" @change="form.enabled = false" />
              关闭
            </label>
          </div>
          <div>
            <span>未跟进天数</span>
            <input type="text" v-model="form.followDays">
          </div>
          <div>
            <span>未成交天数</span>
            <input type="text" v-model="form.dealDays">
          </div>
          <div>
            <span>提前提醒设置</span>
            <label>
              <input type="radio" name="gender" :checked="form.notifyEnabled" @change="form.notifyEnabled = true" />
              开启
            </label>
            <label>
              <input type="radio" name="gender" :checked="!form.notifyEnabled" @change="form.notifyEnabled = false" />
              关闭
            </label>
          </div>
          <div>
            <span>提前提醒天数</span>
            <input type="text" v-model="form.notifyDays">
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSubmit">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入客户公海配置相关API ==========
import { getCustomerPoolConfig, saveCustomerPoolConfig } from '#/api/crm/customer/poolConfig';

export default {
  data() {
    return {
      form: {
        enabled: true,        // 客户公海规则设置
        followDays: 31,       // 未跟进天数
        dealDays: 5,          // 未成交天数
        notifyEnabled: true,  // 提前提醒设置
        notifyDays: 2,        // 提前提醒天数
      },
    };
  },
  mounted() {
    this.loadConfig();
  },
  methods: {
    async loadConfig() {
      try {
        const data = await getCustomerPoolConfig();
        if (data) {
          this.form.enabled = data.enabled !== false;
          this.form.followDays = data.followDays || 31;
          this.form.dealDays = data.dealDays || 5;
          this.form.notifyEnabled = data.notifyEnabled !== false;
          this.form.notifyDays = data.notifyDays || 2;
        }
      } catch (err) {
        console.error("获取客户公海配置失败", err);
      }
    },
    handleReset() {
      this.form = { enabled: true, followDays: 31, dealDays: 5, notifyEnabled: true, notifyDays: 2 };
    },
    async handleSubmit() {
      try {
        await saveCustomerPoolConfig(this.form);
        alert("保存成功");
      } catch (err) {
        console.error("保存客户公海配置失败", err);
      }
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
