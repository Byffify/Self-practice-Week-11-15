document.getElementById("delete-method").addEventListener("click", async () => {
  const id = document.getElementById("delete-id")
  const output = document.getElementById("result")

  const value = id.value

  if (!value) {
    output.textContent = "Pls Enter ID"
    return
  }

  output.textContent = "Deleting..."

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`, {
      method: "DELETE"
    })

    output.textContent = `Deleted (status: ${res.status})`
  } catch (err) {
    output.textContent = "Error : " + err
  }
});
