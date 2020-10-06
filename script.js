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
let buttonEl = $("button");
let taskEl = $(".task");
let timeblocksEl = $("section");
let timeEl = [
  "7:00AM",
  "8:00AM",
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
  "6:00PM",
];

let timeNow = moment().format("lll");
// 1. Open planner, current time and day displays at the top.
currentDayEl.append(timeNow);
console.log(moment().format("LT"));
console.log($(inputEl));

$(document).ready(function () {
  $(timeEl).each(function () {
    if (moment().format("LT") === timeNow) {
      colmd8El.addClass(".present");
    } else if (moment().format("LT") < timeNow) {
      colmd8El.addClass(".past");
    } else {
      colmd8El.addClass(".future");
    }
  });

  // 4. Click save to store to local storage.
  $(buttonEl).on("click", function (event) {
    event.preventDefault();
    // If save button is clicked, target <input> data,
    $(inputEl).each(function () {
      let storedTask = inputEl.value;
      console.log(inputEl.value);

      localStorage.setItem("storedTask", storedTask);

      $(taskInput) = function () {
        let task = localStorage.getItem("storedTask");
        if (task === "") {
          return;
        }
      };
    });
    taskInput();
  });
  // 5. Refresh and data still persists.

  // Where to place?**************

  // POSSIBLE FUNCTIONS:
});
