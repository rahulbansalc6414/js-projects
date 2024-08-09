const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn-hero");
const colorSpan = document.querySelector("span.color");

function changeColor()
{
    const newColor = getNewColor();

    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
}

function getNewColor()
{
    // generate a random number
    // let's generate six random numbers and select from the hex array

    let newHex = "";

    for (i = 1; i <= 6; i++)
    {
        newHex += hex[getRandomNumber()]
    }

    return '#' + newHex;
}

function getRandomNumber()
{
    return Math.floor(Math.random() * (hex.length));
}

btn.addEventListener('click', changeColor)
