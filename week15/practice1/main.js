const changeTextBtn = document.getElementById('changeText')
const message = document.getElementById('message')

changeTextBtn.addEventListener("click", () => {
    message.textContent = "Hello DOM!"
})