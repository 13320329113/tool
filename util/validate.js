import * as reg from './reg'

export const REQUIRED = {
  required: true,
  message: ' ',
  trigger: ['blur', 'change']
}

export const REQUIRED_CHANGE = {
  required: true,
  message: ' ',
  trigger: ['change']
}

export const NUMBER_LIMIT = {
  validator: (rule, value, callback) => {
    if (value < 1) {
      callback(new Error('超出范围'))
      return
    }
    callback()
  },
  message: '必须大于0',
  trigger: ['blur', 'change']
}
export const EMAIL = {
  pattern: reg.EMAIL,
  message: '邮箱格式错误',
  trigger: ['blur', 'change']
}
export const ACCOUNT = {
  pattern: reg.ACCOUNT,
  message: '仅支持字母，数字，特殊符号(- _ . @)',
  trigger: ['blur', 'change']
}
export const PASSWORD = {
  pattern: reg.PASSWORD,
  message: '6~18位，必须包含字母、数字、符号中至少2种',
  trigger: ['blur', 'change']
}
export const NUMBER = {
  pattern: reg.NUMBER,
  message: '仅支持数字',
  trigger: ['blur', 'change']
}
export const LETTER = {
  pattern: reg.LETTER,
  message: '仅支持字母',
  trigger: ['blur', 'change']
}
export const NUMBER_LETTER = {
  pattern: reg.NUMBER_LETTER,
  message: '仅支持英文和数字',
  trigger: ['blur', 'change']
}
export const NUMBER_STRING = {
  pattern: reg.NUMBER_STRING,
  message: '仅支持字母，数字，特殊符号(. @)',
  trigger: ['blur', 'change']
}
export const NUMBER_SPECIAL_STRING = {
  pattern: reg.NUMBER_SPECIAL_STRING,
  message: '仅支持字母，数字，特殊符号(空格 _ - + . @)',
  trigger: ['blur', 'change']
}
export const CODE = {
  pattern: reg.CODE,
  message: '仅支持字母，数字，特殊符号(空格 _ - + .)',
  trigger: ['blur', 'change']
}
export const AREACODE = {
  pattern: /^[0-9a-zA-Z_.-]{1,}$/,
  message: '仅支持数字、字母、特殊符号(- _ .)',
  trigger: ['blur', 'change']
}
export const POST_CODE = {
  pattern: reg.POST_CODE,
  message: '仅支持字母，数字，特殊符号(空格 _ - + .*)',
  trigger: ['blur', 'change']
}
export const ZH_CODE = {
  pattern: reg.ZH_CODE,
  message: '仅支持中文，字母，数字，特殊符号(空格 _ + - .)',
  trigger: ['blur', 'change']
}
export const SKU_CODE = {
  pattern: reg.SKU_CODE,
  message: '仅支持字母，数字，英文符号',
  trigger: ['blur', 'change']
}

export const LOGIN_ACCOUNT = {
  pattern: reg.LOGIN_ACCOUNT,
  message: '仅支持中文，字母，数字，特殊符号( _ + - .)，不支持空格',
  trigger: ['blur', 'change']
}
