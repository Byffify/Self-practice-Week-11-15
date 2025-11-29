const API_BASE = import.meta.env.VITE_APP_URL;

async function loadHeaderStatus() {
    const el = document.getElementById("activePlansStatus")
  try {
    const res = await fetch(`${API_BASE}/study-plans`)
    if (!res.ok) {
      el.textContent = "Active Study Plans: N/A"
      return
    }
    const data = await res.json(); // array
    el.innerHTML = `<i class="fa-regular fa-hand"></i> Active Study Plans: ${data.length}`
  } catch (e) {
    el.textContent = "Active Study Plans: N/A"
  }
}


export { loadHeaderStatus }
