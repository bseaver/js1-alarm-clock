var alarmTime;

$(document).ready(function(){
  showTime = function() {
    $('#time').text(moment());
  }

  showAlarm = function() {
    if (moment() > moment(alarmTime) ) {
      $('#alarm').text("Wake Up!");
      alarmTime = undefined;

    }
  }

  $("#set_alarm").submit(function() {
    event.preventDefault();

    alarmTime = $("#alarm_date_time").val();
    alert(alarmTime);
  });

  showTime();

  setInterval(showTime, 1000);
  setInterval(showAlarm, 1000);
});
