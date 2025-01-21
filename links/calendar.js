
//https://stackoverflow.com/questions/43316726/build-a-calendar-using-javascript-jquery

var CURRENT_DATE = new Date();
var d = new Date();

var content = 'January February March April May June July August September October November December'.split(' ');
var weekDayName = 'SUN MON TUES WED THURS FRI'.split(' ');
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Returns the day of week which month starts (eg 0 for Sunday, 1 for Monday, etc.)
function getCalendarStart(dayOfWeek, currentDate) {
  // console.log('dayOfWeek, currentDate');
  // console.log(dayOfWeek, currentDate);
  // dayOfWeek = 1;//set view date at monday
  // var date = currentDate - 1;
  var date = currentDate;
  var startOffset = (date % 7) - dayOfWeek;
  if (startOffset > 0) {
    startOffset -= 7;
  }
  return Math.abs(startOffset);
}

// Render Calendar
function renderCalendar(startDay, totalDays, currentDate,year,month) {
  var currentRow = 1;
  var currentDay = startDay;
  var $table = $('table#tb-calendar');
  var $week = getCalendarRow();
  var $day;
  var i = 1;

  for (; i <= totalDays; i++) {
    $day = $week.find('td').eq(currentDay);
    $day.text(i);
    if (i === currentDate) {
      $day.addClass('today');
    }
    // console.log(year,month)
    $day.attr('data-day',i+'/'+month+'/'+year)

    // +1 next day until Saturday (6), then reset to Sunday (0)
    currentDay = ++currentDay % 7;

    // Generate new row when day is Saturday, but only if there are
    // additional days to render
    if (currentDay === 0 && (i + 1 <= totalDays)) {
      $week = getCalendarRow();
      currentRow++;
    }
  }
}

// Clear generated calendar
function clearCalendar() {
  var $trs = $('tr').not(':eq(0)');
  $trs.remove();
  $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
  var $table = $('table#tb-calendar');
  var $tr = $('<tr/>');
  for (var i = 0, len = 7; i < len; i++) {
    $tr.append($('<td/>'));
  }
  $table.append($tr);
  return $tr;
}

function myCalendar() {
  var month = d.getUTCMonth();
  var day = d.getUTCDay();
  var year = d.getUTCFullYear();
  var date = d.getUTCDate();
  var totalDaysOfMonth = daysOfMonth[month];
  var counter = 1;

  var $h3 = $('<h3 id="monthyear">');

  $h3.text(content[month] + ' ' + year);
  $h3.appendTo('.month-year');
  $h3.attr('month-year',month+'/'+year);

  var dateToHighlight = 0;

  // Determine if Month && Year are current for Date Highlight
  if (CURRENT_DATE.getUTCMonth() === month && CURRENT_DATE.getUTCFullYear() === year) {
    dateToHighlight = date;
  }

  //Getting February Days Including The Leap Year
  if (month === 1) {
    if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
      totalDaysOfMonth = 29;
    }
  }

  // Get Start Day
  renderCalendar(getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight, year,month+1);
};

function navigationHandler(dir) {
  d.setUTCMonth(d.getUTCMonth() + dir);
  clearCalendar();
  myCalendar();
}

$(document).ready(function() {
  // Bind Events
  $('.prev-month').click(function() {
    navigationHandler(-1);
  });
  $('.next-month').click(function() {
    navigationHandler(1);
  });
  // Generate Calendar
  myCalendar();
});