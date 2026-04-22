// Run automatically on page load
document.addEventListener("DOMContentLoaded", fetchPosts);

function fetchPosts() {
  const limit = document.getElementById("limit").value || 10;

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then(response => response.json())
    .then(data => displayPosts(data))
    .catch(error => console.error("Error:", error));
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // clear previous

  posts.forEach(post => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    `;

    postsContainer.appendChild(col);
  });
}