<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>项目分类</div>
        <div>
          <button style="width: 106px">+新增分类</button>
          <button>收缩</button>
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
              <th><div class="th-inner">分类名称</div></th>
              <th><div class="th-inner">分类编码</div></th>
              <th><div class="th-inner">排序</div></th>
              <th><div class="th-inner">状态</div></th>
              <th><div class="th-inner">备注</div></th>
              <th><div class="th-inner">创建时间</div></th>
              <th class="ol-col"><div class="th-inner no-border">操作</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tabValue" :key="item.id">
              <td>{{ item.categoryName }}</td>
              <td>{{ item.categoryCode }}</td>
              <td>{{ item.sort }}</td>
              <td>
                <span
                  :style="{
                    display: 'inline-block',
                    padding: '0 12px',
                    height: '24px',
                    lineHeight: '24px',
                    backgroundColor: item.status === '开启' ? '#f6ffed' : '#fff2f0',
                    color: item.status === '开启' ? '#52c41a' : '#ff4d4f',
                    border: `1px solid ${item.status === '开启' ? '#52c41a' : '#ff4d4f'}`,
                    borderRadius: '12px',
                    fontSize: '12px'
                  }"
                >
                  {{ item.status }}
                </span>
              </td>
              <td>{{ item.remark }}</td>
              <td>{{ item.createTime }}</td>
              <td class="ol-col">
                <button>新增下级</button>
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
          categoryName: "软件开发",
          categoryCode: "SW-001",
          sort: 1,
          status: "开启",
          remark: "所有软件开发类项目",
          createTime: "2026-07-01 10:30",
        },
        {
          id: 2,
          categoryName: "系统集成",
          categoryCode: "SI-002",
          sort: 2,
          status: "开启",
          remark: "系统集成与实施类项目",
          createTime: "2026-07-02 14:20",
        },
        {
          id: 3,
          categoryName: "产品研发",
          categoryCode: "PR-003",
          sort: 3,
          status: "开启",
          remark: "新产品研发与创新项目",
          createTime: "2026-07-03 09:15",
        },
        {
          id: 4,
          categoryName: "技术支持",
          categoryCode: "TS-004",
          sort: 4,
          status: "关闭",
          remark: "技术支持和运维服务",
          createTime: "2026-07-04 16:40",
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
  min-width: 1050px;
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
  max-width: 160px;
}

.ol-col {
  width: 220px;
  min-width: 220px;
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