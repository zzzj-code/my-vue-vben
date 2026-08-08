<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>角色名称</span>
            <input type="text" placeholder="请输入角色名称" />
          </div>
          <div>
            <span>角色类别</span>
            <input type="text" placeholder="请输入角色类别" />
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
          <div>聊天角色列表</div>
          <div>
            <button>+新增聊天角色</button>
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
                <th><div class="th-cell">角色名称</div></th>
                <th><div class="th-cell">绑定模型</div></th>
                <th><div class="th-cell">角色头像</div></th>
                <th><div class="th-cell">角色类别</div></th>
                <th><div class="th-cell">角色描述</div></th>
                <th><div class="th-cell">角色设定</div></th>
                <th><div class="th-cell">知识库</div></th>
                <th><div class="th-cell">工具</div></th>
                <th><div class="th-cell">MCP</div></th>
                <th><div class="th-cell">是否公开</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">角色排序</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.name }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.avatar }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.setting }}</td>
                <td>{{ item.knowledge }}</td>
                <td>{{ item.tools }}</td>
                <td>{{ item.mcp }}</td>
                <td>{{ item.isPublic }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.sort }}</td>
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
          name: "智能客服助手",
          model: "GPT-4 Turbo",
          avatar: "🤖",
          category: "客服",
          description: "专业解决客户咨询与投诉",
          setting: "你是一位专业的客服助手，态度友好耐心",
          knowledge: "智能客服知识库",
          tools: "搜索, 工单",
          mcp: "Slack",
          isPublic: "是",
          status: "启用",
          sort: 1,
        },
        {
          name: "技术顾问",
          model: "Claude 3.5 Sonnet",
          avatar: "👨‍💻",
          category: "技术支持",
          description: "提供编程与技术架构咨询",
          setting: "你是一位资深技术顾问，精通多种编程语言",
          knowledge: "产品文档库",
          tools: "代码执行, 搜索",
          mcp: "GitHub",
          isPublic: "是",
          status: "启用",
          sort: 2,
        },
        {
          name: "营销策划师",
          model: "Gemini 1.5 Pro",
          avatar: "📊",
          category: "营销",
          description: "创意策划与营销方案生成",
          setting: "你是一位创意营销专家，擅长品牌策划",
          knowledge: "市场分析报告",
          tools: "搜索, 图片生成",
          mcp: "Notion",
          isPublic: "否",
          status: "启用",
          sort: 3,
        },
        {
          name: "数据分析师",
          model: "Qwen-Max",
          avatar: "📈",
          category: "数据",
          description: "数据解读与报表分析",
          setting: "你是一位数据分析专家，擅长数据洞察",
          knowledge: "内部培训资料",
          tools: "数据分析, 图表",
          mcp: "Tableau",
          isPublic: "否",
          status: "禁用",
          sort: 4,
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
  min-width: 1310px;
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
