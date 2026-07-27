<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>方案名称</span>
          <input type="text" placeholder="请输入方案名称" />
        </div>
        <div>
          <span>周期类型</span>
          <input type="text" placeholder="请输入周期类型" />
        </div>
        <div>
          <span>评估模式</span>
          <input type="text" placeholder="请输入评估模式" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>绩效方案列表</div>
          <div>
            <button>+新增</button>
            <button>🔍</button>
          </div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th>方案名称</th>
                <th>关联模板</th>
                <th>周期类型</th>
                <th>评估模式</th>
                <th>评分模式</th>
                <th>联薪方式</th>
                <th>状态</th>
                <th>创建时间</th>
                <th class="oc-col" style="width: 180px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.planName }}</td>
                <td>{{ item.template }}</td>
                <td>{{ item.cycleType }}</td>
                <td>{{ item.evalMode }}</td>
                <td>{{ item.scoreMode }}</td>
                <td>{{ item.salaryLink }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="oc-col">编辑   删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共3条记录<span>20条/页</span></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: [
        {
          id: 1,
          planName: '2026年度KPI绩效考核方案',
          template: '年度KPI考核模板_v2.0',
          cycleType: '年度',
          evalMode: 'KPI考核',
          scoreMode: '百分制',
          salaryLink: '绩效工资占比30%',
          status: '已启用',
          createTime: '2026-01-01 09:00:00'
        },
        {
          id: 2,
          planName: '销售团队季度OKR考核方案',
          template: 'OKR目标管理模板_v1.5',
          cycleType: '季度',
          evalMode: 'OKR目标管理',
          scoreMode: '等级制(S/A/B/C)',
          salaryLink: '绩效奖金挂钩',
          status: '已启用',
          createTime: '2026-06-15 14:30:00'
        },
        {
          id: 3,
          planName: '技术研发月度绩效方案',
          template: '研发岗位KPI模板_v3.1',
          cycleType: '月度',
          evalMode: '360度评估',
          scoreMode: '五分制',
          salaryLink: '绩效工资占比20%',
          status: '草稿',
          createTime: '2026-07-20 10:15:00'
        }
      ],
    }
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
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div {
  width: 246px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 500;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div input:hover {
  border: 0.5px solid #35bbfa;
}
.app-top div input:focus {
  outline: none;
  border: 0.5px solid #35bbfa;
}
.app-top div:last-child {
  display: flex;
  padding-left: 50px;
  color: #35bbfa;
  font-size: 14px;
}
.app-top div button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 0.5px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.app-top .btn1:hover {
  border: 0.5px solid #35bbfa;
  color: #35bbfa;
}
.app-top .btn2 {
  border: 0;
  background-color: #35bbfa;
  color: #fff;
}
.app-top .btn2:hover {
  background-color: #76d2fd;
}

.app-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 78px;
  height: 32px;
  color: #fff;
  border: 0;
  background-color: #0a33e7;
  border-radius: 10px;
}
.main-title div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  /* margin-right: 5px; */
}

.main-tab {
  width: 100%;
  height: 385px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-tab table th {
  border-right: 1px solid #ccc;
  text-align: center;
  background-color: #e9e6e6;
  height: 40px;
}
.main-tab table td {
  font-size: 14px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 50px;
}
.col-name {
  position: sticky;
  left: 170px;
}
.oc-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.main-floot div span {
  display: inline-block;
  width: 100px;
  height: 26px;
  margin-left: 5px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  padding-top: 3px;
}
</style>
