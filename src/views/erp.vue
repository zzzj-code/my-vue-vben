<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('erp')"
          to="/erp-home"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">ERP首页</span>
        </router-link>
      </li>
      <li :class="{ open: expanded === 'purchase' }">
        <div class="menu-toggle" @click="toggle('purchase')">
          <span class="menu-label">采购管理</span>
          <span class="menu-arrow">{{
            expanded === "purchase" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/order"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">采购订单</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/in"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">采购入库</span>
            </router-link>
          </li>
          <li>
            <router-link to="/return" active-class="sub-active" class="sub-item">
              <span class="menu-label">采购退货</span>
            </router-link>
          </li>
          <li>
            <router-link to="/supplier" active-class="sub-active" class="sub-item">
              <span class="menu-label">供应商信息</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{ open: expanded === 'sale' }">
        <div class="menu-toggle" @click="toggle('sale')">
          <span class="menu-label">销售管理</span>
          <span class="menu-arrow">{{
            expanded === "sale" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/sale/order"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">销售订单</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/out"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">销售出库</span>
            </router-link>
          </li>
          <li>
            <router-link to="/sale/return" active-class="sub-active" class="sub-item">
              <span class="menu-label">销售退货</span>
            </router-link>
          </li>
          <li>
            <router-link to="/sale/customer" active-class="sub-active" class="sub-item">
              <span class="menu-label">客户信息</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: expanded === 'stock' }">
        <div class="menu-toggle" @click="toggle('stock')">
          <span class="menu-label">库存管理</span>
          <span class="menu-arrow">{{
            expanded === "stock" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/warehouse"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">仓库信息</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/stock"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">产品库存</span>
            </router-link>
          </li>
          <li>
            <router-link to="/record" active-class="sub-active" class="sub-item">
              <span class="menu-label">出入库明细</span>
            </router-link>
          </li>
          <li>
            <router-link to="/stock/in" active-class="sub-active" class="sub-item">
              <span class="menu-label">其他入库</span>
            </router-link>
          </li>
          <li>
            <router-link to="/stock/out" active-class="sub-active" class="sub-item">
              <span class="menu-label">其他出库</span>
            </router-link>
          </li>
          <li>
            <router-link to="/move" active-class="sub-active" class="sub-item">
              <span class="menu-label">库存调拨</span>
            </router-link>
          </li>
          <li>
            <router-link to="/check" active-class="sub-active" class="sub-item">
              <span class="menu-label">库存盘点</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: expanded === 'product' }">
        <div class="menu-toggle" @click="toggle('product')">
          <span class="menu-label">产品管理</span>
          <span class="menu-arrow">{{
            expanded === "product" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/product/product"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">产品信息</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/product-category"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">产品分类</span>
            </router-link>
          </li>
          <li>
            <router-link to="/unit" active-class="sub-active" class="sub-item">
              <span class="menu-label">产品单位</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: expanded === 'finance' }">
        <div class="menu-toggle" @click="toggle('finance')">
          <span class="menu-label">财务管理</span>
          <span class="menu-arrow">{{
            expanded === "finance" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/payment"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">付款单</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/receipt"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">收款单</span>
            </router-link>
          </li>
          <li>
            <router-link to="/account" active-class="sub-active" class="sub-item">
              <span class="menu-label">结算账户</span>
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

const expanded = ref("erp");
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
