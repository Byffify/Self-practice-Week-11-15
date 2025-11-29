const updateTimeBtn = document.getElementById("update-time");
const timeList = document.getElementById("timeList");

updateTimeBtn.addEventListener("click", () => {
  const now = new Date()
  const time = now.toLocaleString()

  const li = document.createElement("li")
  li.textContent = `current time: ${time}`
  timeList.appendChild(li)
});
