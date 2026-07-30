<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <span>统计区间：</span>
        <input type="text" placeholder="2026-07-01  ——>  2026-07-31" />
        <button>查询</button>
      </div>
      <div class="app-tab">
        <table>
          <thead>
            <tr>
              <th>成员</th>
              <th>任务数</th>
              <th>分配工时(h)</th>
              <th>填报工时(h)</th>
              <th>标准工时(h)</th>
              <th>负载率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tabValue">
              <td>{{ item.member }}</td>
              <td>{{ item.taskCount }}</td>
              <td>{{ item.allocatedHours }}</td>
              <td>{{ item.filledHours }}</td>
              <td>{{ item.standardHours }}</td>
              <td>{{ item.loadRate }}</td>
            </tr>
          </tbody>
        </table>
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
          member: "张伟",
          taskCount: 5,
          allocatedHours: 40,
          filledHours: 38,
          standardHours: 40,
          loadRate: 95,
        },
        {
          id: 2,
          member: "李芳",
          taskCount: 4,
          allocatedHours: 32,
          filledHours: 30,
          standardHours: 32,
          loadRate: 94,
        },
        {
          id: 3,
          member: "王磊",
          taskCount: 6,
          allocatedHours: 48,
          filledHours: 45,
          standardHours: 48,
          loadRate: 94,
        },
      ],
    };
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
  width: 1014px;
  height: 400px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 12px;
}
.app-top span {
  display: inline-block;
  width: 70px;
  height: 22px;
  font-size: 14px;
}
.app-top input {
  width: 298px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.app-top button {
  width: 63px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}
.app-tab {
  width: 100%;
  height: 213px;
}
.app-tab table {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
table th {
  border: 1px solid #ccc;
  height: 47px;
}
table td {
  height: 55px;
  border: 1px solid #ccc;
  padding: 0 20px;
  text-align: center;
}
</style>
