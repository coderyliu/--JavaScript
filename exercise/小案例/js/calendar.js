/*是否是闰年*/
function leapYear(year) {
  /*
  维基百科闰年定义：
  公元年分除以4不可整除，为平年。
  公元年分除以4可整除但除以100不可整除，为闰年。
  公元年分除以100可整除但除以400不可整除，为平年。
  公元年分除以400可整除但除以3200不可整除，为闰年。
  */
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 320 === 0);
}

/*获取一个月有多少天*/
function getMonthLength(year, month) {
  /*前七个月是偶数为小 奇数为大 二月比较特殊*/
  // 是否是二月
  if (month === 2) {
    // 是否是闰年
    if (leapYear(year)) { // 是闰年 二月只有28天
      return 28;
    } else { // 平年 二月有29天
      return 29;
    }
  }
  // 前七个月偶数是小月 后5个月偶数是大月
  if ((month < 8 && month % 2 === 0) || (month > 7 && month % 2 !== 0)) { // 小月
    return 30;
  } else { // 大月
    return 31;
  }
}

/*获取第一天是星期几*/
function getFistDayWeekInMonth(year, month) {
  // 获取当前时间对象
  let date = new Date();

  /*设置年份和月份*/
  // 年
  date.setFullYear(year);
  // 月
  date.setMonth(month - 1);
  // 日
  date.setDate(1);

  // 获取星期数
  return date.getDay() + 1;
}

/*设置日历*/
function setCalendar(year, month) {
  // 获取日历对象
  let calender = document.getElementById('calendar_day');
  // 移除所有的子节点
  calender.innerHTML = '';

  // 是否显示今天
  let now = new Date();
  let thisYear = now.getFullYear();
  let thisMonth = now.getMonth() + 1;
  let thisDay = now.getDate();
  let showToday = thisYear === year && month === thisMonth;

  // 常量
  const weeks = 6;
  const weekDay = 7;

  // 获取第一天星期几
  let fistDayWeek = getFistDayWeekInMonth(year, month);
  // 获取这月的长度
  let monthLength = getMonthLength(year, month);

  // 定义临时标签
  let weekDiv;
  let singleDayDiv;
  let singleDayDivText;
  let loopDay = -fistDayWeek + 2;

  for (let i = 0; i < weeks; i++) {
    // 创建外部Div
    weekDiv = document.createElement('div');
    // 添加样式
    weekDiv.className = 'row day';
    for (let j = 0; j < weekDay; j++) {
      /*如果是第一周 则要考虑 第一天星期几的问题*/
      if ((i === 0 && j < fistDayWeek - 1) || loopDay > monthLength) { // 添加空元素
        // 如果最后一周的第一天是空的 则退出循环
        if (i > 0 && j === 0) {
          break;
        }
        singleDayDivText = document.createElement('br');
      } else {
        singleDayDivText = document.createTextNode(loopDay);
      }
      // 创建单天div
      singleDayDiv = document.createElement('div');
      // 添加文本内容
      singleDayDiv.appendChild(singleDayDivText);
      // 添加样式
      if (showToday && thisDay === loopDay) {
        singleDayDiv.className = 'single_seven single_day today_div';
      } else {
        singleDayDiv.className = 'single_seven single_day';
      }
      // 将生成的单天放到最外部的div中
      weekDiv.appendChild(singleDayDiv);
      // 将生成的div放到日历div中
      calender.appendChild(weekDiv);
      loopDay++;
    }
  }
}

/*上一个月*/
function showLastMonth() {
  // 获取文本内容
  let text = document.getElementById('current_month').innerHTML;
  // 获取年月
  let monthYearArray = text.split('月');
  let currentMonth = Number(monthYearArray[0]);
  let currentYear = Number(monthYearArray[1]);
  // 如果是1月 则要进入到去年的12月
  if (currentMonth === 1) {
    currentYear--;
    currentMonth = 12;
  } else {
    currentMonth--;
  }
  setCalendar(currentYear, currentMonth);
  // 设置月份显示
  document.getElementById('current_month').innerHTML = currentMonth + '月 ' + currentYear;
}

/*下一个月*/
function showNextMonth() {
  // 获取文本内容
  let text = document.getElementById('current_month').innerHTML;
  // 获取年月
  let monthYearArray = text.split('月');
  let currentMonth = Number(monthYearArray[0]);
  let currentYear = Number(monthYearArray[1]);
  // 如果是12月 则要进入到明年的1月
  if (currentMonth === 12) {
    currentYear++;
    currentMonth = 1;
  } else {
    currentMonth++;
  }
  setCalendar(currentYear, currentMonth);
  // 设置月份显示
  document.getElementById('current_month').innerHTML = currentMonth + '月 ' + currentYear;
}

// 给按钮添加事件
function addListen2Element() {
  // 上个月
  document.getElementById('show_last_month').addEventListener('click', showLastMonth);
  // 下个月
  document.getElementById('show_next_month').addEventListener('click', showNextMonth);
  // 回今天
  document.getElementById('go_back_today').addEventListener('click', goBackToday);
}

/*回到今天*/
function goBackToday() {
  // 获取文本内容
  let text = document.getElementById('current_month').innerHTML;
  // 获取年月
  let monthYearArray = text.split('月');
  let currentMonth = Number(monthYearArray[0]);
  let currentYear = Number(monthYearArray[1]);

  // 获取当前时间
  let now = new Date();
  // 获取当前年份
  let thisYear = now.getFullYear();
  // 获取当前月份
  let thisMonth = now.getMonth() + 1;

  // 如果当前时间和现在时间相同则不从新渲染
  if (thisYear === currentYear && thisMonth === currentMonth) {
    return;
  }
  setCalendar(thisYear, thisMonth);
  // 设置月份显示
  document.getElementById('current_month').innerHTML = thisMonth + '月 ' + thisYear;
}

/*本月日历*/
function setThisMonthCalendar() {
  // 获取当前时间对象
  let nowTime = new Date();
  // 获取年
  let year = nowTime.getFullYear();
  // 获取月
  let month = nowTime.getMonth() + 1;
  // 获取天
  let day = nowTime.getDate();

  // 开始渲染日历
  setCalendar(year, month, );
  // 设置月份显示
  document.getElementById('current_month').innerHTML = month + '月 ' + year;
  // 设置今天日期
  document.getElementById('today_day').innerHTML =
    year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ('(今天)');
}

window.onload = () => {
  // 给按钮添加事件
  addListen2Element();
  // 显示本月日历
  setThisMonthCalendar();
};