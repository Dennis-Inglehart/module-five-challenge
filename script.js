$(function(){ // <- jQuery

var currentDay = $("#currentDay");
const date = new Date();
const theHourItIsRightNow = date.getHours();

displayTheDate = function(){
let theDayThatTodayIs = dayjs().format("MMM DD, YYYY");
currentDay.text (theDayThatTodayIs)
}

colorCodeTheTimeBlocks = function(){
for (i = 8; i < 21; i++) {
  const hourDivId = `#hour-${i}`;
  const hourClass = document.querySelector(hourDivId);
  if (i < theHourItIsRightNow) {hourClass.className = "row time-block past"}
  else if (i === theHourItIsRightNow) {hourClass.className = "row time-block present"}
  else if (i > theHourItIsRightNow) {hourClass.className = "row time-block future"}
}}

window.processButtonClick = function() {
  for (i = 8; i < 21; i++) {
  const taskDivId = `#task-${i}`;
  const theContentOfTheTextArea = document.querySelector(taskDivId);
  const theValueWePutInLocalStorage = theContentOfTheTextArea.value;
  localStorage.setItem(i, theValueWePutInLocalStorage);
}}

displayTheDate();
colorCodeTheTimeBlocks();

}); // <- jQuery