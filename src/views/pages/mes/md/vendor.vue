<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>供应商编码</span>
            <input type="text" placeholder="请输入供应商编码" />
          </div>
          <div>
            <span>供应商名称</span>
            <input type="text" placeholder="请输入供应商名称" />
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
          <div>供应商列表</div>
          <div>
            <button>+新增供应商</button>
            <button>导入</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
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
                <th><div class="th-inner">供应商编码</div></th>
                <th><div class="th-inner">供应商名称</div></th>
                <th><div class="th-inner">供应商简称</div></th>
                <th><div class="th-inner">供应商等级</div></th>
                <th><div class="th-inner">供应商评分</div></th>
                <th><div class="th-inner">供应商电话</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">备注</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.shortName }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getLevelBg(item.level),
                      color: getLevelColor(item.level),
                      border: `1px solid ${getLevelColor(item.level)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.level }}</span>
                </td>
                <td>
                  <span :style="{
                    color: item.score >= 90 ? '#52c41a' : item.score >= 80 ? '#faad14' : '#ff4d4f'
                  }">{{ item.score }}分</span>
                </td>
                <td>{{ item.phone }}</td>
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
                <td>{{ item.remark }}</td>
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
          code: "SUP-2024-001",
          name: "深圳市华强电子科技有限公司",
          shortName: "华强电子",
          level: "A级",
          score: 95,
          phone: "0755-88881234",
          status: "启用",
          remark: "长期合作供应商，质量稳定",
        },
        {
          id: 2,
          code: "SUP-2024-002",
          name: "东莞市恒达精密五金厂",
          shortName: "恒达五金",
          level: "B级",
          score: 82,
          phone: "0769-88885678",
          status: "启用",
          remark: "交期准确，价格合理",
        },
        {
          id: 3,
          code: "SUP-2024-003",
          name: "广州市盛源塑胶制品有限公司",
          shortName: "盛源塑胶",
          level: "A级",
          score: 91,
          phone: "020-88889012",
          status: "停用",
          remark: "质量优秀，配合度高",
        },
        {
          id: 4,
          code: "SUP-2024-004",
          name: "佛山市金丰金属材料有限公司",
          shortName: "金丰金属",
          level: "C级",
          score: 68,
          phone: "0757-88885678",
          status: "启用",
          remark: "价格优势，质量待提升",
        },
        {
          id: 5,
          code: "SUP-2024-005",
          name: "珠海市宏达电子有限公司",
          shortName: "宏达电子",
          level: "A级",
          score: 93,
          phone: "0756-88889001",
          status: "启用",
          remark: "核心供应商，战略合作",
        },
      ],
    };
  },
  methods: {
    getLevelColor(level) {
      const map = {
        'A级': '#52c41a',
        'B级': '#1890ff',
        'C级': '#faad14',
        'D级': '#ff4d4f'
      };
      return map[level] || '#333';
    },
    getLevelBg(level) {
      const map = {
        'A级': '#f6ffed',
        'B级': '#e6f7ff',
        'C级': '#fffbe6',
        'D级': '#fff2f0'
      };
      return map[level] || '#fff';
    },
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5'
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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2),
.main-top div:nth-child(2) button:nth-child(3) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
}
.main-tab {
  width: 100%;
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1300px;
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
  max-width: 160px;
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
  width: 56px;
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
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>