
// ------- books page --------- //

// render function to display to the books page //
// buttons //
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

const booksContainer = document.getElementById("books");

function displayBooks(list) {
booksContainer.innerHTML = "";
    list.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");

        bookCard.innerHTML = `
            <a href="details.html?id=${book.id}">
                <img src="${book.cover}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p class="author-name">${book.author}</p>
                <p>${book.genre} | ${book.year}</p>
                <p class="meta">⭐ ${book.rating} | ${book.pages} pages</p>
            </a>
        `;

        booksContainer.appendChild(bookCard);
    });
}

/* <div class="book"> 
    <a href="book id">
        <img src="book image" alt="book name">
        <h3>book name</h3>
        <p class="author-name">author name</p>
        <p>genre | year</p>
        <p class="meta">rating | books pages</p>
    </a>
</div> */ 
// all that insid a main with id books and class grid



// switch to grid
gridBtn.addEventListener("click", () => {
    booksContainer.classList.add("grid");
    booksContainer.classList.remove("list");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    localStorage.setItem("layout", "grid");
});

// switch to list
listBtn.addEventListener("click", () => {
    booksContainer.classList.add("list");
    booksContainer.classList.remove("grid");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    localStorage.setItem("layout", "list");
});

// load saved layout first
const savedLayout = localStorage.getItem("layout"); // Grid OR List

// apply layout safely
if (savedLayout === "list") {
    booksContainer.classList.remove("grid");
    booksContainer.classList.add("list");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
} else {
    booksContainer.classList.remove("list");
    booksContainer.classList.add("grid");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
}

// display on the page
displayBooks(books);
