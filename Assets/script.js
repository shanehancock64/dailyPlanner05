// Current Date and Time
var now = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);

// current time
var hourNow = moment().hour();

// Checks current time and changes color blocks
function hourlyTrack() {
  // Hour 9
  if (hourNow > parseInt($("#hour9").children("div").attr("data-hours"))) {
    $("#hour9").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour9").children("div").attr("data-hours"))
  ) {
    $("#hour9").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour9").children("div").siblings("textarea").addClass("present");
  }
  // Hour 10
  if (hourNow > parseInt($("#hour10").children("div").attr("data-hours"))) {
    $("#hour10").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour10").children("div").attr("data-hours"))
  ) {
    $("#hour10").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour10").children("div").siblings("textarea").addClass("present");
  }
  // Hour 11
  if (hourNow > parseInt($("#hour11").children("div").attr("data-hours"))) {
    $("#hour11").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour9").children("div").attr("data-hours"))
  ) {
    $("#hour11").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour11").children("div").siblings("textarea").addClass("present");
  }
  // Hour 12
  if (hourNow > parseInt($("#hour12").children("div").attr("data-hours"))) {
    $("#hour12").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour12").children("div").attr("data-hours"))
  ) {
    $("#hour12").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour12").children("div").siblings("textarea").addClass("present");
  }
  // Hour 13
  if (hourNow > parseInt($("#hour13").children("div").attr("data-hours"))) {
    $("#hour13").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour13").children("div").attr("data-hours"))
  ) {
    $("#hour13").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour13").children("div").siblings("textarea").addClass("present");
  }
  // Hour 14
  if (hourNow > parseInt($("#hour14").children("div").attr("data-hours"))) {
    $("#hour14").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour14").children("div").attr("data-hours"))
  ) {
    $("#hour14").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour14").children("div").siblings("textarea").addClass("present");
  }
  // Hour 15
  if (hourNow > parseInt($("#hour15").children("div").attr("data-hours"))) {
    $("#hour15").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour15").children("div").attr("data-hours"))
  ) {
    $("#hour15").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour15").children("div").siblings("textarea").addClass("present");
  }
  // Hour 16
  if (hourNow > parseInt($("#hour16").children("div").attr("data-hours"))) {
    $("#hour16").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour16").children("div").attr("data-hours"))
  ) {
    $("#hour16").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour16").children("div").siblings("textarea").addClass("present");
  }
  // Hour 17
  if (hourNow > parseInt($("#hour17").children("div").attr("data-hours"))) {
    $("#hour17").children("div").siblings("textarea").addClass("past");
  } else if (
    hourNow < parseInt($("#hour17").children("div").attr("data-hours"))
  ) {
    $("#hour17").children("div").siblings("textarea").addClass("future");
  } else {
    $("#hour17").children("div").siblings("textarea").addClass("present");
  }
}
// Start Function
hourlyTrack();

// Save to local storage
var save_button = document.getElementById('save')
save_button.onclick = saveData;

function saveData(){
  var input = document.getElementById('input');
  localStorage.setItem('saved', input.value);
  var storedValue = localStorage.getItem('saved');
}
