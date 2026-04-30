document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-change');
    const themeLink = document.querySelector('#theme-link');

    // check if theme was already saved
    const savedTheme = localStorage.getItem('theme');


    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme);
    }

    themeBtn.addEventListener('click', () => {
        let currentTheme = themeLink.getAttribute('href');
        let newTheme;

        if (currentTheme === 'css/Boostore.css') { //if theme is light mode
            newTheme = 'css/dark-mode.css';
        } else { //if theme is not light mode 
            newTheme = 'css/Boostore.css';
        }

        // implement the new theme and save the choice to localStorage
        themeLink.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

const books = [
{
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction",
  rating: 4.8,
  pages: 281,
  cover: "covers/mockingbird.jpg"
},
{
  id: 2,
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: "Dystopian",
  rating: 4.7,
  pages: 328,
  cover: "covers/1984.jpg"
},
{
  id: 3,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic",
  rating: 4.4,
  pages: 180,
  cover: "covers/gatsby.jpg"
},
{
  id: 4,
  title: "Moby Dick",
  author: "Herman Melville",
  year: 1851,
  genre: "Adventure",
  rating: 4.1,
  pages: 635,
  cover: "covers/mobydick.jpg"
},
{
  id: 5,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  genre: "Romance",
  rating: 4.6,
  pages: 279,
  cover: "covers/pride.jpg"
},
{
  id: 6,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "Fantasy",
  rating: 4.8,
  pages: 310,
  cover: "covers/hobbit.jpg"
},
{
  id: 7,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  genre: "Fiction",
  rating: 4.2,
  pages: 277,
  cover: "covers/catcher.jpg"
},
{
  id: 8,
  title: "Brave New World",
  author: "Aldous Huxley",
  year: 1932,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "covers/brave.jpg"
},
{
  id: 9,
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  genre: "Philosophical",
  rating: 4.3,
  pages: 208,
  cover: "covers/alchemist.jpg"
},
{
  id: 10,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasy",
  rating: 4.9,
  pages: 1178,
  cover: "covers/lotr.jpg"
},
{
  id: 11,
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  rating: 4.9,
  pages: 309,
  cover: "covers/hp1.jpg"
},
{
  id: 12,
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year: 2003,
  genre: "Thriller",
  rating: 4.1,
  pages: 489,
  cover: "covers/davinci.jpg"
},
{
  id: 13,
  title: "The Hunger Games",
  author: "Suzanne Collins",
  year: 2008,
  genre: "Dystopian",
  rating: 4.6,
  pages: 374,
  cover: "covers/hunger.jpg"
},
{
  id: 14,
  title: "The Book Thief",
  author: "Markus Zusak",
  year: 2005,
  genre: "Historical",
  rating: 4.7,
  pages: 552,
  cover: "covers/thief.jpg"
},
{
  id: 15,
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.5,
  pages: 500,
  cover: "covers/jane.jpg"
},
{
  id: 16,
  title: "Wuthering Heights",
  author: "Emily Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.2,
  pages: 416,
  cover: "covers/wuthering.jpg"
},
{
  id: 17,
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  genre: "Philosophical",
  rating: 4.6,
  pages: 671,
  cover: "covers/crime.jpg"
},
{
  id: 18,
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  year: 2003,
  genre: "Drama",
  rating: 4.7,
  pages: 371,
  cover: "covers/kite.jpg"
},
{
  id: 19,
  title: "The Fault in Our Stars",
  author: "John Green",
  year: 2012,
  genre: "Romance",
  rating: 4.4,
  pages: 313,
  cover: "covers/fault.jpg"
},
{
  id: 20,
  title: "The Chronicles of Narnia",
  author: "C.S. Lewis",
  year: 1950,
  genre: "Fantasy",
  rating: 4.7,
  pages: 767,
  cover: "covers/narnia.jpg"
},
{
  id: 21,
  title: "Animal Farm",
  author: "George Orwell",
  year: 1945,
  genre: "Political",
  rating: 4.6,
  pages: 112,
  cover: "covers/animal.jpg"
},
{
  id: 22,
  title: "The Shining",
  author: "Stephen King",
  year: 1977,
  genre: "Horror",
  rating: 4.5,
  pages: 447,
  cover: "covers/shining.jpg"
},
{
  id: 23,
  title: "Dracula",
  author: "Bram Stoker",
  year: 1897,
  genre: "Horror",
  rating: 4.3,
  pages: 418,
  cover: "covers/dracula.jpg"
},
{
  id: 24,
  title: "Frankenstein",
  author: "Mary Shelley",
  year: 1818,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 280,
  cover: "covers/frankenstein.jpg"
},
{
  id: 25,
  title: "Dune",
  author: "Frank Herbert",
  year: 1965,
  genre: "Sci-Fi",
  rating: 4.8,
  pages: 412,
  cover: "covers/dune.jpg"
},
{
  id: 26,
  title: "The Road",
  author: "Cormac McCarthy",
  year: 2006,
  genre: "Post-Apocalyptic",
  rating: 4.3,
  pages: 287,
  cover: "covers/road.jpg"
},
{
  id: 27,
  title: "Gone Girl",
  author: "Gillian Flynn",
  year: 2012,
  genre: "Thriller",
  rating: 4.2,
  pages: 422,
  cover: "covers/gonegirl.jpg"
},
{
  id: 28,
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  year: 2005,
  genre: "Crime",
  rating: 4.4,
  pages: 465,
  cover: "covers/dragon.jpg"
},
{
  id: 29,
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  year: 1996,
  genre: "Fantasy",
  rating: 4.8,
  pages: 694,
  cover: "covers/got.jpg"
},
{
  id: 30,
  title: "The Martian",
  author: "Andy Weir",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.7,
  pages: 369,
  cover: "covers/martian.jpg"
},
{
  id: 31,
  title: "Life of Pi",
  author: "Yann Martel",
  year: 2001,
  genre: "Adventure",
  rating: 4.4,
  pages: 319,
  cover: "covers/pi.jpg"
},
{
  id: 32,
  title: "Slaughterhouse-Five",
  author: "Kurt Vonnegut",
  year: 1969,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 275,
  cover: "covers/slaughterhouse.jpg"
},
{
  id: 33,
  title: "The Handmaid’s Tale",
  author: "Margaret Atwood",
  year: 1985,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "covers/handmaid.jpg"
},
{
  id: 34,
  title: "The Picture of Dorian Gray",
  author: "Oscar Wilde",
  year: 1890,
  genre: "Philosophical",
  rating: 4.4,
  pages: 254,
  cover: "covers/dorian.jpg"
},
{
  id: 35,
  title: "The Stranger",
  author: "Albert Camus",
  year: 1942,
  genre: "Existential",
  rating: 4.2,
  pages: 123,
  cover: "covers/stranger.jpg"
},
{
  id: 36,
  title: "Fahrenheit 451",
  author: "Ray Bradbury",
  year: 1953,
  genre: "Dystopian",
  rating: 4.6,
  pages: 249,
  cover: "covers/f451.jpg"
},
{
  id: 37,
  title: "The Odyssey",
  author: "Homer",
  year: -700,
  genre: "Epic",
  rating: 4.3,
  pages: 541,
  cover: "covers/odyssey.jpg"
},
{
  id: 38,
  title: "The Iliad",
  author: "Homer",
  year: -750,
  genre: "Epic",
  rating: 4.2,
  pages: 683,
  cover: "covers/iliad.jpg"
},
{
  id: 39,
  title: "Don Quixote",
  author: "Miguel de Cervantes",
  year: 1605,
  genre: "Classic",
  rating: 4.1,
  pages: 863,
  cover: "covers/quixote.jpg"
},
{
  id: 40,
  title: "Les Misérables",
  author: "Victor Hugo",
  year: 1862,
  genre: "Historical",
  rating: 4.7,
  pages: 1463,
  cover: "covers/lesmis.jpg"
},
{
  id: 41,
  title: "The Count of Monte Cristo",
  author: "Alexandre Dumas",
  year: 1844,
  genre: "Adventure",
  rating: 4.8,
  pages: 1276,
  cover: "covers/montecristo.jpg"
},
{
  id: 42,
  title: "War and Peace",
  author: "Leo Tolstoy",
  year: 1869,
  genre: "Historical",
  rating: 4.5,
  pages: 1225,
  cover: "covers/warpeace.jpg"
},
{
  id: 43,
  title: "The Brothers Karamazov",
  author: "Fyodor Dostoevsky",
  year: 1880,
  genre: "Philosophical",
  rating: 4.7,
  pages: 824,
  cover: "covers/karamazov.jpg"
},
{
  id: 44,
  title: "Lolita",
  author: "Vladimir Nabokov",
  year: 1955,
  genre: "Classic",
  rating: 4.1,
  pages: 336,
  cover: "covers/lolita.jpg"
},
{
  id: 45,
  title: "The Old Man and the Sea",
  author: "Ernest Hemingway",
  year: 1952,
  genre: "Classic",
  rating: 4.3,
  pages: 127,
  cover: "covers/oldman.jpg"
},
{
  id: 46,
  title: "The Giver",
  author: "Lois Lowry",
  year: 1993,
  genre: "Dystopian",
  rating: 4.3,
  pages: 240,
  cover: "covers/giver.jpg"
},
{
  id: 47,
  title: "Ready Player One",
  author: "Ernest Cline",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.6,
  pages: 374,
  cover: "covers/rpo.jpg"
},
{
  id: 48,
  title: "The Maze Runner",
  author: "James Dashner",
  year: 2009,
  genre: "Dystopian",
  rating: 4.2,
  pages: 375,
  cover: "covers/maze.jpg"
},
{
  id: 49,
  title: "Percy Jackson & The Lightning Thief",
  author: "Rick Riordan",
  year: 2005,
  genre: "Fantasy",
  rating: 4.7,
  pages: 377,
  cover: "covers/percy.jpg"
},
{
  id: 50,
  title: "The Silent Patient",
  author: "Alex Michaelides",
  year: 2019,
  genre: "Thriller",
  rating: 4.3,
  pages: 336,
  cover: "covers/silent.jpg"
}
];

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

// switch to grid
gridBtn.addEventListener("click", () => {
    booksContainer.classList.add("grid");
    booksContainer.classList.remove("list");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

// switch to list
listBtn.addEventListener("click", () => {
    booksContainer.classList.add("list");
    booksContainer.classList.remove("grid");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

// display on the page
booksContainer.classList.add("grid");
gridBtn.classList.add("active");
displayBooks(books);
