/*
 * @Author: your name
 * @Date: 2021-01-14 13:30:51
 * @LastEditTime: 2021-01-14 13:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easycjs\index.js
 */
// 时间格式转换
const formatDate = function (oldDate, fmt) {
  let date = new Date()
  if (typeof oldDate === 'string' || typeof oldDate === 'number') {
    date = new Date(+oldDate)
  } else {
    date = oldDate
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
// 数字转汉字
const formatNum = function(num) {
  if (isNaN(num)) {
    return null;
  }
  let numStr = parseInt(num).toString();
  console.log(numStr);
  let o = [
    ['1', '一'],
    ['2', '二'],
    ['3', '三'],
    ['4', '四'],
    ['5', '五'],
    ['6', '六'],
    ['7', '七'],
    ['8', '八'],
    ['9', '九'],
    ['0', '〇']
  ]
  o.forEach(([key, value]) => {
    if (new RegExp(`${key}`, 'g').test(numStr)) {
      numStr = numStr.replace(new RegExp(`${key}`, 'g'), value);
    }
  });
 return numStr
}

// 深拷贝
const deepClone = function(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          if (target.hasOwnProperty(key)) {
              cloneTarget[key] = deepClone(target[key], map);
          }
      }
      return cloneTarget;
  } else {
      return target;
  }
}

// 数据扁平化
const flatten = function(arr) {
  let res = []
  let d = 0
  ++d
  arr.forEach((item, index) => {
      (Array.isArray(item) && d <= depth) ? res = res.concat(flatten(item)) : res.push(item)
  })
  return res
}
export {
  formatDate,
  formatNum,
  deepClone,
  flatten
};