/// 1. Open planner, current time and day displays at the top.
// 2. Time blocks start at 7AM to 6PM.
// 3. Click on Task:
// a. If .timeblocks is equal to now time, color white.
// If value of .timeblocks is === now, event.target to .present

// b. If .timeblocks is less than now time, color grey.
// If value of .timeblocks is < now, event.target to .past

// c. If .timeblocks is greater than now time, color green.
// If value of .timeblocks is > now, event.target to .future
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
let timeEl = [
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
];
var moment = require("moment");
let date = new Date();
let now = date.toDateString();
// let timeNow = date.toLocaleTimeString();
let timeNow = moment().format('lll');
console.log(moment().format('lll'));

currentDayEl.append(now + ",  " + timeNow);

$(document).ready(function () {
  // 1. Open planner, current time and day displays at the top.

  // 2. & 3. Click on Task:
  $(inputEl).on("click", function () {
    // a. If .timeblocks is equal to now time, color white.
    // If value of .timeblocks is === now, event.target to .present
    console.log($(timeEl));
    
    timeEl.forEach(function (element) {

      console.log(moment("section").hour(Number))

      if (parseFloat($("section").text()) === timeNow) {
        taskEl.addClass("present");
      } 
      else if (parseFloat($("section").text()) < timeNow) {
        taskEl.addClass("past");
      } 
      else {
        taskEl.addClass("future");
      }

    });
  });



  // 4. Click save to store to local storage.
  $(buttonEl).on("click", function (event) {
    let task = $(inputEl.data());
    let storedTask = task.toString();

    console.log(storedTask);
    // If save button is clicked, target <input> data,
    // possible to chain event.target with event.data?
    $("input").each(function () {
      localStorage.setItem("storedTask", storedTask);
    });
  });

  // Where to place?**************

  // $(taskInput) = function () {
  //   let task = localStorage.getItem("storedTask");
  // };

  // 5. Refresh and data still persists.

  // POSSIBLE FUNCTIONS:

  console.log(parseInt($("#7").text())); /* result is 7 */
  console.log(parseFloat($("#7").text())); /* result is 7 */
  console.log($("section").text());
  console.log(parseFloat($("section").text()));
});
