const books = [
{
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction",
  rating: 4.8,
  pages: 281,
  cover: "images/To-Kill-a-Mockingbird.jpg"
},
{
  id: 2,
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: "Dystopian",
  rating: 4.7,
  pages: 328,
  cover: "images/1984.jpg"
},
{
  id: 3,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic",
  rating: 4.4,
  pages: 180,
  cover: "images/The-Great-Gatsby.jpg"
},
{
  id: 4,
  title: "Moby Dick",
  author: "Herman Melville",
  year: 1851,
  genre: "Adventure",
  rating: 4.1,
  pages: 635,
  cover: "images/Moby-Dick.jpg"
},
{
  id: 5,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  genre: "Romance",
  rating: 4.6,
  pages: 279,
  cover: "images/Pride-and-Prejudice.jpg"
},
{
  id: 6,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "Fantasy",
  rating: 4.8,
  pages: 310,
  cover: "images/The-Hobbit.jpg"
},
{
  id: 7,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  genre: "Fiction",
  rating: 4.2,
  pages: 277,
  cover: "images/The-Catcher-in-the-Rye.jpg"
},
{
  id: 8,
  title: "Brave New World",
  author: "Aldous Huxley",
  year: 1932,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "images/Brave-New-World.jpg"
},
{
  id: 9,
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  genre: "Philosophical",
  rating: 4.3,
  pages: 208,
  cover: "images/The-Alchemist.jpg"
},
{
  id: 10,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasy",
  rating: 4.9,
  pages: 1178,
  cover: "images/The-Lord-of-the-Rings.jpg"
},
{
  id: 11,
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  rating: 4.9,
  pages: 309,
  cover: "images/Harry-Potter-and-the-Sorcerer's-Stone.jpg"
},
{
  id: 12,
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year: 2003,
  genre: "Thriller",
  rating: 4.1,
  pages: 489,
  cover: "images/The-Da-Vinci-Code.jpg"
},
{
  id: 13,
  title: "The Hunger Games",
  author: "Suzanne Collins",
  year: 2008,
  genre: "Dystopian",
  rating: 4.6,
  pages: 374,
  cover: "images/The-Hunger-Games.jpg"
},
{
  id: 14,
  title: "The Book Thief",
  author: "Markus Zusak",
  year: 2005,
  genre: "Historical",
  rating: 4.7,
  pages: 552,
  cover: "images/The-Book-Thief.jpg"
},
{
  id: 15,
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.5,
  pages: 500,
  cover: "images/Jane-Eyre.jpg"
},
{
  id: 16,
  title: "Wuthering Heights",
  author: "Emily Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.2,
  pages: 416,
  cover: "images/Wuthering-Heights.jpg"
},
{
  id: 17,
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  genre: "Philosophical",
  rating: 4.6,
  pages: 671,
  cover: "images/Crime-and-Punishment.jfif"
},
{
  id: 18,
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  year: 2003,
  genre: "Drama",
  rating: 4.7,
  pages: 371,
  cover: "images/The-Kite-Runner.jpg"
},
{
  id: 19,
  title: "The Fault in Our Stars",
  author: "John Green",
  year: 2012,
  genre: "Romance",
  rating: 4.4,
  pages: 313,
  cover: "images/The-Fault-in-Our-Stars.jpg"
},
{
  id: 20,
  title: "The Chronicles of Narnia",
  author: "C.S. Lewis",
  year: 1950,
  genre: "Fantasy",
  rating: 4.7,
  pages: 767,
  cover: "images/The-Chronicles-of-Narnia.jpg"
},
{
  id: 21,
  title: "Animal Farm",
  author: "George Orwell",
  year: 1945,
  genre: "Political",
  rating: 4.6,
  pages: 112,
  cover: "images/Animal-Farm.jpg"
},
{
  id: 22,
  title: "The Shining",
  author: "Stephen King",
  year: 1977,
  genre: "Horror",
  rating: 4.5,
  pages: 447,
  cover: "images/The-Shining.jpg"
},
{
  id: 23,
  title: "Dracula",
  author: "Bram Stoker",
  year: 1897,
  genre: "Horror",
  rating: 4.3,
  pages: 418,
  cover: "images/Dracula.jpg"
},
{
  id: 24,
  title: "Frankenstein",
  author: "Mary Shelley",
  year: 1818,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 280,
  cover: "images/Frankenstein.jpg"
},
{
  id: 25,
  title: "Dune",
  author: "Frank Herbert",
  year: 1965,
  genre: "Sci-Fi",
  rating: 4.8,
  pages: 412,
  cover: "images/Dune.jpg"
},
{
  id: 26,
  title: "The Road",
  author: "Cormac McCarthy",
  year: 2006,
  genre: "Post-Apocalyptic",
  rating: 4.3,
  pages: 287,
  cover: "images/The-Road.jpg"
},
{
  id: 27,
  title: "Gone Girl",
  author: "Gillian Flynn",
  year: 2012,
  genre: "Thriller",
  rating: 4.2,
  pages: 422,
  cover: "images/Gone-Girl.jpg"
},
{
  id: 28,
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  year: 2005,
  genre: "Crime",
  rating: 4.4,
  pages: 465,
  cover: "images/The-Girl-with-the-Dragon-Tattoo.jpg"
},
{
  id: 29,
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  year: 1996,
  genre: "Fantasy",
  rating: 4.8,
  pages: 694,
  cover: "images/A-Game-of-Thrones.jpg"
},
{
  id: 30,
  title: "The Martian",
  author: "Andy Weir",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.7,
  pages: 369,
  cover: "images/The-Martian.jpg"
},
{
  id: 31,
  title: "Life of Pi",
  author: "Yann Martel",
  year: 2001,
  genre: "Adventure",
  rating: 4.4,
  pages: 319,
  cover: "images/Life-of-Pi.jpg"
},
{
  id: 32,
  title: "Slaughterhouse-Five",
  author: "Kurt Vonnegut",
  year: 1969,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 275,
  cover: "images/Slaughterhouse-Five.jpg"
},
{
  id: 33,
  title: "The Handmaid’s Tale",
  author: "Margaret Atwood",
  year: 1985,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "images/The-Handmaid’s-Tale.jpg"
},
{
  id: 34,
  title: "The Picture of Dorian Gray",
  author: "Oscar Wilde",
  year: 1890,
  genre: "Philosophical",
  rating: 4.4,
  pages: 254,
  cover: "images/The-Picture-of-Dorian-Gray.jpg"
},
{
  id: 35,
  title: "The Stranger",
  author: "Albert Camus",
  year: 1942,
  genre: "Existential",
  rating: 4.2,
  pages: 123,
  cover: "images/The-Stranger.jpg"
},
{
  id: 36,
  title: "Fahrenheit 451",
  author: "Ray Bradbury",
  year: 1953,
  genre: "Dystopian",
  rating: 4.6,
  pages: 249,
  cover: "images/Fahrenheit-451.jpg"
},
{
  id: 37,
  title: "The Odyssey",
  author: "Homer",
  year: -700,
  genre: "Epic",
  rating: 4.3,
  pages: 541,
  cover: "images/The-Odyssey.jpg"
},
{
  id: 38,
  title: "The Iliad",
  author: "Homer",
  year: -750,
  genre: "Epic",
  rating: 4.2,
  pages: 683,
  cover: "images/The-Iliad.jpg"
},
{
  id: 39,
  title: "Don Quixote",
  author: "Miguel de Cervantes",
  year: 1605,
  genre: "Classic",
  rating: 4.1,
  pages: 863,
  cover: "images/Don-Quixote.jpg"
},
{
  id: 40,
  title: "Les Misérables",
  author: "Victor Hugo",
  year: 1862,
  genre: "Historical",
  rating: 4.7,
  pages: 1463,
  cover: "images/Les-Misérables.jpg"
},
{
  id: 41,
  title: "The Count of Monte Cristo",
  author: "Alexandre Dumas",
  year: 1844,
  genre: "Adventure",
  rating: 4.8,
  pages: 1276,
  cover: "images/The-Count-of-Monte-Cristo.jpg"
},
{
  id: 42,
  title: "War and Peace",
  author: "Leo Tolstoy",
  year: 1869,
  genre: "Historical",
  rating: 4.5,
  pages: 1225,
  cover: "images/War-and-Peace.jpg"
},
{
  id: 43,
  title: "The Brothers Karamazov",
  author: "Fyodor Dostoevsky",
  year: 1880,
  genre: "Philosophical",
  rating: 4.7,
  pages: 824,
  cover: "images/The-Brothers-Karamazov.jpg"
},
{
  id: 44,
  title: "Lolita",
  author: "Vladimir Nabokov",
  year: 1955,
  genre: "Classic",
  rating: 4.1,
  pages: 336,
  cover: "images/Lolita.jpg"
},
{
  id: 45,
  title: "The Old Man and the Sea",
  author: "Ernest Hemingway",
  year: 1952,
  genre: "Classic",
  rating: 4.3,
  pages: 127,
  cover: "images/The-Old-Man-and-the-Sea.jpg"
},
{
  id: 46,
  title: "The Giver",
  author: "Lois Lowry",
  year: 1993,
  genre: "Dystopian",
  rating: 4.3,
  pages: 240,
  cover: "images/The-Giver.jpg"
},
{
  id: 47,
  title: "Ready Player One",
  author: "Ernest Cline",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.6,
  pages: 374,
  cover: "images/Ready-Player-One.jpg"
},
{
  id: 48,
  title: "The Maze Runner",
  author: "James Dashner",
  year: 2009,
  genre: "Dystopian",
  rating: 4.2,
  pages: 375,
  cover: "images/The-Maze-Runner.jpg"
},
{
  id: 49,
  title: "Percy Jackson & The Lightning Thief",
  author: "Rick Riordan",
  year: 2005,
  genre: "Fantasy",
  rating: 4.7,
  pages: 377,
  cover: "images/Percy-Jackson-and-The-Lightning-Thief.jpg"
},
{
  id: 50,
  title: "The Silent Patient",
  author: "Alex Michaelides",
  year: 2019,
  genre: "Thriller",
  rating: 4.3,
  pages: 336,
  cover: "images/The-Silent-Patient.jpg"
}
];