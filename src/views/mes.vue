<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('mes')"
          to="/mes/home"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">MES首页</span>
        </router-link>
      </li>

      <li :class="{ open: isExpanded('md') }">
        <div class="menu-toggle" @click="toggle('md')">
          <span class="menu-label">基础数据</span>
          <span class="menu-arrow">{{ isExpanded("md") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/md/item"
              active-class="sub-active"
              class="sub-item"
            >
              <span>物料产品管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/item-type"
              active-class="sub-active"
              class="sub-item"
            >
              <span>物料产品分类</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/unit-measure"
              active-class="sub-active"
              class="sub-item"
            >
              <span>计量单位</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/client"
              active-class="sub-active"
              class="sub-item"
            >
              <span>客户管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/vendor"
              active-class="sub-active"
              class="sub-item"
            >
              <span>供应商管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/workshop"
              active-class="sub-active"
              class="sub-item"
            >
              <span>车间设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/workstation"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工作站设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/md/auto-code"
              active-class="sub-active"
              class="sub-item"
            >
              <span>编码规则</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- 仓库 -->
      <li :class="{ open: isExpanded('wm') }">
        <div class="menu-toggle" @click="toggle('wm')">
          <span class="menu-label">仓库管理</span>
          <span class="menu-arrow">{{ isExpanded("wm") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/wm/warehouse"
              active-class="sub-active"
              class="sub-item"
            >
              <span>仓库设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/material-stock"
              active-class="sub-active"
              class="sub-item"
            >
              <span>库存现有量</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/item-receipt"
              active-class="sub-active"
              class="sub-item"
            >
              <span>采购入库</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/arrival-notice"
              active-class="sub-active"
              class="sub-item"
            >
              <span>到货通知</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/return-vendor"
              active-class="sub-active"
              class="sub-item"
            >
              <span>采购退货</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/product-issue"
              active-class="sub-active"
              class="sub-item"
            >
              <span>生产领料</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/return-issue"
              active-class="sub-active"
              class="sub-item"
            >
              <span>生产退料</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/product-receipt"
              active-class="sub-active"
              class="sub-item"
            >
              <span>产品入库</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/sales-notice"
              active-class="sub-active"
              class="sub-item"
            >
              <span>发货通知</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/product-sales"
              active-class="sub-active"
              class="sub-item"
            >
              <span>销售出库</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/return-sales"
              active-class="sub-active"
              class="sub-item"
            >
              <span>销售退货</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/transfer"
              active-class="sub-active"
              class="sub-item"
            >
              <span>转移调拨</span>
            </router-link>
          </li>
          <li :class="{ open: isExpanded('stock-taking') }">
            <div class="menu-toggle" @click="toggle('stock-taking')">
              <span class="menu-label">库存盘点</span>
              <span class="menu-arrow">{{
                isExpanded("stock-taking") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/stock-taking/plan"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>盘点方案</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/stock-taking/task"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>盘点任务</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/wm/packages"
              active-class="sub-active"
              class="sub-item"
            >
              <span>装箱管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/barcode"
              active-class="sub-active"
              class="sub-item"
            >
              <span>赋能管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/sn"
              active-class="sub-active"
              class="sub-item"
            >
              <span>SN码</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/outsource-issue"
              active-class="sub-active"
              class="sub-item"
            >
              <span>外斜发料</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/outsource-receipt"
              active-class="sub-active"
              class="sub-item"
            >
              <span>外协入库</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/misc-receipt"
              active-class="sub-active"
              class="sub-item"
            >
              <span>杂项入库</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/wm/misc-issue"
              active-class="sub-active"
              class="sub-item"
            >
              <span>杂项出库</span>
            </router-link>
          </li>
        </ul>
      </li>


      <!-- // -->
      <li :class="{ open: isExpanded('dv') }">
        <div class="menu-toggle" @click="toggle('dv')">
          <span class="menu-label">设备管理</span>
          <span class="menu-arrow">{{
            isExpanded("dv") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/dv/type"
              active-class="sub-active"
              class="sub-item"
            >
              <span>设备类型</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/machinery"
              active-class="sub-active"
              class="sub-item"
            >
              <span>设备台账</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/subject"
              active-class="sub-active"
              class="sub-item"
            >
              <span>点检保养项目</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/checkplan"
              active-class="sub-active"
              class="sub-item"
            >
              <span>点检保养方案</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/check-record"
              active-class="sub-active"
              class="sub-item"
            >
              <span>点检记录</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/mainten-record"
              active-class="sub-active"
              class="sub-item"
            >
              <span>保养记录</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dv/repair"
              active-class="sub-active"
              class="sub-item"
            >
              <span>维修单</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('tm') }">
        <div class="menu-toggle" @click="toggle('tm')">
          <span class="menu-label">工具管理</span>
          <span class="menu-arrow">{{
            isExpanded("tm") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/tm/type"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工具类型设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/tm/tool"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工装夹具台账</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('pro') }">
        <div class="menu-toggle" @click="toggle('pro')">
          <span class="menu-label">生产管理</span>
          <span class="menu-arrow">{{
            isExpanded("pro") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/pro/work-order"
              active-class="sub-active"
              class="sub-item"
            >
              <span>生成工单</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/process"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工序设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/route"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工艺流程</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/feedback"
              active-class="sub-active"
              class="sub-item"
            >
              <span>生产报工</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/card"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工序流转</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/andon"
              active-class="sub-active"
              class="sub-item"
            >
              <span>安灯呼叫</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/pro/workrecord"
              active-class="sub-active"
              class="sub-item"
            >
              <span>工作记录</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('qc') }">
        <div class="menu-toggle" @click="toggle('qc')">
          <span class="menu-label">质量管理</span>
          <span class="menu-arrow">{{
            isExpanded("qc") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/qc/defect"
              active-class="sub-active"
              class="sub-item"
            >
              <span>常见缺陷</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/indicator"
              active-class="sub-active"
              class="sub-item"
            >
              <span>检测项设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/template"
              active-class="sub-active"
              class="sub-item"
            >
              <span>质检方案</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/pending-inspect"
              active-class="sub-active"
              class="sub-item"
            >
              <span>待检任务</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/iqc"
              active-class="sub-active"
              class="sub-item"
            >
              <span>来料检验</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/ipqc"
              active-class="sub-active"
              class="sub-item"
            >
              <span>过程检验</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/rqc"
              active-class="sub-active"
              class="sub-item"
            >
              <span>退料检验</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/oqc"
              active-class="sub-active"
              class="sub-item"
            >
              <span>出货检验</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/qc/batch-trace"
              active-class="sub-active"
              class="sub-item"
            >
              <span>批次追溯</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('cal') }">
        <div class="menu-toggle" @click="toggle('cal')">
          <span class="menu-label">排班管理</span>
          <span class="menu-arrow">{{
            isExpanded("cal") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/cal/team"
              active-class="sub-active"
              class="sub-item"
            >
              <span>班组设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/cal/plan"
              active-class="sub-active"
              class="sub-item"
            >
              <span>排班计划</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/cal/holiday"
              active-class="sub-active"
              class="sub-item"
            >
              <span>节假日设置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/cal/calendar"
              active-class="sub-active"
              class="sub-item"
            >
              <span>排班日历</span>
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

const expanded = ref(["mes"]);

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
