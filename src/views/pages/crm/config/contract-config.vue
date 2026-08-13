<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">合同配置</div>
      <div class="app-main">
        <div class="main-inp">
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
// ========== 导入合同配置相关API ==========
import { getContractConfig, updateContractConfig } from '#/api/crm/contract/config';

export default {
  data() {
    return {
      form: {
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
        const data = await getContractConfig();
        if (data) {
          this.form.notifyEnabled = data.notifyEnabled !== false;
          this.form.notifyDays = data.notifyDays || 2;
        }
      } catch (err) {
        console.error("获取合同配置失败", err);
      }
    },
    handleReset() {
      this.form = { notifyEnabled: true, notifyDays: 2 };
    },
    async handleSubmit() {
      try {
        await updateContractConfig(this.form);
        alert("保存成功");
      } catch (err) {
        console.error("保存合同配置失败", err);
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
  height: 243px;
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
  height: 186px;
  padding: 24px;
}
.main-inp {
  width: 720px;
  height: 128px;
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
