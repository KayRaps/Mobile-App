/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

const inputFieldEl = document.getElementById("input-filed")
const addButtonEl = document.getElementById("ad-button")

addButtonEl.addEventListener("click", function() {
    console.log("it works")
})