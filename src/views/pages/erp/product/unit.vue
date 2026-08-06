<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>单位名称</span>
            <input type="text" placeholder="请输入单位名称" />
          </div>
          <div>
            <span>单位状态</span>
            <input type="text" placeholder="请输入单位状态" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">产品单位列表（只读，来源 MDM）</div>
          <div class="top-2">
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">单位编号</div></th>
                <th><div class="th-inner">单位名称</div></th>
                <th><div class="th-inner">单位状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <span :style="{
                    color: item.status === '启用' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: item.status === '启用' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }">
                    {{ item.status }}
                  </span>
                </td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.remark }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共15条数据<span>20条/页</span></div>
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
          id: "UNIT-001",
          name: "台",
          status: "启用",
          createTime: "2024-01-15 10:00",
          remark: "常用单位",
        },
        {
          id: "UNIT-002",
          name: "部",
          status: "启用",
          createTime: "2024-01-15 10:05",
          remark: "电子设备",
        },
        {
          id: "UNIT-003",
          name: "个",
          status: "启用",
          createTime: "2024-01-15 10:10",
          remark: "通用单位",
        },
        {
          id: "UNIT-004",
          name: "件",
          status: "启用",
          createTime: "2024-01-15 10:15",
          remark: "服装类",
        },
        {
          id: "UNIT-005",
          name: "套",
          status: "启用",
          createTime: "2024-01-15 10:20",
          remark: "套装类",
        },
        {
          id: "UNIT-006",
          name: "箱",
          status: "启用",
          createTime: "2024-01-15 10:25",
          remark: "包装单位",
        },
        {
          id: "UNIT-007",
          name: "盒",
          status: "启用",
          createTime: "2024-01-15 10:30",
          remark: "小型包装",
        },
        {
          id: "UNIT-008",
          name: "瓶",
          status: "启用",
          createTime: "2024-01-15 10:35",
          remark: "液体类",
        },
        {
          id: "UNIT-009",
          name: "千克",
          status: "启用",
          createTime: "2024-01-15 10:40",
          remark: "重量单位",
        },
        {
          id: "UNIT-010",
          name: "克",
          status: "暂停",
          createTime: "2024-01-15 10:45",
          remark: "小重量单位",
        },
        {
          id: "UNIT-011",
          name: "升",
          status: "启用",
          createTime: "2024-01-15 10:50",
          remark: "容量单位",
        },
        {
          id: "UNIT-012",
          name: "米",
          status: "启用",
          createTime: "2024-01-15 10:55",
          remark: "长度单位",
        },
        {
          id: "UNIT-013",
          name: "平方米",
          status: "启用",
          createTime: "2024-01-15 11:00",
          remark: "面积单位",
        },
        {
          id: "UNIT-014",
          name: "立方",
          status: "启用",
          createTime: "2024-01-15 11:05",
          remark: "体积单位",
        },
        {
          id: "UNIT-015",
          name: "桶",
          status: "启用",
          createTime: "2024-01-15 11:10",
          remark: "大容量包装",
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
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 330px;
  height: 100%;
  font-size: 14px;
  color: #006be6;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  color: black;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp div input {
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 10px;
}
.top-inp div:last-child button:first-child {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.top-inp div:last-child button:last-child {
  width: 63px;
  height: 32px;
  border: 0;
  color: #fff;
  background-color: #006be6;
  border-radius: 10px;
}
.app-main {
  width: 100%;
  height: 489px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 77%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 13%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #006be6;
  border: 0;
}
.top-3 {
  width: 10%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 398px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #f0eaea;
  border-right: none;
  text-align: center;
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

.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 8px;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>