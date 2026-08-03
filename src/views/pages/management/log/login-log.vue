<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>用户名称</span>
            <input type="text" placeholder="请输入用户名称" />
          </div>
          <div>
            <span>登录状态</span>
            <input type="text" placeholder="全部" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>登录日志列表</div>
          <div>
            <button>导出</button>
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
                <th>日志编号</th>
                <th>登录类型</th>
                <th>用户名称</th>
                <th>登录地址</th>
                <th>浏览器</th>
                <th>登录结果</th>
                <th>登录日期</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.loginType }}</td>
                <td>{{ item.userName }}</td>
                <td>{{ item.loginAddress }}</td>
                <td>{{ item.browser }}</td>
                <td>{{ item.loginResult }}</td>
                <td>{{ item.loginDate }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          id: "LOGIN20260801001",
          loginType: "账号密码",
          userName: "张三",
          loginAddress: "192.168.1.100 (北京)",
          browser: "Chrome 120.0",
          loginResult: "成功",
          loginDate: "2026-08-01 09:00:00",
        },
        {
          id: "LOGIN20260801002",
          loginType: "账号密码",
          userName: "李四",
          loginAddress: "192.168.1.101 (上海)",
          browser: "Edge 118.0",
          loginResult: "成功",
          loginDate: "2026-08-01 10:30:00",
        },
        {
          id: "LOGIN20260801003",
          loginType: "扫码登录",
          userName: "王五",
          loginAddress: "192.168.1.102 (深圳)",
          browser: "Chrome 120.0",
          loginResult: "成功",
          loginDate: "2026-08-01 14:20:00",
        },
        {
          id: "LOGIN20260731004",
          loginType: "账号密码",
          userName: "赵六",
          loginAddress: "192.168.1.103 (广州)",
          browser: "Firefox 115.0",
          loginResult: "失败",
          loginDate: "2026-07-31 16:45:00",
        },
        {
          id: "LOGIN20260731005",
          loginType: "短信验证",
          userName: "孙七",
          loginAddress: "192.168.1.104 (杭州)",
          browser: "Safari 16.5",
          loginResult: "成功",
          loginDate: "2026-07-31 11:30:00",
        },
        {
          id: "LOGIN20260730006",
          loginType: "账号密码",
          userName: "周八",
          loginAddress: "192.168.1.105 (成都)",
          browser: "Chrome 119.0",
          loginResult: "失败",
          loginDate: "2026-07-30 09:30:00",
        },
        {
          id: "LOGIN20260730007",
          loginType: "扫码登录",
          userName: "吴九",
          loginAddress: "192.168.1.106 (武汉)",
          browser: "Edge 117.0",
          loginResult: "成功",
          loginDate: "2026-07-30 14:00:00",
        },
        {
          id: "LOGIN20260729008",
          loginType: "账号密码",
          userName: "郑十",
          loginAddress: "192.168.1.107 (南京)",
          browser: "Chrome 120.0",
          loginResult: "成功",
          loginDate: "2026-07-29 10:15:00",
        },
        {
          id: "LOGIN20260729009",
          loginType: "短信验证",
          userName: "张三",
          loginAddress: "192.168.1.108 (北京)",
          browser: "Firefox 114.0",
          loginResult: "成功",
          loginDate: "2026-07-29 15:30:00",
        },
        {
          id: "LOGIN20260728010",
          loginType: "账号密码",
          userName: "李四",
          loginAddress: "192.168.1.109 (上海)",
          browser: "Chrome 118.0",
          loginResult: "成功",
          loginDate: "2026-07-28 08:30:00",
        },
        {
          id: "LOGIN20260728011",
          loginType: "账号密码",
          userName: "王五",
          loginAddress: "192.168.1.110 (深圳)",
          browser: "Edge 118.0",
          loginResult: "失败",
          loginDate: "2026-07-28 10:45:00",
        },
        {
          id: "LOGIN20260727012",
          loginType: "扫码登录",
          userName: "赵六",
          loginAddress: "192.168.1.111 (广州)",
          browser: "Chrome 120.0",
          loginResult: "成功",
          loginDate: "2026-07-27 11:20:00",
        },
        {
          id: "LOGIN20260727013",
          loginType: "账号密码",
          userName: "孙七",
          loginAddress: "192.168.1.112 (杭州)",
          browser: "Safari 16.4",
          loginResult: "成功",
          loginDate: "2026-07-27 16:00:00",
        },
        {
          id: "LOGIN20260726014",
          loginType: "短信验证",
          userName: "周八",
          loginAddress: "192.168.1.113 (成都)",
          browser: "Chrome 119.0",
          loginResult: "失败",
          loginDate: "2026-07-26 14:30:00",
        },
        {
          id: "LOGIN20260726015",
          loginType: "账号密码",
          userName: "吴九",
          loginAddress: "192.168.1.114 (武汉)",
          browser: "Firefox 115.0",
          loginResult: "成功",
          loginDate: "2026-07-26 09:15:00",
        },
        {
          id: "LOGIN20260725016",
          loginType: "账号密码",
          userName: "郑十",
          loginAddress: "192.168.1.115 (南京)",
          browser: "Edge 117.0",
          loginResult: "成功",
          loginDate: "2026-07-25 15:00:00",
        },
        {
          id: "LOGIN20260725017",
          loginType: "扫码登录",
          userName: "张三",
          loginAddress: "192.168.1.116 (北京)",
          browser: "Chrome 118.0",
          loginResult: "成功",
          loginDate: "2026-07-25 10:30:00",
        },
        {
          id: "LOGIN20260724018",
          loginType: "账号密码",
          userName: "李四",
          loginAddress: "192.168.1.117 (上海)",
          browser: "Safari 16.5",
          loginResult: "失败",
          loginDate: "2026-07-24 13:45:00",
        },
        {
          id: "LOGIN20260724019",
          loginType: "短信验证",
          userName: "王五",
          loginAddress: "192.168.1.118 (深圳)",
          browser: "Chrome 120.0",
          loginResult: "成功",
          loginDate: "2026-07-24 09:00:00",
        },
        {
          id: "LOGIN20260723020",
          loginType: "账号密码",
          userName: "赵六",
          loginAddress: "192.168.1.119 (广州)",
          browser: "Firefox 114.0",
          loginResult: "成功",
          loginDate: "2026-07-23 02:00:00",
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
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 18%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1200px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 80px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
