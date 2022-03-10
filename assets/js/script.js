//set up variables
// this is the long way, unsure how to do this the short way
var text9 = document.getElementById("hr-9");
var text10 = document.getElementById("hr-10");
var text11 = document.getElementById("hr-11");
var text12 = document.getElementById("hr-12");
var text1 = document.getElementById("hr-1");
var text2 = document.getElementById("hr-2");
var text3 = document.getElementById("hr-3");
var text4 = document.getElementById("hr-4");
var text5 = document.getElementById("hr-5");

// use the variables to get the input based on the id's
text9.innerHTML = localStorage.getItem("hr-9");
text10.innerHTML = localStorage.getItem("hr-10");
text11.innerHTML = localStorage.getItem("hr-11");
text12.innerHTML = localStorage.getItem("hr-12");
text1.innerHTML = localStorage.getItem("hr-1");
text2.innerHTML = localStorage.getItem("hr-2");
text3.innerHTML = localStorage.getItem("hr-3");
text4.innerHTML = localStorage.getItem("hr-4");
text5.innerHTML = localStorage.getItem("hr-5");

$(document).ready(function() {
    var today = moment().format("LLLL");

    $("#currentDay").text(today); //displays the date in the header

    var time = new Date(); 
    var currentTime = time.getHours();

    $("textarea").each(function (i) { //grabs each textarea element
        var hour = i + 9 // 9 time slots, offset this by 9

        if (hour < currentTime) {
            $(this).addClass("past"); //add class of past if this time block has already passed
            localStorage.getItem("textarea");
        } else if (hour === currentTime) {
            $(this).addClass("present"); // add class of present if this time block is current
            localStorage.getItem("textarea");
        } else {
            $(this).addClass("future"); //add class of future if this time block is in the future
            localStorage.getItem("textarea");
        }
    });

    // get data we grabbed from the variables above are set here
    $(".saveBtn").on("click", function () {
        var timeSlot = $(this).siblings("textarea"); // select the textarea which is the sibling
        var agenda = timeSlot.val(); // we want to grab the text the user is putting in the textarea
        var text = timeSlot.attr("id"); // we want to grab the id from the text area
        JSON.stringify(localStorage.setItem(text, agenda)); // setting user input with id in local storage
    
    });

    

    
});
