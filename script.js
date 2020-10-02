// 1. Open planner, current time and day displays at the top.
// 2. Time blocks start at 5AM to Midnight.
    // a. Past indicated in Grey.
        // 1. Unable to click on and enter text.
    // b. Present indicated in White.
    // c. Future indicated in Green.
// 3. Click on a time block and enter task.
// 4. Click save to store to local storage.
// 5. Refresh and data still persists. 

let currentDayEl = $("#currentDay");
let leadEl = $(".lead");
let containerEl = $(".container");
let colmd2El = $(".col-md-2");
let colmd10El = $(".col-md-10");

let now = new Date(Date.now());

currentDayEl.append(now);
