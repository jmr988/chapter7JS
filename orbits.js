/*	JavaScript 6th Edition
	  
    Chapter 7
    Chapter case

    Outer Orbits booking page
    Author: Jose Rodriguez	
    Date:   10/12/2019

    Filename: orbits.js
*/
"use strict"; 

var dateObject = new Date();

function displayClaendar(whichMonth) {

var date;
var dateToday = new Date();
var dayOfWeek;
var daysInMonth;
var dateCells;
var captionValue;
var month;
var year;
var monthArray = ["January", "February", "March", "April", "May", +
					"June", "July","August","September","October","November",+
					"December"];
if (whichMonth === -1) {
	dateObject.setMonth(dateObject.getMonth()-1);
} else if (whichMonth === 1) {
	dateObject.setMonth(dateObject.getMonth()+1);
}

month = dateObject.getMonth();
year = dateObject.getFullYear();
dateObject.setDate(1);
dayOfWeek = dateObject.getDay();
captionValue = monthArray[month] + " " + year;
document.querySelector("#cal table caption").innerHTML = +
captionValue;

if (month === 0 || month === 2 || month === 4 || +
	month === 6 || month === 7 || month === 9 || +
	month === 11 {
		daysInMonth = 31;
	} else if (month === 1) {
		if (year % 4 === 0)  {
			if (year % 100 === 0) {
				if (year % 400 === 0) {
			daysInMonth = 29;
		} else {
			daysInMonth = 28;
		}
	} else {
		daysInMonth = 29;
	}
} else{
	daysInMonth = 28;
}
} else {
	daysInMonth = 30;
}
}