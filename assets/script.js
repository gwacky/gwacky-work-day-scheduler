$(document).ready(function() {
    // using moment.js for todays current date/time
    let currentM = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentM;
    let currentHour = moment().format("HH");

    // comparison between currentHour and each time slot
    $(".time-div").each(function() {
        var timeDiv = $(this).attr("id").split("-")[1];

        // adding and removing classes based on current time
        if (currentHour === timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    // saves values and times to localStorage
});