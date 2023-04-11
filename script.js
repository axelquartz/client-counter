let displayCount = document.getElementById('display-count');
let counter = 0;
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let previousEntries = document.getElementById('previous-entries')

//Increase counter by one
function addNumber() {
    counter += 1;
    displayCount.innerText = counter;
}