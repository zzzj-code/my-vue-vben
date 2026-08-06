<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>字段编码</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>字段名称</span>
            <input type="text" placeholder="请输入" />
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
            <button>+新增字段</button>
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
                <th><div class="th-inner">字段名称</div></th>
                <th><div class="th-inner">字段编码</div></th>
                <th><div class="th-inner">字段类型</div></th>
                <th><div class="th-inner">候选项</div></th>
                <th><div class="th-inner">适用分类</div></th>
                <th><div class="th-inner">必填</div></th>
                <th><div class="th-inner">台账展示</div></th>
                <th><div class="th-inner">排序</div></th>
                <th><div class="th-inner">状态</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
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
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.options }}</td>
                <td>{{ item.category }}</td>
                <td>
                  <span
                    :style="{
                      color: item.required ? '#52c41a' : '#8c8c8c'
                    }"
                  >{{ item.required ? '是' : '否' }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      color: item.display ? '#52c41a' : '#8c8c8c'
                    }"
                  >{{ item.display ? '是' : '否' }}</span>
                </td>
                <td>{{ item.sort }}</td>
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
          name: "资产编号",
          code: "ZCBM",
          type: "文本",
          options: "-",
          category: "全部",
          required: true,
          display: true,
          sort: 1,
          status: "启用",
        },
        {
          id: 2,
          name: "资产名称",
          code: "ZCMC",
          type: "文本",
          options: "-",
          category: "全部",
          required: true,
          display: true,
          sort: 2,
          status: "启用",
        },
        {
          id: 3,
          name: "资产分类",
          code: "ZCFL",
          type: "下拉选择",
          options: "台式计算机,便携式计算机,打印机",
          category: "全部",
          required: true,
          display: true,
          sort: 3,
          status: "启用",
        },
        {
          id: 4,
          name: "使用部门",
          code: "SYBM",
          type: "下拉选择",
          options: "技术部,产品部,市场部,财务部",
          category: "全部",
          required: true,
          display: true,
          sort: 4,
          status: "启用",
        },
        {
          id: 5,
          name: "使用人",
          code: "SYR",
          type: "文本",
          options: "-",
          category: "全部",
          required: false,
          display: true,
          sort: 5,
          status: "启用",
        },
        {
          id: 6,
          name: "入库日期",
          code: "RKRQ",
          type: "日期",
          options: "-",
          category: "全部",
          required: false,
          display: true,
          sort: 6,
          status: "启用",
        },
        {
          id: 7,
          name: "资产原值",
          code: "ZCYJ",
          type: "数字",
          options: "-",
          category: "全部",
          required: true,
          display: true,
          sort: 7,
          status: "启用",
        },
        {
          id: 8,
          name: "累计折旧",
          code: "LJZJ",
          type: "数字",
          options: "-",
          category: "全部",
          required: false,
          display: false,
          sort: 8,
          status: "停用",
        },
        {
          id: 9,
          name: "资产状态",
          code: "ZCZT",
          type: "下拉选择",
          options: "正常,维修中,已报废,停用",
          category: "全部",
          required: true,
          display: true,
          sort: 9,
          status: "启用",
        },
        {
          id: 10,
          name: "备注",
          code: "BZ",
          type: "文本",
          options: "-",
          category: "全部",
          required: false,
          display: false,
          sort: 10,
          status: "启用",
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
  min-width: 1270px;
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