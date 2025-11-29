const box = document.getElementById("currentTime")

const now = new Date()
box.textContent = "Current Time: " + now.toISOString()
