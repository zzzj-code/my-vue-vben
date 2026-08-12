<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top1">
          <div class="top-left">流程模型</div>
          <div class="top-right">
            <input type="text" placeholder="搜索流程" v-model="searchKeyword" @keyup.enter="handleSearch" />
            <button class="right1" @click="handleCreate">+新建模型</button>
            <button class="right2" @click="handleImport">导入模型</button>
            <button class="right3">⚙️</button>
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="model-list">
          <div v-for="(group, index) in groups" :key="group.title" class="model-group">
            <div class="model-item" :class="{ expanded: group.expanded }" @click="toggleGroup(index)">
              <div class="item-left">
                <span class="item-arrow">{{ group.expanded ? '⌄' : '›' }}</span>
                <div class="item-title">{{ group.title }}</div>
                <div class="item-count">{{ group.count }}</div>
              </div>
              <div class="item-right">
                <button class="item-action" @click.stop>排序</button>
                <button class="item-action" @click.stop>分类</button>
              </div>
            </div>
            <div v-show="group.expanded" class="group-content">
              <div class="table-header">
                <div>流程名称</div>
                <div>可见范围</div>
                <div>流程类型</div>
                <div>表单分类</div>
                <div>表单地址</div>
                <div>最后发布</div>
                <div>操作</div>
              </div>
              <div v-for="item in group.items" :key="item.code" class="table-row">
                <div class="flow-name">
                  <div class="flow-tag">{{ item.tag }}</div>
                  <div class="flow-title">{{ item.name }}</div>
                  <div class="flow-sub">{{ item.code }}</div>
                </div>
                <div>{{ item.visible }}</div>
                <div><span class="type-badge">{{ item.type }}</span></div>
                <div><span class="category-badge">{{ item.category }}</span></div>
                <div class="link-cell"><a :href="item.link" target="_blank">{{ item.linkText }}</a></div>
                <div>{{ item.updated }}</div>
                <div class="actions-cell">
                  <button class="table-action">修改</button>
                  <button class="table-action">发布</button>
                  <button class="table-action">更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入流程模型相关API
import { getModelList } from '#/api/bpm/model';

export default {
  data() {
    return {
      // 搜索关键词
      searchKeyword: "",
      // 分组数据
      groups: [],
    };
  },
  mounted() {
    this.loadModelList();
  },
  methods: {
    // 获取流程模型列表并按分类分组
    async loadModelList() {
      try {
        const data = await getModelList(this.searchKeyword);
        // 按 category 分组
        const groupMap = {};
        data.forEach((item) => {
          const category = item.categoryName || item.category || "其他";
          if (!groupMap[category]) {
            groupMap[category] = {
              title: category,
              count: 0,
              expanded: category === "OA协同办公", // 默认展开OA分类
              items: [],
            };
          }
          groupMap[category].items.push({
            tag: item.category || "",
            name: item.name || "",
            code: item.key || "",
            visible: item.visible ? "全部可见" : "不可见",
            type: item.type === 20 ? "SIMPLE设计器" : "BPMN设计器",
            category: item.formType === 20 ? "流程表单" : "业务表单",
            link: item.formCustomCreatePath || "",
            linkText: item.formCustomCreatePath || "未设置",
            updated: this.formatTimestamp(item.createTime),
          });
          groupMap[category].count++;
        });
        // 转换为数组
        this.groups = Object.values(groupMap);
      } catch (err) {
        console.error("获取流程模型失败", err);
      }
    },
    // 时间戳格式化
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    // 切换分组展开/收起
    toggleGroup(index) {
      this.groups[index].expanded = !this.groups[index].expanded;
    },
    // 搜索
    handleSearch() {
      this.loadModelList();
    },
    // 新建模型
    handleCreate() {
      alert("新建模型功能待实现");
    },
    // 导入模型
    handleImport() {
      alert("导入模型功能待实现");
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
  min-height: 477px;
  background-color: #ffffff;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  border-radius: 10px;
  border: 0.5px solid #e5e5e5;
}
/* 头部 */
.app-top {
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 0.5px solid #e5e5e5;
  border-radius: 10px 10px 0 0;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-top .top1 {
  width: 950px;
  height: 34px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-left {
  width: 45%;
  height: 25px;
  font-size: 16px;
  font-weight: 600;
}
.top-right {
  width: 55%;
  height: 34px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.top-right input {
  width: 240px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px 16px;
  border-radius: 5px;
}
.top-right input:hover {
  border: 0.5px solid #409eff;
}
.top-right input:focus {
  outline: none;
  border: 0.5px solid #409eff;
}
.top-right .right1 {
  width: 108px;
  height: 32px;
  border: 0;
  background-color: rgb(43, 43, 233);
  margin-left: 8px;
  color: #fff;
  border-radius: 5px;
}
.top-right .right1:hover {
  background-color: rgb(57, 57, 189);
}
.top-right .right2 {
  width: 108px;
  height: 32px;
  outline: none;
  border: 0.5px solid #ccc;
  margin-left: 8px;
  border-radius: 5px;
  background-color: #fff;
}
.top-right .right2:hover {
  color: #409eff;
  border: 0.5px solid #409eff;
}
.top-right .right3 {
  width: 32px;
  height: 32px;
  border: 0.5px solid #ccc;
  background-color: #fff;
  margin-left: 8px;
  border-radius: 5px;
}
.top-right .right3:hover {
  color: #409eff;
  border: 0.5px solid #409eff;
}
/* ———————————————————————————————— */
.app-main {
  width: 100%;
  padding: 16px 0 20px;
}
.model-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 16px 16px;
}
.model-group {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
}
.model-item {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 10px;
  border: 0.5px solid #e5e5e5;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
}
.model-item.expanded {
  border-color: #409eff;
}
.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.item-arrow {
  display: inline-flex;
  width: 16px;
  justify-content: center;
  color: #409eff;
  font-size: 12px;
}
.item-title {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
}
.item-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  color: #409eff;
  background-color: #edf6ff;
  border-radius: 10px;
}
.item-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.item-action {
  min-width: 56px;
  height: 28px;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  color: #409eff;
  cursor: pointer;
  font-size: 13px;
}
.item-action:hover {
  background-color: rgba(64, 158, 255, 0.08);
}
.group-content {
  width: 100%;
  padding: 0;
  border: 0.5px solid #e5e5e5;
  border-top: none;
  background-color: #ffffff;
  box-sizing: border-box;
}
.table-header,
.table-row {
  display: grid;
  grid-template-columns: 2.4fr 0.9fr 0.9fr 0.9fr 1.8fr 1fr 1.1fr;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  padding: 0 18px;
}
.table-header {
  color: #909399;
  padding: 12px 18px;
  border-bottom: 1px solid #eef0f6;
  background-color: #fafbfc;
}
.table-row {
  padding: 14px 18px;
  border-bottom: 1px solid #f2f3f7;
}
.table-row:last-child {
  border-bottom: none;
}
.flow-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.flow-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 20px;
  border-radius: 3px;
  background-color: #edf6ff;
  color: #409eff;
  font-size: 12px;
}
.flow-title {
  font-size: 13px;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.flow-sub {
  color: #909399;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.type-badge,
.category-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 24px;
  padding: 0 8px;
  border-radius: 12px;
  background-color: #ecf5ff;
  color: #409eff;
  font-size: 12px;
}
.link-cell a {
  display: inline-block;
  max-width: 100%;
  color: #409eff;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.actions-cell {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  min-width: 0;
}
.table-action {
  min-width: 40px;
  height: 28px;
  border: 0;
  border-radius: 4px;
  background-color: #f4f6fc;
  color: #606266;
  cursor: pointer;
  font-size: 12px;
  padding: 0 8px;
}
.table-action:hover {
  background-color: #e8f0ff;
}
</style>