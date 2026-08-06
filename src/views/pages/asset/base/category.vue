<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>分类名称</span>
            <input type="text" placeholder="模糊搜索名称" />
          </div>
          <div>
            <span>分类编码</span>
            <input type="text" placeholder="如 A02010108" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>资产分类（GB/T 14885-2022）</div>
          <div><button>新增</button></div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">分类名称</div></th>
                <th><div class="th-inner">分类编码</div></th>
                <th><div class="th-inner">折旧方法</div></th>
                <th><div class="th-inner">使用年限(月)</div></th>
                <th><div class="th-inner">残值率(%)</div></th>
                <th><div class="th-inner">排序</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.code">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.depreciationMethod }}</td>
                <td>{{ item.usefulLife }}</td>
                <td>{{ item.residualRate }}</td>
                <td>{{ item.sort }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>新增子分类</button>
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
          name: "台式计算机",
          code: "A02010104",
          depreciationMethod: "平均年限法",
          usefulLife: 60,
          residualRate: 5,
          sort: 1,
          status: "启用",
          createTime: "2024-01-15 10:30:00",
        },
        {
          name: "便携式计算机",
          code: "A02010105",
          depreciationMethod: "平均年限法",
          usefulLife: 48,
          residualRate: 5,
          sort: 2,
          status: "启用",
          createTime: "2024-01-15 10:30:00",
        },
        {
          name: "打印机",
          code: "A02020101",
          depreciationMethod: "平均年限法",
          usefulLife: 36,
          residualRate: 5,
          sort: 3,
          status: "启用",
          createTime: "2024-02-20 14:20:00",
        },
        {
          name: "服务器",
          code: "A02010103",
          depreciationMethod: "双倍余额递减法",
          usefulLife: 60,
          residualRate: 3,
          sort: 4,
          status: "启用",
          createTime: "2024-03-10 09:15:00",
        },
        {
          name: "网络设备",
          code: "A02010201",
          depreciationMethod: "平均年限法",
          usefulLife: 36,
          residualRate: 5,
          sort: 5,
          status: "停用",
          createTime: "2024-04-05 16:45:00",
        },
        {
          name: "办公桌",
          code: "A02030101",
          depreciationMethod: "平均年限法",
          usefulLife: 120,
          residualRate: 5,
          sort: 6,
          status: "启用",
          createTime: "2024-05-12 11:00:00",
        },
        {
          name: "文件柜",
          code: "A02030102",
          depreciationMethod: "平均年限法",
          usefulLife: 120,
          residualRate: 5,
          sort: 7,
          status: "启用",
          createTime: "2024-06-18 08:30:00",
        },
        {
          name: "空调",
          code: "A02030201",
          depreciationMethod: "平均年限法",
          usefulLife: 96,
          residualRate: 3,
          sort: 8,
          status: "维修中",
          createTime: "2024-07-22 13:20:00",
        },
        {
          name: "投影仪",
          code: "A02020201",
          depreciationMethod: "平均年限法",
          usefulLife: 48,
          residualRate: 5,
          sort: 9,
          status: "启用",
          createTime: "2024-08-30 10:00:00",
        },
        {
          name: "扫描仪",
          code: "A02020102",
          depreciationMethod: "平均年限法",
          usefulLife: 36,
          residualRate: 5,
          sort: 10,
          status: "停用",
          createTime: "2024-09-14 15:10:00",
        },
        {
          name: "复印机",
          code: "A02020103",
          depreciationMethod: "平均年限法",
          usefulLife: 48,
          residualRate: 5,
          sort: 11,
          status: "启用",
          createTime: "2024-10-01 09:00:00",
        },
        {
          name: "碎纸机",
          code: "A02020104",
          depreciationMethod: "平均年限法",
          usefulLife: 24,
          residualRate: 5,
          sort: 12,
          status: "启用",
          createTime: "2024-11-20 14:30:00",
        },
        {
          name: "交换机",
          code: "A02010202",
          depreciationMethod: "平均年限法",
          usefulLife: 36,
          residualRate: 5,
          sort: 13,
          status: "启用",
          createTime: "2024-12-05 11:45:00",
        },
        {
          name: "路由器",
          code: "A02010203",
          depreciationMethod: "平均年限法",
          usefulLife: 36,
          residualRate: 5,
          sort: 14,
          status: "已报废",
          createTime: "2024-12-15 08:20:00",
        },
        {
          name: "防火墙",
          code: "A02010204",
          depreciationMethod: "双倍余额递减法",
          usefulLife: 48,
          residualRate: 3,
          sort: 15,
          status: "启用",
          createTime: "2025-01-10 16:00:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c',
        '维修中': '#faad14',
        '已报废': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5',
        '维修中': '#fffbe6',
        '已报废': '#fff2f0'
      };
      return map[status] || '#fff';
    }
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
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-top div:nth-child(2) button {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.main-tab {
  width: 100%;
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1220px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
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

.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
}

.ol-col {
  width: 200px;
  min-width: 200px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  width: 80px;
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: #006be6;
}
.ol-col button:nth-child(2):hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
}
</style>