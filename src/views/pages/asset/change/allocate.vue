<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>单据编号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>类型</span>
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
            <button>+新增</button>
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
                <th><div class="th-inner">单据编号</div></th>
                <th><div class="th-inner">类型</div></th>
                <th><div class="th-inner">操作日期</div></th>
                <th><div class="th-inner">申请人</div></th>
                <th><div class="th-inner">部门</div></th>
                <th><div class="th-inner">预计归还</div></th>
                <th><div class="th-inner">归还状态</div></th>
                <th><div class="th-inner">审批状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="11" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.documentNo }}</td>
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
                <td>{{ item.operateDate }}</td>
                <td>{{ item.applicant }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.expectedReturn }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getReturnStatusBg(item.returnStatus),
                      color: getReturnStatusColor(item.returnStatus),
                      border: `1px solid ${getReturnStatusColor(item.returnStatus)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.returnStatus }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getApprovalStatusBg(item.approvalStatus),
                      color: getApprovalStatusColor(item.approvalStatus),
                      border: `1px solid ${getApprovalStatusColor(item.approvalStatus)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.approvalStatus }}</span>
                </td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
                  <button>编辑</button>
                  <button>删除</button>
                  <button style="color: #faad14;">归还</button>
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
          documentNo: "LY-2026-001",
          type: "领用",
          operateDate: "2026-07-15",
          applicant: "张伟",
          department: "技术研发部",
          expectedReturn: "2026-08-15",
          returnStatus: "未归还",
          approvalStatus: "已审批",
          createTime: "2026-07-15 09:30:00",
        },
        {
          id: 2,
          documentNo: "LY-2026-002",
          type: "领用",
          operateDate: "2026-07-20",
          applicant: "李芳",
          department: "产品交付部",
          expectedReturn: "2026-08-20",
          returnStatus: "已归还",
          approvalStatus: "已审批",
          createTime: "2026-07-20 14:20:00",
        },
        {
          id: 3,
          documentNo: "LY-2026-003",
          type: "借用",
          operateDate: "2026-07-25",
          applicant: "王磊",
          department: "AI实验室",
          expectedReturn: "2026-08-10",
          returnStatus: "未归还",
          approvalStatus: "待审批",
          createTime: "2026-07-25 10:15:00",
        },
        {
          id: 4,
          documentNo: "LY-2026-004",
          type: "领用",
          operateDate: "2026-08-01",
          applicant: "陈静",
          department: "移动开发部",
          expectedReturn: "2026-09-01",
          returnStatus: "已归还",
          approvalStatus: "已审批",
          createTime: "2026-08-01 08:45:00",
        },
        {
          id: 5,
          documentNo: "LY-2026-005",
          type: "借用",
          operateDate: "2026-08-05",
          applicant: "赵明",
          department: "运维保障部",
          expectedReturn: "2026-08-25",
          returnStatus: "未归还",
          approvalStatus: "已驳回",
          createTime: "2026-08-05 16:30:00",
        },
        {
          id: 6,
          documentNo: "LY-2026-006",
          type: "领用",
          operateDate: "2026-08-10",
          applicant: "孙婷",
          department: "区块链事业部",
          expectedReturn: "2026-09-10",
          returnStatus: "逾期未还",
          approvalStatus: "已审批",
          createTime: "2026-08-10 11:00:00",
        },
        {
          id: 7,
          documentNo: "LY-2026-007",
          type: "借用",
          operateDate: "2026-08-12",
          applicant: "刘洋",
          department: "物联网部",
          expectedReturn: "2026-08-30",
          returnStatus: "已归还",
          approvalStatus: "已审批",
          createTime: "2026-08-12 09:20:00",
        },
        {
          id: 8,
          documentNo: "LY-2026-008",
          type: "领用",
          operateDate: "2026-08-15",
          applicant: "周梅",
          department: "数据智能部",
          expectedReturn: "2026-09-15",
          returnStatus: "未归还",
          approvalStatus: "待审批",
          createTime: "2026-08-15 13:40:00",
        },
      ],
    };
  },
  methods: {
    getReturnStatusColor(status) {
      const map = {
        '已归还': '#52c41a',
        '未归还': '#faad14',
        '逾期未还': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getReturnStatusBg(status) {
      const map = {
        '已归还': '#f6ffed',
        '未归还': '#fffbe6',
        '逾期未还': '#fff2f0'
      };
      return map[status] || '#fff';
    },
    getApprovalStatusColor(status) {
      const map = {
        '已审批': '#52c41a',
        '待审批': '#faad14',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getApprovalStatusBg(status) {
      const map = {
        '已审批': '#f6ffed',
        '待审批': '#fffbe6',
        '已驳回': '#fff2f0'
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
  width: 106px;
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
  min-width: 1410px;
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

/* 空状态 */
.empty-cell {
  text-align: center;
  color: #ccc;
  font-size: 14px;
  padding: 60px 0;
  height: 200px;
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
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:first-child,
.ol-col button:nth-child(2) {
  color: #006be6;
}
.ol-col button:nth-child(3) {
  color: red;
}
.ol-col button:nth-child(3):hover {
  background-color: #fff2f0;
}
.ol-col button:last-child {
  color: #faad14;
}
.ol-col button:last-child:hover {
  background-color: #fffbe6;
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