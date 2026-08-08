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
            <span>写作类型</span>
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
          <div>写作管理列表</div>
          <div>
            <button style="background-color: #fff">+新增绘画管理</button>
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
                <th><div class="th-cell">编号</div></th>
                <th><div class="th-cell">用户</div></th>
                <th><div class="th-cell">写作类型</div></th>
                <th><div class="th-cell">平台</div></th>
                <th><div class="th-cell">模型</div></th>
                <th><div class="th-cell">生成内容提示</div></th>
                <th><div class="th-cell">生成的内容</div></th>
                <th><div class="th-cell">原文</div></th>
                <th><div class="th-cell">长度</div></th>
                <th><div class="th-cell">格式</div></th>
                <th><div class="th-cell">语气</div></th>
                <th><div class="th-cell">语言</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th><div class="th-cell">错误信息</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.platform }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.prompt }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.original }}</td>
                <td>{{ item.length }}</td>
                <td>{{ item.format }}</td>
                <td>{{ item.tone }}</td>
                <td>{{ item.language }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.error }}</td>
                <td class="ol-col">
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
          id: "W001",
          user: "张三",
          type: "营销文案",
          platform: "OpenAI",
          model: "GPT-4 Turbo",
          prompt: "为一款智能手表撰写广告文案，突出健康监测功能",
          content: "",
          original: "",
          length: "短篇",
          format: "广告文案",
          tone: "营销",
          language: "中文",
          createTime: "2026-01-05 09:30:00",
          error: "",
        },
        {
          id: "W002",
          user: "李四",
          type: "文章总结",
          platform: "Anthropic",
          model: "Claude 3.5 Sonnet",
          prompt: "总结一篇关于AI发展趋势的长文，提炼核心观点",
          content: "",
          original: "",
          length: "中篇",
          format: "摘要",
          tone: "客观",
          language: "中文",
          createTime: "2026-01-10 14:20:00",
          error: "",
        },
        {
          id: "W003",
          user: "王五",
          type: "创意故事",
          platform: "Google",
          model: "Gemini 1.5 Pro",
          prompt: "写一个关于未来城市中人与AI相处的短篇科幻故事",
          content: "",
          original: "",
          length: "中篇",
          format: "小说片段",
          tone: "文艺",
          language: "中文",
          createTime: "2026-01-15 10:00:00",
          error: "",
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
  min-width: 2290px;
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
