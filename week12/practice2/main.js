const API_BASE = "https://jsonplaceholder.typicode.com"

document.getElementById("get-method").addEventListener("click", async () => {
  const result = document.getElementById("result")

  try {
    const res = await fetch(`${API_BASE}/posts`, {
      method: "GET"
    });

    const data = await res.json()

    result.textContent = JSON.stringify(data)

  } catch (err) {
    result.textContent = "Error : " + err
  }
});