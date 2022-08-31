// turn all ball classes into an array 
// then change the innerHTML of each ball to the user input
// then reorder the colors based on the user input
// next write code to display what previous order was so user can compare it 

const prevInput = document.getElementById("previousList");
const button = document.getElementById("sort-button");
const allBalls = Array.from(document.getElementsByTagName("span"));
// const yourInput = document.getElementById("input-list");


let initialOrder = allBalls;
let originalOrder = [];
// console.log(`This is all balls: ${allBalls}`);
initialOrder.forEach((item, index) => {
    let number = item.innerHTML;
    console.log(number);
    originalOrder.push(number);
    console.log(`This is the current order: `, originalOrder);
    
});

let originalColors = [];
allBalls.map((ball, index) => {
    let color = ball.style.backgroundColor;
    originalColors.push(color);
    console.log(`This is the current color: `, originalColors);
});

console.log(`Initial Order: `, initialOrder);

//check length of input
const length = allBalls.length;


button.addEventListener("click", function(e) {
    e.preventDefault();
});
button.addEventListener("click", ballSort);

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("form").reset();
    allBalls.forEach((ball, index) => {
        ball.innerHTML = '';
        ball.style.transition = "all 1.8s";
    });
})

function ballSort() {
    let input = document.getElementById("user-input").value.split(",");
    
    
    const numList = input.map(Number);
    let previous = originalOrder;

    console.log(`This is the previous order: `, previous);
    console.log(`This is the current order: `, numList);
    // if (previous) {
    //     previous.innerHTML = `${previous}`;
    // } else {
    //     previous.innerHTML = '';
    // }

    // initalize default colors, matches class colors in html
    let colors = [
        "#37A4C8", 
        "#FFA500", 
        "#5b0eeb", 
        "#f89898", 
        "#35c048", 
        "#eb0e96", 
        "#0b7c739d", 
        "#8790e0", 
        "#ff0000"
    ];

    let newOrder = [];
    let newColorOrder = [];

    if (input.length !== length) {
        alert("Please enter a list of numbers from 0-8");
    } else {
    // initialize arrays for user input(new order) and new color orders.
        

        
        // add each number in the user input to the newOrder array
        // use the user input to set the indexes of the newColorOrder array
        const setOrders = numList.map((item, index) => {
            newOrder.push(numList[index]);
            newColorOrder.push(colors[numList[index]]);
        });

        // map over the balls and set the text to the user's input 
        // set the color to the newColorOrder array
        allBalls.map((ball, index) => {
            ball.innerHTML = "";
            ball.innerHTML = newOrder[index];
            console.log(newColorOrder[index]);
            ball.style.backgroundColor = newColorOrder[index];
        });
        
        

        console.log('this is the new color order', newColorOrder);
        
    }
    originalOrder = numList;
    console.log(`original order: `, originalOrder);
    console.log(typeof(newOrder));
    originalColors = newColorOrder;
    console.log(`original colors: `, originalColors);
    console.log(typeof(originalColors));
    
    // originalOrder.forEach((item, index) => {
    //     item.style.color = originalColors[index];
    // });
    previous = originalOrder.join(",  ");
    prevInput.innerHTML = `Previous order :  ${previous}`;
    console.log(previous);
    // let prevArray = previous;
    // console.log(prevArray.split(","));
    console.log(typeof(previous));
    
}
