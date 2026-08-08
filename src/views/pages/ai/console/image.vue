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
          <div>绘画管理列表</div>
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
                <th><div class="th-cell">图片</div></th>
                <th><div class="th-cell">用户</div></th>
                <th><div class="th-cell">平台</div></th>
                <th><div class="th-cell">模型</div></th>
                <th><div class="th-cell">绘画状态</div></th>
                <th><div class="th-cell">是否发布</div></th>
                <th><div class="th-cell">提示词</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th><div class="th-cell">宽度</div></th>
                <th><div class="th-cell">高度</div></th>
                <th><div class="th-cell">错误信息</div></th>
                <th><div class="th-cell">任务编号</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.image }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.platform }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.isPublished }}</td>
                <td>{{ item.prompt }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.width }}</td>
                <td>{{ item.height }}</td>
                <td>{{ item.error }}</td>
                <td>{{ item.taskId }}</td>
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
          id: "P001",
          image: "🎨",
          user: "张三",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "已完成",
          isPublished: "是",
          prompt: "未来城市夜景，霓虹灯，赛博朋克风格",
          createTime: "2026-01-05 09:30:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-001",
        },
        {
          id: "P002",
          image: "🌄",
          user: "李四",
          platform: "Stability AI",
          model: "Stable Diffusion XL",
          status: "已完成",
          isPublished: "是",
          prompt: "日出时分的山间云雾，油画风格",
          createTime: "2026-01-10 14:20:00",
          width: 1024,
          height: 768,
          error: "",
          taskId: "TASK-002",
        },
        {
          id: "P003",
          image: "🐱",
          user: "王五",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "否",
          prompt: "一只穿着宇航服的猫，卡通风格",
          createTime: "2026-01-15 10:00:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-003",
        },
        {
          id: "P004",
          image: "🌺",
          user: "赵六",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "处理中",
          isPublished: "否",
          prompt: "热带花卉水彩插画",
          createTime: "2026-01-20 16:45:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-004",
        },
        {
          id: "P005",
          image: "🏰",
          user: "孙七",
          platform: "Stability AI",
          model: "Stable Diffusion 3",
          status: "已完成",
          isPublished: "是",
          prompt: "童话城堡，梦幻风格，魔法森林环绕",
          createTime: "2026-01-25 11:10:00",
          width: 1216,
          height: 832,
          error: "",
          taskId: "TASK-005",
        },
        {
          id: "P006",
          image: "🌊",
          user: "周八",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "是",
          prompt: "海浪冲击礁石，超现实主义",
          createTime: "2026-02-01 09:00:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-006",
        },
        {
          id: "P007",
          image: "🚀",
          user: "吴九",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "失败",
          isPublished: "否",
          prompt: "星际飞船穿越星云",
          createTime: "2026-02-05 13:30:00",
          width: 1024,
          height: 1024,
          error: "API 请求超时",
          taskId: "TASK-007",
        },
        {
          id: "P008",
          image: "🌸",
          user: "郑十",
          platform: "Stability AI",
          model: "Stable Diffusion XL",
          status: "已完成",
          isPublished: "否",
          prompt: "樱花树下，日系动漫风格",
          createTime: "2026-02-10 10:20:00",
          width: 768,
          height: 1024,
          error: "",
          taskId: "TASK-008",
        },
        {
          id: "P009",
          image: "🌌",
          user: "冯十一",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "是",
          prompt: "银河星空，极光，全景风光",
          createTime: "2026-02-15 15:00:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-009",
        },
        {
          id: "P010",
          image: "🐉",
          user: "陈十二",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "处理中",
          isPublished: "否",
          prompt: "中国龙腾云驾雾，水墨风格",
          createTime: "2026-02-20 08:40:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-010",
        },
        {
          id: "P011",
          image: "🏔️",
          user: "褚十三",
          platform: "Stability AI",
          model: "Stable Diffusion 3",
          status: "已完成",
          isPublished: "是",
          prompt: "雪山倒影在湖面，真实摄影风格",
          createTime: "2026-02-25 12:10:00",
          width: 1024,
          height: 768,
          error: "",
          taskId: "TASK-011",
        },
        {
          id: "P012",
          image: "🎭",
          user: "卫十四",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "否",
          prompt: "威尼斯面具，华丽巴洛克风格",
          createTime: "2026-03-01 09:50:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-012",
        },
        {
          id: "P013",
          image: "🌿",
          user: "蒋十五",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "失败",
          isPublished: "否",
          prompt: "热带雨林神秘生物",
          createTime: "2026-03-05 14:30:00",
          width: 1024,
          height: 1024,
          error: "内容过滤违规",
          taskId: "TASK-013",
        },
        {
          id: "P014",
          image: "🎪",
          user: "沈十六",
          platform: "Stability AI",
          model: "Stable Diffusion XL",
          status: "已完成",
          isPublished: "是",
          prompt: "马戏团小丑与大象，复古海报风格",
          createTime: "2026-03-10 11:20:00",
          width: 832,
          height: 1216,
          error: "",
          taskId: "TASK-014",
        },
        {
          id: "P015",
          image: "🌅",
          user: "韩十七",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "是",
          prompt: "沙漠日落，骆驼队剪影",
          createTime: "2026-03-15 16:00:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-015",
        },
        {
          id: "P016",
          image: "🧚",
          user: "杨十八",
          platform: "OpenAI",
          model: "DALL-E 3",
          status: "处理中",
          isPublished: "否",
          prompt: "森林精灵与小鹿，童话插画",
          createTime: "2026-03-20 10:30:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-016",
        },
        {
          id: "P017",
          image: "🏯",
          user: "朱十九",
          platform: "Stability AI",
          model: "Stable Diffusion 3",
          status: "已完成",
          isPublished: "否",
          prompt: "日本古城樱花季，浮世绘风格",
          createTime: "2026-03-25 13:10:00",
          width: 1024,
          height: 768,
          error: "",
          taskId: "TASK-017",
        },
        {
          id: "P018",
          image: "🦋",
          user: "秦二十",
          platform: "Midjourney",
          model: "Midjourney V6",
          status: "已完成",
          isPublished: "是",
          prompt: "蝴蝶翅膀特写，微距摄影风格",
          createTime: "2026-04-01 09:00:00",
          width: 1024,
          height: 1024,
          error: "",
          taskId: "TASK-018",
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
  min-width: 2180px;
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
