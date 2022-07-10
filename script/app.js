// Reading JSON

import data from '../data.json' assert {type: 'json'};

console.log(data);

// Inserting bubbles and bars within bar-chart

/// bubbles

const bubbleList = document.getElementsByClassName("bubble");
const barList = document.getElementsByClassName("bar");

let maxBarHeight = 0;

Array.from(bubbleList).forEach((bubble, index) => {
    console.log(bubble);
    bubble.innerHTML = '$' + data[index].amount;
    
    if (data[index].amount > maxBarHeight){
        maxBarHeight = data[index].amount;
    }
});

console.log('Max bar height: ' + maxBarHeight);
/// bars

// bar-list is 152px high. A 100% is 152px then, and 50% is 76px.
Array.from(barList).forEach((bar, index) => {
    console.log(bar);
    bar.style.height = (data[index].amount/maxBarHeight)*100 + '%';

    bar.addEventListener('mouseover', e => {
        console.log(e.target);
        const bubble = bubbleList[index];
        console.log(bubble);
        bubble.style.visibility = 'visible';
    })

    bar.addEventListener('mouseout', e => {
        console.log(e);
        bubbleList[index].style.visibility = 'hidden';
    })
});
