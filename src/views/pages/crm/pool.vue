<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-box">
          <div>
            <span>客户名称</span>
            <input type="text" placeholder="请输入客户名称" />
          </div>
          <div>
            <span>手机</span>
            <input type="text" placeholder="请输入手机">
          </div>
          <div>
            <span>所属行业</span>
            <input type="text" placeholder="请输入所属行业" />
          </div>
          <div>
            <span>客户级别</span>
            <input type="text" placeholder="请输入客户级别" />
          </div>
          <div>
            <span>客户来源</span>
            <input type="text" placeholder="请输入客户来源" />
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
          </div>
          <div class="top-2">
            <button>+新增线索</button>
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
              <tr v-for="item in 4" :key="item">
                <td class="col-name">官网咨询</td>
                <td>张三科技</td>
                <td>138****1234</td>
                <td>010-8888****</td>
                <td>zhangsan@tech.com</td>
                <td>北京市朝阳区建国路88号</td>
                <td>互联网</td>
                <td>A级</td>
                <td>2026-08-05 14:00</td>
                <td>有意向，需跟进</td>
                <td>2026-07-28 10:30</td>
                <td>已沟通产品方案，客户感兴趣</td>
                <td>王经理</td>
                <td>销售一部</td>
                <td>2026-07-28 10:30</td>
                <td>2026-07-20 09:00</td>
                <td class="ol-col">删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共1条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "mine",
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
  border: 0;
  background-color: #fff;
  color: #006be6;
  border: 1px solid #ccc;
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
  height: 40px;
  background-color: #e6e1e1;
  border-right: none;
  min-width: 60px;
  max-width: 200px;
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