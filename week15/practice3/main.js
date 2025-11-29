const addItemBtn = document.getElementById('addItem')
const list = document.getElementById('list')

addItemBtn.addEventListener("click", () => {
    const li = document.createElement('li')
    li.textContent = `Item ${list.childNodes.length + 1}`
    list.appendChild(li)
})