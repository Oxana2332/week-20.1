"use strict";
(function(){
document.addEventListener("DOMContentLoaded",
function(evt) {
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(slip => 
    {
        document.getElementById('advice').innerText=slip.slip.advice;
    })
.catch(error => console.log(error));
})
})()