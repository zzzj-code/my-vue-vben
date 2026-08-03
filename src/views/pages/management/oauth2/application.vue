<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>应用名</span>
            <input type="text" placeholder="请输入应用名" />
          </div>
          <div>
            <span>状态</span>
            <input type="text" placeholder="请输入状态" />
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
          <div>OAuth2 客户端列表</div>
          <div>
            <button>+新增OAuth2客户端</button>
            <button disabled>批量删除</button>
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
                <th><input type="checkbox" /></th>
                <th>客户端编号</th>
                <th>客户端密钥</th>
                <th>应用名</th>
                <th>应用图标</th>
                <th>状态</th>
                <th>访问令牌的有效期</th>
                <th>刷新令牌的有效期</th>
                <th>授权类型</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.clientId }}</td>
                <td>{{ item.clientSecret }}</td>
                <td>{{ item.appName }}</td>
                <td>{{ item.appIcon }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.accessTokenValidity }}</td>
                <td>{{ item.refreshTokenValidity }}</td>
                <td>{{ item.grantTypes }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共4条记录<span>20条/页</span></div>
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
          clientId: "app_web_001",
          clientSecret: "sk_live_*******abc123",
          appName: "Web管理后台",
          appIcon: "🌐",
          status: "启用",
          accessTokenValidity: 7200,
          refreshTokenValidity: 2592000,
          grantTypes: "authorization_code, refresh_token",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          clientId: "app_mobile_002",
          clientSecret: "sk_live_*******def456",
          appName: "移动端APP",
          appIcon: "📱",
          status: "启用",
          accessTokenValidity: 3600,
          refreshTokenValidity: 1296000,
          grantTypes: "password, refresh_token",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          clientId: "app_third_003",
          clientSecret: "sk_live_*******ghi789",
          appName: "第三方对接系统",
          appIcon: "🔌",
          status: "停用",
          accessTokenValidity: 86400,
          refreshTokenValidity: 5184000,
          grantTypes: "client_credentials",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          clientId: "app_internal_004",
          clientSecret: "sk_live_*******jkl012",
          appName: "内部微服务",
          appIcon: "⚙️",
          status: "启用",
          accessTokenValidity: 1800,
          refreshTokenValidity: 86400,
          grantTypes: "authorization_code, password, refresh_token",
          createTime: "2026-07-31 16:45:00",
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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 30%;
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
.main-top div:nth-child(2) button:nth-child(2) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
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
  min-width: 1290px;
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
  width: 130px;
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
.ol-col button:nth-child(3) {
  color: red;
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
