const changeColorBtn = document.getElementById('changeColor')
const box = document.getElementById('box')

changeColorBtn.addEventListener("click", () => {
    box.style.backgroundColor = "gray"
    box.style.width = "200px"
    box.style.height = "200px"
})