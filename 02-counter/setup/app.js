const btnDecrease = document.getElementById("decrease")
const btnIncrease = document.getElementById("increase")
const btnReset = document.getElementById("reset")

const spanValue = document.getElementById("value")

btnReset.addEventListener('click', function ()
{
    spanValue.innerText = 0;
    changeColor();
})


btnIncrease.addEventListener('click', function ()
{
    spanValue.innerText = Number(spanValue.innerText) + 1;
    changeColor();
})


btnDecrease.addEventListener('click', function ()
{
    spanValue.innerText = Number(spanValue.innerText) - 1;
    changeColor();
})

function changeColor()
{
    let number = Number(spanValue.innerText)
    let color = '';
    if (number > 0)
    {
        color = 'green'
    } else if (number < 0)
    {
        color = 'red'
    } else if (number === 0)
    {
        color = 'black'
    }
    spanValue.style.color = color;
}