<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>发送人</span>
            <input type="text" placeholder="" />
          </div>
          <div>
            <span>接收人</span>
            <input type="text" placeholder="" />
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
          <div>私聊消息列表</div>
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
                <th><div class="th-cell">编号</div></th>
                <th><div class="th-cell">发送人</div></th>
                <th><div class="th-cell">接收人</div></th>
                <th><div class="th-cell">类型</div></th>
                <th><div class="th-cell">内容预览</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">回执</div></th>
                <th><div class="th-cell">发送时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.sender }}</td>
                <td>{{ item.receiver }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.preview }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.receipt }}</td>
                <td>{{ item.sendTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
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
          id: 1,
          sender: "张三",
          receiver: "李四",
          type: "文本",
          preview: "你好，明天有空吗？",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 10:30:00",
        },
        {
          id: 2,
          sender: "王五",
          receiver: "赵六",
          type: "图片",
          preview: "[图片] 风景照",
          status: "未读",
          receipt: "已送达",
          sendTime: "2026-08-09 11:15:00",
        },
        {
          id: 3,
          sender: "孙七",
          receiver: "周八",
          type: "文本",
          preview: "文件已经发送给你了",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 12:00:00",
        },
        {
          id: 4,
          sender: "李四",
          receiver: "张三",
          type: "语音",
          preview: "[语音] 15秒",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 13:20:00",
        },
        {
          id: 5,
          sender: "赵六",
          receiver: "王五",
          type: "文本",
          preview: "收到，谢谢！",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 14:00:00",
        },
        {
          id: 6,
          sender: "周八",
          receiver: "孙七",
          type: "文件",
          preview: "[文件] 项目报告.pdf",
          status: "未读",
          receipt: "发送中",
          sendTime: "2026-08-09 14:45:00",
        },
        {
          id: 7,
          sender: "张三",
          receiver: "赵六",
          type: "文本",
          preview: "周末一起吃饭吗？",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 15:30:00",
        },
        {
          id: 8,
          sender: "王五",
          receiver: "李四",
          type: "图片",
          preview: "[图片] 美食分享",
          status: "未读",
          receipt: "已送达",
          sendTime: "2026-08-09 16:10:00",
        },
        {
          id: 9,
          sender: "孙七",
          receiver: "张三",
          type: "文本",
          preview: "好的，没问题",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 17:00:00",
        },
        {
          id: 10,
          sender: "李四",
          receiver: "周八",
          type: "语音",
          preview: "[语音] 30秒",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 18:20:00",
        },
        {
          id: 11,
          sender: "赵六",
          receiver: "孙七",
          type: "文本",
          preview: "会议改到明天下午3点",
          status: "未读",
          receipt: "已送达",
          sendTime: "2026-08-09 19:00:00",
        },
        {
          id: 12,
          sender: "张三",
          receiver: "王五",
          type: "文件",
          preview: "[文件] 工作计划.xlsx",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 20:30:00",
        },
        {
          id: 13,
          sender: "周八",
          receiver: "李四",
          type: "文本",
          preview: "收到，我确认一下",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 21:00:00",
        },
        {
          id: 14,
          sender: "王五",
          receiver: "张三",
          type: "图片",
          preview: "[图片] 团队合照",
          status: "未读",
          receipt: "发送中",
          sendTime: "2026-08-09 22:15:00",
        },
        {
          id: 15,
          sender: "李四",
          receiver: "赵六",
          type: "文本",
          preview: "好的，明天见！",
          status: "已读",
          receipt: "已送达",
          sendTime: "2026-08-09 23:00:00",
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
  min-width: 1270px;
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
  width: 100px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 56px;
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
