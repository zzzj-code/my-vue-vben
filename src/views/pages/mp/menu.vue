<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <span>公众号</span>

        <input type="text" placeholder="请选择公众号" v-model="accountId" @blur="loadMenu" />
      </div>

      <div class="app-main">
        <div class="main-left">
          <div class="phone-box">
            <div class="phone-body">
              <div class="phone-status-bar">
                <span>••••• WeChat</span>
                <span>1:21 AM</span>
                <span>100%</span>
              </div>
              <div class="phone-header">
                <span class="back-icon">〈 返回</span>
                <span class="user-icon">👤</span>
              </div>
              <div class="phone-content">
                <div v-if="menuList.length > 0" style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; border-top: 1px solid #e8eaed;">
                  <div v-for="(menu, index) in menuList" :key="index" style="flex: 1; text-align: center; padding: 10px; font-size: 12px; border-right: 1px solid #e8eaed;" :style="{borderRight: index === menuList.length - 1 ? 'none' : '1px solid #e8eaed'}">
                    {{ menu.name }}
                  </div>
                </div>
              </div>
              <div class="phone-bottom-add">
                <span class="key-icon">⌨</span>
                <div class="add-btn">+</div>
              </div>
            </div>
            <div class="phone-buttons">
              <button class="save-btn" @click="handleSave">保存并发布菜单</button>
              <button class="clear-btn" @click="handleDelete">清空菜单</button>
            </div>
          </div>
        </div>
        <div class="main-right">
          <div class="right-top-tip">请选择菜单配置</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入公众号菜单相关API ==========
import { getMenuList, saveMenu, deleteMenu } from '#/api/mp/menu';

export default {
  data() {
    return {
      // 公众号ID
      accountId: '',
      // 菜单列表
      menuList: [],
    };
  },
  methods: {
    // 加载菜单
    async loadMenu() {
      if (!this.accountId) return;
      try {
        const data = await getMenuList(this.accountId);
        this.menuList = data || [];
      } catch (err) {
        console.error('获取菜单失败', err);
      }
    },
    // 保存菜单
    async handleSave() {
      if (!this.accountId) { alert('请先输入公众号ID'); return; }
      try {
        await saveMenu(this.accountId, this.menuList);
        alert('保存成功');
      } catch (err) {
        console.error('保存失败', err);
      }
    },
    // 清空菜单
    async handleDelete() {
      if (!this.accountId) { alert('请先输入公众号ID'); return; }
      if (!confirm('确定要清空菜单吗？')) return;
      try {
        await deleteMenu(this.accountId);
        alert('清空成功');
        this.menuList = [];
      } catch (err) {
        console.error('清空失败', err);
      }
    },
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

  /* height: 590px; */

  background-color: #ecebeb;

  position: absolute;

  top: -375px;
}

.app-top {
  width: 100%;

  height: 50px;

  margin-bottom: 10px;

  display: flex;

  align-items: center;
}

.app-top span {
  display: inline-block;

  width: 100px;

  height: 24px;

  font-size: 14px;

  /* font-weight: 600; */

  text-align: right;

  margin-right: 8px;
}

.app-top input {
  width: 240px;

  height: 32px;

  border: 1px solid #ccc;

  border-radius: 10px;

  padding: 10px;
}

.app-main {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  padding: 20px;
}

.main-left {
  width: 340px;
}
.phone-box {
  border: 30px solid #e8eaed;
  border-radius: 32px;
  height: 520px;
  display: flex;
  flex-direction: column;
}
.phone-body {
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  /* margin-top: 10px; */
}
.phone-status-bar {
  background: #222;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
}
.phone-header {
  background: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 14px;
}
.phone-content {
  flex: 1;
  background: #ffffff;
}
.phone-bottom-add {
  display: flex;
  border-top: 1px solid #eee;
}
.key-icon {
  width: 50px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eee;
}
.add-btn {
  width: 80px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #09bb07;
  font-size: 20px;
  border: 1px solid #ccc;
}
.phone-buttons {
  display: flex;
  gap: 10px;
  padding: 12px;
}
.save-btn {
  background: #2b78e4;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 14px;
}
.clear-btn {
  border: 1px solid #f24452;
  color: #f24452;
  background: #fff;
  border-radius: 6px;
  padding: 6px 14px;
}

.main-right {
  flex: 1;
}
.right-top-tip {
  background: #e9e9e9;
  padding: 14px 12px;
  font-size: 14px;
}
</style>
