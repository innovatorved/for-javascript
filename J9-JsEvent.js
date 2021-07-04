/*
J9-JsEvent.js
Common HTML Events

Event 	        Description

onchange 	    An HTML element has been changed
onclick 	    The user clicks an HTML element
onmouseover 	The user moves the mouse over an HTML element
onmouseout 	    The user moves the mouse away from an HTML element
onkeydown 	    The user pushes a keyboard key
onload 	        The browser has finished loading the page
*/

function chnage(){
    var x = document.getElementById('ch');
    x.innerHTML = "Changed";
}

function chb1(){
    document.getElementById("change").style.color = "red";
    document.getElementById("change").style.backgroundColor = "white";
}

function chb2(){
    document.getElementById("change").style.color = "black";
    document.getElementById("change").style.backgroundColor = "blue";
}