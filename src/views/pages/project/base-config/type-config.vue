<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>项目类型配置</div>
        <div>
          <button style="background-color: #fff"></button>
          <button style="width: 106px">+新增配置</button>
        </div>
        <div>
          <button>⟳</button>
          <button>⛶</button>
          <button>☷</button>
        </div>
      </div>
      <div class="app-tab">
        <table>
          <thead>
            <tr>
              <th><div class="th-inner">项目类型</div></th>
              <th><div class="th-inner">启用能力包</div></th>
              <th><div class="th-inner">默认tab</div></th>
              <th><div class="th-inner">立项流程key</div></th>
              <th><div class="th-inner">变更流程key</div></th>
              <th class="ol-col"><div class="th-inner no-border">操作</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tabValue" :key="item.id">
              <td>
                <span
                  :style="{
                    display: 'inline-block',
                    padding: '0 12px',
                    height: '24px',
                    lineHeight: '24px',
                    backgroundColor: '#e6f6ff',
                    color: '#006be6',
                    border: '1px solid #006be6',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }"
                >
                  {{ item.projectType }}
                </span>
              </td>
              <td>{{ item.capabilityPack }}</td>
              <td>{{ item.defaultTab }}</td>
              <td>{{ item.approvalKey }}</td>
              <td>{{ item.changeKey }}</td>
              <td class="ol-col">
                <button>编辑</button>
                <button>删除</button>
              </td>
            </tr>
          </tbody>
        </table>
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
          projectType: "研发型",
          capabilityPack: "需求管理, 开发管理, 测试管理, 发布管理",
          defaultTab: "项目概览",
          approvalKey: "PROJECT_APPROVAL_V1",
          changeKey: "PROJECT_CHANGE_V1",
        },
        {
          id: 2,
          projectType: "实施型",
          capabilityPack: "实施计划, 资源管理, 进度管理, 验收管理",
          defaultTab: "实施计划",
          approvalKey: "IMPLEMENT_APPROVAL_V1",
          changeKey: "IMPLEMENT_CHANGE_V1",
        },
        {
          id: 3,
          projectType: "服务型",
          capabilityPack: "服务管理, 客户管理, 交付管理, 满意度管理",
          defaultTab: "服务概览",
          approvalKey: "SERVICE_APPROVAL_V1",
          changeKey: "SERVICE_CHANGE_V1",
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
  background-color: #fff;
  border-radius: 10px;
}
.app-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.app-top div:first-child {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.app-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.app-top div:nth-child(2) button {
  width: 63px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
}
.app-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}
.app-tab {
  width: 100%;
  height: 520px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.app-tab table {
  width: max-content;
  min-width: 1040px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.app-tab th {
  height: 40px;
  background-color: #e9e6e6;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.app-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.ol-col {
  width: 160px;
  min-width: 160px;
  border-left: 1px solid #ccc;
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  color: #006be6;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
</style>