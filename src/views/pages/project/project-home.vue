<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div class="tu"></div>
          <div class="zi">
            <div>我负责的项目</div>
            <div>{{ summary.myProjectCount || 0 }}</div>
            <div>参与{{ summary.myProjectCount || 0 }}</div>
          </div>
        </div>
        <div class="top-1">
          <div class="tu" style="background-color: #67c23a"></div>
          <div class="zi">
            <div>进行中的项目</div>
            <div style="color: #67c23a">{{ summary.inProgressCount || 0 }}</div>
            <div style="color: red">逾期{{ summary.overdueTaskCount || 0 }}</div>
          </div>
        </div>
        <div class="top-1">
          <div class="tu" style="background-color: #e6a23c"></div>
          <div class="zi">
            <div>我的待办任务</div>
            <div style="color: #e6a23c">{{ summary.todoTaskCount || 0 }}</div>
            <div>今日到期</div>
          </div>
        </div>
        <div class="top-1">
          <div class="tu" style="background-color: #f56c6c"></div>
          <div class="zi">
            <div>逾期任务</div>
            <div style="color: #f56c6c">{{ summary.overdueTaskCount || 0 }}</div>
            <div>需尽快处理</div>
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-left">
          <div class="left-top">我的待办任务<span>查看全部</span></div>
          <div class="left-main">
            <ul class="left-nav">
              <li v-for="(item, index) in todoTaskList" :key="index">
                <div class="nav-1">
                  <div>{{ item.taskName || item.name }}<span v-if="item.overdue">逾期</span></div>
                  <div>计划结束：{{ item.planEndTime || item.endTime || '' }}</div>
                </div>
                <div class="nav-2">
                  <div :class="{ b: item.status === '进行中', c: item.status === '已完成' }">{{ item.status || '进行中' }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-right">
          <div class="right-top">待办提醒</div>
          <div class="right-main">
            <ul class="right-nav">
              <li>逾期任务</li>
              <li>待审核工时</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-floot">
        <div class="floot-1">
          <div class="floot-top">快捷入口</div>
          <div class="floot-main">
            <div>
              <span></span><br />
              <span>项目立减</span>
            </div>
            <div>
              <span style="background-color: #67c23a"></span><br />
              <span>项目台账</span>
            </div>
            <div>
              <span style="background-color: #e6a23c"></span><br />
              <span>我的任务</span>
            </div>
            <div>
              <span style="background-color: #9461f5"></span><br />
              <span>工时填报</span>
            </div>
            <div>
              <span style="background-color: #13c2c2"></span><br />
              <span>统计分析</span>
            </div>
            <div>
              <span style="background-color: #eb2f96"></span><br />
              <span>资源负载</span>
            </div>
          </div>
        </div>
        <div class="floot-1">
          <div class="floot-top">我负责的项目</div>
          <div class="floot-main2">
            <ul class="floot-nav">
              <li v-for="(item, index) in myProjectList" :key="index">
                <div class="box1">{{ item.projectName || item.name }}<span>{{ item.status || '进行中' }}</span></div>
                <div class="box2">
                  <div class="dbox">
                    <div
                      :style="{
                        width: (item.progress || 0) + '%',
                        height: '100%',
                        backgroundColor: (item.progress || 0) >= 100 ? '#57d188' : '#006be6'
                      }"
                    ></div>
                  </div>
                  <span>{{ item.progress || 0 }}%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="floot-1">
          <div class="floot-top">最近动态</div>
          <div class="floot-main3">
            <ul class="main3-nav">
              <li v-for="(item, index) in recentList" :key="index">
                <div class="div1">
                    <div style="width: 10px; height: 10px; border-radius: 50%;
                    background-color: #57d188;"></div>
                    <div style="width: 2px; height: 100%; background-color: #ccc;"></div>
                </div>
                <div class="div2">
                  <div class="li-1">
                    <span>{{ item.type || '任务' }}</span>{{ item.title || item.content || '' }}<br /><span
                      >· {{ item.projectName || '' }}</span
                    >
                  </div>
                  <div class="li-2">
                    {{ item.description || item.detail || '' }}
                  </div>
                  <div class="li-3">{{ item.creator || '' }} · {{ item.createTime || '' }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectHomeSummary, getMyTodoTaskList, getMyProjectList, getMyRecentList } from '#/api/project/project-home';

export default {
  data() {
    return {
      summary: {
        myProjectCount: 0,
        inProgressCount: 0,
        todoTaskCount: 0,
        overdueTaskCount: 0
      },
      todoTaskList: [],
      myProjectList: [],
      recentList: []
    };
  },
  created() {
    this.loadSummary();
    this.loadTodoTaskList();
    this.loadMyProjectList();
    this.loadRecentList();
  },
  methods: {
    async loadSummary() {
      try {
        const res = await getProjectHomeSummary();
        this.summary = res || this.summary;
      } catch (e) {
        console.error('加载统计失败', e);
      }
    },
    async loadTodoTaskList() {
      try {
        const res = await getMyTodoTaskList({ pageNo: 1, pageSize: 8 });
        this.todoTaskList = res.list || res.records || [];
      } catch (e) {
        console.error('加载待办任务失败', e);
      }
    },
    async loadMyProjectList() {
      try {
        const res = await getMyProjectList({ pageNo: 1, pageSize: 6 });
        this.myProjectList = res.list || res.records || [];
      } catch (e) {
        console.error('加载我的项目失败', e);
      }
    },
    async loadRecentList() {
      try {
        const res = await getMyRecentList({ limit: 15 });
        this.recentList = res.list || res.records || res || [];
      } catch (e) {
        console.error('加载最近动态失败', e);
      }
    }
  }
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
  width: 1014px;
  height: 1270px;
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 140px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.app-top .top-1 {
  width: 239px;
  height: 122px;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px;
  display: flex;
}
.app-top .top-1 .tu {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #006be6;
  margin-top: 8px;
}
.app-top .top-1 .zi {
  width: 84px;
  height: 74px;
  /* border: 1px solid red; */
  margin-left: 10px;
}
.app-top .top-1 .zi div {
  font-size: 12px;
}
.app-top .top-1 .zi div:nth-child(2) {
  font-size: 24px;
  color: #006be6;
  font-weight: 600;
}
.app-main {
  width: 100%;
  height: 585px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.main-left {
  width: 630px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.left-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.left-top span {
  color: #006be6;
  font-size: 14px;
}
.left-main {
  width: 100%;
  height: 512px;
  padding: 24px;
}
.left-nav {
  list-style: none;
}
.left-nav li {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
}
.left-nav li .nav-1 {
  width: 90%;
  height: 42px;
}
.left-nav li .nav-1 div:first-child {
  font-size: 14px;
}
.left-nav li .nav-1 div:first-child span {
  display: inline-block;
  width: 40px;
  height: 22px;
  font-size: 12px;
  color: #ff3860;
  background-color: #fff0f0;
  border: 1px solid #ff3860;
  text-align: center;
  border-radius: 5px;
  padding-top: 1px;
  margin-left: 5px;
}
.left-nav li .nav-1 div:last-child {
  font-size: 12px;
}
.left-nav li .nav-2 {
  width: 10%;
}
.left-nav li .nav-2 div {
  width: 52px;
  height: 22px;
  border-radius: 5px;
  background-color: #32363905;
  font-size: 12px;
  text-align: center;
  padding-top: 1px;
  border: 1px solid #ccc;
}
.left-nav li .nav-2 .b {
  color: #006be6;
  background-color: #e6f6ff;
  border: 1px solid #006be6;
}
.left-nav li .nav-2 .c {
  color: #57d188;
  background-color: #f0fff3;
  border: 1px solid #57d188;
}
.main-right {
  width: 340px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.right-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.right-main {
  width: 100%;
  height: 128px;
  padding: 24px;
}
.right-nav {
  list-style: none;
}
.right-nav li {
  width: 100%;
  height: 36px;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
}
.right-nav li:hover {
  background-color: #ccc;
}

.app-floot {
  width: 100%;
  height: 465px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.floot-1 {
  width: 320px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
}
.floot-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.floot-main {
  width: 100%;
  height: 260px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.floot-main div {
  flex: 0 0 calc((100% - 20px) / 3);
  height: 100px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
.floot-main div:hover {
  background-color: #ccc;
  cursor: pointer;
}
.floot-main div span {
  font-size: 12px;
}
.floot-main div span:first-child {
  display: inline-block;
  width: 44px;
  height: 44px;
  background-color: #006be6;
  border-radius: 10px;
  margin-bottom: -10px;
}

.floot-main2 {
  width: 100%;
  height: 353px;
  padding: 24px;
}
.floot-nav {
  list-style: none;
}
.floot-nav li {
  width: 100%;
  height: 67px;
  padding: 8px;
  margin-bottom: 12px;
}
.floot-nav li:hover {
  background-color: #ccc;
  cursor: pointer;
  border-radius: 10px;
}
.floot-nav li .box1 {
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.floot-nav li .box1 span {
  display: inline-block;
  width: 52px;
  height: 22px;
  font-size: 12px;
  text-align: center;
  background-color: #32363905;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.floot-nav li .box2 {
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
}
.floot-nav li .box2 .dbox {
  width: 229px;
  height: 6px;
  border: 1px solid #ccc;
  background-color: #dcdedf;
  border-radius: 10px;
}

.floot-main3 {
  width: 100%;
  height: 408px;
  padding: 24px;
  font-size: 14px;
  overflow: auto;
}
.main3-nav {
  list-style: none;
}
.main3-nav li {
  width: 100%;
  height: 130px;
  display: flex;
}
.main3-nav li .div1{
    width: 5%;
    margin-right: 10px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.main3-nav li .div2{
    width: 95%;
}
.li-1 {
  width: 100%;
  height: 46px;
  /* border: 1px solid red; */
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.li-1 span:first-child {
  display: inline-block;
  width: 40px;
  height: 22px;
  font-size: 12px;
  border: 1px solid #57d188;
  background-color: #f6ffed;
  color: #57d188;
  text-align: center;
  margin-right: 5px;
  border-radius: 5px;
}
.li-1 span:last-child {
  font-size: 12px;
}
.li-2 {
  width: 100%;
  height: 40px;
  font-size: 14px;
}
.li-3 {
  width: 100%;
  height: 16px;
  font-size: 12px;
}
</style>
