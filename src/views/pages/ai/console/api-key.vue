<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>名称</span>
            <input type="text" placeholder="请输入名称" />
          </div>
          <div>
            <span>平台</span>
            <input type="text" placeholder="请输入" />
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
          <div>API 密钥列表</div>
          <div>
            <button>+新增API 密钥</button>
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
                <th><div class="th-cell">所属平台</div></th>
                <th><div class="th-cell">名称</div></th>
                <th><div class="th-cell">密钥</div></th>
                <th><div class="th-cell">自定义 API URL</div></th>
                <th><div class="th-cell">状态</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.platform }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.key }}</td>
                <td>{{ item.apiUrl }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div class="left-info">
            共{{ tabValue.length }}条记录
            <span>20条/页</span>
          </div>
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
          platform: "OpenAI",
          name: "生产环境密钥",
          key: "sk-prod-8x7f9a2b3c4d5e6f",
          apiUrl: "https://api.openai.com/v1",
          status: "启用",
        },
        {
          platform: "Azure",
          name: "测试环境密钥",
          key: "az-test-9d8c7b6a5f4e3d2c",
          apiUrl: "https://azure.openai.azure.com",
          status: "启用",
        },
        {
          platform: "Anthropic",
          name: "Claude 主密钥",
          key: "sk-ant-1a2b3c4d5e6f7g8h",
          apiUrl: "https://api.anthropic.com",
          status: "启用",
        },
        {
          platform: "Google",
          name: "Gemini 密钥",
          key: "gl-9i8j7k6l5m4n3o2p",
          apiUrl: "https://generativelanguage.googleapis.com",
          status: "禁用",
        },
        {
          platform: "OpenAI",
          name: "开发环境密钥",
          key: "sk-dev-2c3d4e5f6g7h8i9j",
          apiUrl: "https://api.openai.com/v1",
          status: "启用",
        },
        {
          platform: "Azure",
          name: "生产环境密钥",
          key: "az-prod-1a2b3c4d5e6f7g8h",
          apiUrl: "https://azure.openai.azure.com",
          status: "启用",
        },
        {
          platform: "智谱AI",
          name: "GLM 主密钥",
          key: "zhipu-9i8j7k6l5m4n3o2p",
          apiUrl: "https://open.bigmodel.cn/api",
          status: "启用",
        },
        {
          platform: "百度",
          name: "文心一言密钥",
          key: "baidu-3d4e5f6g7h8i9j0k",
          apiUrl: "https://aip.baidubce.com",
          status: "禁用",
        },
        {
          platform: "阿里",
          name: "通义千问密钥",
          key: "ali-4e5f6g7h8i9j0k1l",
          apiUrl: "https://dashscope.aliyuncs.com",
          status: "启用",
        },
        {
          platform: "腾讯",
          name: "混元大模型密钥",
          key: "tencent-5f6g7h8i9j0k1l2m",
          apiUrl: "https://hunyuan.tencent.com",
          status: "启用",
        },
        {
          platform: "OpenAI",
          name: "备用密钥",
          key: "sk-backup-6g7h8i9j0k1l2m3n",
          apiUrl: "https://api.openai.com/v1",
          status: "禁用",
        },
        {
          platform: "Azure",
          name: "欧洲区域密钥",
          key: "az-eu-7h8i9j0k1l2m3n4o",
          apiUrl: "https://azure.openai.azure.com",
          status: "启用",
        },
        {
          platform: "Anthropic",
          name: "Claude 备用密钥",
          key: "sk-ant-8i9j0k1l2m3n4o5p",
          apiUrl: "https://api.anthropic.com",
          status: "禁用",
        },
        {
          platform: "Google",
          name: "Vertex AI 密钥",
          key: "gl-vertex-9j0k1l2m3n4o5p6q",
          apiUrl: "https://aiplatform.googleapis.com",
          status: "启用",
        },
        {
          platform: "智谱AI",
          name: "GLM 备用密钥",
          key: "zhipu-0k1l2m3n4o5p6q7r",
          apiUrl: "https://open.bigmodel.cn/api",
          status: "启用",
        },
        {
          platform: "百度",
          name: "文心一言备用",
          key: "baidu-1l2m3n4o5p6q7r8s",
          apiUrl: "https://aip.baidubce.com",
          status: "禁用",
        },
        {
          platform: "阿里",
          name: "通义千问备用",
          key: "ali-2m3n4o5p6q7r8s9t",
          apiUrl: "https://dashscope.aliyuncs.com",
          status: "启用",
        },
        {
          platform: "腾讯",
          name: "混元备用密钥",
          key: "tencent-3n4o5p6q7r8s9t0u",
          apiUrl: "https://hunyuan.tencent.com",
          status: "禁用",
        },
        {
          platform: "OpenAI",
          key: "sk-prod-4o5p6q7r8s9t0u1v",
          name: "新加坡区域密钥",
          apiUrl: "https://api.openai.com/v1",
          status: "启用",
        },
        {
          platform: "Azure",
          key: "az-asia-5p6q7r8s9t0u1v2w",
          name: "亚洲区域密钥",
          apiUrl: "https://azure.openai.azure.com",
          status: "启用",
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
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 146px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
  cursor: pointer;
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
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 130px;
  min-width: 80px;
  position: sticky;
  right: 0;
  /* box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08); */
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>
