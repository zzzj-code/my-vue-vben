<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>存放位置</div>
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
                <th><div class="th-inner">位置名称</div></th>
                <th><div class="th-inner">位置编码</div></th>
                <th><div class="th-inner">详细地址</div></th>
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
                <td>{{ item.address }}</td>
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
          name: "A栋-1楼-101室",
          code: "A-01-101",
          address: "A栋办公楼1楼101室（前台接待区）",
          sort: 1,
          status: "启用",
          createTime: "2024-01-15 09:00:00",
        },
        {
          name: "A栋-1楼-102室",
          code: "A-01-102",
          address: "A栋办公楼1楼102室（会议室）",
          sort: 2,
          status: "启用",
          createTime: "2024-01-15 09:30:00",
        },
        {
          name: "A栋-1楼-103室",
          code: "A-01-103",
          address: "A栋办公楼1楼103室（仓库）",
          sort: 3,
          status: "启用",
          createTime: "2024-01-15 10:00:00",
        },
        {
          name: "A栋-2楼-201室",
          code: "A-02-201",
          address: "A栋办公楼2楼201室（行政部办公室）",
          sort: 4,
          status: "启用",
          createTime: "2024-02-01 08:30:00",
        },
        {
          name: "A栋-2楼-202室",
          code: "A-02-202",
          address: "A栋办公楼2楼202室（财务部办公室）",
          sort: 5,
          status: "启用",
          createTime: "2024-02-01 09:00:00",
        },
        {
          name: "A栋-2楼-203室",
          code: "A-02-203",
          address: "A栋办公楼2楼203室（人事部办公室）",
          sort: 6,
          status: "停用",
          createTime: "2024-02-15 10:30:00",
        },
        {
          name: "A栋-3楼-301室",
          code: "A-03-301",
          address: "A栋办公楼3楼301室（研发部办公室）",
          sort: 7,
          status: "启用",
          createTime: "2024-03-01 14:00:00",
        },
        {
          name: "A栋-3楼-302室",
          code: "A-03-302",
          address: "A栋办公楼3楼302室（测试实验室）",
          sort: 8,
          status: "启用",
          createTime: "2024-03-15 11:20:00",
        },
        {
          name: "A栋-3楼-303室",
          code: "A-03-303",
          address: "A栋办公楼3楼303室（设备间）",
          sort: 9,
          status: "维修中",
          createTime: "2024-04-01 16:45:00",
        },
        {
          name: "A栋-4楼-401室",
          code: "A-04-401",
          address: "A栋办公楼4楼401室（大会议室）",
          sort: 10,
          status: "启用",
          createTime: "2024-04-15 09:30:00",
        },
        {
          name: "A栋-4楼-402室",
          code: "A-04-402",
          address: "A栋办公楼4楼402室（档案室）",
          sort: 11,
          status: "启用",
          createTime: "2024-05-01 10:00:00",
        },
        {
          name: "A栋-4楼-403室",
          code: "A-04-403",
          address: "A栋办公楼4楼403室（休息室）",
          sort: 12,
          status: "停用",
          createTime: "2024-05-15 14:20:00",
        },
        {
          name: "B栋-1楼-101室",
          code: "B-01-101",
          address: "B栋办公楼1楼101室（生产车间）",
          sort: 13,
          status: "启用",
          createTime: "2024-06-01 08:00:00",
        },
        {
          name: "B栋-1楼-102室",
          code: "B-01-102",
          address: "B栋办公楼1楼102室（原料仓库）",
          sort: 14,
          status: "启用",
          createTime: "2024-06-15 09:15:00",
        },
        {
          name: "B栋-1楼-103室",
          code: "B-01-103",
          address: "B栋办公楼1楼103室（成品仓库）",
          sort: 15,
          status: "启用",
          createTime: "2024-07-01 10:30:00",
        },
        {
          name: "B栋-2楼-201室",
          code: "B-02-201",
          address: "B栋办公楼2楼201室（质检部办公室）",
          sort: 16,
          status: "启用",
          createTime: "2024-07-15 13:45:00",
        },
        {
          name: "B栋-2楼-202室",
          code: "B-02-202",
          address: "B栋办公楼2楼202室（包装车间）",
          sort: 17,
          status: "启用",
          createTime: "2024-08-01 08:20:00",
        },
        {
          name: "B栋-2楼-203室",
          code: "B-02-203",
          address: "B栋办公楼2楼203室（材料仓库）",
          sort: 18,
          status: "停用",
          createTime: "2024-08-15 14:00:00",
        },
        {
          name: "B栋-3楼-301室",
          code: "B-03-301",
          address: "B栋办公楼3楼301室（研发实验室）",
          sort: 19,
          status: "启用",
          createTime: "2024-09-01 11:10:00",
        },
        {
          name: "B栋-3楼-302室",
          code: "B-03-302",
          address: "B栋办公楼3楼302室（数据分析室）",
          sort: 20,
          status: "启用",
          createTime: "2024-09-15 16:30:00",
        },
        {
          name: "C栋-1楼-101室",
          code: "C-01-101",
          address: "C栋办公楼1楼101室（员工食堂）",
          sort: 21,
          status: "启用",
          createTime: "2024-10-01 09:00:00",
        },
        {
          name: "C栋-1楼-102室",
          code: "C-01-102",
          address: "C栋办公楼1楼102室（厨房）",
          sort: 22,
          status: "启用",
          createTime: "2024-10-15 10:15:00",
        },
        {
          name: "C栋-1楼-103室",
          code: "C-01-103",
          address: "C栋办公楼1楼103室（食材仓库）",
          sort: 23,
          status: "停用",
          createTime: "2024-11-01 14:30:00",
        },
        {
          name: "C栋-2楼-201室",
          code: "C-02-201",
          address: "C栋办公楼2楼201室（员工活动中心）",
          sort: 24,
          status: "启用",
          createTime: "2024-11-15 08:45:00",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c',
        '维修中': '#faad14'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5',
        '维修中': '#fffbe6'
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
.app-main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
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
  height: 520px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1060px;
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
  max-width: 200px;
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