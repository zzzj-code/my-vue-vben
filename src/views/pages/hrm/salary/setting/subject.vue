<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>主体名称</span>
          <input type="text" placeholder="请输入主体名称" />
        </div>
        <div>
          <span>关联公司</span>
          <input type="text" placeholder="请输入关联公司" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>薪酬主体列表</div>
          <div>
            <button>+新增</button>
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
                <th style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th>主体名称</th>
                <th>关联公司</th>
                <th>发薪账户</th>
                <th>发薪银行</th>
                <th>状态</th>
                <th>创建时间</th>
                <th class="oc-col" style="width: 180px">编辑    操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.mainName }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.account }}</td>
                <td>{{ item.bank }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="oc-col">编辑   删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共11条记录<span>20条/页</span></div>
          <div></div>
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
          id: 1,
          mainName: '宇擎科技集团',
          company: '宇擎科技集团有限公司',
          account: '6222****1234',
          bank: '中国工商银行',
          status: '启用',
          createTime: '2026-01-15 09:30:00'
        },
        {
          id: 2,
          mainName: '宇擎深圳分公司',
          company: '宇擎科技（深圳）有限公司',
          account: '6225****5678',
          bank: '中国建设银行',
          status: '启用',
          createTime: '2026-01-20 14:20:00'
        },
        {
          id: 3,
          mainName: '宇擎上海分公司',
          company: '宇擎科技（上海）有限公司',
          account: '6228****9012',
          bank: '中国农业银行',
          status: '启用',
          createTime: '2026-02-01 10:15:00'
        },
        {
          id: 4,
          mainName: '宇擎北京研发中心',
          company: '宇擎科技（北京）有限公司',
          account: '6226****3456',
          bank: '中国银行',
          status: '启用',
          createTime: '2026-02-10 16:45:00'
        },
        {
          id: 5,
          mainName: '宇擎成都分公司',
          company: '宇擎科技（成都）有限公司',
          account: '6227****7890',
          bank: '交通银行',
          status: '停用',
          createTime: '2026-03-01 11:00:00'
        },
        {
          id: 6,
          mainName: '宇擎杭州分公司',
          company: '宇擎科技（杭州）有限公司',
          account: '6229****2345',
          bank: '招商银行',
          status: '启用',
          createTime: '2026-03-15 09:50:00'
        },
        {
          id: 7,
          mainName: '宇擎武汉分公司',
          company: '宇擎科技（武汉）有限公司',
          account: '6223****6789',
          bank: '中国邮政储蓄银行',
          status: '启用',
          createTime: '2026-04-01 13:30:00'
        },
        {
          id: 8,
          mainName: '宇擎南京分公司',
          company: '宇擎科技（南京）有限公司',
          account: '6224****0123',
          bank: '浦发银行',
          status: '停用',
          createTime: '2026-04-15 15:20:00'
        },
        {
          id: 9,
          mainName: '宇擎西安分公司',
          company: '宇擎科技（西安）有限公司',
          account: '6221****4567',
          bank: '中信银行',
          status: '启用',
          createTime: '2026-05-01 10:40:00'
        },
        {
          id: 10,
          mainName: '宇擎重庆分公司',
          company: '宇擎科技（重庆）有限公司',
          account: '6220****8901',
          bank: '兴业银行',
          status: '启用',
          createTime: '2026-05-20 16:10:00'
        },
        {
          id: 11,
          mainName: '宇擎广州分公司',
          company: '宇擎科技（广州）有限公司',
          account: '6217****2345',
          bank: '民生银行',
          status: '启用',
          createTime: '2026-06-01 14:30:00'
        }
      ],
    }
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
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div {
  width: 246px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 500;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div input:hover {
  border: 0.5px solid #35bbfa;
}
.app-top div input:focus {
  outline: none;
  border: 0.5px solid #35bbfa;
}
.app-top div:last-child {
  display: flex;
  padding-left: 50px;
  color: #35bbfa;
  font-size: 14px;
}
.app-top div button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 0.5px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.app-top .btn1:hover {
  border: 0.5px solid #35bbfa;
  color: #35bbfa;
}
.app-top .btn2 {
  border: 0;
  background-color: #35bbfa;
  color: #fff;
}
.app-top .btn2:hover {
  background-color: #76d2fd;
}

.app-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 78px;
  height: 32px;
  color: #fff;
  border: 0;
  background-color: #0a33e7;
  border-radius: 10px;
}
.main-title div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  /* margin-right: 5px; */
}

.main-tab {
  width: 100%;
  height: 385px;
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
  /* border: 1px solid #e6e6e6; */
}
.main-tab table th {
  border-right: 1px solid #ccc;
  text-align: center;
  background-color: #e9e6e6;
  height: 40px;
}
.main-tab table td {
  font-size: 14px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 50px;
}
.col-name {
  position: sticky;
  left: 170px;
}
.oc-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.main-floot div span {
  display: inline-block;
  width: 100px;
  height: 26px;
  margin-left: 5px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  padding-top: 3px;
}
</style>
