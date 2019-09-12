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
      console.log(RegExp.$1.length);
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

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
export {
  formatDate,
  formatNum
};