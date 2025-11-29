const input = document.getElementById("name-input")
const changeTextBtn = document.getElementById("changeText")
const result = document.getElementById("result")

changeTextBtn.addEventListener("click", () => {
    result.textContent = `Hello, ${input.value}`
})
