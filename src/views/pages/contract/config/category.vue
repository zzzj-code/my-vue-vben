<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div class="top-left">组织列表</div>
          <div class="top-center">
            <button class="btn1">+新增分类</button>
            <button class="btn2">收缩</button>
          </div>
          <div class="top-right">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-center">
          <table>
            <thead>
              <tr>
                <th class="col-id">ID</th>
                <th class="col-name">组织名称</th>
                <th style="width: 40px;"><input type="checkbox" /></th>
                <th style="width: 28px;">组织类型</th>
                <th style="width: 138px;">负责人</th>
                <th style="width: 100px;">显示顺序</th>
                <th style="width: 100px;">组织状态</th>
                <th style="width: 168px;">创建时间</th>
                <th class="op-col">操作</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tabValue" :key="item.id">
                    <td class="col-id">{{item.id}}</td>
                    <td class="col-name">{{item.name}}</td>
                    <td><input type="checkbox"></td>
                    <td><button class="anniu">{{item.company}}</button></td>
                    <td>{{item.person}}</td>
                    <td>{{ item.order }}</td>
                    <td><button class="anniu1">{{item.status}}</button></td>
                    <td>{{item.time}}</td>
                    <td class="op-col"><button>+新增下级</button><button>编辑</button><button>删除</button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                tabValue:[
                    {
                        id: '100',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '101',
                        name: '深圳总公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '关闭',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '长沙分公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '深圳总公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '101',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '关闭',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '深圳总公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '101',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '关闭',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '深圳总公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '宇擎数码',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                    {
                        id: '100',
                        name: '深圳总公司',
                        company: '公司',
                        person: '宇擎数码',
                        order: '1',
                        status: '开启',
                        time: '2021-01-05 17:03:47'
                    },
                ]
            }
        }
    }
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
.app-main {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 10px;
}
.main-top {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-left {
  width: 70%;
  font-size: 16px;
  font-weight: 600;
}
.top-center {
  width: 20%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
}
.top-center .btn1 {
  width: 106px;
  height: 32px;
  border: 0;
  background-color: #2485f5;
  border-radius: 10px;
  color: #fff;
}
.top-center .btn2 {
  width: 64px;
  height: 32px;
  border: 0;
  background-color: #2485f5;
  border-radius: 10px;
  color: #fff;
}
.top-center .btn3 {
  width: 78px;
  height: 32px;
  border: 0;
  background-color: #2485f5;
  border-radius: 10px;
  color: #fff;
}
.btn1:hover,
.btn2:hover,
.btn3:hover {
  background-color: #3491fc;
  cursor: pointer;
}
.top-center .btn4 {
  width: 106px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #e9e8e8;
  color: #ccc;
  border-radius: 10px;
}
.btn4:hover {
  cursor: default;
}
.top-right {
  width: 10%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-right button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-right button:hover {
  color: #2485f5;
}

/* 表格 */
.main-center {
  width: 100%;
  height: 532px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-center table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-center table th {
  height: 56px;
  text-align: center;
  padding: 8px 10px;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #e6e6e6; /* 列分隔线 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f7f5f5;
}
.main-center table td{
    height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
}
.main-center tr .anniu{
    border: 1px solid greenyellow;
    background-color: rgb(222, 245, 188);
    color: rgb(67, 105, 9);
    border-radius: 5px;
} 
.main-center tr .anniu1{
    border: 1px solid rgb(60, 136, 250);
    background-color: rgb(148, 188, 248);
    color: #2485f5;
    border-radius: 5px;
}
.col-id{
    position: sticky;
    left: 0;
    width: 80px;
}
.col-name{
    position: sticky;
    left: 80px;
    background: #fff;
    width: 150px;
}
.op-col {
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 5;
  width: 208px;
  box-shadow: -6px 0 8px rgba(0, 0, 0, 0.03);
}
.op-col button{
    border: 0;
    color: #2485f5;
    margin-right: 15px;
    background-color: #fff;
}
.op-col button:last-child{
    color: red;
}
</style>
