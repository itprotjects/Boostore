const books = [
{
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction",
  rating: 4.8,
  pages: 281,
  cover: "images/To-Kill-a-Mockingbird.jpg",
  description: "A young girl grows up in the American South and witnesses her father defend a Black man accused of a crime, learning powerful lessons about justice, prejudice, and empathy."

},
{
  id: 2,
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: "Dystopian",
  rating: 4.7,
  pages: 328,
  cover: "images/1984.jpg",
  description: "In a totalitarian future, a man struggles against a regime that controls truth, thought, and individuality through constant surveillance and propaganda."

},
{
  id: 3,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic",
  rating: 4.4,
  pages: 180,
  cover: "images/The-Great-Gatsby.jpg",
  description: "A mysterious millionaire pursues a lost love in a glittering yet hollow world, revealing the illusions of wealth and the American Dream."

},
{
  id: 4,
  title: "Moby Dick",
  author: "Herman Melville",
  year: 1851,
  genre: "Adventure",
  rating: 4.1,
  pages: 635,
  cover: "images/Moby-Dick.jpg",
  description: "A sailor joins a dangerous voyage led by a captain obsessed with hunting a legendary white whale, leading to a tale of madness and revenge."

},
{
  id: 5,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  genre: "Romance",
  rating: 4.6,
  pages: 279,
  cover: "images/Pride-and-Prejudice.jpg",
  description: "Elizabeth Bennet navigates love, class, and misunderstandings in a witty and insightful story about relationships and personal growth."

},
{
  id: 6,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "Fantasy",
  rating: 4.8,
  pages: 310,
  cover: "images/The-Hobbit.jpg",
  description: "Bilbo Baggins embarks on an unexpected adventure with dwarves to reclaim treasure guarded by a dragon, discovering courage within himself."

},
{
  id: 7,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  genre: "Fiction",
  rating: 4.2,
  pages: 277,
  cover: "images/The-Catcher-in-the-Rye.jpg",
  description: "A teenage boy wanders New York City, reflecting on life, identity, and his struggle with growing up and feeling disconnected."

},
{
  id: 8,
  title: "Brave New World",
  author: "Aldous Huxley",
  year: 1932,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "images/Brave-New-World.jpg",
  description: "A futuristic society engineered for stability sacrifices individuality and freedom, raising questions about happiness and control."

},
{
  id: 9,
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  genre: "Philosophical",
  rating: 4.3,
  pages: 208,
  cover: "images/The-Alchemist.jpg",
  description: "A shepherd travels across deserts in search of treasure, learning about destiny, dreams, and listening to his heart."

},
{
  id: 10,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasy",
  rating: 4.9,
  pages: 1178,
  cover: "images/The-Lord-of-the-Rings.jpg",
  description: "A group of heroes embark on a perilous journey to destroy a powerful ring that could bring darkness to the world."

},
{
  id: 11,
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  rating: 4.9,
  pages: 309,
  cover: "images/Harry-Potter-and-the-Sorcerer's-Stone.jpg",
  description: "A young boy discovers he is a wizard and begins his journey at a magical school filled with friendship, danger, and mystery."

},
{
  id: 12,
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year: 2003,
  genre: "Thriller",
  rating: 4.1,
  pages: 489,
  cover: "images/The-Da-Vinci-Code.jpg",
  description: "A symbologist uncovers hidden secrets within famous artworks while being pursued in a high-stakes conspiracy."

},
{
  id: 13,
  title: "The Hunger Games",
  author: "Suzanne Collins",
  year: 2008,
  genre: "Dystopian",
  rating: 4.6,
  pages: 374,
  cover: "images/The-Hunger-Games.jpg",
  description: "In a dystopian society, a young girl fights for survival in a deadly televised competition."

},
{
  id: 14,
  title: "The Book Thief",
  author: "Markus Zusak",
  year: 2005,
  genre: "Historical",
  rating: 4.7,
  pages: 552,
  cover: "images/The-Book-Thief.jpg",
  description: "A young girl in Nazi Germany finds comfort in stealing books and sharing stories during a time of war."

},
{
  id: 15,
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.5,
  pages: 500,
  cover: "images/Jane-Eyre.jpg",
  description: "An orphaned girl grows into a strong woman while facing love, hardship, and moral challenges."

},
{
  id: 16,
  title: "Wuthering Heights",
  author: "Emily Brontë",
  year: 1847,
  genre: "Classic",
  rating: 4.2,
  pages: 416,
  cover: "images/Wuthering-Heights.jpg",
  description: "A dark tale of passion and revenge unfolds on the Yorkshire moors, where love becomes destructive across generations."

},
{
  id: 17,
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  genre: "Philosophical",
  rating: 4.6,
  pages: 671,
  cover: "images/Crime-and-Punishment.jfif",
  description: "A troubled student commits a crime and faces intense psychological turmoil as he struggles with guilt and morality."

},
{
  id: 18,
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  year: 2003,
  genre: "Drama",
  rating: 4.7,
  pages: 371,
  cover: "images/The-Kite-Runner.jpg",
  description: "A story of friendship and betrayal set in Afghanistan, following a man seeking redemption for his past actions."

},
{
  id: 19,
  title: "The Fault in Our Stars",
  author: "John Green",
  year: 2012,
  genre: "Romance",
  rating: 4.4,
  pages: 313,
  cover: "images/The-Fault-in-Our-Stars.jpg",
  description: "Two teenagers with cancer fall in love, sharing a heartfelt journey about life, loss, and meaning."

},
{
  id: 20,
  title: "The Chronicles of Narnia",
  author: "C.S. Lewis",
  year: 1950,
  genre: "Fantasy",
  rating: 4.7,
  pages: 767,
  cover: "images/The-Chronicles-of-Narnia.jpg",
  description: "Children enter a magical world filled with talking animals, epic battles, and the struggle between good and evil."

},
{
  id: 21,
  title: "Animal Farm",
  author: "George Orwell",
  year: 1945,
  genre: "Political",
  rating: 4.6,
  pages: 112,
  cover: "images/Animal-Farm.jpg",
  description: "Farm animals rebel against their human owner, only to face a new tyranny that mirrors political corruption."

},
{
  id: 22,
  title: "The Shining",
  author: "Stephen King",
  year: 1977,
  genre: "Horror",
  rating: 4.5,
  pages: 447,
  cover: "images/The-Shining.jpg",
  description: "A family’s winter stay in an isolated hotel turns terrifying as supernatural forces begin to take control."

},
{
  id: 23,
  title: "Dracula",
  author: "Bram Stoker",
  year: 1897,
  genre: "Horror",
  rating: 4.3,
  pages: 418,
  cover: "images/Dracula.jpg",
  description: "A vampire count travels to England, spreading fear as a group attempts to stop his dark influence."

},
{
  id: 24,
  title: "Frankenstein",
  author: "Mary Shelley",
  year: 1818,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 280,
  cover: "images/Frankenstein.jpg",
  description: "A scientist creates life, only to face the consequences when his creation becomes a misunderstood monster."

},
{
  id: 25,
  title: "Dune",
  author: "Frank Herbert",
  year: 1965,
  genre: "Sci-Fi",
  rating: 4.8,
  pages: 412,
  cover: "images/Dune.jpg",
  description: "A young nobleman navigates politics, prophecy, and survival on a desert planet rich in a powerful resource."

},
{
  id: 26,
  title: "The Road",
  author: "Cormac McCarthy",
  year: 2006,
  genre: "Post-Apocalyptic",
  rating: 4.3,
  pages: 287,
  cover: "images/The-Road.jpg",
  description: "A father and son journey through a bleak, post-apocalyptic world, holding onto hope and humanity."

},
{
  id: 27,
  title: "Gone Girl",
  author: "Gillian Flynn",
  year: 2012,
  genre: "Thriller",
  rating: 4.2,
  pages: 422,
  cover: "images/Gone-Girl.jpg",
  description: "A man becomes the prime suspect in his wife’s disappearance, revealing dark secrets and twisted truths."

},
{
  id: 28,
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  year: 2005,
  genre: "Crime",
  rating: 4.4,
  pages: 465,
  cover: "images/The-Girl-with-the-Dragon-Tattoo.jpg",
  description: "A journalist and a hacker team up to solve a decades-old disappearance tied to a powerful family."

},
{
  id: 29,
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  year: 1996,
  genre: "Fantasy",
  rating: 4.8,
  pages: 694,
  cover: "images/A-Game-of-Thrones.jpg",
  description: "Noble families battle for power in a brutal fantasy world filled with political intrigue and looming danger."

},
{
  id: 30,
  title: "The Martian",
  author: "Andy Weir",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.7,
  pages: 369,
  cover: "images/The-Martian.jpg",
  description: "An astronaut stranded on Mars must rely on science and ingenuity to survive and find a way home."

},
{
  id: 31,
  title: "Life of Pi",
  author: "Yann Martel",
  year: 2001,
  genre: "Adventure",
  rating: 4.4,
  pages: 319,
  cover: "images/Life-of-Pi.jpg",
  description: "A boy survives a shipwreck and shares a lifeboat with a tiger, telling a story of faith and survival."

},
{
  id: 32,
  title: "Slaughterhouse-Five",
  author: "Kurt Vonnegut",
  year: 1969,
  genre: "Sci-Fi",
  rating: 4.2,
  pages: 275,
  cover: "images/Slaughterhouse-Five.jpg",
  description: "A soldier experiences time non-linearly after war, blending science fiction with reflections on trauma."

},
{
  id: 33,
  title: "The Handmaid’s Tale",
  author: "Margaret Atwood",
  year: 1985,
  genre: "Dystopian",
  rating: 4.5,
  pages: 311,
  cover: "images/The-Handmaid’s-Tale.jpg",
  description: "In a totalitarian society, women are stripped of rights and forced into roles under strict control."

},
{
  id: 34,
  title: "The Picture of Dorian Gray",
  author: "Oscar Wilde",
  year: 1890,
  genre: "Philosophical",
  rating: 4.4,
  pages: 254,
  cover: "images/The-Picture-of-Dorian-Gray.jpg",
  description: "A man remains physically young while his portrait ages, reflecting the consequences of vanity and corruption."

},
{
  id: 35,
  title: "The Stranger",
  author: "Albert Camus",
  year: 1942,
  genre: "Existential",
  rating: 4.2,
  pages: 123,
  cover: "images/The-Stranger.jpg",
  description: "A detached man commits a senseless act and faces society’s judgment in a story about absurdity and meaning."

},
{
  id: 36,
  title: "Fahrenheit 451",
  author: "Ray Bradbury",
  year: 1953,
  genre: "Dystopian",
  rating: 4.6,
  pages: 249,
  cover: "images/Fahrenheit-451.jpg",
  description: "In a future where books are banned, a fireman begins to question his role in burning knowledge."

},
{
  id: 37,
  title: "The Odyssey",
  author: "Homer",
  year: -700,
  genre: "Epic",
  rating: 4.3,
  pages: 541,
  cover: "images/The-Odyssey.jpg",
  description: "A hero journeys home after war, facing monsters, gods, and trials over many years."

},
{
  id: 38,
  title: "The Iliad",
  author: "Homer",
  year: -750,
  genre: "Epic",
  rating: 4.2,
  pages: 683,
  cover: "images/The-Iliad.jpg",
  description: "An epic tale of the Trojan War, focusing on heroism, anger, and the cost of conflict."

},
{
  id: 39,
  title: "Don Quixote",
  author: "Miguel de Cervantes",
  year: 1605,
  genre: "Classic",
  rating: 4.1,
  pages: 863,
  cover: "images/Don-Quixote.jpg",
  description: "A man sets out to revive chivalry, mistaking reality for fantasy in a humorous and profound journey."

},
{
  id: 40,
  title: "Les Misérables",
  author: "Victor Hugo",
  year: 1862,
  genre: "Historical",
  rating: 4.7,
  pages: 1463,
  cover: "images/Les-Misérables.jpg",
  description: "A former prisoner seeks redemption while being pursued by a relentless inspector in revolutionary France."

},
{
  id: 41,
  title: "The Count of Monte Cristo",
  author: "Alexandre Dumas",
  year: 1844,
  genre: "Adventure",
  rating: 4.8,
  pages: 1276,
  cover: "images/The-Count-of-Monte-Cristo.jpg",
  description: "A man escapes imprisonment and seeks revenge against those who betrayed him."

},
{
  id: 42,
  title: "War and Peace",
  author: "Leo Tolstoy",
  year: 1869,
  genre: "Historical",
  rating: 4.5,
  pages: 1225,
  cover: "images/War-and-Peace.jpg",
  description: "A sweeping narrative of Russian society during the Napoleonic Wars, exploring love, fate, and history."

},
{
  id: 43,
  title: "The Brothers Karamazov",
  author: "Fyodor Dostoevsky",
  year: 1880,
  genre: "Philosophical",
  rating: 4.7,
  pages: 824,
  cover: "images/The-Brothers-Karamazov.jpg",
  description: "A complex story of family conflict, faith, and morality centered around three very different brothers."

},
{
  id: 44,
  title: "Lolita",
  author: "Vladimir Nabokov",
  year: 1955,
  genre: "Classic",
  rating: 4.1,
  pages: 336,
  cover: "images/Lolita.jpg",
  description: "A controversial story told through the perspective of a man obsessed with a young girl."

},
{
  id: 45,
  title: "The Old Man and the Sea",
  author: "Ernest Hemingway",
  year: 1952,
  genre: "Classic",
  rating: 4.3,
  pages: 127,
  cover: "images/The-Old-Man-and-the-Sea.jpg",
  description: "An aging fisherman battles a giant fish in a powerful story of perseverance and pride."

},
{
  id: 46,
  title: "The Giver",
  author: "Lois Lowry",
  year: 1993,
  genre: "Dystopian",
  rating: 4.3,
  pages: 240,
  cover: "images/The-Giver.jpg",
  description: "A boy discovers the hidden truths of his seemingly perfect society and begins to question everything."

},
{
  id: 47,
  title: "Ready Player One",
  author: "Ernest Cline",
  year: 2011,
  genre: "Sci-Fi",
  rating: 4.6,
  pages: 374,
  cover: "images/Ready-Player-One.jpg",
  description: "In a virtual reality world, a teenager competes in a high-stakes quest filled with puzzles and pop culture references."

},
{
  id: 48,
  title: "The Maze Runner",
  author: "James Dashner",
  year: 2009,
  genre: "Dystopian",
  rating: 4.2,
  pages: 375,
  cover: "images/The-Maze-Runner.jpg",
  description: "A group of teens trapped in a mysterious maze must work together to survive and uncover the truth."

},
{
  id: 49,
  title: "Percy Jackson & The Lightning Thief",
  author: "Rick Riordan",
  year: 2005,
  genre: "Fantasy",
  rating: 4.7,
  pages: 377,
  cover: "images/Percy-Jackson-and-The-Lightning-Thief.jpg",
  description: "A boy discovers he is the son of a Greek god and embarks on a quest filled with mythological dangers."

},
{
  id: 50,
  title: "The Silent Patient",
  author: "Alex Michaelides",
  year: 2019,
  genre: "Thriller",
  rating: 4.3,
  pages: 336,
  cover: "images/The-Silent-Patient.jpg",
  description: "A therapist becomes obsessed with uncovering why a woman stopped speaking after committing a shocking crime."
}
];
