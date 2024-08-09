const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


let i = 0;

const btn = document.getElementsByClassName("btn-hero")[0];
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () =>
{
    console.log(i % colors.length);
    document.body.style.backgroundColor = colors[i % colors.length];
    colorSpan.textContent = colors[i % colors.length]
    i++;
})
