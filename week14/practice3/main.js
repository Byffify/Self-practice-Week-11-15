const updateTimeBtn = document.getElementById("update-time");
const currentTime = document.getElementById("time");

updateTimeBtn.addEventListener("click", () => {
  const now = new Date()
  currentTime.textContent = now.toLocaleString()
});
