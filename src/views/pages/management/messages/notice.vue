<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>公告标题</span>
            <input type="text" placeholder="请输入公告标题" />
          </div>
          <div>
            <span>公告类型</span>
            <input type="text" placeholder="请输入公告类型" />
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
          <div>公告列表</div>
          <div>
            <button>+新增公告</button>
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
                <th>公告编号</th>
                <th>公告标题</th>
                <th>公告类型</th>
                <th>公告状态</th>
                <th>是否重要通知</th>
                <th>已读状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.noticeNo }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.isImportant }}</td>
                <td>{{ item.readStatus }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                  <button>更多</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共9条记录<span>20条/页</span></div>
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
          noticeNo: "NOT20260801001",
          title: "系统升级维护通知",
          type: "系统公告",
          status: "已发布",
          isImportant: "是",
          readStatus: "已读",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          noticeNo: "NOT20260801002",
          title: "2026年8月员工生日会邀请",
          type: "活动通知",
          status: "已发布",
          isImportant: "否",
          readStatus: "未读",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          noticeNo: "NOT20260731003",
          title: "关于启用新办公系统的通知",
          type: "系统公告",
          status: "已发布",
          isImportant: "是",
          readStatus: "已读",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          noticeNo: "NOT20260731004",
          title: "2026年第二季度优秀员工表彰",
          type: "公司新闻",
          status: "已发布",
          isImportant: "是",
          readStatus: "未读",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          noticeNo: "NOT20260730005",
          title: "关于中秋国庆放假安排的通知",
          type: "行政通知",
          status: "草稿",
          isImportant: "否",
          readStatus: "未读",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          noticeNo: "NOT20260730006",
          title: "企业文化培训通知（第三期）",
          type: "培训通知",
          status: "已发布",
          isImportant: "否",
          readStatus: "已读",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          noticeNo: "NOT20260729007",
          title: "关于规范报销流程的通知",
          type: "行政通知",
          status: "已发布",
          isImportant: "是",
          readStatus: "未读",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          noticeNo: "NOT20260729008",
          title: "2026年Q3季度绩效考核通知",
          type: "人事通知",
          status: "草稿",
          isImportant: "是",
          readStatus: "未读",
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          noticeNo: "NOT20260728009",
          title: "公司羽毛球比赛报名通知",
          type: "活动通知",
          status: "已发布",
          isImportant: "否",
          readStatus: "已读",
          createTime: "2026-07-28 10:00:00",
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
  min-width: 1180px;
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
  width: 220px;
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
