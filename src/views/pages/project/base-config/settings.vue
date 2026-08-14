<template>
  <div class="title">项目配置</div>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-inp">
          <div class="inp">
            <span>项目编号前缀</span>
            <input type="text" v-model="form.projectNoPrefix" />
          </div>
          <div class="inp">
            <span>编号日期格式</span>
            <input type="text" v-model="form.dateFormat" />
          </div>
          <div class="inp">
            <span>流水号位数</span>
            <input type="text" v-model="form.serialNumberLength" />
          </div>
          <div class="inp">
            <span>每日标准工时</span>
            <input type="text" v-model="form.dailyStandardHours" />
          </div>
          <div class="inp">
            <span>默认成本率</span>
            <input type="text" placeholder="成员未配置费率时的默认值" v-model="form.defaultCostRate" />
          </div>
          <div class="inp">
            <span>逾期提醒</span>
            <label class="switch">
              <input type="checkbox" v-model="form.overdueReminder" />
              <span style="width: 250px;" class="slider"></span>
            </label>
          </div>
          <div class="inp">
            <span>逾期天数</span>
            <input type="text" v-model="form.overdueDays" />
          </div>
          <div class="inp">
            <span>里程碑提醒</span>
            <label class="switch">
              <input type="checkbox" v-model="form.milestoneReminder" />
              <span style="width: 250px;" class="slider"></span>
            </label>
          </div>
          <div class="inp">
            <span>里程碑天数</span>
            <input type="text" v-model="form.milestoneDays" />
          </div>
          <div class="inp">
            <button @click="handleReset">重置</button>
            <button @click="handleSubmit">提交</button>
          </div>
          <div class="inp1">
            <button @click="handleSubmit">保存配置</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectSettings, updateProjectSettings } from '#/api/project/base-config/settings';

export default {
  data() {
    return {
      form: {
        projectNoPrefix: '',
        dateFormat: '',
        serialNumberLength: '',
        dailyStandardHours: '',
        defaultCostRate: '',
        overdueReminder: false,
        overdueDays: '',
        milestoneReminder: false,
        milestoneDays: ''
      }
    };
  },
  created() {
    this.loadSettings();
  },
  methods: {
    async loadSettings() {
      try {
        const res = await getProjectSettings();
        this.form = { ...this.form, ...res };
      } catch (e) {
        console.error('加载配置失败', e);
      }
    },
    handleReset() {
      this.loadSettings();
    },
    async handleSubmit() {
      try {
        await updateProjectSettings(this.form);
        alert('保存成功');
      } catch (e) {
        console.error('保存失败', e);
      }
    }
  }
};
</script>

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
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-main {
  width: 100%;
  height: 374px;
  /* border: 1px solid red; */
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-inp {
  width: 752px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.inp {
  flex: 0 0 calc(50% - 16px);
  height: 50px;
  /* border: 1px solid red; */
}
.inp span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
}
.inp input {
  width: 250px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.inp button{
    width: 63px;
    height: 32px;
    border-radius: 10px;
}
.inp button:first-child{
    border: 1px solid #ccc;
    background-color: #fff;
    margin-left: 200px;
    margin-right: 10px;
}
.inp button:last-child{
    background-color: #006be6;
    color: #fff;
    border: 0;
}
.inp1 {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.inp1 button {
  width: 88px;
  height: 32px;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
  border: 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 22px;
  /* border: 1px solid red; */
  flex-shrink: 0;
}
.switch input {
  opacity: 0;
  height: 0;
  width: 0;
}
.slider {
  width: 250px;
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
.slider:before {
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
.switch input:checked + .slider {
  background-color: #2563eb;
}
.switch input:checked + .slider:before {
  transform: translateX(226px);
}
</style>
