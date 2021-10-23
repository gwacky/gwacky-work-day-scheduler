$(document).ready(function() {
    // using moment.js for todays current date/time
    let currentM = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentM;
    let currentHour = moment().format("HH");

    // comparison between currentHour and each time slot
    $(".time-div").each(function() {
        var timeDiv = $(this).parent().attr("id").split("-")[1];

        // adding and removing classes based on current time
        if (currentHour === timeDiv) {
            $(this).addClass("present");
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    // saves values and times to localStorage
    $(".saveBtn").click(function(event) {
        event.preventDefault();

        var value = $(this).siblings()[1].value;
        var time = $(this).parent().attr("id").split("-")[1];
        
        localStorage.setItem(time, value);
    });

    // gets value and times from localStorage and sets them in time blocks
    $("#hr-09").children()[1].value = localStorage.getItem("09");
    $("#hr-10").children()[1].value = localStorage.getItem("10");
    $("#hr-11").children()[1].value = localStorage.getItem("11");
    $("#hr-12").children()[1].value = localStorage.getItem("12");
    $("#hr-13").children()[1].value = localStorage.getItem("13");
    $("#hr-14").children()[1].value = localStorage.getItem("14");
    $("#hr-15").children()[1].value = localStorage.getItem("15");
    $("#hr-16").children()[1].value = localStorage.getItem("16");
    $("#hr-17").children()[1].value = localStorage.getItem("17");
});