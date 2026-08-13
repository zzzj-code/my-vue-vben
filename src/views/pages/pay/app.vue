<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>应用名</span>
            <input type="text" placeholder="请输入应用名" v-model="searchForm.name" />
          </div>
          <div>
            <span>开启状态</span>
            <input type="text" placeholder="开启状态" v-model="searchForm.status" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>应用列表</div>
          <div>
            <button @click="handleAdd">+新增应用</button>
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
                <th rowspan="2"><div>应用标识</div></th>
                <th rowspan="2"><div>应用名</div></th>
                <th rowspan="2"><div>状态</div></th>
                <th colspan="5" style="border-bottom: 1px solid #ccc;"><div>支付宝配置</div></th>
                <th colspan="6" style="border-bottom: 1px solid #ccc;"><div>微信配置</div></th>
                <th rowspan="2" style="width: 48px;"><div>钱包支付配置</div></th>
                <th rowspan="2" style="width: 48px;"><div>模拟支付配置</div></th>
                <th rowspan="2" class="ol-col"><div>操作</div></th>
              </tr>
              <tr>
                <th><div>APP</div></th>
                <th><div>PC网站</div></th>
                <th><div>WAP网站</div></th>
                <th><div>扫码</div></th>
                <th><div>条码</div></th>
                <th><div>小程序</div></th>
                <th><div>JSAPI</div></th>
                <th><div>APP</div></th>
                <th><div>Native</div></th>
                <th><div>WAP网站</div></th>
                <th><div>条码</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.appId }}</td>
                <td>{{ item.appName }}</td>
                <td>
                  <span :style="{ 
                    color: item.status === '启用' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: item.status === '启用' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }">
                    {{ item.status }}
                  </span>
                </td>
                <td>{{ item.alipay.app ? '✅' : '❌' }}</td>
                <td>{{ item.alipay.pc ? '✅' : '❌' }}</td>
                <td>{{ item.alipay.wap ? '✅' : '❌' }}</td>
                <td>{{ item.alipay.scan ? '✅' : '❌' }}</td>
                <td>{{ item.alipay.barcode ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.miniProgram ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.jsapi ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.app ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.native ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.wap ? '✅' : '❌' }}</td>
                <td>{{ item.wechat.barcode ? '✅' : '❌' }}</td>
                <td>{{ item.walletPay ? '✅' : '❌' }}</td>
                <td>{{ item.simulatePay ? '✅' : '❌' }}</td>
                <!-- 操作 -->
                <td class="ol-col">
                  <button @click="handleDetail(item)">详情</button>
                  <button @click="handleDelete(item)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span>
          <div style="float: right;">
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">></button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入应用信息相关API ==========
import { getAppPage, deleteApp } from '#/api/pay/app';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        name: '',
        status: '',
      },
      // 分页数据
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    // 加载列表
    async loadList() {
      try {
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        };
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        const data = await getAppPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          appId: item.appId || '',
          appName: item.name || '',
          status: item.status === 0 ? '启用' : '停用',
          alipay: item.alipayConfig || { app: false, pc: false, wap: false, scan: false, barcode: false },
          wechat: item.wechatConfig || { miniProgram: false, jsapi: false, app: false, native: false, wap: false, barcode: false },
          walletPay: item.walletPayConfig || false,
          simulatePay: item.simulatePayConfig || false,
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 搜索
    handleSearch() { this.pagination.pageNo = 1; this.loadList(); },
    // 重置
    handleReset() {
      Object.keys(this.searchForm).forEach((key) => { this.searchForm[key] = ''; });
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // 分页
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
    // 新增
    handleAdd() { alert('新增功能待实现'); },
    // 详情
    handleDetail(item) { alert(`查看详情：${item.appName}`); },
    // 删除
    async handleDelete(item) {
      if (!confirm(`确定要删除应用"${item.appName}"吗？`)) return;
      try {
        await deleteApp(item.id);
        alert('删除成功');
        this.loadList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
  }
};
</script>

<style scoped>
.main-tab table th div{
  border-right: 1px solid #ccc ;
  padding: 0 8px;
}
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
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
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
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;  /* 让表格可以滚动 */
}
.main-tab table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  /* border-right: 1px solid #ccc; */
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  border-right: 0;
  white-space: nowrap;  /* 防止内容换行 */
}
.ol-col {
  min-width: 80px;
  width: 80px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
  border-radius: 4px;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:hover {
  background-color: #f0f0f0;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>