const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const count = document.getElementById('count');

let countNum = 0
addBtn.addEventListener("click", () => {
    countNum++
    count.textContent = countNum
})

minusBtn.addEventListener("click", () => {
    countNum--
    count.textContent = countNum
})