  const btn = document.getElementById("saveBtn")
  const messageInput = document.getElementById("message")
  const list = document.getElementById("list")

  btn.addEventListener("click", () => {
    const text = messageInput.value
    const time = new Date().toLocaleTimeString("th-TH", { hour12: false })

    const li = document.createElement("li")
    li.textContent = `[${time}] -- ${text}`

    list.appendChild(li)
    messageInput.value = "";
  });