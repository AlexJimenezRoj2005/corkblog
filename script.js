const posts = {
    es: [
        { title: "¿De qué trata este Blog?", content: "Este blog trata sobre mi experiencia día a día sobre el Erasmus en Irlanda, Cork.", url: "post/post1.html" },
        { title: "Primer día en Irlanda", content: "En este post te cuento mis primeras impresiones y la aventura del primer día en Irlanda.", url: "post/post2.html" },
        { title: "Segundo día en Irlanda", content: "En este día, te contaré sobre la celebración que nos encontramos el segundo día en Irlanda: San Patricio.", url: "post/post3.html" }
    ],
    en: [
        { title: "What is this Blog about?", content: "This blog is about my daily experience with Erasmus in Ireland, Cork.", url: "postEn/post1En.html" },
        { title: "First Day in Ireland", content: "In this post, I share my first impressions and the adventure of my first day in Ireland.", url: "postEn/post2En.html" },
        { title: "Second Day in Ireland", content: "In this post, I will tell you about the celebration we witnessed on our second day in Ireland: Saint Patrick's Day.", url: "postEn/post3En.html" }
    ]
};

let currentLanguage = "es";

function renderPosts(filter = "") {
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    posts[currentLanguage]
        .filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h2><a href="${post.url}">${post.title}</a></h2>
                <p>${post.content}</p>
            `;
            container.appendChild(postElement);
        });
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;

    const translations = {
        es: {
            title: "Mi Erasmus en Irlanda",
            "Buscar posts...": "Buscar posts..."
        },
        en: {
            title: "My Erasmus in Ireland",
            "Buscar posts...": "Search posts..."
        }
    };

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = translations[lang][el.getAttribute("data-lang")];
    });

    const searchInput = document.getElementById("search");
    searchInput.placeholder = translations[lang]["Buscar posts..."];
    
    renderPosts();
}

// Eventos de cambio de idioma
document.getElementById("spanish-btn").addEventListener("click", () => changeLanguage("es"));
document.getElementById("english-btn").addEventListener("click", () => changeLanguage("en"));

// Evento para la barra de búsqueda
document.getElementById("search").addEventListener("input", (e) => {
    renderPosts(e.target.value);
});

// Render inicial de los posts
renderPosts();
