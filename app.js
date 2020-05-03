//displaying current day at the top of the calendar-(moment.js)
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// current hour is declared-(moment.js)
var currentTime = moment().hours();

var components = $(".description");

for (var i = 0; i < components.length; i++) {
    //code for storing enetered events into local storage
    if (localStorage.getItem(components[i].id) == null) {
        components[i].value = "";
    }
    else {
        components[i].value = localStorage.getItem(components[i].id);
    }

    console.log(parseInt(components[i].id, 10));
    console.log(parseInt(currentTime, 10));

    //color coding 
    if (components[i].id < currentTime) {
        console.log("In past");

        $(components[i]).attr("class", "col-8 description past");

    }
    else if (components[i].id == currentTime) {
        console.log("In current");
        $(components[i]).attr("class", "col-8 description present");
    }

    else {
        console.log("In future");
        $(components[i]).attr("class", "col-8 description future");
    }
}


$(document).ready(function () {
    //event listener for saving the events into the local storage
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var events = $(this).closest('.row').find('.description');

        console.log(events[0].id);
        console.log(events[0].value);

        if (events[0].value == "") {
            localStorage.removeItem(events[0].id);
        }
        else {
            localStorage.setItem(events[0].id, events[0].value);
        }
    });
});


