/**
 * 公用方法
 */
import dayjs from 'dayjs'
/**
 * 公用组件
 */
import { Message } from 'lingxing-ui'

/**
 * 返回  日期选择限制对象
 * @param day 天数限制
 */
export function getYesterday() {
  // const endSeconds = Date.now()
  // const intervalSenconds = 1 * 24 * 3600 * 1000
  // const startSeconds = endSeconds - intervalSenconds
  // const sd = new Date(startSeconds)
  // const startTime = `${sd.getFullYear()}-${sd.getMonth() + 1}-${sd.getDate()} 00:00:00`
  // return startTime
  return dayjs().subtract(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss')
}
export function getYesterdayNoTime() {
  const endSeconds = Date.now()
  const intervalSenconds = 1 * 24 * 3600 * 1000
  const startSeconds = endSeconds - intervalSenconds
  const sd = new Date(startSeconds)
  const startTime = `${sd.getFullYear()}-${sd.getMonth() + 1}-${sd.getDate()}`
  return startTime
}
/**
 * 返回  日期选择限制对象
 * @param day 天数限制
 */
export function getInitDays(day = 7, returnObj = true) {
  const reallyDay = day - 1
  const oneDaySecondes = 1 * 24 * 3600 * 1000
  const endSeconds = Date.now() - oneDaySecondes
  const ed = new Date(endSeconds)
  const intervalSenconds = reallyDay * 24 * 3600 * 1000
  const startSeconds = endSeconds - intervalSenconds
  const sd = new Date(startSeconds)
  const endTime = `${ed.getFullYear()}-${ed.getMonth() + 1}-${ed.getDate()} 23:59:59`
  const startTime = `${sd.getFullYear()}-${sd.getMonth() + 1}-${sd.getDate()} 00:00:00`
  if (returnObj) {
    return { startTime, endTime }
  }
  return [startTime, endTime]
}

/**
 * 返回  日期选择限制对象
 * @param day 天数限制
 */
export function getPickerOptions() {
  // const reallyDay = day - 1
  // const millisecond = reallyDay * 24 * 3600 * 1000
  const pickerOptions = {
    pickerMinDate: null,
    onPick: ({ minDate, maxDate }) => {
      if (minDate && maxDate) {
        pickerOptions.pickerMinDate = null
      } else if (minDate) {
        pickerOptions.pickerMinDate = minDate.getTime()
      }
    }
    // disabledDate(time) {
    //   if (pickerOptions.pickerMinDate) {
    //     const maxTime = pickerOptions.pickerMinDate + millisecond
    //     const minTime = pickerOptions.pickerMinDate - millisecond
    //     return time.getTime() > maxTime || time.getTime() < minTime
    //   }
    //   return
    // }
  }
  return pickerOptions
}
export function getListPickerOptions() {
  return {
    shortcuts: [
      {
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().subtract(0, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().subtract(0, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      },
      {
        text: '昨天',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().subtract(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().subtract(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      },
      {
        text: '最近7天',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().subtract(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().add(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      },
      {
        text: '最近30天',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().subtract(29, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().add(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      },
      {
        text: '本月',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().subtract(0, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      },
      {
        text: '上月',
        onClick(picker) {
          picker.$emit('pick', [
            dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss'),
            dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD HH:mm:ss')
          ])
        }
      }
    ]
    // disabledDate(time) {
    //   const diff = dayjs(time).diff(dayjs().startOf('day'), 'day', true)
    //   return !(diff >= -365 && diff < 1)
    // }
  }
}

export const last3Months = [
  dayjs().subtract(3, 'month').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
  dayjs().add(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
]
export const lastOneMonth = [
  dayjs().subtract(1, 'month').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
  dayjs().add(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
]

/**
 * 只允许输入数字
 * @param str
 * @returns {*} 返回数字/0
 */
export function verifyIntZero(str, limit) {
  let newStr = str.replace(/[^\d]/g, '')
  if (limit) {
    newStr = newStr <= limit ? newStr : limit
  }
  return newStr
}

/**
 * 返回正整数
 * @param val 输入值
 * @param limit 限制最大值
 */
export function verifyInteger(val, limit, isZero = false) {
  if (val === '') {
    return val
  }
  let str = val + ''
  if (str && str.substring(0, 1) === '-') {
    str = str.replace(/-/g, '')
  }
  let pattern = /(^[1-9][0-9]+\.[0-9]{2})[0-9]*/
  str.replace(pattern, '$1')
  const num = isZero ? 0 : 1
  str = str > 0 ? str - 0 : num
  if (limit) {
    str = str <= limit ? str : limit
  }
  if (limit === 0) str = 0
  return str
}

/**
 * 返回固定位数小数--正数
 * @param str 输入值
 * @param num 保留几位小数, 默认3位, 可选两位
 * @param limit 限制最大值
 */
export function verifyDecimal(str, num = 3, limit, minLimit) {
  str += ''
  let len1 = str.substr(0, 1)
  let len2 = str.substr(1, 1)
  //如果第一位是0，第二位不是点，就用数字把点替换掉
  if (str.length > 1 && len1 == 0 && len2 != '.') {
    str = str.substr(1, 1)
  }
  //第一位不能是.
  if (len1 == '.') {
    str = ''
  }
  //限制只能输入一个小数点
  if (str.indexOf('.') != -1) {
    let str_ = str.substr(str.indexOf('.') + 1)
    if (str_.indexOf('.') != -1) {
      str = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 1)
    }
  }

  let regText = `^\\D*([0-9]\\d*\\.?\\d{0,${num}})?.*$` //字符串转义符需转两次
  let regStr = new RegExp(regText)
  str = str.replace(/[^\d^.]+/g, '') // 保留数字和小数点
  str = str.replace(regStr, '$1') // 小数点后只能输 num 位

  //限制数字大小
  if (limit) {
    str = str <= limit ? str : limit
  }
  // 限制最小值
  if (str && num && minLimit) {
    const dotIndex = str.indexOf('.')
    if (dotIndex !== -1) {
      const strNum = str.length - 1 - dotIndex
      if (strNum === num && str < minLimit) {
        str = minLimit
      }
    }
  }
  return str
}
export function formatSize(size) {
  if (size == undefined || size == null) return ''
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB'
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  }
  return size.toString() + ' B'
}
export function downloadFile(fileUrl) {
  let elink = document.createElement('a') // 创建a标签
  elink.style.display = 'none'
  elink.href = fileUrl
  elink.setAttribute('download', '') // 下载后文件名
  document.body.appendChild(elink)
  elink.click() // 触发点击a标签事件
  document.body.removeChild(elink)
}

export function encode(str) {
  let encode = encodeURIComponent(str)
  // 对编码的字符串转化base64
  let base64 = btoa(encode)
  return base64
}
export function decode(base64) {
  let str = atob(base64)
  // 编码转字符串
  let decode = decodeURIComponent(str)
  return decode
}

export function xlMessage(message = '操作成功', type = 'success', duration = 2000, showClose = true) {
  Message.closeAll()
  Message({
    showClose: showClose,
    message,
    type,
    duration
  })
}

export function xlMessageClose() {
  Message.closeAll()
}

export function groupByKey(arr, key) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let o = arr[i]
    if (!map[o[key]]) {
      map[o[key]] = 1
    } else {
      map[o[key]]++
    }
  }
  return Object.values(map)
}

export function groupMapByKey(arr, key) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let o = arr[i]
    if (!map[o[key]]) {
      map[o[key]] = [o]
    } else {
      map[o[key]].push(o)
    }
  }
  return map
}

//组装基础信息栏
export function handleBasicColumn(list, length = 3, singleObj = {}) {
  let arr = new Array(length)
  for (let index = 0; index < arr.length; index++) {
    arr[index] = index + 1
  }
  let obj = {}
  arr.forEach((o, i) => {
    let tempObj = {}
    list
      .filter((_, n) => n % length === i)
      .forEach(o => {
        tempObj = { ...tempObj, ...o }
      })
    obj[o] = { ...tempObj }
  })
  return { multiple: obj, single: singleObj }
}
