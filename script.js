const posts = [
    { title: "Primer Post", content: "Este es el contenido del primer post.", url: "post/post1.html" },
    { title: "Segundo Post", content: "Este es el contenido del segundo post.", url: "post/post2.html" },
    { title: "Tercer Post", content: "Este es el contenido del tercer post.", url: "post/post3.html" }
];

function renderPosts(filter = "") {
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
         .forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<h2><a href="${post.url}">${post.title}</a></h2><p>${post.content}</p>`;
            container.appendChild(postElement);
         });
}

document.getElementById("search").addEventListener("input", (e) => {
    renderPosts(e.target.value);
});

renderPosts();
