<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-top">
          <div class="top-inp">
            <div class="inp-row">
              <div><span>打卡日期</span><input type="text" /></div>
              <div><span>签到状态</span><input type="text" /></div>
              <div><span>签退状态</span><input type="text" /></div>
            </div>
            <div class="inp-row">
              <div></div>
              <div></div>
              <div class="btn">
                <button>重置</button>
                <button>搜索</button>
                收起▽
              </div>
            </div>
          </div>
        </div>
        <div class="left-main">
          <div class="main-title">
            <div>打卡记录</div>
            <div><button>🔍</button></div>
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
                  <th>日期</th>
                  <th>星期</th>
                  <th>签到时间</th>
                  <th>签到状态</th>
                  <th>签退时间</th>
                  <th>签退状态</th>
                  <th>加班</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tabValue" :key="index">
                  <td>{{ item.date }}</td>
                  <td>{{ item.week }}</td>
                  <td>{{ item.signInTime }}</td>
                  <td>{{ item.signInStatus }}</td>
                  <td>{{ item.signOutTime }}</td>
                  <td>{{ item.signOutStatus }}</td>
                  <td>{{ item.overtime }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="main-floot">共7条记录<span>20条/页</span></div>
        </div>
      </div>
      <div class="app-right">
        <div class="right-top">考情打卡</div>
        <div class="right-main">
          <div class="main-profile">
            <span>宇</span>
            <div>
              <div>宇擎数码</div>
              <div>研发部门</div>
            </div>
          </div>
          <div class="main-time">
            <div class="time1">
              <div>上班08:00</div>
              <div>11:12 已签到打卡</div>
            </div>
            <div class="time1">
              <div>下班10:00</div>
              <div>11:12 已签退打卡</div>
            </div>
          </div>
          <button class="btn-yuan">
            不在范围<br /><span>{{ currentTime }}</span>
          </button>
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
          date: "2026-07-20",
          week: "星期一",
          signInTime: "09:05:12",
          signInStatus: "正常",
          signOutTime: "18:30:45",
          signOutStatus: "正常",
          overtime: "1小时",
        },
        {
          date: "2026-07-21",
          week: "星期二",
          signInTime: "08:55:30",
          signInStatus: "正常",
          signOutTime: "19:15:20",
          signOutStatus: "正常",
          overtime: "1.5小时",
        },
        {
          date: "2026-07-22",
          week: "星期三",
          signInTime: "09:15:48",
          signInStatus: "迟到",
          signOutTime: "18:20:10",
          signOutStatus: "正常",
          overtime: "0.5小时",
        },
        {
          date: "2026-07-23",
          week: "星期四",
          signInTime: "08:45:20",
          signInStatus: "正常",
          signOutTime: "20:00:00",
          signOutStatus: "正常",
          overtime: "2小时",
        },
        {
          date: "2026-07-24",
          week: "星期五",
          signInTime: "09:30:15",
          signInStatus: "迟到",
          signOutTime: "18:45:30",
          signOutStatus: "正常",
          overtime: "1小时",
        },
        {
          date: "2026-07-25",
          week: "星期六",
          signInTime: "09:00:00",
          signInStatus: "正常",
          signOutTime: "17:30:00",
          signOutStatus: "早退",
          overtime: "0小时",
        },
        {
          date: "2026-07-26",
          week: "星期日",
          signInTime: "--:--:--",
          signInStatus: "休息",
          signOutTime: "--:--:--",
          signOutStatus: "休息",
          overtime: "0小时",
        },
      ],
      currentTime: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.updateTime();
    // 每秒更新一次
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
      this.currentTime = now.toLocaleTimeString();
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
  height: 580px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
  justify-content: space-between;
}
.app-left {
  width: 602px;
  height: 100%;
  /* border: 1px solid red; */
}
.left-top {
  width: 100%;
  height: 126px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
}
.top-inp {
  width: 100%;
  height: 80px;
  padding-top: 20px;
}
.inp-row {
  width: 100%;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.inp-row div {
  width: 195px;
  height: 100%;
  display: flex;
  align-items: center;
}
.inp-row div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.inp-row div input {
  width: 85px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.btn {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(21, 119, 231);
}
.btn button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
}
.btn button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.btn button:last-child {
  border: 0;
  background-color: rgb(21, 119, 231);
  color: #fff;
}
.left-main {
  width: 100%;
  height: 444px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 45px;
  display: flex;
}
.main-title div:first-child {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-title div:nth-child(2) button {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: rgb(28, 139, 249);
}
.main-title div:last-child {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.main-tab {
  width: 100%;
  height: 340px;
  /* border: 1px solid red */
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 860px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
}
.main-tab td {
  height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.main-floot {
  width: 100%;
  height: 44px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 14px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  text-align: center;
  padding-top: 3px;
  border: 1px solid #ccc;
  margin-left: 5px;
  border-radius: 5px;
}
.app-right {
  width: 378px;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 10px;
}
.right-top {
  width: 100%;
  height: 56px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.right-main {
  width: 100%;
  height: 524px;
  padding: 24px;
}
.main-profile {
  width: 100%;
  height: 72px;
  /* border: 1px solid red; */
  margin-bottom: 20px;
  padding: 12px 16px;
  background-color: #f8fafc;
  display: flex;
}
.main-profile span {
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: #32363940;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding-top: 10px;
}
.main-profile div {
  width: 60px;
  margin-left: 5px;
}
.main-profile div div:first-child {
  width: 100%;
  height: 23px;
  font-size: 15px;
  font-weight: 500;
}
.main-profile div div:last-child {
  width: 100%;
  font-size: 13px;
  color: #ccc;
}
.main-time {
  width: 100%;
  height: 65px;
  /* border: 1px solid red; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.main-time .time1 {
  width: 159px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 12px;
}
.time1 div:first-child {
  font-size: 12px;
  margin-bottom: 3px;
  color: #b3afaf;
}
.time1 div:last-child {
  font-size: 13px;
  color: rgb(210, 38, 245);
}
.btn-yuan {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-left: 65px;
  border: 0;
  background-color: #ee5050;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
}
.btn-yuan span{
    font-size: 18px;
    font-weight: lighter;
}
</style>
