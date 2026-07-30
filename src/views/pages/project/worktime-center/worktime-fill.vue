<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>所属项目</span>
            <input type="text" placeholder="全部" />
          </div>
          <div class="inp-1">
            <span>状态</span>
            <input type="text" placeholder="全部" />
          </div>
          <div class="inp-1">
            
          </div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">我的工时</div>
          <div class="top-2">
            <button></button>
            <button>🔍</button>
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
                <th><input type="checkbox" /></th>
                <th>工作日期</th>
                <th>关联任务</th>
                <th>工时(h)</th>
                <th>工作内容</th>
                <th>状态</th>
                <th>审核意见</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.workDate }}</td>
                <td>{{ item.taskName }}</td>
                <td>{{ item.hours }}</td>
                <td>{{ item.content }}</td>
                <td>
                    <span
                    style="display: inline-block; width: 52px; height: 22px; border-radius: 5px;
                    background-color: #e6f6ff; border: 1px solid #006be6; color: #006be6;">
                    {{ item.status }}
                    </span>
                </td>
                <td>{{ item.reviewComment }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button></button>
                  <button>删除</button>
                  <button></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          workDate: "2026-07-15",
          taskName: "OA需求调研",
          hours: 4,
          content: "与业务部门沟通OA系统需求，整理需求文档",
          status: "待审核",
          reviewComment: "需求梳理清晰，同意",
          createTime: "2026-07-15 18:30",
        },
        {
          id: 2,
          workDate: "2026-07-15",
          taskName: "HR需求调研",
          hours: 3,
          content: "调研HR系统现有问题，收集改进建议",
          status: "待审核",
          reviewComment: "-",
          createTime: "2026-07-15 18:45",
        },
        {
          id: 3,
          workDate: "2026-07-14",
          taskName: "需求规格说明书编写",
          hours: 6,
          content: "编写OA模块需求规格说明书，包含功能列表和流程图",
          status: "待审核",
          reviewComment: "内容完整，部分细节需补充",
          createTime: "2026-07-14 19:00",
        },
        {
          id: 4,
          workDate: "2026-07-14",
          taskName: "需求评审",
          hours: 2,
          content: "参加需求评审会议，记录修改意见",
          status: "已驳回",
          reviewComment: "需求不明确，需重新调研",
          createTime: "2026-07-14 17:30",
        },
        {
          id: 5,
          workDate: "2026-07-13",
          taskName: "概要设计",
          hours: 5,
          content: "设计系统架构图，编写概要设计文档",
          status: "待审核",
          reviewComment: "架构设计合理，通过",
          createTime: "2026-07-13 18:20",
        },
        {
          id: 6,
          workDate: "2026-07-13",
          taskName: "详细设计",
          hours: 3,
          content: "设计数据库表结构，编写接口文档",
          status: "待审核",
          reviewComment: "-",
          createTime: "2026-07-13 18:50",
        },
        {
          id: 7,
          workDate: "2026-07-12",
          taskName: "开发环境搭建",
          hours: 4,
          content: "搭建开发环境，配置项目依赖",
          status: "待审核",
          reviewComment: "环境配置完成",
          createTime: "2026-07-12 17:40",
        },
        {
          id: 8,
          workDate: "2026-07-12",
          taskName: "核心功能开发",
          hours: 6,
          content: "开发用户管理模块，实现登录注册功能",
          status: "待审核",
          reviewComment: "代码质量良好，继续推进",
          createTime: "2026-07-12 19:10",
        },
        {
          id: 9,
          workDate: "2026-07-11",
          taskName: "联调与自测",
          hours: 5,
          content: "前后端联调，进行单元测试",
          status: "待审核",
          reviewComment: "联调通过，测试覆盖率达标",
          createTime: "2026-07-11 18:40",
        },
        {
          id: 10,
          workDate: "2026-07-11",
          taskName: "OA需求调研",
          hours: 3,
          content: "整理需求调研问卷，准备下周调研计划",
          status: "待审核",
          reviewComment: "-",
          createTime: "2026-07-11 17:50",
        },
        {
          id: 11,
          workDate: "2026-07-10",
          taskName: "集成测试",
          hours: 4,
          content: "执行集成测试用例，修复发现的Bug",
          status: "已驳回",
          reviewComment: "存在严重Bug，需重新测试",
          createTime: "2026-07-10 18:30",
        },
        {
          id: 12,
          workDate: "2026-07-10",
          taskName: "UAT测试",
          hours: 2,
          content: "准备UAT测试环境，编写测试计划",
          status: "待审核",
          reviewComment: "测试准备充分",
          createTime: "2026-07-10 17:20",
        },
        {
          id: 13,
          workDate: "2026-07-09",
          taskName: "部署上线",
          hours: 3,
          content: "部署应用到生产环境，验证功能",
          status: "待审核",
          reviewComment: "部署成功，功能正常",
          createTime: "2026-07-09 19:00",
        },
        {
          id: 14,
          workDate: "2026-07-09",
          taskName: "OA系统UI设计",
          hours: 5,
          content: "设计OA系统界面原型，制作交互稿",
          status: "待审核",
          reviewComment: "-",
          createTime: "2026-07-09 18:45",
        },
        {
          id: 15,
          workDate: "2026-07-08",
          taskName: "数据库设计",
          hours: 4,
          content: "优化数据库索引，编写存储过程",
          status: "待审核",
          reviewComment: "数据库设计优化完成",
          createTime: "2026-07-08 18:10",
        },
        {
          id: 16,
          workDate: "2026-07-08",
          taskName: "接口开发",
          hours: 6,
          content: "开发数据接口，进行接口测试",
          status: "已驳回",
          reviewComment: "接口响应时间过长，需优化",
          createTime: "2026-07-08 19:30",
        },
        {
          id: 17,
          workDate: "2026-07-07",
          taskName: "性能测试",
          hours: 3,
          content: "进行性能压力测试，分析测试报告",
          status: "待审核",
          reviewComment: "性能指标达标",
          createTime: "2026-07-07 17:40",
        },
        {
          id: 18,
          workDate: "2026-07-07",
          taskName: "需求规格说明书编写",
          hours: 4,
          content: "补充完善需求规格说明书，添加用例图",
          status: "待审核",
          reviewComment: "文档已完善",
          createTime: "2026-07-07 18:20",
        },
        {
          id: 19,
          workDate: "2026-07-06",
          taskName: "核心功能开发",
          hours: 5,
          content: "开发权限管理模块，实现角色权限控制",
          status: "待审核",
          reviewComment: "-",
          createTime: "2026-07-06 18:50",
        },
        {
          id: 20,
          workDate: "2026-07-06",
          taskName: "概要设计",
          hours: 3,
          content: "修改概要设计文档，根据评审意见调整",
          status: "待审核",
          reviewComment: "修改完成，符合要求",
          createTime: "2026-07-06 17:30",
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
  /* border: 1px solid red; */
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
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #fff;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(2) {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  border-radius: 10px;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: #006be6;
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
  min-width: 1090px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #e9e6e6;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.ol-col {
  width: 120px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  color: red;
  border: 0;
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
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
