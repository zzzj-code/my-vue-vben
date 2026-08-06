<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-box">
          <div>
            <span>商机名称</span>
            <input type="text" placeholder="请输入商机名称" />
          </div>
          <div>
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
          <div class="top-1">
            <div class="top-tab">
              <div
                :class="{ active: activeTab === 'mine' }"
                @click="activeTab = 'mine'"
              >
                我负责的
              </div>
              <div
                :class="{ active: activeTab === 'participate' }"
                @click="activeTab = 'participate'"
              >
                我参与的
              </div>
              <div
                :class="{ active: activeTab === 'subordinate' }"
                @click="activeTab = 'subordinate'"
              >
                下属负责的
              </div>
            </div>
          </div>
          <div class="top-2">
            <button>+新增商机</button>
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
                <th class="col-name">
                  <div class="th-inner">线索名称</div>
                </th>
                <th><div class="th-inner">线索来源</div></th>
                <th><div class="th-inner">手机</div></th>
                <th><div class="th-inner">电话</div></th>
                <th><div class="th-inner">邮箱</div></th>
                <th><div class="th-inner">地址</div></th>
                <th><div class="th-inner">客户行业</div></th>
                <th><div class="th-inner">客户级别</div></th>
                <th><div class="th-inner">下次联系时间</div></th>
                <th><div class="th-inner">备注</div></th>
                <th><div class="th-inner">最后跟进时间</div></th>
                <th><div class="th-inner">最后跟进记录</div></th>
                <th><div class="th-inner">负责人</div></th>
                <th><div class="th-inner">所属部门</div></th>
                <th><div class="th-inner">更新时间</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col">
                  <div class="th-inner no-border">操作</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td class="col-name">{{ item.name }}</td>
                <td>{{ item.source }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.industry }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.nextContact }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.lastFollowTime }}</td>
                <td>{{ item.lastFollowRecord }}</td>
                <td>{{ item.owner }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.updateTime }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">编辑&nbsp;&nbsp;删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共7条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "mine",
      tabValue: [
        {
          id: 1,
          name: "张三科技",
          source: "官网咨询",
          mobile: "138****1234",
          phone: "010-8888****",
          email: "zhangsan@tech.com",
          address: "北京市朝阳区建国路88号",
          industry: "互联网",
          level: "A级",
          nextContact: "2026-08-05 14:00",
          remark: "有意向，需跟进",
          lastFollowTime: "2026-07-28 10:30",
          lastFollowRecord: "已沟通产品方案，客户感兴趣",
          owner: "王经理",
          department: "销售一部",
          updateTime: "2026-07-28 10:30",
          createTime: "2026-07-20 09:00",
        },
        {
          id: 2,
          name: "李四制造",
          source: "客户转介绍",
          mobile: "139****5678",
          phone: "021-6666****",
          email: "lisi@make.com",
          address: "上海市浦东新区张江路100号",
          industry: "制造业",
          level: "B级",
          nextContact: "2026-08-10 09:30",
          remark: "需准备报价单",
          lastFollowTime: "2026-07-27 16:20",
          lastFollowRecord: "已发送产品资料，等待回复",
          owner: "李主管",
          department: "销售二部",
          updateTime: "2026-07-27 16:20",
          createTime: "2026-07-18 14:30",
        },
        {
          id: 3,
          name: "王五教育",
          source: "线下展会",
          mobile: "137****9012",
          phone: "0755-5555****",
          email: "wangwu@edu.com",
          address: "深圳市南山区科技园路66号",
          industry: "教育行业",
          level: "A级",
          nextContact: "2026-08-01 15:00",
          remark: "决策人已明确，近期签约",
          lastFollowTime: "2026-07-28 11:00",
          lastFollowRecord: "已确认合作意向，准备合同",
          owner: "张经理",
          department: "销售一部",
          updateTime: "2026-07-28 11:00",
          createTime: "2026-07-15 10:00",
        },
        {
          id: 4,
          name: "赵六医疗",
          source: "线上广告",
          mobile: "136****3456",
          phone: "010-7777****",
          email: "zhaoliu@med.com",
          address: "北京市海淀区中关村路88号",
          industry: "医疗健康",
          level: "C级",
          nextContact: "2026-08-12 10:00",
          remark: "预算有限，需多次沟通",
          lastFollowTime: "2026-07-26 09:00",
          lastFollowRecord: "初步沟通，客户在比较竞品",
          owner: "王经理",
          department: "销售一部",
          updateTime: "2026-07-26 09:00",
          createTime: "2026-07-12 16:20",
        },
        {
          id: 5,
          name: "孙七金融",
          source: "合作伙伴推荐",
          mobile: "135****7890",
          phone: "021-9999****",
          email: "sunqi@finance.com",
          address: "上海市静安区南京西路200号",
          industry: "金融行业",
          level: "A级",
          nextContact: "2026-07-30 14:30",
          remark: "紧急需求，优先处理",
          lastFollowTime: "2026-07-28 13:00",
          lastFollowRecord: "已提供解决方案，客户满意",
          owner: "李主管",
          department: "销售二部",
          updateTime: "2026-07-28 13:00",
          createTime: "2026-07-10 11:00",
        },
        {
          id: 6,
          name: "周八零售",
          source: "官网咨询",
          mobile: "134****9012",
          phone: "0755-4444****",
          email: "zhouba@retail.com",
          address: "深圳市福田区华强路50号",
          industry: "零售行业",
          level: "B级",
          nextContact: "2026-08-08 09:00",
          remark: "需要演示产品",
          lastFollowTime: "2026-07-25 15:30",
          lastFollowRecord: "已预约线上演示",
          owner: "张经理",
          department: "销售一部",
          updateTime: "2026-07-25 15:30",
          createTime: "2026-07-08 13:40",
        },
        {
          id: 7,
          name: "吴九物流",
          source: "客户转介绍",
          mobile: "133****2345",
          phone: "010-3333****",
          email: "wujiu@logistics.com",
          address: "北京市通州区物流园区8号",
          industry: "物流行业",
          level: "B级",
          nextContact: "2026-08-06 16:00",
          remark: "重点跟进客户",
          lastFollowTime: "2026-07-27 10:00",
          lastFollowRecord: "已沟通合作细节",
          owner: "王经理",
          department: "销售一部",
          updateTime: "2026-07-27 10:00",
          createTime: "2026-07-05 09:20",
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
  height: 128px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-box {
  width: 100%;
  height: 84px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.top-box div {
  flex: 0 0 calc(33.333% - 10px);
  height: 42px;
}
.top-box div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
}
.top-box div input {
  width: 200px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-box div:last-child {
  display: flex;
  justify-content: space-between;
  padding-left: 130px;
  font-size: 14px;
  color: #006be6;
  align-items: center;
}
.top-box div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.top-box div:last-child button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-box div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 452px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 65%;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.top-tab {
  width: 246px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.top-tab div {
  width: 76px;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.active {
  color: black;
  font-weight: 500;
  border-bottom: 1px solid #006be6;
}
.top-2 {
  width: 25%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button {
  height: 32px;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.top-2 button:first-child {
  width: 106px;
}
.top-2 button:nth-child(2) {
  width: 78px;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.top-3 {
  width: 10%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
}

.main-tab {
  width: 100%;
  height: 331px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
}
.main-tab th {
  min-width: 60px;
  max-width: 200px;
  height: 40px;
  background-color: #e6e1e1;
  border-right: none;
  white-space: nowrap;
  padding: 0;
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
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
  padding: 0 8px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

/* 固定列：左侧固定（线索名称） */
.col-name {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #e6e1e1;
}

/* 固定列：右侧固定（操作） */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
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
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 3px;
  text-align: center;
}
</style>