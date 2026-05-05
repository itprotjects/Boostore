// in details page //
// to render the book user clicked on in books page //
document.addEventListener('DOMContentLoaded', () => {
    const url = new URLSearchParams(window.location.search);
    const book_id = url.get('id');
    const book = books.find(books => books.id == book_id);
    const details_container = document.getElementById("details-view");
    if(book){
        details_container.innerHTML = `
            <h1 class="main-title">Book Details</h1>
            <h3 class="sub-title">${book.title}</h3>
            <div class="details-container">
                <img class="book-image" src="${book.cover}" alt="${book.title}">
                <div class="content-section">
                    <p class="book-description">
                        <b>Information about the book:</b> ${book.description}
                    </p>
                    <ul class="info-list">
                        <li><strong>Author</strong>.....<i><a href="author.html?id=${book.id}">${book.author}</a></i></li>
                        <li><strong>Genre</strong> ...<i>${book.genre}</i></li>
                        <li><strong>Year</strong> ....<i>${book.year}</i></li>
                        <li><strong>Pages</strong> ....<i>${book.pages}</i></li>
                        <li><strong>Rating</strong>....⭐ <i>${book.rating}</i></li>
                    </ul>
                </div>
            </div>
        `;
    }
    else{
        details_container.innerHTML=`<p>Book not found...</p>`;
    }
});