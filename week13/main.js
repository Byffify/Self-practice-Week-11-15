const postList = document.getElementById("postList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const doneMsg = document.getElementById("doneMsg");

let currentPage = 1;
const limit = 2;
const maxPosts = 10;

async function loadPosts() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );
    const data = await response.json();

    data.forEach((post) => {
      const div = document.createElement("div");
      div.className = "post";
      div.textContent = `${post.id}: ${post.title}`;
      postList.appendChild(div);
    });

    currentPage++;

    if ((currentPage - 1) * limit >= maxPosts) {
      loadMoreBtn.style.display = "none";
      doneMsg.textContent = "load finish";
    }

    if (data.length < limit) {
      loadMoreBtn.style.display = "none";
      doneMsg.textContent = "Not more load";
    }
  } catch (error) {
    doneMsg.textContent = "Error kubbb";
    console.error(error);
  }
}

loadPosts();

loadMoreBtn.addEventListener("click", loadPosts);
