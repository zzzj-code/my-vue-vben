<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- 天气 -->
      <div class="app-weather">
        <div class="weather-time">
          <div class="box-time">
            <h2><span>{{ greeting }}</span>, admin</h2>
            <div class="time-zi">欢迎回来,开始您 的工作吧！</div>
          </div>
          <div class="wea-time">
            <span>{{ dateInfo }}</span>
            <span>丙午马年 六月初八</span>
          </div>
        </div>
        <div class="weather-wea">
          <div class="tu"><img src="../img/晴天.png" alt="" /></div>
          <div class="wea-zi">
            <div class="zi1">
              <div class="da">22°</div>
              <div>晴</div>
            </div>
            <div class="zi2">
              <div class="da">北京</div>
              <div>湿度65°</div>
              <div>东南风</div>
            </div>
          </div>
        </div>
      </div>
      <!-- ____ -->
      <!-- 应用中心 -->
      <div class="app-center">
        <div class="center-title"><span>应用中心</span></div>
        <div class="center-app">
          <div
            class="cen-a"
            v-for="(app, index) in appList"
            :key="index"
            @mouseenter="app.hover = true"
            @mouseleave="app.hover = false"
          >
            <div
              class="delete-btn"
              v-show="app.hover"
              @click.stop="showConfirm(index, $event)"
            >
              ✕
            </div>
            <div class="a-color" @click="openApp(app)">
              {{ app.icon }}
            </div>
            <div class="a-text">{{ app.name }}</div>
          </div>
          <!-- 添加应用按钮 -->
          <div class="cen-a" @click="openAddModal">
            <div class="a-line">+</div>
            <div class="a-text">添加应用</div>
          </div>
        </div>
      </div>
      <!-- —————— -->
      <!-- 待办任务 -->
      <div class="app-task">
        <div class="task-title">
          <div class="title-text">
            <div class="text1">
              <div
                class="text1-a"
                :class="{ 'a-active': activeTab === 'todo' }"
                @click="switchTab('todo')"
              >
                待办任务
              </div>
              <div
                class="text1-a"
                :class="{ 'a-active': activeTab === 'myBill' }"
                @click="switchTab('myBill')"
              >
                我的单据
              </div>
              <div
                class="text1-a"
                :class="{ 'a-active': activeTab === 'done' }"
                @click="switchTab('done')"
              >
                已办任务
              </div>
              <div
                class="text1-a"
                :class="{ 'a-active': activeTab === 'copy' }"
                @click="switchTab('copy')"
              >
                抄送我的
              </div>
            </div>
          </div>
          <a href="">查看更多</a>
        </div>
        <div class="task-text">
          <div class="text-table">
            <table>
              <tr>
                <th style="width: 140px">单据类型</th>
                <th style="width: 160px">单据编号</th>
                <th style="width: 100px">审批状态</th>
                <th style="width: 140px">摘要</th>
                <th style="width: 120px">发起人</th>
                <th style="width: 120px">所属公司</th>
                <th style="width: 120px">所属部门</th>
                <th style="width: 100px">任务节点</th>
                <th style="width: 180px">接收时间</th>
                <th style="width: 80px">操作</th>
              </tr>
            </table>
          </div>
          <div class="text-table1">
            <table>
              <!-- ✅ 固定10行，无论数据多少 -->
              <tr v-for="(item, index) in 10" :key="index">
                <td style="width: 140px">{{ getRowData(index).type }}</td>
                <td style="width: 160px; color: #0c70f3; cursor: pointer">
                  {{ getRowData(index).code }}
                </td>
                <td style="width: 100px">{{ getRowData(index).status }}</td>
                <td style="width: 140px">{{ getRowData(index).summary }}</td>
                <td style="width: 120px">{{ getRowData(index).initiator }}</td>
                <td style="width: 120px">{{ getRowData(index).company }}</td>
                <td style="width: 120px">{{ getRowData(index).department }}</td>
                <td style="width: 100px">{{ getRowData(index).node }}</td>
                <td style="width: 180px">{{ getRowData(index).time }}</td>
                <td style="width: 80px; color: #0c70f3; cursor: pointer">
                  {{ getRowData(index).action }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- ———————— -->
      <!-- 通知 -->
      <div class="app-notice">
        <div class="notice-tuzhi">
          <h3>通知公告</h3>
          <a href="#">查看更多</a>
        </div>
        <div class="notice-text">
          <div
            class="text-1"
            v-for="(item, index) in noticeList"
            :key="index"
            @click="openNoticeModal(item)"
          >
            <div class="neirong">
              <div></div>
              <span>【通知公告】</span>
              <span>{{ item.title }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- —————————— -->
      <!-- 日历 -->
      <div class="app-date">
        <!-- 头部 -->
        <div class="calendar-header">
          <span class="title"><span class="icon"></span>日程待办</span>
          <a class="more" href="javascript:void(0)">全部日程 ></a>
        </div>

        <!-- 工具栏 -->
        <div class="calendar-toolbar">
          <span class="arrow" @click="prevMonth">‹</span>
          <span class="year-month" @click="toggleView"
            >{{ currentYear }}年 {{ currentMonth }}月</span
          >
          <span class="arrow" @click="nextMonth">›</span>
          <div class="view-type">
            <span
              :class="{ active: viewType === 'month' }"
              @click="viewType = 'month'"
              >月</span
            >
            <span
              :class="{ active: viewType === 'year' }"
              @click="viewType = 'year'"
              >年</span
            >
          </div>
        </div>

        <!-- 星期行 -->
        <div class="calendar-weekdays">
          <span class="weekend">一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span class="weekend">日</span>
        </div>

        <!-- 日期网格 -->
        <div class="calendar-days">
          <div
            v-for="day in calendarDays"
            :key="day.date"
            class="day"
            :class="{
              'other-month': !day.isCurrentMonth,
              today: day.isToday,
              weekend: day.isWeekend,
              'has-event': day.hasEvent,
            }"
            @click="selectDate(day)"
          >
            {{ day.day }}
          </div>
        </div>
      </div>
      <!-- —————————— -->
    </div>

    <!-- 应用中心模态框 -->
    <!--删除聊天框 -->
    <div
      class="confirm-chat-fixed"
      v-if="confirmData.show"
      @click.stop
      :style="{
        left: confirmData.x + 'px',
        top: confirmData.y + 'px',
      }"
    >
      <div class="confirm-chat-content">
        <div class="chat-arrow"></div>
        <div class="chat-content">
          <div class="chat-text">确定要删除「{{ confirmData.name }}」吗？</div>
          <div class="chat-btns">
            <button class="chat-btn confirm" @click="confirmDelete">
              确定
            </button>
            <button class="chat-btn cancel" @click="hideConfirm">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!--添加应用模态框-->
    <div class="modal-overlay" v-if="showAddModal" @click.self="closeAddModal">
      <div class="modal-content">
        <!-- 标题 -->
        <div class="modal-header">
          <span class="modal-title">添加常用应用</span>
          <button class="modal-close-btn" @click="closeAddModal">✕</button>
        </div>

        <!-- 搜索框 -->
        <div class="modal-search">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="#999"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>
          <input
            type="text"
            placeholder="搜索应用名称..."
            v-model="searchKeyword"
            ref="searchInput"
          />
        </div>

        <!-- 应用列表 -->
        <div class="modal-body">
          <div
            class="modal-app-item"
            v-for="app in filteredAvailableApps"
            :key="app.name"
            @click="selectApp(app)"
          >
            <span class="app-icon">{{ app.icon }}</span>
            <span class="app-name">{{ app.name }}</span>
            <!-- <span class="app-path">{{ app.path }}</span> -->
          </div>
          <div v-if="filteredAvailableApps.length === 0" class="modal-empty">
            没有找到匹配的应用
          </div>
        </div>
      </div>
    </div>
    <!--通知公告详情模态框 -->
    <div
      class="notice-modal-overlay"
      v-if="showNoticeModal"
      @click.self="closeNoticeModal"
    >
      <div class="notice-modal-content">
        <!-- 关闭按钮 -->
        <button class="notice-modal-close" @click="closeNoticeModal">✕</button>

        <!-- 标题 -->
        <h2 class="notice-modal-title">{{ currentNotice.title }}</h2>

        <!-- 信息行 -->
        <div class="notice-modal-info">
          <span class="info-label">通知公告</span>
        </div>

        <!-- 发布信息 -->
        <div class="notice-modal-meta">
          <span><strong>发布人：</strong>{{ currentNotice.publisher }}</span>
          <span
            ><strong>发布时间：</strong>{{ currentNotice.publishTime }}</span
          >
        </div>

        <!-- 分割线 -->
        <div class="notice-modal-divider"></div>

        <!-- 通知内容 -->
        <div class="notice-modal-body">
          <div class="notice-content-label">通知内容</div>
          <div class="notice-content-text">{{ currentNotice.content }}</div>
        </div>
      </div>
    </div>
    <!-- ———————————————————————————————————— -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //日历数据
      currentYear: 2026,
      currentMonth: 7, // 7月
      viewType: "month", // 'month' | 'year'
      selectedDate: null,
      // 模拟有日程的日期
      eventDates: [
        "2026-07-06",
        "2026-07-10",
        "2026-07-15",
        "2026-07-20",
        "2026-07-25",
      ],
      dateInfo: "",
      greeting: "早上好",
      // 当前激活的标签
      activeTab: "todo",
      // 已添加的应用列表
      appList: [{ name: "发起流程", icon: "", hover: false }],
      // 所有可用的应用列表（按图片顺序）
      allApps: [
        { name: "工作台", icon: "", path: "/workbench" },
        { name: "流程中心", icon: "", path: "/workspace/process" },
        { name: "OA", icon: "", path: "/workspace/oa" },
        { name: "人力", icon: "", path: "/workspace/hr" },
        { name: "合同", icon: "", path: "/workspace/contract" },
        { name: "CRM", icon: "", path: "/workspace/crm" },
        { name: "ERP", icon: "", path: "/workspace/erp" },
        { name: "项目", icon: "", path: "/workspace/project" },
        { name: "资产", icon: "", path: "/workspace/asset" },
        { name: "财务", icon: "", path: "/workspace/finance" },
        { name: "WMS", icon: "", path: "/workspace/wms" },
        { name: "系统管理", icon: "", path: "/workspace/system" },
        { name: "基础设施", icon: "", path: "/workspace/infra" },
        { name: "支付管理", icon: "", path: "/workspace/payment" },
        { name: "报表管理", icon: "", path: "/workspace/report" },
        { name: "主数据", icon: "", path: "/workspace/master" },
        { name: "会员中心", icon: "", path: "/workspace/member" },
        { name: "商城系统", icon: "", path: "/workspace/mall" },
        { name: "工单管理", icon: "", path: "/workspace/ticket" },
        { name: "公众号管理", icon: "", path: "/workspace/wechat" },
        { name: "AI 大模型", icon: "", path: "/workspace/ai" },
        { name: "IoT 物联网", icon: "", path: "/workspace/iot" },
        { name: "IM 即时通讯", icon: "", path: "/workspace/im" },
      ],
      // 删除确认数据
      confirmData: {
        show: false,
        index: -1,
        name: "",
        x: 0,
        y: 0,
      },
      // 添加模态框
      showAddModal: false,
      searchKeyword: "",
      // 通知列表数据
      noticeList: [
        {
          id: 1,
          title: "2026年3月8日妇女节福利发放通知",
          time: "2026-03-10 17:23",
          publisher: "宇擎源码",
          publishTime: "2026-03-10 17:23:37",
          content: "2026年3月8日妇女节福利发放通知",
        },
        {
          id: 2,
          title: "关于2026年清明节放假安排通知",
          time: "2026-03-28 09:30",
          publisher: "行政部",
          publishTime: "2026-03-28 09:30:00",
          content: "根据国家法定节假日规定，2026年清明节放假安排如下...",
        },
        {
          id: 3,
          title: "2026年第一季度优秀员工表彰通知",
          time: "2026-04-01 14:20",
          publisher: "人事部",
          publishTime: "2026-04-01 14:20:00",
          content: "为表彰先进，树立榜样，经公司研究决定...",
        },
        {
          id: 4,
          title: "公司办公系统升级维护通知",
          time: "2026-04-05 16:45",
          publisher: "技术部",
          publishTime: "2026-04-05 16:45:00",
          content: "为了提升系统性能，公司办公系统将于本周六进行升级维护...",
        },
        {
          id: 5,
          title: "2026年五一劳动节放假安排",
          time: "2026-04-20 10:00",
          publisher: "行政部",
          publishTime: "2026-04-20 10:00:00",
          content: "2026年五一劳动节放假安排通知如下...",
        },
        {
          id: 6,
          title: "新员工入职培训通知",
          time: "2026-04-22 08:30",
          publisher: "人事部",
          publishTime: "2026-04-22 08:30:00",
          content: "欢迎新同事加入宇擎源码大家庭，入职培训安排如下...",
        },
        {
          id: 7,
          title: "2026年夏季团建活动通知",
          time: "2026-04-25 11:15",
          publisher: "企划部",
          publishTime: "2026-04-25 11:15:00",
          content: "为增强团队凝聚力，公司将于近期组织夏季团建活动...",
        },
      ],
      // 当前选中的通知
      currentNotice: {
        title: "",
        publisher: "",
        publishTime: "",
        content: "",
      },
      // 通知模态框
      showNoticeModal: false,
      // 表格数据配置
      tableData: {
        todo: [
          {
            type: "CRM合同审批流程",
            code: "HR209-2026042600002",
            status: "待处理",
            summary: "宇擎源码请假申请",
            initiator: "宇擎源码",
            company: "深圳总公司",
            department: "研发部门",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "采购审批流程",
            code: "PO-2026042600015",
            status: "待处理",
            summary: "办公用品采购",
            initiator: "张三",
            company: "深圳总公司",
            department: "采购部",
            node: "审批人",
            time: "",
            action: "办理",
          },
          {
            type: "合同审批流程",
            code: "CT-2026042600023",
            status: "待处理",
            summary: "客户服务合同",
            initiator: "李四",
            company: "北京分公司",
            department: "法务部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "待处理",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
          {
            type: "人力审批流程",
            code: "HR-2026042600047",
            status: "待处理",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "办理",
          },
        ],
        myBill: [
          {
            type: "采购申请单",
            code: "PO-2026042500012",
            status: "审批中",
            summary: "设备采购申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "采购部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销申请单",
            code: "EXP-2026042500018",
            status: "已通过",
            summary: "差旅费报销",
            initiator: "张三",
            company: "深圳总公司",
            department: "财务部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "合同申请单",
            code: "CT-2026042500025",
            status: "审批中",
            summary: "合作协议",
            initiator: "张三",
            company: "北京分公司",
            department: "法务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
          {
            type: "请假申请单",
            code: "LEAVE-2026042500033",
            status: "已通过",
            summary: "年假申请",
            initiator: "张三",
            company: "深圳总公司",
            department: "人事部",
            node: "发起人",
            time: "",
            action: "查看",
          },
        ],
        done: [
          {
            type: "CRM合同审批流程",
            code: "HR209-2026042000001",
            status: "已完成",
            summary: "宇擎源码请假申请",
            initiator: "宇擎源码",
            company: "深圳总公司",
            department: "研发部门",
            node: "发起人",
            time: "2026-04-20",
            action: "查看",
          },
          {
            type: "采购审批流程",
            code: "PO-2026042100008",
            status: "已完成",
            summary: "办公用品采购",
            initiator: "张三",
            company: "深圳总公司",
            department: "采购部",
            node: "审批人",
            time: "2026-04-21",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041900015",
            status: "已完成",
            summary: "客户服务合同",
            initiator: "李四",
            company: "北京分公司",
            department: "法务部",
            node: "发起人",
            time: "2026-04-19",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026041800022",
            status: "已完成",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "2026-04-18",
            action: "查看",
          },
          {
            type: "人力审批流程",
            code: "HR-2026041700038",
            status: "已完成",
            summary: "转正申请",
            initiator: "赵六",
            company: "上海分公司",
            department: "人事部",
            node: "发起人",
            time: "2026-04-17",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041600052",
            status: "已完成",
            summary: "合作协议续签",
            initiator: "孙七",
            company: "深圳总公司",
            department: "法务部",
            node: "审批人",
            time: "2026-04-16",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041600052",
            status: "已完成",
            summary: "合作协议续签",
            initiator: "孙七",
            company: "深圳总公司",
            department: "法务部",
            node: "审批人",
            time: "2026-04-16",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041600052",
            status: "已完成",
            summary: "合作协议续签",
            initiator: "孙七",
            company: "深圳总公司",
            department: "法务部",
            node: "审批人",
            time: "2026-04-16",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041600052",
            status: "已完成",
            summary: "合作协议续签",
            initiator: "孙七",
            company: "深圳总公司",
            department: "法务部",
            node: "审批人",
            time: "2026-04-16",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026041600052",
            status: "已完成",
            summary: "合作协议续签",
            initiator: "孙七",
            company: "深圳总公司",
            department: "法务部",
            node: "审批人",
            time: "2026-04-16",
            action: "查看",
          },
        ],
        copy: [
          {
            type: "CRM合同审批流程",
            code: "HR209-2026042600002",
            status: "待阅读",
            summary: "宇擎源码请假申请",
            initiator: "宇擎源码",
            company: "深圳总公司",
            department: "研发部门",
            node: "发起人",
            time: "",
            action: "标记已读",
          },
          {
            type: "采购审批流程",
            code: "PO-2026042600015",
            status: "已阅读",
            summary: "办公用品采购",
            initiator: "张三",
            company: "深圳总公司",
            department: "采购部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "合同审批流程",
            code: "CT-2026042600023",
            status: "待阅读",
            summary: "客户服务合同",
            initiator: "李四",
            company: "北京分公司",
            department: "法务部",
            node: "发起人",
            time: "",
            action: "标记已读",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
          {
            type: "报销审批流程",
            code: "EXP-2026042600031",
            status: "已阅读",
            summary: "差旅费报销",
            initiator: "王五",
            company: "深圳总公司",
            department: "财务部",
            node: "审批人",
            time: "",
            action: "查看",
          },
        ],
      },
    };
  },
  computed: {
    filteredAvailableApps() {
      const addedNames = this.appList.map((app) => app.name);
      return this.allApps
        .filter((app) => !addedNames.includes(app.name))
        .filter(
          (app) =>
            app.name.includes(this.searchKeyword) ||
            (app.path && app.path.includes(this.searchKeyword)),
        );
    },
    currentTableData() {
      const data = this.tableData[this.activeTab] || [];
      while (data.length < 10) {
        data.push({ ...this.emptyRow });
      }
      return data.slice(0, 10);
    },
    //日历数据
    calendarDays() {
      const year = this.currentYear;
      const month = this.currentMonth;
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

      // 当月第一天
      const firstDay = new Date(year, month - 1, 1);
      // 当月最后一天
      const lastDay = new Date(year, month, 0);
      // 当月第一天是星期几（周一为0）
      let firstWeekday = firstDay.getDay() - 1;
      if (firstWeekday < 0) firstWeekday = 6;

      const days = [];
      const totalDays = lastDay.getDate();

      // 上月补充的天数
      const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
      for (let i = firstWeekday - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const date = new Date(year, month - 2, day);
        days.push({
          day: day,
          date: `${year}-${String(month - 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
          isCurrentMonth: false,
          isToday: false,
          isWeekend: false,
          hasEvent: false,
        });
      }

      // 当月天数
      for (let i = 1; i <= totalDays; i++) {
        const date = new Date(year, month - 1, i);
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        days.push({
          day: i,
          date: dateStr,
          isCurrentMonth: true,
          isToday: dateStr === todayStr,
          isWeekend: isWeekend,
          hasEvent: this.eventDates.includes(dateStr),
        });
      }

      // 下月补充天数（补齐6行）
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month, i);
        days.push({
          day: i,
          date: `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`,
          isCurrentMonth: false,
          isToday: false,
          isWeekend: false,
          hasEvent: false,
        });
      }

      return days;
    },
  },
  mounted() {
    this.getDateInfo();
  },
  methods: {
    getDateInfo() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
      const weekday = weekdays[now.getDay()];
      this.dateInfo = `${year}-${month}-${day} 星期${weekday}`;
      this.greeting = this.getGreetingByHour(now.getHours());
      this.updateTableTimes();
    },
    getGreetingByHour(hour) {
      if (hour >= 5 && hour < 9) return "早上好";
      if (hour >= 9 && hour < 12) return "上午好";
      if (hour >= 12 && hour < 14) return "中午好";
      if (hour >= 14 && hour < 18) return "下午好";
      return "晚上好";
    },

    updateTableTimes() {
      const tabs = ["todo", "myBill", "copy"];
      tabs.forEach((tab) => {
        if (this.tableData[tab]) {
          this.tableData[tab] = this.tableData[tab].map((item) => ({
            ...item,
            time: item.time ? item.time : this.dateInfo,
          }));
        }
      });
    },

    getRowData(index) {
      const data = this.currentTableData;
      return data[index] || this.emptyRow;
    },

    switchTab(tab) {
      this.activeTab = tab;
    },

    // ===== 删除确认 =====
    showConfirm(index, event) {
      const rect = event.target.getBoundingClientRect();
      this.confirmData.show = true;
      this.confirmData.index = index;
      this.confirmData.name = this.appList[index].name;
      this.confirmData.x = rect.left + rect.width / 2 - 90;
      this.confirmData.y = rect.top - 80;

      if (this.confirmData.y < 10) this.confirmData.y = 10;
      if (this.confirmData.x < 10) this.confirmData.x = 10;
      if (this.confirmData.x + 180 > window.innerWidth) {
        this.confirmData.x = window.innerWidth - 190;
      }
    },
    hideConfirm() {
      this.confirmData.show = false;
      this.confirmData.index = -1;
      this.confirmData.name = "";
    },
    confirmDelete() {
      if (this.confirmData.index !== -1) {
        this.appList.splice(this.confirmData.index, 1);
      }
      this.hideConfirm();
    },

    // ===== 添加应用模态框 =====
    openAddModal() {
      this.showAddModal = true;
      this.searchKeyword = "";
      this.$nextTick(() => {
        if (this.$refs.searchInput) {
          this.$refs.searchInput.focus();
        }
      });
    },
    closeAddModal() {
      this.showAddModal = false;
      this.searchKeyword = "";
    },
    selectApp(app) {
      if (this.appList.some((a) => a.name === app.name)) {
        alert("该应用已添加");
        return;
      }
      this.appList.unshift({
        name: app.name,
        icon: app.icon,
        hover: false,
      });
      this.closeAddModal();
    },

    openApp(app) {
      this.$router.push(`${app.path}`);
    },

    // ===== 通知公告模态框 =====
    openNoticeModal(item) {
      this.currentNotice = {
        title: item.title,
        publisher: item.publisher,
        publishTime: item.publishTime,
        content: item.content,
      };
      this.showNoticeModal = true;
      document.body.style.overflow = "hidden";
    },
    closeNoticeModal() {
      this.showNoticeModal = false;
      document.body.style.overflow = "";
    },
    // ===== 日历方法 =====
    prevMonth() {
      if (this.viewType === "year") {
        this.currentYear--;
      } else {
        if (this.currentMonth === 1) {
          this.currentMonth = 12;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
      }
    },

    nextMonth() {
      if (this.viewType === "year") {
        this.currentYear++;
      } else {
        if (this.currentMonth === 12) {
          this.currentMonth = 1;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
      }
    },

    toggleView() {
      this.viewType = this.viewType === "month" ? "year" : "month";
    },

    selectDate(day) {
      this.selectedDate = day.date;
      console.log("选中日期:", day.date);
      // 这里可以添加跳转或弹窗逻辑
    },

    goToday() {
      const today = new Date();
      this.currentYear = today.getFullYear();
      this.currentMonth = today.getMonth() + 1;
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  width: 1030px;
  height: 780px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}

.app {
  width: 1030px;
  height: 780px;
  padding: 10px;
}

/* 天气 */
.app-weather {
  width: 647px;
  height: 132px;
  border-radius: 5px;
  background: linear-gradient(to bottom right, skyblue, blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-weather .weather-time {
  width: 266px;
  height: 100px;
  padding-left: 20px;
}
.box-time {
  height: 64px;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  letter-spacing: 2px;
}
.weather-time h2 {
  width: 111px;
  font-size: 24px;
  word-break: break-word;
  white-space: normal;
  color: #fff;
}
.time-zi {
  width: 138px;
  height: 48px;
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
  white-space: pre-wrap;
  word-break: break-word;
}

.wea-time {
  width: 100%;
  height: 20px;
  color: #fff;
  font-size: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.weather-wea {
  width: 360px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.tu {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
}
.wea-zi {
  width: 228px;
  height: 75px;
  display: flex;
}
.zi1 {
  width: 64px;
  height: 64px;
  margin-right: 35px;
  color: #fff;
}
.zi1 .da {
  font-size: 36px;
  text-align: right;
  width: 100%;
  font-weight: bold;
}
.zi1 div:last-child {
  font-size: 14px;
}
.zi2 {
  width: 50px;
  height: 74px;
  font-size: 12px;
  color: #fff;
}
.zi2 .da {
  font-size: 14px;
  height: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.zi2 div:nth-child(2) {
  height: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

/* 应用中心 */
.app-center {
  width: 647px;
  height: 130px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;
  border: 0.5px solid #e7dcdc;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.center-title {
  font-size: 16px;
  height: 40px;
  width: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.center-app {
  width: 100%;
  flex: 1;
  padding-right: 4px;
  min-height: 64px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  align-content: flex-start;
  position: relative;
}
.center-app::-webkit-scrollbar {
  width: 5px;
}
.center-app::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.center-app::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.center-app::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.cen-a {
  width: 52px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  cursor: default;
}

.a-color {
  width: 44px;
  height: 44px;
  background-color: #add6f1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
}

.delete-btn {
  position: absolute;
  top: -4px;
  right: -2px;
  width: 14px;
  height: 14px;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(255, 107, 107, 0.4);
  line-height: 1;
}
.delete-btn:hover {
  transform: scale(1.15);
  background-color: #e03131;
}

.a-line {
  width: 44px;
  height: 44px;
  border: 1.5px dashed rgb(161, 159, 159);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(161, 159, 159);
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.a-line:hover {
  border-color: #add6f1;
  color: #add6f1;
  background-color: rgba(173, 214, 241, 0.1);
}

.a-text {
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
  white-space: nowrap;
}
/* 删聊天框 */
.confirm-chat-fixed {
  position: fixed;
  z-index: 99999;
  pointer-events: none;
}
.confirm-chat-content {
  pointer-events: auto;
  position: relative;
  animation: chatFadeIn 0.2s ease;
}
@keyframes chatFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.chat-arrow {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #fff;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}
.chat-content {
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  border: 1px solid #e8e8e8;
  min-width: 180px;
  text-align: center;
}
.chat-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  white-space: nowrap;
}
.chat-btns {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.chat-btn {
  padding: 5px 20px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.chat-btn.confirm {
  background-color: #ff6b6b;
  color: #fff;
}
.chat-btn.confirm:hover {
  background-color: #e03131;
}
.chat-btn.cancel {
  background-color: #f0f0f0;
  color: #666;
}
.chat-btn.cancel:hover {
  background-color: #e0e0e0;
}
/* 添加模态框 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  animation: fadeIn 0.25s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-content {
  background: #fff;
  border-radius: 12px;
  width: 540px;
  max-height: 85vh;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 14px 24px;
  flex-shrink: 0;
}
.modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
}
.modal-close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.modal-close-btn:hover {
  background: #f5f5f5;
  color: #333;
}
.modal-search {
  display: flex;
  align-items: center;
  padding: 8px 24px 16px 24px;
  flex-shrink: 0;
  gap: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.search-icon {
  flex-shrink: 0;
  color: #bbb;
}
.modal-search input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  background: transparent;
}
.modal-search input::placeholder {
  color: #bbb;
}
.modal-body {
  flex: 1;
  padding: 8px 0 12px 0;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 420px;
}
.modal-body::-webkit-scrollbar {
  width: 5px;
}
.modal-body::-webkit-scrollbar-track {
  background: transparent;
}
.modal-body::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}
.modal-app-item {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  cursor: pointer;
  transition: background 0.15s ease;
  gap: 12px;
}
.modal-app-item:hover {
  background: #f5f7fa;
}

.app-icon {
  font-size: 18px;
  flex-shrink: 0;
  width: 28px;
}

.app-name {
  font-size: 14px;
  color: #333;
  flex: 1;
}

.app-path {
  font-size: 12px;
  color: #bbb;
  font-family: "Courier New", monospace;
  flex-shrink: 0;
}

.modal-empty {
  padding: 40px 20px;
  text-align: center;
  color: #bbb;
  font-size: 14px;
}
/* ———————————————————— */
/* 待办任务 */
.app-task {
  width: 647px;
  height: 480px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;
  border: 0.5px solid #e7dcdc;
}
.task-title {
  width: 100%;
  height: 62px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.task-title a {
  text-decoration: none;
  color: rgb(99, 174, 236);
}
.title-text {
  width: 560px;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.text1 {
  width: 384px;
  height: 100%;
  display: flex;
  display: flex;
  justify-content: space-around;
}
.a-active {
  border-bottom: 1px solid rgb(51, 198, 243);
}
.text1-a {
  width: 72px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;
}
.text1-a:hover {
  color: rgb(51, 198, 243);
}
.task-text {
  width: 100%;
  height: 392px;
  padding: 0px 12px 8px;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
}
.text-table,
.text-table1 {
  width: 100%;
  min-width: 1410px;
}

.text-table table,
.text-table1 table {
  width: 1410px;
  border-collapse: collapse;
  table-layout: fixed;
}

.text-table table {
  background-color: #faf7f7;
  height: 34px;
}

.text-table table tr th {
  border-right: 1px solid #ccc;
  padding: 6px 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  height: 34px;
}

.text-table1 table tr td {
  border-right: 1px solid #eee;
  padding: 6px 8px;
  text-align: center;
  font-size: 13px;
  height: 45px;
}

.text-table1 table tr td:last-child,
.text-table table tr th:last-child {
  border-right: none;
}
/* 待办任务表格滚动条样式 */
.task-text::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
.task-text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.task-text::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.task-text::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* —————————————————————————————— */
/* 通知 */
.app-notice {
  width: 332px;
  height: 340px;
  background-color: #fff;
  float: left;
  margin-left: 657px;
  margin-top: -762px;
  border-radius: 4px;
}
.notice-tuzhi {
  width: 100%;
  height: 49px;
  /* border: 1px solid red; */
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}
.notice-tuzhi h3 {
  font-size: 16px;
}
.notice-tuzhi a {
  font-size: 14px;
  text-decoration: none;
}
.notice-text {
  width: 100%;
  height: 290px;
  /* border: 1px solid black; */
}
.text-1 {
  width: 100%;
  height: 41px;
  padding: 10px 16px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.neirong {
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
}
.neirong span:nth-child(2) {
  width: 84px;
}
.neirong span:nth-child(3) {
  width: 122px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.neirong span:nth-child(4) {
  width: 61px;
  font-size: 12px;
  color: #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.neirong div {
  width: 8px;
  height: 8px;
  /* border: 1px solid black; */
  background-color: #ccc;
  border-radius: 50%;
}
.text-1:hover {
  background-color: #ebe9e9;
  cursor: pointer;
}
/* —————————————————————————— */
/* 日历 */
.app-date {
  width: 332px;
  height: 410px;
  background-color: #fff;
  border-radius: 3px;
  float: left;
  margin-left: 657px;
  margin-top: -412px;
  padding: 16px;
  box-sizing: border-box;
  border: 0.5px solid #e7dcdc;
}
/* 日历头部 - 标题 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.calendar-header .title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.calendar-header .title .icon {
  margin-right: 6px;
}

.calendar-header .more {
  font-size: 13px;
  color: #999;
  text-decoration: none;
  cursor: pointer;
}
.calendar-header .more:hover {
  color: #667eea;
}

/* 日历工具栏 - 年月选择 */
.calendar-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
}

.calendar-toolbar .year-month {
  font-weight: 500;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  transition: background 0.2s;
}
.calendar-toolbar .year-month:hover {
  background: #f0f0f0;
}

.calendar-toolbar .arrow {
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 4px;
  transition: background 0.2s;
  font-size: 16px;
  color: #999;
  user-select: none;
}
.calendar-toolbar .arrow:hover {
  background: #f0f0f0;
  color: #333;
}

.calendar-toolbar .view-type {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

.calendar-toolbar .view-type span {
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: #999;
  transition: all 0.2s;
}
.calendar-toolbar .view-type span:hover {
  background: #f0f0f0;
}
.calendar-toolbar .view-type span.active {
  color: #667eea;
  font-weight: 500;
}

/* 星期行 */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 6px;
  font-size: 13px;
  color: #999;
  font-weight: 500;
}

.calendar-weekdays .weekend {
  color: #ff6b6b;
}

/* 日期网格 */
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-days .day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 50%;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.calendar-days .day:hover {
  background: #f0f0f0;
}

/* 其他月份日期 */
.calendar-days .day.other-month {
  color: #ddd;
}

/* 今天 */
.calendar-days .day.today {
  background: #667eea;
  color: #fff;
  font-weight: 600;
}
.calendar-days .day.today:hover {
  background: #5a6fd6;
}

/* 周末 */
.calendar-days .day.weekend {
  color: #ff6b6b;
}
.calendar-days .day.weekend.other-month {
  color: #f0b3b3;
}

/* 有日程的日期 */
.calendar-days .day.has-event::after {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  background: #667eea;
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}

.calendar-days .day {
  position: relative;
}
/* ———————————————————————————— */

/*通知公告详情模态框 */
.notice-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  animation: fadeIn 0.25s ease;
}

.notice-modal-content {
  background: #fff;
  border-radius: 12px;
  width: 580px;
  max-height: 80vh;
  padding: 32px 36px 28px 36px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.3s ease;
  overflow-y: auto;
}

.notice-modal-content::-webkit-scrollbar {
  width: 4px;
}
.notice-modal-content::-webkit-scrollbar-track {
  background: transparent;
}
.notice-modal-content::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}

/* 关闭按钮 */
.notice-modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.notice-modal-close:hover {
  background: #f5f5f5;
  color: #333;
}

/* 标题 */
.notice-modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 16px 0;
  line-height: 1.4;
}

/* 信息行 - "通知公告" */
.notice-modal-info {
  margin-bottom: 12px;
}
.info-label {
  font-size: 14px;
  color: #666;
}

/* 发布人 + 发布时间 */
.notice-modal-meta {
  display: flex;
  gap: 30px;
  font-size: 14px;
  color: #333;
  margin-bottom: 16px;
}
.notice-modal-meta strong {
  color: #666;
  font-weight: 500;
}

/* 分割线 */
.notice-modal-divider {
  width: 100%;
  height: 1px;
  background: #e8e8e8;
  margin-bottom: 20px;
}

/* 通知内容 */
.notice-modal-body {
  margin-top: 4px;
}
.notice-content-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
}
.notice-content-text {
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
