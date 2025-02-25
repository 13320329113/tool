import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export function getTimeChina() {
  return dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
}

// 时间配置对象
const getShortCuts = (includeToday = true, format = 'YYYY-MM-DD') => {
  const hasToDay = includeToday ? 0 : 1
  return {
    1: {
      text: '最近7天',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().subtract(7, 'day').startOf('day').format(format),
          dayjs().subtract(hasToDay, 'day').endOf('day').format(format)
        ])
      }
    },
    2: {
      text: '最近14天',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().subtract(14, 'day').startOf('day').format(format),
          dayjs().subtract(hasToDay, 'day').endOf('day').format(format)
        ])
      }
    },
    3: {
      text: '最近30天',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().subtract(30, 'day').startOf('day').format(format),
          dayjs().subtract(hasToDay, 'day').endOf('day').format(format)
        ])
      }
    },
    4: {
      text:'本月',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().startOf('month').format('YYYY-MM-DD'),
          dayjs().subtract(hasToDay, 'day').endOf('day').format(format)
        ])
      }
    },
    5: {
      text: '上月',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().subtract(1, 'month').startOf('month').format(format),
          dayjs().subtract(1, 'month').endOf('month').format(format)
        ])
      }
    },
    6: {
      text: '近半年',
      onClick(picker) {
        picker.$emit('pick', [
          dayjs().subtract(6, 'month').startOf('day').format(format),
          dayjs().subtract(hasToDay, 'day').endOf('day').format(format)
        ])
      }
    }
  }
}

/**
 * 返回  快捷时间选择列表
 * @param include Array
 * 1.今天 2.昨天 3.最近7天(包括当天) 4.最近30天(包括当天) 5.本月 6.上月
 */
export function getShortcuts(include = [1, 2, 3, 4, 5, 6], includeToday = true, format = 'YYYY-MM-DD') {
  let list = []
  const shortCuts = getShortCuts(includeToday, format)
  include.forEach(v => {
    if (shortCuts[v]) list.push(shortCuts[v])
  })
  return list
}

/**
 * 返回  本周日期
 * @param isObj 是否返回对象
 * @param options 设置对象的key值, isObj为true则必填
 */

export function getCurrentWeek(isObj = false, keys, format = 'YYYY-MM-DD') {
  const start = dayjs().startOf('week').format(format)
  const end = dayjs().endOf('day').format(format)
  if (isObj) {
    return {
      [keys[0]]: start,
      [keys[1]]: end
    }
  }
  return [start, end]
}

/**
 * 返回  默认天数范围
 * @param day [间隔时间，间隔时间(负数则往后)]
 */
export function getInitTime(range = [89, -1], returnArray = true, format = 'YYYY-MM-DD HH:mm:ss') {
  const startTime = dayjs().subtract(range[0], 'day').startOf('day').format(format)
  const endTime = dayjs().subtract(range[1], 'day').endOf('day').format(format)
  if (returnArray) {
    return [startTime, endTime]
  }
  return { startTime, endTime }
}

/**
 * 返回  默认天数
 * @param day 间隔天数
 */
export function getSingleTime(day = 30) {
  const endTime = dayjs().add(day, 'day').format('YYYY-MM-DD')
  return endTime
}

export function getYearPicker() {
  return {
    shortcuts: getShortcuts([1, 2, 3, 4, 5, 6], false),
    disabledDate(time) {
      const current = dayjs(time).startOf('day')
      if (current.isAfter(dayjs().subtract(1, 'day').endOf('day'))) return true
      if (current.isBefore(dayjs().subtract(1, 'year').startOf('day'))) return true
      return false
    }
  }
}
