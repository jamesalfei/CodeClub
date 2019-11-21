window.onload = function () {
    displayDateTime();
    setInterval(function () {
        displayDateTime()
    }, 1000);
};

function showDateTime() {
    var dateTime = document.getElementById('demo');
    var button = document.getElementById('button');

    var style = dateTime.style.display;

    if (style === "none") {
        dateTime.style.display = "block";
        button.textContent = "Hide Date and Time.";
        return;
    }

    dateTime.style.display = "none";
    button.textContent = "Show Date and Time.";
}

function selectRandomColour() {
    var colours = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "white",
        "grey"
    ];
    return colours[Math.floor(Math.random() * colours.length)];
}

function changeBackgroundColour() {
    document.body.style.backgroundColor = selectRandomColour();
}

function displayDateTime() {
    document.getElementById('demo').innerHTML = Date()
}
