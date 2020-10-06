/// 1. Open planner, current time and day displays at the top.
// 2. Time blocks start at 7AM to 6PM.
// 3. Tasks:
// a. If .timeblocks is equal to now time, color white.
// If value of .timeblocks is === now, event.target to .present
// b. If .timeblocks is less than now time, color grey.
// If value of .timeblocks is < now, event.target to .past
// c. If .timeblocks is greater than now time, color green.
// If value of .timeblocks is > now, event.target to .future
// 4. Click save to store to local storage.
// 5. Refresh and data still persists.

let currentDayEl = $("#currentDay");
let leadEl = $(".lead");
let containerEl = $(".container");
let colmd8El = $(".col-md-8");
let inputEl = $("input");
let buttonEl = $(".saveBtn");
let taskEl = $(".task");
let timeblocksEl = $("section");


let timeNow = moment().format("lll");
// 1. Open planner, current time and day displays at the top.
currentDayEl.append(timeNow);
console.log(moment().format("LT"));
console.log($(inputEl));

$(document).ready(function () {
  $("input").each(function () {
    console.log(this)
    
    var timeNow = parseInt($(this).attr("id"));
    var current = moment().hour();
    console.log(localStorage.getItem(timeNow));
      
    $(this).val(localStorage.getItem(timeNow) || "");

    if (current === timeNow) {
      $(this).addClass("present");
    } else if (timeNow < current) {
      $(this).addClass("past");
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
