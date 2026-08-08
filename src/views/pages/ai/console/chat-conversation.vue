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
            <span>聊天标题</span>
            <input type="text" placeholder="请输入聊天标题" />
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
          <div>对话列表</div>
          <div>
            <button style="background-color: #fff">+新增工具</button>
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
                <th><div class="th-cell">对话编号</div></th>
                <th><div class="th-cell">对话标题</div></th>
                <th><div class="th-cell">用户</div></th>
                <th><div class="th-cell">角色</div></th>
                <th><div class="th-cell">模型标识</div></th>
                <th><div class="th-cell">消息数</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th><div class="th-cell">温度参数</div></th>
                <th><div class="th-cell">回复数 Token 数</div></th>
                <th><div class="th-cell">上下文数量</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.msgCount }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.temp }}</td>
                <td>{{ item.tokens }}</td>
                <td>{{ item.context }}</td>
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
          id: "D001",
          title: "如何优化前端性能",
          user: "张三",
          role: "智能客服助手",
          model: "gpt-4-turbo",
          msgCount: 12,
          createTime: "2026-01-05 09:30:00",
          temp: 0.7,
          tokens: 2048,
          context: 8192,
        },
        {
          id: "D002",
          title: "Python 异步编程",
          user: "李四",
          role: "技术顾问",
          model: "claude-3-5-sonnet",
          msgCount: 8,
          createTime: "2026-01-10 14:20:00",
          temp: 0.5,
          tokens: 4096,
          context: 16384,
        },
        {
          id: "D003",
          title: "品牌营销策略讨论",
          user: "王五",
          role: "营销策划师",
          model: "gemini-1.5-pro",
          msgCount: 15,
          createTime: "2026-01-15 10:00:00",
          temp: 0.8,
          tokens: 3072,
          context: 8192,
        },
        {
          id: "D004",
          title: "销售数据分析",
          user: "赵六",
          role: "数据分析师",
          model: "qwen-max",
          msgCount: 6,
          createTime: "2026-01-20 16:45:00",
          temp: 0.3,
          tokens: 4096,
          context: 4096,
        },
        {
          id: "D005",
          title: "Vue3 组件设计",
          user: "孙七",
          role: "技术顾问",
          model: "gpt-4o",
          msgCount: 10,
          createTime: "2026-01-25 11:10:00",
          temp: 0.6,
          tokens: 2048,
          context: 16384,
        },
        {
          id: "D006",
          title: "客户投诉处理",
          user: "周八",
          role: "智能客服助手",
          model: "azure-gpt-4",
          msgCount: 18,
          createTime: "2026-02-01 09:00:00",
          temp: 0.7,
          tokens: 4096,
          context: 8192,
        },
        {
          id: "D007",
          title: "AI 发展趋势探讨",
          user: "吴九",
          role: "营销策划师",
          model: "claude-3-opus",
          msgCount: 14,
          createTime: "2026-02-05 13:30:00",
          temp: 0.9,
          tokens: 4096,
          context: 32768,
        },
        {
          id: "D008",
          title: "数据库性能调优",
          user: "郑十",
          role: "技术顾问",
          model: "glm-4-plus",
          msgCount: 9,
          createTime: "2026-02-10 10:20:00",
          temp: 0.4,
          tokens: 2048,
          context: 4096,
        },
        {
          id: "D009",
          title: "市场调研报告解读",
          user: "冯十一",
          role: "数据分析师",
          model: "ernie-4.0",
          msgCount: 7,
          createTime: "2026-02-15 15:00:00",
          temp: 0.5,
          tokens: 4096,
          context: 8192,
        },
        {
          id: "D010",
          title: "新品发布会策划",
          user: "陈十二",
          role: "营销策划师",
          model: "gemini-1.5-flash",
          msgCount: 11,
          createTime: "2026-02-20 08:40:00",
          temp: 0.8,
          tokens: 3072,
          context: 16384,
        },
        {
          id: "D011",
          title: "React 性能优化",
          user: "褚十三",
          role: "技术顾问",
          model: "gpt-3.5-turbo",
          msgCount: 5,
          createTime: "2026-02-25 12:10:00",
          temp: 0.6,
          tokens: 2048,
          context: 4096,
        },
        {
          id: "D012",
          title: "售后服务流程改进",
          user: "卫十四",
          role: "智能客服助手",
          model: "azure-gpt-35",
          msgCount: 13,
          createTime: "2026-03-01 09:50:00",
          temp: 0.7,
          tokens: 4096,
          context: 8192,
        },
        {
          id: "D013",
          title: "用户画像分析",
          user: "蒋十五",
          role: "数据分析师",
          model: "qwen-plus",
          msgCount: 8,
          createTime: "2026-03-05 14:30:00",
          temp: 0.4,
          tokens: 4096,
          context: 4096,
        },
        {
          id: "D014",
          title: "社交媒体运营策略",
          user: "沈十六",
          role: "营销策划师",
          model: "hunyuan-pro",
          msgCount: 16,
          createTime: "2026-03-10 11:20:00",
          temp: 0.8,
          tokens: 3072,
          context: 8192,
        },
        {
          id: "D015",
          title: "Docker 容器化部署",
          user: "韩十七",
          role: "技术顾问",
          model: "claude-3-5-sonnet",
          msgCount: 10,
          createTime: "2026-03-15 16:00:00",
          temp: 0.5,
          tokens: 4096,
          context: 16384,
        },
        {
          id: "D016",
          title: "用户满意度调查",
          user: "杨十八",
          role: "智能客服助手",
          model: "gpt-4-turbo",
          msgCount: 14,
          createTime: "2026-03-20 10:30:00",
          temp: 0.6,
          tokens: 2048,
          context: 8192,
        },
        {
          id: "D017",
          title: "竞品分析报告",
          user: "朱十九",
          role: "数据分析师",
          model: "glm-4-air",
          msgCount: 9,
          createTime: "2026-03-25 13:10:00",
          temp: 0.4,
          tokens: 4096,
          context: 8192,
        },
        {
          id: "D018",
          title: "视频内容创意讨论",
          user: "秦二十",
          role: "营销策划师",
          model: "gemini-1.5-pro",
          msgCount: 12,
          createTime: "2026-04-01 09:00:00",
          temp: 0.9,
          tokens: 3072,
          context: 16384,
        },
        {
          id: "D019",
          title: "微服务架构设计",
          user: "尤二十一",
          role: "技术顾问",
          model: "gpt-4o",
          msgCount: 7,
          createTime: "2026-04-05 15:30:00",
          temp: 0.6,
          tokens: 4096,
          context: 32768,
        },
        {
          id: "D020",
          title: "员工培训需求调研",
          user: "许二十二",
          role: "智能客服助手",
          model: "azure-gpt-4",
          msgCount: 11,
          createTime: "2026-04-10 11:40:00",
          temp: 0.7,
          tokens: 2048,
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
  min-width: 1710px;
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
