<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-title">
          <div>办公用品类别</div>
        </div>
        <div class="left-main">
          <ul class="main-tab">
            <li
              v-for="(cat, index) in categories"
              :key="cat"
              :class="{ active: selectedCategoryIndex === index }"
              @click="selectCategory(index)"
            >
              {{ cat }}
            </li>
          </ul>
        </div>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-w">
            <span>物品名称</span>
            <input type="text" />
          </div>
          <div class="top-w">
            <span>物品编码</span>
            <input type="text" />
          </div>
          <div class="top-w">
            <span>管理类型</span>
            <input type="text" />
          </div>
          <div class="top-w">
            <button class="btn">重置</button>
            <button class="btn1">搜索</button>
            <span class="a">展开▽</span>
          </div>
        </div>
        <div class="right-tab">
          <div class="right-header">
            <div class="header-title">办公用品列表</div>
            <div class="header-actions">
              <button class="btn-add">+新增办公用品</button>
              <button class="btn-export">导出</button>
              <div class="batch-delete" aria-disabled="true">
                <span class="del-icon">🗑</span> 批量删除
              </div>
              <div class="icon-actions">
                <button class="icon-btn search" title="搜索">🔍</button>
                <button class="icon-btn" title="刷新">↻</button>
                <button class="icon-btn" title="全屏">⛶</button>
                <button class="icon-btn" title="布局">◧</button>
              </div>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 40px"><input type="checkbox" /></th>
                  <th>物品名称</th>
                  <th>物品编号</th>
                  <th>类别</th>
                  <th>管理类型</th>
                  <th>状态</th>
                  <th>时间</th>
                  <th class="op-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(car, idx) in filteredCars" :key="car.id">
                  <td><input type="checkbox" /></td>
                  <td>101</td>
                  <td>{{ car.company }}</td>
                  <td>{{ car.plate }}</td>
                  <td>{{ car.name }}</td>
                  <td>{{ car.status }}</td>
                  <td>{{ car.category }}</td>
                  <td class="op-col">
                    <button @click.prevent="editCar(car)">编辑</button>
                    <button @click.prevent="deleteCar(car)">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <div class="footer-left">共 {{ filteredCars.length }} 条记录</div>
            <div class="footer-right">
              <select>
                <option>20条/页</option>
              </select>
              <div class="pager">&lt;&lt; &lt; 1 &gt; &gt;&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "全部",
        "文具类",
        "打印耗材",
        "生活用品",
        "电脑办公",
        "办公设备/电器",
        "财务用品"
      ],
      selectedCategoryIndex: 0,
      cars: [
        {
          id: 1,
          company: "深圳总公司",
          plate: "粤A00001",
          name: "别克GL8",
          status: "空闲",
          category: "商务接待用车",
          user: "张三",
          buyDate: "2020-01-15",
        },
        {
          id: 2,
          company: "深圳总公司",
          plate: "粤A00002",
          name: "大众帕萨特",
          status: "使用中",
          category: "行政用车",
          user: "李四",
          buyDate: "2019-05-20",
        },
        {
          id: 3,
          company: "深圳总公司",
          plate: "粤A00003",
          name: "丰田凯美瑞",
          status: "空闲",
          category: "生产经营用车",
          user: "王五",
          buyDate: "2018-07-10",
        },
        {
          id: 4,
          company: "深圳总公司",
          plate: "粤A00004",
          name: "奥迪A6",
          status: "维修",
          category: "领导专车",
          user: "赵六",
          buyDate: "2021-03-01",
        },
        {
          id: 5,
          company: "深圳总公司",
          plate: "粤A00005",
          name: "捷达",
          status: "空闲",
          category: "其他",
          user: "-",
          buyDate: "2017-11-11",
        },
        {
          id: 3,
          company: "深圳总公司",
          plate: "粤A00003",
          name: "丰田凯美瑞",
          status: "空闲",
          category: "生产经营用车",
          user: "王五",
          buyDate: "2018-07-10",
        },
        {
          id: 4,
          company: "深圳总公司",
          plate: "粤A00004",
          name: "奥迪A6",
          status: "维修",
          category: "领导专车",
          user: "赵六",
          buyDate: "2021-03-01",
        },
        {
          id: 5,
          company: "深圳总公司",
          plate: "粤A00005",
          name: "捷达",
          status: "空闲",
          category: "其他",
          user: "-",
          buyDate: "2017-11-11",
        },
      ],
    };
  },
  computed: {
    filteredCars() {
      const cat = this.categories[this.selectedCategoryIndex];
      if (cat === "全部") return this.cars;
      return this.cars.filter((c) => c.category === cat);
    },
  },
  methods: {
    selectCategory(index) {
      this.selectedCategoryIndex = index;
    },
    // 示例操作：编辑、删除（只是占位）
    editCar(car) {
      // TODO: 打开编辑弹窗
      console.log("edit", car);
    },
    deleteCar(car) {
      // TODO: 删除逻辑
      console.log("delete", car);
    },
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
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
  display: flex;
  justify-content: space-between;
}
/* 左边 */
.app-left {
  width: 256px;
  height: 100%;
  /* border: 1px solid red; */
}
.left-title {
  width: 100%;
  height: 38px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  border: 0.5px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-title div {
  width: 230px;
  font-weight: 600;
  font-size: 14px;
}
.left-main {
  width: 100%;
  height: 552px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  border: 0.5px solid #ccc;
  padding: 10px;
}
.main-tab {
  list-style: none;
  width: 222px;
  /* border: 1px solid red; */
}
.main-tab li {
  width: 100%;
  height: 36px;
  margin-bottom: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main-tab li:hover {
  background-color: #ccc;
  color: rgb(15, 138, 238);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(238, 233, 233, 0.15);
}
.active {
  background-color: rgb(175, 218, 253);
  color: rgb(15, 138, 238);
}
/* ———————————————————————— */
/* 右边 */
.app-right {
  width: 720px;
  height: 100%;
  /* border: 1px solid red; */
}
.right-top {
  width: 100%;
  height: 93px;
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-header {
  /* width: 100%; */
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 8px;
}
.right-header .btn-add {
  width: 100px;
  height: 36px;
  border-radius: 10px;
  border: 0;
  background-color: #2b88ff;
  color: #fff;
}
.right-header .btn-add .plus {
  margin-right: 0;
  font-size: 18px;
}
.right-header .btn-export {
  width: 60px;
  height: 36px;
  background: #2b88ff;
  color: #fff;
  border: 0;
  padding: 10px 16px;
  border-radius: 10px;
  margin-left: 12px;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(43, 136, 255, 0.12);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.batch-delete {
  display: inline-flex;
  align-items: center;
  background: #f5f7fa;
  border: 1px solid #e6e9ef;
  color: #9aa3b2;
  padding: 5px 10px;
  border-radius: 10px;
  margin-left: 12px;
  font-size: 14px;
}
.batch-delete .del-icon {
  font-size: 14px;
}
.right-header .icon-actions {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
}
.icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e9eef6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
}
.icon-btn.search {
  background: #2b88ff;
  color: #fff;
  border: 0;
  box-shadow: 0 4px 10px rgba(43, 136, 255, 0.12);
}
.icon-btn:hover {
  transform: translateY(-1px);
}
.top-w {
  width: 178px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.top-w span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 5px;
}
.top-w input {
  width: 68px;
  height: 32px;
  border-radius: 10px;
  border: 0.5px solid;
  cursor: pointer;
}
.top-w input:hover {
  border: 0.5px solid rgb(107, 174, 250);
}
.top-w button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  cursor: pointer;
}
.top-w .btn {
  background-color: #fff;
  border: 1px solid #ccc;
  margin-right: 5px;
}
.top-w .btn:hover {
  border: 1px solid rgb(107, 174, 250);
  color: rgb(107, 174, 250);
}
.top-w .btn1 {
  background-color: blue;
  color: #fff;
  border: 0;
}
.top-w .btn1:hover {
  background-color: rgb(107, 174, 250);
}
.top-w .a {
  width: 30px;
  font-size: 12px;
  color: rgb(107, 174, 250);
}
.right-tab {
  width: 100%;
  height: 487px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 10px;
}
/* 表格容器，超出区域滚动但表格宽度受限于父元素 */
.right-tab {
  width: 100%;
  height: 487px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
}
.right-tab .table-wrap {
  width: 100%;
  /* 右侧容器高度 487px，减去 header(48px)+header间距(8px)+footer(48px)=104px */
  height: calc(100% - 104px);
  max-height: calc(100% - 104px);
  overflow: auto; /* 横向和纵向滚动 */
  box-sizing: border-box;
}
.right-tab table {
  width: max-content; /* 允许表格宽度超过容器，出现横向滚动 */
  min-width: 1100px; /* 保证在窄屏出现横向滚动，按需调整 */
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6; /* 外框边框 */
}
.right-tab th,
.right-tab td {
  padding: 8px 10px;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f3f3f3; /* 列分隔线 */
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 去掉最后一列右边框（操作列除外） */
.right-tab thead th:last-child,
.right-tab tbody td:last-child {
  border-right: 0;
}

.right-tab thead th {
  background: #fafafa;
  font-weight: 600;
  color: #333;
  height: 52px;
}
/* 操作列固定在表格右侧 */
.right-tab .op-col {
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 5;
  width: 140px;
  box-shadow: -6px 0 8px rgba(0, 0, 0, 0.03);
}
.right-tab .op-col button {
  margin-right: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.right-tab .op-col button:hover {
  border-color: rgb(107, 174, 250);
  color: rgb(107, 174, 250);
}
.table-footer {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-top: 1px solid #eee;
  background: #fafafa;
}
.table-footer .footer-left {
  color: #666;
}
.table-footer .footer-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.table-footer select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
}
.table-footer .pager {
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #e6e6e6;
  color: #666;
}
/* ————————————————————- */
</style>
