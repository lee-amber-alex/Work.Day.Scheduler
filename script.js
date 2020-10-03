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
let timeblocksEl = $("section");

let date = new Date();
let now = date.toDateString();
let time = date.toLocaleTimeString();

$(document).ready(function () {
  // 1. Open planner, current time and day displays at the top.
  currentDayEl.append(now + ",  " + time); 

  // 2. & 3. Click on Task:
  $(inputEl).on("click", function (event) {
      let target = $(event.target.task);
    // a. If .timeblocks is equal to now time, color white. 
    // If value of .timeblocks is === now, event.target to .present
    if (parseInt(timeblocksEl) === time);

    console.log(parseInt(timeblocksEl));

    taskEl.addClass("present");
    // b. If .timeblocks is less than now time, color grey.
    // If value of .timeblocks is < now, event.target to .past
    if (parseInt(timeblocksEl) < time);
    taskEl.addClass("past");

    // c. If .timeblocks is greater than now time, color green.
     // If value of .timeblocks is > now, event.target to .future
    if (parseInt(timeblocksEl) > time);

    taskEl.addClass("future");
   
  });

  
  // 4. Click save to store to local storage.
  $(buttonEl).on("click", function (event) {
    // If save button is clicked, target <input> data, 
    // possible to chain event.target with event.data?
    let target = $(
      event.target.data
    ); 
    target.is(taskEl);
    let task = $(taskEl.data());
    localStorage.setItem("storedTask", task);
    console.log(task);
  });
  
  // Where to place?
  $(taskInput) = function () {
    let task = localStorage.getItem("storedTask");
  };

  // 5. Refresh and data still persists.
});
