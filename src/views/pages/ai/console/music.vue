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
            <span>音乐名称</span>
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
          <div>音乐管理列表</div>
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
                <th><div class="th-cell">音乐名称</div></th>
                <th><div class="th-cell">用户</div></th>
                <th><div class="th-cell">音乐状态</div></th>
                <th><div class="th-cell">模型</div></th>
                <th><div class="th-cell">内容</div></th>
                <th><div class="th-cell">时长（秒）</div></th>
                <th><div class="th-cell">提示词</div></th>
                <th><div class="th-cell">歌词</div></th>
                <th><div class="th-cell">描述</div></th>
                <th><div class="th-cell">生成模式</div></th>
                <th><div class="th-cell">风格标签</div></th>
                <th><div class="th-cell">是否发布</div></th>
                <th><div class="th-cell">任务编号</div></th>
                <th><div class="th-cell">错误信息</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.user }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.mode }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.prompt }}</td>
                <td>{{ item.lyrics }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.mode }}</td>
                <td>{{ item.style }}</td>
                <td>{{ item.isPublished }}</td>
                <td>{{ item.taskId }}</td>
                <td>{{ item.error }}</td>
                <td>{{ item.createTime }}</td>
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
          id: "M001",
          name: "星夜幻想曲",
          user: "张三",
          status: "已完成",
          model: "Suno V3",
          content: "🎵 纯音乐",
          duration: 180,
          prompt: "星空下漫步，梦幻钢琴曲",
          lyrics: "",
          description: "舒缓的钢琴旋律，适合冥想",
          mode: "instrumental",
          style: "古典, 梦幻",
          isPublished: "是",
          taskId: "TASK-M001",
          error: "",
          createTime: "2026-01-05 09:30:00",
        },
        {
          id: "M002",
          name: "青春回忆录",
          user: "李四",
          status: "已完成",
          model: "Suno V3",
          content: "🎤 人声歌曲",
          duration: 210,
          prompt: "校园民谣风格，温暖治愈",
          lyrics: "那年夏天...",
          description: "怀念青春的民谣歌曲",
          mode: "vocal",
          style: "民谣, 温暖",
          isPublished: "是",
          taskId: "TASK-M002",
          error: "",
          createTime: "2026-01-10 14:20:00",
        },
        {
          id: "M003",
          name: "电子脉冲",
          user: "王五",
          status: "已完成",
          model: "Suno V3",
          content: "🎵 纯音乐",
          duration: 150,
          prompt: "科幻主题电子音乐",
          lyrics: "",
          description: "未来感十足的电子配乐",
          mode: "instrumental",
          style: "电子, 科幻",
          isPublished: "否",
          taskId: "TASK-M003",
          error: "",
          createTime: "2026-01-15 10:00:00",
        },
        {
          id: "M004",
          name: "雨中漫步",
          user: "赵六",
          status: "处理中",
          model: "Suno V3.5",
          content: "🎵 纯音乐",
          duration: 0,
          prompt: "雨声与钢琴交织",
          lyrics: "",
          description: "宁静的雨中即景",
          mode: "instrumental",
          style: "古典, 自然",
          isPublished: "否",
          taskId: "TASK-M004",
          error: "",
          createTime: "2026-01-20 16:45:00",
        },
        {
          id: "M005",
          name: "爱情故事",
          user: "孙七",
          status: "已完成",
          model: "Suno V3",
          content: "🎤 人声歌曲",
          duration: 195,
          prompt: "流行情歌，温柔男声",
          lyrics: "遇见你那天...",
          description: "浪漫流行情歌",
          mode: "vocal",
          style: "流行, 浪漫",
          isPublished: "是",
          taskId: "TASK-M005",
          error: "",
          createTime: "2026-01-25 11:10:00",
        },
        {
          id: "M006",
          name: "爵士之夜",
          user: "周八",
          status: "已完成",
          model: "Suno V3.5",
          content: "🎵 纯音乐",
          duration: 165,
          prompt: "爵士钢琴，慵懒夜晚",
          lyrics: "",
          description: "复古爵士钢琴曲",
          mode: "instrumental",
          style: "爵士, 复古",
          isPublished: "否",
          taskId: "TASK-M006",
          error: "",
          createTime: "2026-02-01 09:00:00",
        },
        {
          id: "M007",
          name: "摇滚狂想",
          user: "吴九",
          status: "失败",
          model: "Suno V3",
          content: "🎤 人声歌曲",
          duration: 0,
          prompt: "硬摇滚风格",
          lyrics: "挣脱束缚...",
          description: "激昂摇滚乐曲",
          mode: "vocal",
          style: "摇滚, 激情",
          isPublished: "否",
          taskId: "TASK-M007",
          error: "API 请求超时，请重试",
          createTime: "2026-02-05 13:30:00",
        },
        {
          id: "M008",
          name: "东方韵味",
          user: "郑十",
          status: "已完成",
          model: "Suno V3.5",
          content: "🎵 纯音乐",
          duration: 200,
          prompt: "古筝与笛子合奏",
          lyrics: "",
          description: "中国传统乐器演绎",
          mode: "instrumental",
          style: "中国风, 古典",
          isPublished: "是",
          taskId: "TASK-M008",
          error: "",
          createTime: "2026-02-10 10:20:00",
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
  min-width: 2690px;
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
