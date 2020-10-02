// 1. Open planner, current time and day displays at the top.
// 2. Time blocks start at 7AM to 6PM.
// 3. Click on Task:
// a. If Input is equal to now time, color white.
// b. If Input is less than now time, color grey.
// c. If Input is greater than now time, color green.
// 4. Click save to store to local storage.
// 5. Refresh and data still persists.

let currentDayEl = $("#currentDay");
let leadEl = $(".lead");
let containerEl = $(".container");
let colmd2El = $(".col-md-2");
let colmd10El = $(".col-md-10");
let inputEl = $("input");
let buttonEl = $("button");
let taskEl = $(".task");

let now = new Date(Date.now());

$(document).ready(function () {
  // 1. Open planner, current time and day displays at the top.
  currentDayEl.append(now);

  // 3. Click on Task:
  $(inputEl).on("click", function (event) {
    // a. If Input is equal to now time, color white.
    if (event.timeStamp === now);
    taskEl.addClass("present");
    // b. If Input is less than now time, color grey.
    if (event.timeStamp < now);
    taskEl.addClass("past");
    // c. If Input is greater than now time, color green.
    if (event.timeStamp > now);
    taskEl.addClass("future");
   
  });

  $(taskInput) = function () {
    let task = localStorage.getItem("storedTask");
  };

  // 4. Click save to store to local storage.
  $(buttonEl).on("click", function (event) {
    let target = $(
      event.target.data
    ); /*possible to chain event.target with event.data? */
    target.is(taskEl);
    let task = $(taskEl).value;
    localStorage.setItem("storedTask", task);
    console.log(task);
  });
  // 5. Refresh and data still persists.
});
