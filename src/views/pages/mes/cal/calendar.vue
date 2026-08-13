<template>
    <div class="page-wrapper">
        <div class="app">
            <!-- 顶部Tab栏 -->
            <div class="top-tabs">
                <div
                    class="tab-btn"
                    :class="{ active: activeTab === 'category' }"
                    @click="activeTab = 'category'"
                >
                    按分类
                </div>
                <div
                    class="tab-btn"
                    :class="{ active: activeTab === 'team' }"
                    @click="activeTab = 'team'"
                >
                    按班组
                </div>
                <div
                    class="tab-btn"
                    :class="{ active: activeTab === 'person' }"
                    @click="activeTab = 'person'"
                >
                    按个人
                </div>
            </div>

            <!-- 内容区域 -->
            <div class="content-wrapper">
                <!-- 左侧边栏 -->
                <div class="sidebar">
                    <!-- 按分类 -->
                    <div class="sidebar-content" v-if="activeTab === 'category'">
                        <div
                            class="sidebar-item"
                            v-for="item in categories"
                            :key="item.id"
                            :class="{ active: activeCategory === item.id }"
                            @click="activeCategory = item.id"
                        >
                            {{ item.name }}
                        </div>
                    </div>

                    <!-- 按班组 -->
                    <div class="sidebar-content" v-if="activeTab === 'team'">
                        <div
                            class="sidebar-item"
                            v-for="item in teams"
                            :key="item.id"
                            :class="{ active: activeTeam === item.id }"
                            @click="activeTeam = item.id"
                        >
                            {{ item.name }}
                        </div>
                    </div>

                    <!-- 按个人 -->
                    <div class="sidebar-content" v-if="activeTab === 'person'">
                        <div class="search-box">
                            <span class="search-label">人员：</span>
                            <input
                                type="text"
                                class="search-input"
                                placeholder="请输入人员姓名搜索"
                                v-model="searchName"
                            />
                        </div>
                        <button class="search-btn" @click="doSearch">
                            <span class="search-icon">Q</span>
                            查询
                        </button>
                    </div>
                </div>

                <!-- 右侧主内容 -->
                <div class="main-content">
                    <!-- 配色说明 -->
                    <div class="color-legend">
                        <span class="legend-title">配色说明：</span>
                        <span class="legend-item">
                            <span class="dot dot-day"></span>
                            白班
                        </span>
                        <span class="legend-item">
                            <span class="dot dot-middle3"></span>
                            中班（三班倒）
                        </span>
                        <span class="legend-item">
                            <span class="dot dot-middle2"></span>
                            中班（两班倒）/夜班
                        </span>
                        <span class="legend-item">
                            <span class="dot dot-weekend"></span>
                            红色日期 = 周末
                        </span>
                        <span class="legend-item">
                            <span class="rest-tag">休</span>
                            = 节假日（不显示排班）
                        </span>
                    </div>

                    <!-- 日历区域 -->
                    <div class="calendar-wrapper">
                        <!-- 日历头部 -->
                        <div class="calendar-header">
                            <div class="calendar-title">{{ year }}年{{ month }}月</div>
                            <div class="calendar-actions">
                                <button class="btn" @click="prevMonth">上月</button>
                                <button class="btn" @click="goToday">今天</button>
                                <button class="btn" @click="nextMonth">下月</button>
                            </div>
                        </div>

                        <!-- 星期表头 -->
                        <div class="weekdays">
                            <div class="weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
                        </div>

                        <!-- 日期网格 -->
                        <div class="days-grid">
                            <div
                                class="day-cell"
                                v-for="(day, index) in days"
                                :key="index"
                                :class="{
                                    'other-month': day.isOtherMonth,
                                    'is-weekend': day.isWeekend,
                                    'is-today': day.isToday
                                }"
                            >
                                <div class="day-number">{{ day.date }}</div>
                                <div class="lunar-day" :class="{ 'is-festival': day.festival }">
                                    {{ day.festival || day.lunar }}
                                </div>
                                <!-- 排班标签 -->
                                <div
                                    class="shift-tag"
                                    :class="'shift-' + day.shiftType"
                                    v-if="!day.isOtherMonth && !day.isRestDay"
                                >
                                    班
                                </div>
                                <!-- 休息标签 -->
                                <div
                                    class="rest-tag"
                                    v-if="!day.isOtherMonth && day.isRestDay"
                                >
                                    休
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// ========== 导入日历设置相关API ==========
import { getCalendarPage, deleteCalendar } from '#/api/mes/cal/calendar';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {},
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
      // ========== 日历相关数据 ==========
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      days: [],
    };
  },
  mounted() {
    this.loadList();
    this.generateCalendar();
  },
  methods: {
    // ========== 获取日历设置列表 ==========
    async loadList() {
      try {
        const data = await getCalendarPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          ...this.searchForm,
        });
        this.tabValue = data.list || [];
        this.pagination.total = data.total || 0;
      } catch (err) {
        console.error("获取日历设置列表失败", err);
      }
    },
    // ========== 生成日历数据 ==========
    generateCalendar() {
      const firstDay = new Date(this.year, this.month - 1, 1);
      const lastDay = new Date(this.year, this.month, 0);
      const startWeekday = firstDay.getDay();
      const daysInMonth = lastDay.getDate();
      const today = new Date();

      this.days = [];
      // 上月填充
      const prevMonthLastDay = new Date(this.year, this.month - 1, 0).getDate();
      for (let i = startWeekday - 1; i >= 0; i--) {
        this.days.push({
          date: prevMonthLastDay - i,
          isOtherMonth: true,
          isWeekend: false,
          isToday: false,
          lunar: '',
          festival: '',
          shiftType: 'day',
          isRestDay: false,
        });
      }
      // 当月
      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(this.year, this.month - 1, d);
        const weekday = date.getDay();
        this.days.push({
          date: d,
          isOtherMonth: false,
          isWeekend: weekday === 0 || weekday === 6,
          isToday: date.toDateString() === today.toDateString(),
          lunar: '',
          festival: '',
          shiftType: 'day',
          isRestDay: false,
        });
      }
      // 下月填充
      const remaining = 42 - this.days.length;
      for (let d = 1; d <= remaining; d++) {
        this.days.push({
          date: d,
          isOtherMonth: true,
          isWeekend: false,
          isToday: false,
          lunar: '',
          festival: '',
          shiftType: 'day',
          isRestDay: false,
        });
      }
    },
    // ========== 上月 ==========
    prevMonth() {
      if (this.month === 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month--;
      }
      this.generateCalendar();
    },
    // ========== 下月 ==========
    nextMonth() {
      if (this.month === 12) {
        this.month = 1;
        this.year++;
      } else {
        this.month++;
      }
      this.generateCalendar();
    },
    // ========== 今天 ==========
    goToday() {
      const today = new Date();
      this.year = today.getFullYear();
      this.month = today.getMonth() + 1;
      this.generateCalendar();
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = {};
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增日历设置功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert("编辑日历设置功能待实现");
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm("确定要删除吗？")) return;
      try {
        await deleteCalendar(row.id);
        alert("删除成功");
        this.loadList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
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
  height: 650px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -375px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
}

/* ========== 顶部Tab栏 ========== */
.top-tabs {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
}
.tab-btn {
    padding: 6px 18px;
    border-radius: 6px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #f5f5f5;
}
.tab-btn:hover {
    color: #409eff;
}
.tab-btn.active {
    background-color: #ecf5ff;
    color: #409eff;
    font-weight: 500;
}

/* ========== 内容区域 ========== */
.content-wrapper {
    flex: 1;
    display: flex;
    overflow: hidden;
}

/* ========== 左侧边栏 ========== */
.sidebar {
    width: 160px;
    border-right: 1px solid #eee;
    display: flex;
    flex-direction: column;
}
.sidebar-content {
    flex: 1;
    padding: 8px 0;
    overflow-y: auto;
}
.sidebar-item {
    padding: 10px 16px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: all 0.2s;
}
.sidebar-item:hover {
    background-color: #f0f7ff;
}
.sidebar-item.active {
    background-color: #ecf5ff;
    color: #409eff;
    font-weight: 500;
}

/* 按个人 - 搜索框 */
.search-box {
    padding: 12px 12px 8px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.search-label {
    font-size: 13px;
    color: #666;
    white-space: nowrap;
}
.search-input {
    flex: 1;
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 13px;
    outline: none;
    min-width: 0;
}
.search-input:focus {
    border-color: #409eff;
}
.search-btn {
    margin: 0 12px;
    padding: 6px 16px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}
.search-btn:hover {
    background-color: #66b1ff;
}
.search-icon {
    font-size: 12px;
}

/* ========== 右侧主内容 ========== */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px;
    min-width: 0;
}

/* 配色说明 */
.color-legend {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 10px;
    font-size: 12px;
    color: #999;
}
.legend-title {
    color: #666;
}
.legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
}
.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
}
.dot-day {
    background-color: #67c23a;
}
.dot-middle3 {
    background-color: #e6a23c;
}
.dot-middle2 {
    background-color: #909399;
}
.dot-weekend {
    background-color: #f56c6c;
}
.rest-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background-color: #67c23a;
    color: #fff;
    border-radius: 3px;
    font-size: 11px;
}

/* 日历区域 */
.calendar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

/* 日历头部 */
.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.calendar-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
}
.calendar-actions {
    display: flex;
    gap: 6px;
}
.btn {
    padding: 5px 14px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fff;
    font-size: 13px;
    color: #666;
    cursor: pointer;
    transition: all 0.2s;
}
.btn:hover {
    border-color: #409eff;
    color: #409eff;
}

/* 星期表头 */
.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
    margin-bottom: 2px;
}
.weekday {
    text-align: left;
    font-size: 13px;
    font-weight: 500;
    color: #999;
    padding-left: 10px;
}

/* 日期网格 */
.days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    flex: 1;
}
.day-cell {
    position: relative;
    padding: 6px 10px;
    border-bottom: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    min-height: 70px;
    box-sizing: border-box;
}
.day-cell:nth-child(7n) {
    border-right: none;
}
.day-cell:nth-child(n+36) {
    border-bottom: none;
}

/* 日期数字 */
.day-number {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    line-height: 1.3;
}

/* 周末红色 */
.is-weekend .day-number {
    color: #f56c6c;
}

/* 农历 */
.lunar-day {
    font-size: 11px;
    color: #bbb;
    margin-top: 2px;
}
.lunar-day.is-festival {
    color: #67c23a;
}

/* 排班标签 */
.shift-tag {
    position: absolute;
    top: 6px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #409eff;
    color: #409eff;
    background-color: #fff;
}
.shift-day {
    border-color: #409eff;
    color: #409eff;
}
.shift-middle3 {
    border-color: #e6a23c;
    color: #e6a23c;
}
.shift-middle2 {
    border-color: #909399;
    color: #909399;
}

/* 休息标签 */
.rest-tag {
    position: absolute;
    top: 6px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #67c23a;
    color: #fff;
}

/* 上月/下月日期 */
.other-month .day-number,
.other-month .lunar-day {
    color: #ddd;
}

/* 今天高亮 */
.is-today .day-number {
    color: #f56c6c;
    font-weight: 600;
}
</style>