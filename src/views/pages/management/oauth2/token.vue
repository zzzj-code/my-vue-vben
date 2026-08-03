<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>用户编号</span>
            <input type="text" placeholder="请输入用户编号" />
          </div>
          <div>
            <span>用户类型</span>
            <input type="text" placeholder="请输入用户类型" />
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
          <div>令牌列表</div>
          <div>
            <button style="background-color: #fff">+新增OAuth2客户端</button>
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
                <th>访问令牌</th>
                <th>刷新令牌</th>
                <th>用户编号</th>
                <th>用户类型</th>
                <th>客户端编号</th>
                <th>过期时间</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.accessToken }}</td>
                <td>{{ item.refreshToken }}</td>
                <td>{{ item.userId }}</td>
                <td>{{ item.userType }}</td>
                <td>{{ item.clientId }}</td>
                <td>{{ item.expireTime }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>删除</button>
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
          id: 1,
          accessToken:
            "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          refreshToken:
            "f1e2d3c4b5a6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_001",
          userType: "管理员",
          clientId: "app_web_001",
          expireTime: "2026-08-01 11:00:00",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          accessToken:
            "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3",
          refreshToken:
            "g3f2e1d4c5b6a7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_002",
          userType: "普通用户",
          clientId: "app_web_001",
          expireTime: "2026-08-01 12:30:00",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          accessToken:
            "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4",
          refreshToken:
            "h4g3f2e1d5c6b7a8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_003",
          userType: "访客",
          clientId: "app_mobile_002",
          expireTime: "2026-08-01 15:20:00",
          createTime: "2026-08-01 14:20:00",
        },
        {
          id: 4,
          accessToken:
            "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5",
          refreshToken:
            "i5h4g3f2e1d6c7b8a9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_004",
          userType: "管理员",
          clientId: "app_mobile_002",
          expireTime: "2026-07-31 18:45:00",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          accessToken:
            "e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6",
          refreshToken:
            "j6i5h4g3f2e1d7c8b9a0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_001",
          userType: "管理员",
          clientId: "app_web_001",
          expireTime: "2026-08-02 09:00:00",
          createTime: "2026-07-31 11:30:00",
        },
        {
          id: 6,
          accessToken:
            "f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7",
          refreshToken:
            "k7j6i5h4g3f2e1d8c9b0a1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_005",
          userType: "普通用户",
          clientId: "app_third_003",
          expireTime: "2026-07-31 10:30:00",
          createTime: "2026-07-30 14:00:00",
        },
        {
          id: 7,
          accessToken:
            "g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8",
          refreshToken:
            "l8k7j6i5h4g3f2e1d9c0b1a2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_006",
          userType: "访客",
          clientId: "app_web_001",
          expireTime: "2026-07-31 09:30:00",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 8,
          accessToken:
            "h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9",
          refreshToken:
            "m9l8k7j6i5h4g3f2e1d0c1b2a3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2",
          userId: "USER_007",
          userType: "管理员",
          clientId: "app_mobile_002",
          expireTime: "2026-08-01 08:30:00",
          createTime: "2026-07-29 15:30:00",
        },
        {
          id: 9,
          accessToken:
            "i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0",
          refreshToken:
            "n0m9l8k7j6i5h4g3f2e1d2c3b4a5o6p7q8r9s0t1u2v3w4x5y6z7A8B9C0D1E2F3",
          userId: "USER_002",
          userType: "普通用户",
          clientId: "app_third_003",
          expireTime: "2026-08-01 10:15:00",
          createTime: "2026-07-29 10:15:00",
        },
        {
          id: 10,
          accessToken:
            "j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1",
          refreshToken:
            "o1n0m9l8k7j6i5h4g3f2e3d4c5b6a7p8q9r0s1t2u3v4w5x6y7z8A9B0C1D2E3F4",
          userId: "USER_008",
          userType: "访客",
          clientId: "app_mobile_002",
          expireTime: "2026-07-31 16:00:00",
          createTime: "2026-07-28 14:00:00",
        },
        {
          id: 11,
          accessToken:
            "k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2",
          refreshToken:
            "p2o1n0m9l8k7j6i5h4g3f4e5d6c7b8a9q0r1s2t3u4v5w6x7y8z9A0B1C2D3E4F5",
          userId: "USER_003",
          userType: "访客",
          clientId: "app_web_001",
          expireTime: "2026-08-02 08:30:00",
          createTime: "2026-07-28 10:45:00",
        },
        {
          id: 12,
          accessToken:
            "l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3",
          refreshToken:
            "q3p2o1n0m9l8k7j6i5h4g5f6e7d8c9b0a1r2s3t4u5v6w7x8y9z0A1B2C3D4E5F6",
          userId: "USER_009",
          userType: "管理员",
          clientId: "app_mobile_002",
          expireTime: "2026-07-31 12:20:00",
          createTime: "2026-07-27 11:20:00",
        },
        {
          id: 13,
          accessToken:
            "m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4",
          refreshToken:
            "r4q3p2o1n0m9l8k7j6i5h6g7f8e9d0c1b2a3s4t5u6v7w8x9y0z1A2B3C4D5E6F7",
          userId: "USER_010",
          userType: "普通用户",
          clientId: "app_web_001",
          expireTime: "2026-07-31 17:00:00",
          createTime: "2026-07-27 16:00:00",
        },
        {
          id: 14,
          accessToken:
            "n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5",
          refreshToken:
            "s5r4q3p2o1n0m9l8k7j6i7h8g9f0e1d2c3b4a5t6u7v8w9x0y1z2A3B4C5D6E7F8",
          userId: "USER_004",
          userType: "管理员",
          clientId: "app_third_003",
          expireTime: "2026-08-02 08:00:00",
          createTime: "2026-07-26 14:30:00",
        },
        {
          id: 15,
          accessToken:
            "o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6",
          refreshToken:
            "t6s5r4q3p2o1n0m9l8k7j8i9h0g1f2e3d4c5b6a7u8v9w0x1y2z3A4B5C6D7E8F9",
          userId: "USER_005",
          userType: "普通用户",
          clientId: "app_web_001",
          expireTime: "2026-08-01 09:15:00",
          createTime: "2026-07-26 09:15:00",
        },
        {
          id: 16,
          accessToken:
            "p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7",
          refreshToken:
            "u7t6s5r4q3p2o1n0m9l8k9j0i1h2g3f4e5d6c7b8a9v0w1x2y3z4A5B6C7D8E9F0",
          userId: "USER_011",
          userType: "访客",
          clientId: "app_mobile_002",
          expireTime: "2026-07-31 16:45:00",
          createTime: "2026-07-25 15:00:00",
        },
        {
          id: 17,
          accessToken:
            "q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8",
          refreshToken:
            "v8u7t6s5r4q3p2o1n0m9l0k1j2i3h4g5f6e7d8c9b0a1w2x3y4z5A6B7C8D9E0F1",
          userId: "USER_006",
          userType: "访客",
          clientId: "app_web_001",
          expireTime: "2026-08-02 11:30:00",
          createTime: "2026-07-25 10:30:00",
        },
        {
          id: 18,
          accessToken:
            "r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9",
          refreshToken:
            "w9v8u7t6s5r4q3p2o1n0m1l2k3j4i5h6g7f8e9d0c1b2a3x4y5z6A7B8C9D0E1F2",
          userId: "USER_012",
          userType: "管理员",
          clientId: "app_third_003",
          expireTime: "2026-07-31 14:45:00",
          createTime: "2026-07-24 13:45:00",
        },
        {
          id: 19,
          accessToken:
            "s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0",
          refreshToken:
            "x0w9v8u7t6s5r4q3p2o1n2m3l4k5j6i7h8g9f0e1d2c3b4a5y6z7A8B9C0D1E2F3",
          userId: "USER_007",
          userType: "管理员",
          clientId: "app_mobile_002",
          expireTime: "2026-08-01 10:00:00",
          createTime: "2026-07-24 09:00:00",
        },
        {
          id: 20,
          accessToken:
            "t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1",
          refreshToken:
            "y1x0w9v8u7t6s5r4q3p2o3n4m5l6k7j8i9h0g1f2e3d4c5b6a7z8A9B0C1D2E3F4",
          userId: "USER_008",
          userType: "普通用户",
          clientId: "app_web_001",
          expireTime: "2026-08-02 03:00:00",
          createTime: "2026-07-23 02:00:00",
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
  min-width: 1400px;
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
.ol-col button:nth-child(1) {
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
