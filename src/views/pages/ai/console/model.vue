<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>模型名字</span>
            <input type="text" placeholder="请输入模型名字" />
          </div>
          <div>
            <span>模型标识</span>
            <input type="text" placeholder="请输入模型标识" />
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
          <div>模型配置列表</div>
          <div>
            <button>+新增模型配置</button>
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
                <th><div class="th-cell">模型类型</div></th>
                <th><div class="th-cell">模型名字</div></th>
                <th><div class="th-cell">模型标识</div></th>
                <th><div class="th-cell">API 秘钥</div></th>
                <th><div class="th-cell">排序</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">温度参数</div></th>
                <th><div class="th-cell">回复数 Token 数</div></th>
                <th><div class="th-cell">上下文数量</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.platform }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.apiKey }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.temp }}</td>
                <td>{{ item.tokens }}</td>
                <td>{{ item.context }}</td>
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
          type: "大语言模型",
          name: "GPT-4 Turbo",
          model: "gpt-4-turbo",
          apiKey: "sk-****8x7f",
          sort: 1,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 128000,
        },
        {
          platform: "OpenAI",
          type: "大语言模型",
          name: "GPT-4o",
          model: "gpt-4o",
          apiKey: "sk-****9d8c",
          sort: 2,
          status: "启用",
          temp: 0.8,
          tokens: 4096,
          context: 128000,
        },
        {
          platform: "OpenAI",
          type: "大语言模型",
          name: "GPT-3.5 Turbo",
          model: "gpt-3.5-turbo",
          apiKey: "sk-****1a2b",
          sort: 3,
          status: "启用",
          temp: 0.5,
          tokens: 4096,
          context: 16384,
        },
        {
          platform: "Azure",
          type: "大语言模型",
          name: "Azure GPT-4",
          model: "azure-gpt-4",
          apiKey: "az-****9i8j",
          sort: 4,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 128000,
        },
        {
          platform: "Azure",
          type: "大语言模型",
          name: "Azure GPT-3.5",
          model: "azure-gpt-35",
          apiKey: "az-****2c3d",
          sort: 5,
          status: "禁用",
          temp: 0.6,
          tokens: 4096,
          context: 16384,
        },
        {
          platform: "Anthropic",
          type: "大语言模型",
          name: "Claude 3.5 Sonnet",
          model: "claude-3-5-sonnet",
          apiKey: "sk-ant-****1a2b",
          sort: 6,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 200000,
        },
        {
          platform: "Anthropic",
          type: "大语言模型",
          name: "Claude 3 Opus",
          model: "claude-3-opus",
          apiKey: "sk-ant-****3d4e",
          sort: 7,
          status: "启用",
          temp: 0.5,
          tokens: 4096,
          context: 200000,
        },
        {
          platform: "Google",
          type: "大语言模型",
          name: "Gemini 1.5 Pro",
          model: "gemini-1.5-pro",
          apiKey: "gl-****4e5f",
          sort: 8,
          status: "启用",
          temp: 0.8,
          tokens: 8192,
          context: 2000000,
        },
        {
          platform: "Google",
          type: "大语言模型",
          name: "Gemini 1.5 Flash",
          model: "gemini-1.5-flash",
          apiKey: "gl-****5f6g",
          sort: 9,
          status: "禁用",
          temp: 0.6,
          tokens: 8192,
          context: 1000000,
        },
        {
          platform: "智谱AI",
          type: "大语言模型",
          name: "GLM-4 Plus",
          model: "glm-4-plus",
          apiKey: "zhipu-****6g7h",
          sort: 10,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 128000,
        },
        {
          platform: "智谱AI",
          type: "大语言模型",
          name: "GLM-4 Air",
          model: "glm-4-air",
          apiKey: "zhipu-****7h8i",
          sort: 11,
          status: "启用",
          temp: 0.5,
          tokens: 4096,
          context: 128000,
        },
        {
          platform: "百度",
          type: "大语言模型",
          name: "ERNIE 4.0",
          model: "ernie-4.0",
          apiKey: "baidu-****8i9j",
          sort: 12,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 8192,
        },
        {
          platform: "百度",
          type: "大语言模型",
          name: "ERNIE 3.5",
          model: "ernie-3.5",
          apiKey: "baidu-****9j0k",
          sort: 13,
          status: "禁用",
          temp: 0.6,
          tokens: 4096,
          context: 4096,
        },
        {
          platform: "阿里",
          type: "大语言模型",
          name: "Qwen-Max",
          model: "qwen-max",
          apiKey: "ali-****0k1l",
          sort: 14,
          status: "启用",
          temp: 0.8,
          tokens: 4096,
          context: 32768,
        },
        {
          platform: "阿里",
          type: "大语言模型",
          name: "Qwen-Plus",
          model: "qwen-plus",
          apiKey: "ali-****1l2m",
          sort: 15,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 32768,
        },
        {
          platform: "腾讯",
          type: "大语言模型",
          name: "混元 Pro",
          model: "hunyuan-pro",
          apiKey: "tencent-****2m3n",
          sort: 16,
          status: "启用",
          temp: 0.7,
          tokens: 4096,
          context: 8192,
        },
        {
          platform: "腾讯",
          type: "大语言模型",
          name: "混元 Standard",
          model: "hunyuan-standard",
          apiKey: "tencent-****3n4o",
          sort: 17,
          status: "禁用",
          temp: 0.5,
          tokens: 4096,
          context: 4096,
        },
        {
          platform: "OpenAI",
          type: "embedding模型",
          name: "text-embedding-3-large",
          model: "text-embedding-3-large",
          apiKey: "sk-****4o5p",
          sort: 18,
          status: "启用",
          temp: 0,
          tokens: 8192,
          context: 8192,
        },
        {
          platform: "OpenAI",
          type: "embedding模型",
          name: "text-embedding-ada-002",
          model: "text-embedding-ada-002",
          apiKey: "sk-****5p6q",
          sort: 19,
          status: "启用",
          temp: 0,
          tokens: 8192,
          context: 8192,
        },
        {
          platform: "Azure",
          type: "embedding模型",
          name: "Azure Embedding",
          model: "azure-embedding",
          apiKey: "az-****6q7r",
          sort: 20,
          status: "启用",
          temp: 0,
          tokens: 8192,
          context: 8192,
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
  width: max-content;
  min-width: 1350px;
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
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
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
