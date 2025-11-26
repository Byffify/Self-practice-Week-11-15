const form = document.getElementById("postForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("body").value.trim();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await response.json();

    resultDiv.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultDiv.textContent = "Error!!" + error.message;
  }
});
