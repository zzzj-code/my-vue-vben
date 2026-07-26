<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <!-- 组织架构 -->
      <li :class="{ open: isExpanded('org') }">
        <div class="menu-toggle" @click="toggle('org')">
          <span class="menu-label">组织架构</span>
          <span class="menu-arrow">{{ isExpanded("org") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/orginfo"
              active-class="sub-active"
              class="sub-item"
            >
              <span>组织管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/orgChart"
              active-class="sub-active"
              class="sub-item"
            >
              <span>组织架构图</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 人事档案 -->
      <li :class="{ open: isExpanded('employee') }">
        <div class="menu-toggle" @click="toggle('employee')">
          <span class="menu-label">人事档案</span>
          <span class="menu-arrow">{{
            isExpanded("employee") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/employeeArchiveList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>员工档案</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/employeeContractExpiring"
              active-class="sub-active"
              class="sub-item"
            >
              <span>劳动合同到期预警</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/employeeContractRenewable"
              active-class="sub-active"
              class="sub-item"
            >
              <span>待续签合同</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 人事管理 -->
      <li :class="{ open: isExpanded('employee-relation') }">
        <div class="menu-toggle" @click="toggle('employee-relation')">
          <span class="menu-label">人事管理</span>
          <span class="menu-arrow">{{
            isExpanded("employee-relation") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/entryList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>员工入职</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/regularList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>员工转正</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/transferList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>人事调动</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/resignationList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>员工离职</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 假勤管理 -->
      <li :class="{ open: isExpanded('attendance') }">
        <div class="menu-toggle" @click="toggle('attendance')">
          <span class="menu-label">假勤管理</span>
          <span class="menu-arrow">{{
            isExpanded("attendance") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/attendanceConfig"
              active-class="sub-active"
              class="sub-item"
            >
              <span>假勤配置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/attendancePunch"
              active-class="sub-active"
              class="sub-item"
            >
              <span>考勤打卡</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/punchRecord"
              active-class="sub-active"
              class="sub-item"
            >
              <span>打卡记录</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/leaveCancelList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>请假销假</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/cardReplacementList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>补卡管理</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 招聘管理 -->
      <li :class="{ open: isExpanded('recruitment') }">
        <div class="menu-toggle" @click="toggle('recruitment')">
          <span class="menu-label">招聘管理</span>
          <span class="menu-arrow">{{
            isExpanded("recruitment") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/requirementList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>招聘需求</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/positionList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>招聘职位</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/candidateList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>候选人中心</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/offerList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>录用审批</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 薪酬管理 -->
      <li :class="{ open: isExpanded('salary') }">
        <div class="menu-toggle" @click="toggle('salary')">
          <span class="menu-label">薪酬管理</span>
          <span class="menu-arrow">{{ isExpanded("salary") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li :class="{ open: isExpanded('setting') }">
            <div class="menu-toggle" @click="toggle('setting')">
              <span class="menu-label">薪酬设置</span>
              <span class="menu-arrow">{{
                isExpanded("setting") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/subject"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>薪酬主体</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/plan"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>薪酬方案</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/item"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>薪资项目</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/archiveList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>员工薪资档案</span>
            </router-link>
          </li>
          <li :class="{ open: isExpanded('tax') }">
            <div class="menu-toggle" @click="toggle('tax')">
              <span class="menu-label">个税管理</span>
              <span class="menu-arrow">{{
                isExpanded("tax") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/specialDeduction"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>专项附加扣除</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/taxOpening"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>个税累计初期</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/taxProfile"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>员工个税档案</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/batch" active-class="sub-active" class="sub-item">
              <span>薪资批次</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/payslip"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工资条管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/confirmList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>薪资确认审批</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/paymentList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>发薪登记</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/statistics"
              active-class="sub-active"
              class="sub-item"
            >
              <span>薪资统计</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 绩效管理 -->
      <li :class="{ open: isExpanded('performance') }">
        <div class="menu-toggle" @click="toggle('performance')">
          <span class="menu-label">绩效管理</span>
          <span class="menu-arrow">{{ isExpanded("performance") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li :class="{ open: isExpanded('setting') }">
            <div class="menu-toggle" @click="toggle('setting')">
              <span class="menu-label">绩效设置</span>
              <span class="menu-arrow">{{
                isExpanded("setting") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/scheme"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>绩效方案</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/indicator"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>指标库</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/template1"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>模板管理</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/gradeRule"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>等级规则</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/periodList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>绩效批次</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/planList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>目标确认</span>
            </router-link>
          </li>
          <li :class="{ open: isExpanded('assessment-task') }">
            <div class="menu-toggle" @click="toggle('assessment-task')">
              <span class="menu-label">考核任务</span>
              <span class="menu-arrow">{{
                isExpanded("assessment-task") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/selfReviewList"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>自评填报</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/leaderReviewList"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>评审填报</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/hrCalibrationList"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>校准填报</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/resultConfirmTaskList"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>结果确认</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/appealList"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>申诉管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/resultList" active-class="sub-active" class="sub-item">
              <span>绩效结果</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/resultConfirmList"
              active-class="sub-active"
              class="sub-item"
            >
              <span>绩效批次结果审批</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/statistics"
              active-class="sub-active"
              class="sub-item"
            >
              <span>绩效统计</span>
            </router-link>
          </li>
        </ul>
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

// 使用数组存储所有展开的菜单
const expanded = ref(["org"]); // 默认展开组织架构

const toggle = (name) => {
  const index = expanded.value.indexOf(name);
  if (index > -1) {
    expanded.value.splice(index, 1);
  } else {
    expanded.value.push(name);
  }
};

const isExpanded = (name) => {
  return expanded.value.includes(name);
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
