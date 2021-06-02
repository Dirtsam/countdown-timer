const countDown = () => {
  const countDownDate = new Date("June 5, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const eventTime = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate
  const eventDays = Math.floor(eventTime / day);
  const eventHours = Math.floor((eventTime % day) / hour);
  const eventMinutes = Math.floor((eventTime % hour) / minute);
  const eventSeconds = Math.floor((eventTime % minute) / second);

  // Output the result in an element with id="demo"
  document.querySelector(".days").innerHTML = eventDays;
  document.querySelector(".hours").innerHTML = eventHours;
  document.querySelector(".minutes").innerHTML = eventMinutes;
  document.querySelector(".seconds").innerHTML = eventSeconds;
};

setInterval(countDown, 1000);
