const toggleBtn = document.getElementById('togglePanel')
const divEl = document.getElementById('panel')

toggleBtn.addEventListener("click", () => {
    if (divEl.style.display === "none") {
        divEl.style.display = "block"
    } else {
        divEl.style.display = "none"
    }
})