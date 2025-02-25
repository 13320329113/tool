// 邮箱格式
export const EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 仅支持字母，数字，特殊符号(- _ . @)
export const ACCOUNT = /^[A-Za-z0-9._@-]+$/

// 6~18位，必须包含字母、数字、符号中至少2种
export const PASSWORD =
  /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)([^(0-9a-zA-Z)]|[()]|[a-zA-Z]|[0-9]){6,18}$/

// 仅支持数字
export const NUMBER = /^[0-9]*$/

// 仅支持字母
export const LETTER = /^[A-Za-z]+$/

// 仅支持英文和数字
export const NUMBER_LETTER = /^[A-Za-z0-9]+$/

// 仅支持字母，数字，特殊符号(. @)
export const NUMBER_STRING = /^[A-Za-z0-9.@]+$/

// 仅支持字母，数字，特殊符号(空格 _ - + . @)
export const NUMBER_SPECIAL_STRING = /^[A-Za-z0-9.@_+\-\s]+$/

// 仅支持字母，数字，特殊符号(空格 _ - + .)
export const CODE = /^[A-Za-z0-9._+\-\s]+$/

// 仅支持字母，数字，特殊符号(空格 _ - + .*)
export const POST_CODE = /^[A-Za-z0-9._+\-\s*]+$/

// 仅支持中文，字母，数字，特殊符号(空格 _ + - .)
export const ZH_CODE = /^[\u4e00-\u9fa5A-Za-z0-9._+\-\s]+$/

// 仅支持字母，数字，半角符号
export const SKU_CODE = /^[A-Za-z0-9!"#$%&'()*+\-./:;<=>?@[\\\]^_`{|}~\s]+$/

// 仅支持中文，字母，数字，特殊符号( _ + - .)，不支持空格
export const LOGIN_ACCOUNT = /^[\u4e00-\u9fa5A-Za-z0-9._\-+]+$/
