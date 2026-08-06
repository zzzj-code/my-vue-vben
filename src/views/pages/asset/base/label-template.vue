<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>模板名称</span>
            <input type="text" placeholder="请输入模板名称" />
          </div>
          <div class="inp-1">
            <span>模板编码</span>
            <input type="text" placeholder="请输入模板编码" />
          </div>
          <div class="inp-1"></div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1"></div>
          <div class="top-2">
            <button>+新增模板</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">模板名称</div></th>
                <th><div class="th-inner">模板编码</div></th>
                <th><div class="th-inner">适用通道</div></th>
                <th><div class="th-inner">标签尺寸</div></th>
                <th><div class="th-inner">A4排版</div></th>
                <th><div class="th-inner">码制</div></th>
                <th><div class="th-inner">默认</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">排序</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.channel }}</td>
                <td>{{ item.size }}</td>
                <td>{{ item.layout }}</td>
                <td>{{ item.codeType }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: item.isDefault ? '#f6ffed' : '#f5f5f5',
                      color: item.isDefault ? '#52c41a' : '#8c8c8c',
                      border: `1px solid ${item.isDefault ? '#52c41a' : '#d9d9d9'}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.isDefault ? '是' : '否' }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: item.status === '启用' ? '#f6ffed' : '#fff2f0',
                      color: item.status === '启用' ? '#52c41a' : '#ff4d4f',
                      border: `1px solid ${item.status === '启用' ? '#52c41a' : '#ff4d4f'}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td>{{ item.sort }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
          name: "资产标签模板",
          code: "ZC-001",
          channel: "全部通道",
          size: "60×40mm",
          layout: "4×8",
          codeType: "QR Code",
          isDefault: true,
          status: "启用",
          sort: 1,
        },
        {
          id: 2,
          name: "固定资产标签",
          code: "ZC-002",
          channel: "资产管理系统",
          size: "80×50mm",
          layout: "3×6",
          codeType: "QR Code",
          isDefault: false,
          status: "启用",
          sort: 2,
        },
        {
          id: 3,
          name: "办公设备标签",
          code: "ZC-003",
          channel: "办公设备管理",
          size: "50×30mm",
          layout: "5×9",
          codeType: "Code128",
          isDefault: false,
          status: "启用",
          sort: 3,
        },
        {
          id: 4,
          name: "库存管理标签",
          code: "KC-001",
          channel: "库存管理系统",
          size: "70×45mm",
          layout: "4×7",
          codeType: "Data Matrix",
          isDefault: false,
          status: "停用",
          sort: 4,
        },
        {
          id: 5,
          name: "图书标签模板",
          code: "TS-001",
          channel: "图书管理系统",
          size: "45×30mm",
          layout: "6×10",
          codeType: "ISBN",
          isDefault: false,
          status: "启用",
          sort: 5,
        },
        {
          id: 6,
          name: "物流标签模板",
          code: "WL-001",
          channel: "物流管理系统",
          size: "100×60mm",
          layout: "3×5",
          codeType: "Code128",
          isDefault: false,
          status: "启用",
          sort: 6,
        },
        {
          id: 7,
          name: "产品标签模板",
          code: "CP-001",
          channel: "产品管理系统",
          size: "90×55mm",
          layout: "4×6",
          codeType: "QR Code",
          isDefault: false,
          status: "启用",
          sort: 7,
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
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
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
  align-items: center;
}
.top-1 {
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
}

/* 序号列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 50px;
  min-width: 50px;
  max-width: 50px;
}

.ol-col {
  width: 140px;
  min-width: 140px;
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
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>