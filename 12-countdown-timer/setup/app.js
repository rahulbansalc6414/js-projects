const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dealEnd = "2024-09-01 08:00:00.123456"
const dealEndTime = new Date(dealEnd).getTime();

const giveAway = document.getElementById("giveAway");
giveAway.textContent = "Deal ends at: " + new Date(dealEnd);

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minsSpan = document.getElementById("mins");
const secsSpan = document.getElementById("secs");

setInterval(() =>
{
  const now = new Date().getTime();

  const millisecDiff = dealEndTime - now;

  const ss = Math.floor(millisecDiff / 1000) % 60;
  const mm = Math.floor(millisecDiff / 1000 / 60) % 60;
  const hh = Math.floor(millisecDiff / 1000 / 60 / 60) % 24;
  const days = Math.floor(millisecDiff / 1000 / 60 / (60 * 24));

  const date_diff = new Date(millisecDiff);

  daysSpan.textContent = days;
  hoursSpan.textContent = hh;
  minsSpan.textContent = mm;
  secsSpan.textContent = ss;

}, 1000);