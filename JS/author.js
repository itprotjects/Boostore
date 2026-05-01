const url = new URLSearchParams(window.location.search); // get url from page
const author_id = url.get('id');// author_id = id of the url(which is the book id)

const author = books.find(books => books.id == author_id);// author =  id where it matches the book
const author_container = document.getElementById("author_page");// get id to write html inside it
//saftey
if(author){
    //write html
    author_container.innerHTML = `
        <section class="author-container">
            <div class="image-Author">
                <img src="${author.images_Author}" alt="${author.author}">
            </div>
            <div class="about-author">
                <p class="inf"><b>About the Author </b></p>
                <p>${author.about_author}</p>
            </div>
        </section>
        <hr>
        <h2 class="section-name">Books by ${author.author}</h2>
        <section id="books" class="grid"></section>
    `;
    
    
    const books_render = document.getElementById("books");
    
    const author_books = books.filter(b => b.author === author.author);

    
    author_books.forEach(b => {
        const bookCard = document.createElement("div"); // Create a new div
        bookCard.classList.add("book"); // Give it the class
        
        bookCard.innerHTML = `
            <a href="details.html?id=${b.id}">
                <img src="${b.cover}" alt="${b.title}">
                <h3>${b.title}</h3>
                <p class="author-name">${b.author}</p>
                <p>${b.genre} | ${b.year}</p>
                <p class="meta">⭐ ${b.rating} | ${b.pages} pages</p>
            </a>
        `;
        
        books_render.appendChild(bookCard); // Put it in the grid
    });

} else {
    author_container.innerHTML = `<p>Author or Book not found.</p>`;
}
