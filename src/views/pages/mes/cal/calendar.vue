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
export default {
    data() {
        return {
            activeTab: 'category',
            activeCategory: 'injection',
            activeTeam: 'injection-a',
            searchName: '',
            categories: [
                { id: 'injection', name: '注塑' },
                { id: 'machining', name: '机加工' },
                { id: 'assembly', name: '组装' },
                { id: 'warehouse', name: '仓库' }
            ],
            teams: [
                { id: 'injection-a', name: '注塑A组' },
                { id: 'injection-b', name: '注塑B组' },
                { id: 'injection-c', name: '注塑C组' },
                { id: 'assembly-a', name: '组装A组' },
                { id: 'assembly-b', name: '组装B组' },
                { id: 'assembly-c', name: '组装C组' },
                { id: 'warehouse', name: '仓库组' }
            ],
            year: 2026,
            month: 8,
            today: new Date(2026, 7, 15),
            weekdays: ['一', '二', '三', '四', '五', '六', '日'],
            // 农历数据
            lunarMap: {
                '2026-7-27': '六月十四',
                '2026-7-28': '六月十五',
                '2026-7-29': '六月十六',
                '2026-7-30': '六月十七',
                '2026-7-31': '六月十八',
                '2026-8-1': '六月十九',
                '2026-8-2': '六月二十',
                '2026-8-3': '六月廿一',
                '2026-8-4': '六月廿二',
                '2026-8-5': '六月廿三',
                '2026-8-6': '六月廿四',
                '2026-8-7': '六月廿五',
                '2026-8-8': '六月廿六',
                '2026-8-9': '六月廿七',
                '2026-8-10': '六月廿八',
                '2026-8-11': '六月廿九',
                '2026-8-12': '六月三十',
                '2026-8-13': '七月初一',
                '2026-8-14': '七月初二',
                '2026-8-15': '七月初三',
                '2026-8-16': '七月初四',
                '2026-8-17': '七月初五',
                '2026-8-18': '七月初六',
                '2026-8-19': '七月初七',
                '2026-8-20': '七月初八',
                '2026-8-21': '七月初九',
                '2026-8-22': '七月初十',
                '2026-8-23': '七月十一',
                '2026-8-24': '七月十二',
                '2026-8-25': '七月十三',
                '2026-8-26': '七月十四',
                '2026-8-27': '七月十五',
                '2026-8-28': '七月十六',
                '2026-8-29': '七月十七',
                '2026-8-30': '七月十八',
                '2026-8-31': '七月十九',
                '2026-9-1': '七月二十',
                '2026-9-2': '七月廿一',
                '2026-9-3': '七月廿二',
                '2026-9-4': '七月廿三',
                '2026-9-5': '七月廿四',
                '2026-9-6': '七月廿五',
            },
            // 节日数据
            festivalMap: {
                '2026-8-1': '建军节',
                '2026-8-7': '立秋',
                '2026-8-19': '七夕节',
                '2026-8-23': '处暑',
                '2026-8-27': '中元节',
            },
            // 休息日（节假日，不显示排班）
            restDays: ['2026-8-1', '2026-8-7'],
            // 排班数据：day=白班, middle3=中班三班倒, middle2=中班两班倒/夜班
            shiftMap: {
                '2026-8-2': 'day',
                '2026-8-3': 'day',
                '2026-8-4': 'day',
                '2026-8-5': 'day',
                '2026-8-6': 'day',
                '2026-8-8': 'day',
                '2026-8-9': 'day',
                '2026-8-10': 'day',
                '2026-8-11': 'day',
                '2026-8-12': 'day',
                '2026-8-13': 'day',
                '2026-8-14': 'day',
                '2026-8-15': 'day',
                '2026-8-16': 'day',
                '2026-8-17': 'day',
                '2026-8-18': 'day',
                '2026-8-19': 'day',
                '2026-8-20': 'day',
                '2026-8-21': 'day',
                '2026-8-22': 'day',
                '2026-8-23': 'day',
                '2026-8-24': 'day',
                '2026-8-25': 'day',
                '2026-8-26': 'day',
                '2026-8-27': 'day',
                '2026-8-28': 'day',
                '2026-8-29': 'day',
                '2026-8-30': 'day',
                '2026-8-31': 'day',
            }
        }
    },
    computed: {
        days() {
            const result = []
            const firstDay = new Date(this.year, this.month - 1, 1)
            let firstWeekday = firstDay.getDay()
            firstWeekday = firstWeekday === 0 ? 6 : firstWeekday - 1

            const prevMonthLastDay = new Date(this.year, this.month - 1, 0).getDate()
            const currentMonthDays = new Date(this.year, this.month, 0).getDate()

            // 上月日期
            for (let i = firstWeekday - 1; i >= 0; i--) {
                const date = prevMonthLastDay - i
                result.push(this.createDayCell(
                    this.getPrevMonthYear(),
                    this.getPrevMonth(),
                    date,
                    true
                ))
            }

            // 当月日期
            for (let date = 1; date <= currentMonthDays; date++) {
                result.push(this.createDayCell(this.year, this.month, date, false))
            }

            // 下月日期
            const remaining = 42 - result.length
            for (let date = 1; date <= remaining; date++) {
                result.push(this.createDayCell(
                    this.getNextMonthYear(),
                    this.getNextMonth(),
                    date,
                    true
                ))
            }

            return result
        }
    },
    methods: {
        createDayCell(year, month, date, isOtherMonth) {
            const key = `${year}-${month}-${date}`
            const d = new Date(year, month - 1, date)
            let weekdayIndex = d.getDay()
            weekdayIndex = weekdayIndex === 0 ? 6 : weekdayIndex - 1
            const isWeekend = weekdayIndex === 5 || weekdayIndex === 6

            const isToday = !isOtherMonth &&
                year === this.today.getFullYear() &&
                month === this.today.getMonth() + 1 &&
                date === this.today.getDate()

            const festival = this.festivalMap[key] || ''
            const isRestDay = this.restDays.includes(key)

            return {
                date: date < 10 ? '0' + date : date,
                lunar: this.lunarMap[key] || '',
                festival: festival,
                shiftType: this.shiftMap[key] || 'day',
                isOtherMonth,
                isWeekend,
                isToday,
                isRestDay
            }
        },
        getPrevMonth() {
            return this.month === 1 ? 12 : this.month - 1
        },
        getPrevMonthYear() {
            return this.month === 1 ? this.year - 1 : this.year
        },
        getNextMonth() {
            return this.month === 12 ? 1 : this.month + 1
        },
        getNextMonthYear() {
            return this.month === 12 ? this.year + 1 : this.year
        },
        prevMonth() {
            if (this.month === 1) {
                this.year--
                this.month = 12
            } else {
                this.month--
            }
        },
        nextMonth() {
            if (this.month === 12) {
                this.year++
                this.month = 1
            } else {
                this.month++
            }
        },
        goToday() {
            this.year = this.today.getFullYear()
            this.month = this.today.getMonth() + 1
        },
        doSearch() {
            // 搜索逻辑
            console.log('搜索:', this.searchName)
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