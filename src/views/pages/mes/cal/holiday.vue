<template>
    <div class="page-wrapper">
        <div class="app">
            <!-- 头部 -->
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
                    <div class="ban-tag" v-if="!day.isOtherMonth">班</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// ========== 导入节假日设置相关API ==========
import { getHolidayPage, deleteHoliday } from '#/api/mes/cal/holiday';

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
    // ========== 获取节假日设置列表 ==========
    async loadList() {
      try {
        const data = await getHolidayPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          ...this.searchForm,
        });
        this.tabValue = data.list || [];
        this.pagination.total = data.total || 0;
      } catch (err) {
        console.error("获取节假日设置列表失败", err);
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
      alert("新增节假日设置功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert("编辑节假日设置功能待实现");
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm("确定要删除吗？")) return;
      try {
        await deleteHoliday(row.id);
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
  height: 590px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -375px;
  padding: 20px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* 头部 */
.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}
.calendar-title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
}
.calendar-actions {
    display: flex;
    gap: 8px;
}
.btn {
    padding: 6px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background-color: #fff;
    font-size: 14px;
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
    padding-bottom: 8px;
    margin-bottom: 4px;
}
.weekday {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    padding-left: 12px;
}

/* 日期网格 */
.days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    flex: 1;
}
.day-cell {
    position: relative;
    padding: 10px 12px;
    border-bottom: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    min-height: 78px;
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
    font-size: 18px;
    font-weight: 500;
    color: #333;
    line-height: 1.4;
}

/* 周末红色 */
.is-weekend .day-number {
    color: #f56c6c;
}

/* 农历 */
.lunar-day {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}
.lunar-day.is-festival {
    color: #67c23a;
}

/* 班标签 */
.ban-tag {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 22px;
    height: 22px;
    border: 1px solid #409eff;
    border-radius: 4px;
    font-size: 12px;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 上月/下月日期 */
.other-month .day-number,
.other-month .lunar-day {
    color: #ccc;
}
.other-month .ban-tag {
    display: none;
}

/* 今天高亮 */
.is-today .day-number {
    color: #f56c6c;
    font-weight: 600;
}
</style>