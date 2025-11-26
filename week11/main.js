    const loadBtn = document.getElementById("loadBtn");
    const userList = document.getElementById("userList");
    const errorMessage = document.getElementById("errorMsg");

    loadBtn.addEventListener("click", async () => {
      userList.innerHTML = "";
      errorMsg.textContent = "";

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Error");
        }

        const data = await res.json();

        data.forEach(user => {
          const liEl = document.createElement("li");
          liEl.textContent = `${user.name} — ${user.email}`;
          userList.appendChild(liEl);
        });

      } catch (err) {
        errorMessage.textContent = "Can't load data";
        console.error(err);
      }
    });