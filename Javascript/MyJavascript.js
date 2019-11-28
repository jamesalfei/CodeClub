//Change background colour
function selectRandomColour() {
    var colours = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "grey"
    ];
    return colours[Math.floor(Math.random() * colours.length)];
}

function changeBackgroundColour() {
    document.body.style.backgroundColor = selectRandomColour();
}

//Date and time load and show/hide
window.onload = function () {
    displayDateTime();
    setInterval(function () {
        displayDateTime()
    }, 1000);
};

function showDateTime() {
    var dateTime = document.getElementById('date');
    var button = document.getElementById('dateButton');

    var style = dateTime.style.display;

    if (style === "none") {
        dateTime.style.display = "block";
        button.textContent = "Hide Date and Time.";
        return;
    }

    dateTime.style.display = "none";
    button.textContent = "Show Date and Time.";
}


function displayDateTime() {
    document.getElementById('date').innerHTML = Date()
}


//Game code
function calculateNewPosition() {
    var gameBox = document.getElementById('myGame');

    var height = gameBox.offsetHeight - 50;
    var width = gameBox.clientWidth - 50;

    var newPositionX = Math.floor(Math.random() * height);
    var newPositionY = Math.floor(Math.random() * width);

    console.log(newPositionX);
    console.log(newPositionY);

    return [newPositionX, newPositionY];
}

function animateButton() {
    var newPosition = calculateNewPosition();

    $("#gameButton").animate({
        top: newPosition[0],
        left: newPosition[1]
    }, 500);
}
