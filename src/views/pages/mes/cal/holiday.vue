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
export default {
    data() {
        return {
            year: 2026,
            month: 8,
            today: new Date(2026, 7, 15), // 模拟今天是8月15日
            weekdays: ['一', '二', '三', '四', '五', '六', '日'],
            // 农历数据（2026年8月）
            lunarMap: {
                // 7月末尾
                '2026-7-27': '六月十四',
                '2026-7-28': '六月十五',
                '2026-7-29': '六月十六',
                '2026-7-30': '六月十七',
                '2026-7-31': '六月十八',
                // 8月
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
            festivalMap: {
                '2026-8-1': '建军节',
                '2026-8-7': '立秋',
                '2026-8-19': '七夕节',
                '2026-8-23': '处暑',
                '2026-8-27': '中元节',
            }
        }
    },
    computed: {
        days() {
            const result = []
            const firstDay = new Date(this.year, this.month - 1, 1)
            // 获取当月第一天是星期几（0=周日, 1=周一... 转换为周一=0）
            let firstWeekday = firstDay.getDay()
            firstWeekday = firstWeekday === 0 ? 6 : firstWeekday - 1

            // 上月天数
            const prevMonthLastDay = new Date(this.year, this.month - 1, 0).getDate()
            // 当月天数
            const currentMonthDays = new Date(this.year, this.month, 0).getDate()

            // 添加上月日期
            for (let i = firstWeekday - 1; i >= 0; i--) {
                const date = prevMonthLastDay - i
                result.push(this.createDayCell(
                    this.getPrevMonthYear(),
                    this.getPrevMonth(),
                    date,
                    true,
                    (firstWeekday - 1 - i + 1) % 7 === 0 || (firstWeekday - 1 - i + 1) % 7 === 6
                    // 周一索引：上月日期的星期几
                ))
            }

            // 添加当月日期
            for (let date = 1; date <= currentMonthDays; date++) {
                const weekdayIndex = (firstWeekday + date - 1) % 7
                const isWeekend = weekdayIndex === 5 || weekdayIndex === 6 // 周六=5, 周日=6
                result.push(this.createDayCell(this.year, this.month, date, false, isWeekend))
            }

            // 添加下月日期，补满6行42格
            const remaining = 42 - result.length
            for (let date = 1; date <= remaining; date++) {
                const weekdayIndex = (firstWeekday + currentMonthDays + date - 1) % 7
                const isWeekend = weekdayIndex === 5 || weekdayIndex === 6
                result.push(this.createDayCell(
                    this.getNextMonthYear(),
                    this.getNextMonth(),
                    date,
                    true,
                    isWeekend
                ))
            }

            return result
        }
    },
    methods: {
        createDayCell(year, month, date, isOtherMonth, isWeekend) {
            const key = `${year}-${month}-${date}`
            const isToday = !isOtherMonth &&
                year === this.today.getFullYear() &&
                month === this.today.getMonth() + 1 &&
                date === this.today.getDate()

            return {
                date: date < 10 ? '0' + date : date,
                lunar: this.lunarMap[key] || '',
                festival: this.festivalMap[key] || '',
                isOtherMonth,
                isWeekend,
                isToday
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