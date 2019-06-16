export const showType = (type, title) => {
  if (title === 'overtime') {
    switch (type) {
      case 1:
        return '双休日加班'
      case 2:
        return '节假日加班'
      case 3:
        return '工作日加班'
      default:
        return '加班'
    }
  } else {
    switch (type) {
      case 1:
        return '年假'
      case 2:
        return '调休'
      default:
        return '休假'
    }
  }
}
export const showTime = (start) => {
  // let start_num = new Date(new Date(start).toGMTString()) * 1
  // console.log(start_num)
  // let S = start_num;
  // let T = new Date(1E3 * S);
  // let Format = function (Q) {
  //   return Q < 10 ? '0' + Q : Q
  // };
  // let Result = Format(T.getHours()) + ':' + Format(T.getMinutes());
  // console.log(Result)
  // return Result
  if(start){
    return new Date(start).toLocaleString();
  }else{
    return null;
  }
}

export const reduceTime = (startTime, endTime) => {
  let start_num = new Date(new Date(startTime).toGMTString()) * 1
  let end_num = new Date(new Date(endTime).toGMTString()) * 1
  let num = (end_num - start_num) / 1000;
  let day = (num / 60 / 60 / 24).toFixed(1);
  return day;
}