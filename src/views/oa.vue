<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li :class="{ open: expanded === 'car' }">
        <div class="menu-toggle" @click="toggle('car')">
          <span class="menu-label">车辆管理</span>
          <span class="menu-arrow">{{ expanded === "car" ? "▾" : "▸" }}</span>
        </div>
        <!-- 车辆信息管理 -->
        <ul class="submenu">
          <li>
            <router-link
              to="/carInfo"
              active-class="sub-active"
              class="sub-item"
            >
              <span>车辆信息管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="carApplyList" active-class="sub-active" class="sub-item">
              <span>用车申请单管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="carReturnList" active-class="sub-active" class="sub-item">
              <span>换车申请单管理</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- —————————————— -->
      <!-- 印章管理 -->
      <li :class="{ open: expanded === 'seal' }">
        <div class="menu-toggle" @click="toggle('seal')">
          <span class="menu-label">印章管理</span>
          <span class="menu-arrow">{{ expanded === "seal" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/sealInfo" active-class="sub-active" class="sub-item">
              <span>印章信息管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/sealApplyList" active-class="sub-active" class="sub-item">
              <span>用印申请单</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- ———————————— -->
      <!-- 云盘管理 -->
      <li :class="{ open: expanded === 'cloud' }">
        <div class="menu-toggle" @click="toggle('cloud')">
          <span class="menu-label">企业云盘</span>
          <span class="menu-arrow">{{ expanded === "cloud" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/file" active-class="sub-active" class="sub-item">
              <span>企业云盘</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- —————————————————— -->
      <!-- 会议室管理 -->
      <li :class="{ open: expanded === 'meetingroom' }">
        <div class="menu-toggle" @click="toggle('meetingroom')">
          <span class="menu-label">会议室管理</span>
          <span class="menu-arrow">{{
            expanded === "meetingroom" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/roomInfo" active-class="sub-active" class="sub-item">
              <span>会议室信息管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/booking" active-class="sub-active" class="sub-item">
              <span>会议室预定</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- —————————————————————— -->
      <!--公文管理  -->
      <li :class="{ open: expanded === 'officedoc' }">
        <div class="menu-toggle" @click="toggle('officedoc')">
          <span class="menu-label">公文管理</span>
          <span class="menu-arrow">{{
            expanded === "officedoc" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/template" active-class="sub-active" class="sub-item">
              <span>套红模板</span>
            </router-link>
          </li>
          <li>
            <router-link to="/send" active-class="sub-active" class="sub-item">
              <span>公文发文</span>
            </router-link>
          </li>
          <li>
            <router-link to="/receive" active-class="sub-active" class="sub-item">
              <span>公文收文</span>
            </router-link>
          </li>
          <li>
            <router-link to="/outside" active-class="sub-active" class="sub-item">
              <span>外部公文</span>
            </router-link>
          </li>
          <li>
            <router-link to="/archive" active-class="sub-active" class="sub-item">
              <span>归档台账</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- ———————————————— -->
      <!-- 日程管理 -->
      <li>
        <router-link to="/schedule" active-class="sidebar-active" class="menu-item">
          <span class="menu-label">日程管理</span>
        </router-link>
      </li>
      <!-- ———————————————— -->
      <!-- 办公用品管理 -->
      <li :class="{ open: expanded === 'supply' }">
        <div class="menu-toggle" @click="toggle('supply')">
          <span class="menu-label">办公用品管理</span>
          <span class="menu-arrow">{{
            expanded === "supply" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/supplyinfo" active-class="sub-active" class="sub-item">
              <span>办公用品台账</span>
            </router-link>
          </li>
          <li>
            <router-link to="/supplyapply" active-class="sub-active" class="sub-item">
              <span>领用申请管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/supplyrecord" active-class="sub-active" class="sub-item">
              <span>领用发放管理</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- —————————————————————— -->
      <!-- 出差管理 -->
      <li :class="{ open: expanded === 'trip' }">
        <div class="menu-toggle" @click="toggle('trip')">
          <span class="menu-label">出差管理</span>
          <span class="menu-arrow">{{ expanded === "trip" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/tripApplyList" active-class="sub-active" class="sub-item">
              <span>出差申请</span>
            </router-link>
          </li>
          <li>
            <router-link to="/tripReimburseList" active-class="sub-active" class="sub-item">
              <span>差旅报销</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- —————————————— -->
      <!-- 工作汇报 -->
      <li :class="{ open: expanded === 'workreport' }">
        <div class="menu-toggle" @click="toggle('workreport')">
          <span class="menu-label">工作汇报</span>
          <span class="menu-arrow">{{
            expanded === "workreport" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/dailyReportList" active-class="sub-active" class="sub-item">
              <span>工作日报列表</span>
            </router-link>
          </li>
          <li>
            <router-link to="/weeklyReportList" active-class="sub-active" class="sub-item">
              <span>工作周报列表</span>
            </router-link>
          </li>
          <li>
            <router-link to="/monthlyReportList" active-class="sub-active" class="sub-item">
              <span>工作月报列表</span>
            </router-link>
          </li>
          <li>
            <router-link to="/reportStatistics" active-class="sub-active" class="sub-item">
              <span>汇报统计</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- ———————————————— -->
      <li>
        <router-link to="/im" active-class="sidebar-active" class="menu-item">
          <span class="menu-label">即时通讯</span>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- 主体部分 -->
  <div class="home-main">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref("car");
const toggle = (name) => {
  expanded.value = expanded.value === name ? "" : name;
};
</script>

<style scoped>
.menu-item,
.menu-toggle,
.sub-item {
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
}
.menu-item {
  min-height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  color: #1f2d3d;
  margin-bottom: 0;
  transition: background-color 0.2s ease;
}
.menu-toggle {
  min-height: 42px;
  padding: 0 12px;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 0;
  transition: background-color 0.2s ease;
}
.menu-toggle:hover,
.menu-item:hover,
.sub-item:hover {
  background-color: #f3f7ff;
}
.menu-label {
  font-size: 14px;
  font-weight: normal;
}
.menu-arrow {
  color: #9aa7bb;
  font-size: 14px;
}
.submenu {
  list-style: none;
  margin: 0;
  padding: 0 0 0 12px;
  display: none;
}
.open > .submenu {
  display: block;
}
.submenu li {
  margin-top: 2px;
}
.sub-item {
  min-height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  color: #4c5a7a;
  transition: background-color 0.2s ease;
}
.sub-active {
  color: #409eff;
  background-color: rgba(64, 158, 255, 0.14);
}
.sidebar-active {
  color: #0c70f3;
  background-color: rgba(176, 211, 245, 0.7);
}
/* 主体 */
.home-main {
  width: 1040px;
  height: 790px;
  position: absolute;
  left: 228px;
  background-color: #ecebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ———————————— */

/* 侧边导航栏 */
.sidebar-left {
  flex: 0 0 227px;
  width: 227px;
  height: calc(100vh - 51px); /* 占满剩余高度 */
  background-color: #fff;
  position: fixed; /* 固定定位 */
  top: 51px;
  left: 0;
  overflow-y: auto;
  z-index: 202;
  background-color: #fff;
}
.sidebar-left ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 8px 10px 10px;
}
.sidebar-left ul li {
  width: 100%;
  margin-bottom: 4px;
  list-style: none;
}
.sidebar-left ul li:last-child {
  margin-bottom: 0;
}
.sidebar-left ul li .menu-toggle,
.sidebar-left ul li .menu-item,
.sidebar-left ul li .sub-item {
  width: 100%;
}
.sidebar-left ul li .menu-toggle,
.sidebar-left ul li .menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-left ul li .menu-item {
  justify-content: flex-start;
}
.sidebar-left ul li .menu-item .menu-label,
.sidebar-left ul li .menu-toggle .menu-label {
  flex: 1;
}
.sidebar-left ul li .sub-item {
  display: flex;
  align-items: center;
}
.sidebar-left ul li:hover {
  background: none;
}
/* —————————————— */
</style>
