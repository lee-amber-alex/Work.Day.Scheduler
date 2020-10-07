/// 1. Open planner, current time and day displays at the top.
// 2. Time blocks start at 7AM to 6PM.
// 3. Tasks:
// a. If task time is equal to now time, color white.
// b. If task time is less than now time, color grey.
// c. If task time is greater than now time, color green.
// 4. Click save to store to local storage.
// 5. Refresh and data still persists.

let currentDayEl = $("#currentDay");
let containerEl = $(".container");
let inputEl = $("input");
let buttonEl = $(".saveBtn");



let timeNow = moment().format("lll");
// 1. Open planner, current time and day displays at the top.
currentDayEl.append(timeNow);
console.log(moment().format("LT"));
console.log($(inputEl));

$(document).ready(function () {

// 3. Tasks:
  $("input").each(function () {
    console.log(this)
    var timeNow = parseInt($(this).attr("id"));
    var current = moment().hour();
    console.log(localStorage.getItem(timeNow));
      
    $(this).val(localStorage.getItem(timeNow) || "");
// a. If task time is equal to now time, color white.
    if (current === timeNow) {
      $(this).addClass("present");
// b. If task time is less than now time, color grey.
    } else if (timeNow < current) {
      $(this).addClass("past");
// c. If task time is greater than now time, color green.
    } else {
      $(this).addClass("future");
    }
  });

// 4. Click save to store to local storage.
  $(buttonEl).on("click", function (event) {
    event.preventDefault();
   
    var task= $(this).siblings("input").val()
    var hour = $(this).siblings("input").attr("id")

    localStorage.setItem(hour, task);

  });

});
