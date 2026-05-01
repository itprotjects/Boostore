
const container = document.getElementById("featuredBooks");

if (container) {
  const featured = books.slice(0, 7);

  featured.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <a href="details.html?id=${book.id}">View</a>
    `;

    container.appendChild(card);
  });
}

/* <div class="book-card">
  <img src="book image" alt="book name">
  <h3>book name</h3>
  <p>book author</p>
  <a href="book detail page where the id of the page get from URL">view</a>
</div> */



