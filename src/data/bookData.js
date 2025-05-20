import harry_potter from "../assets/images/book/harry_potter.jpg";
import The_Great_Gatsby from "../assets/images/book/The_Great_Gatsby.jpg";
import To_Kill_a_Mockingbird from "../assets/images/book/To-Kill-a-Mockingbird.webp";
import romeo_and_juliet from "../assets/images/book/romeo_and_juliet.jpg";
import pride_and_prejudice from "../assets/images/book/pride_and_prejudice.jpg";

const bookData = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 1299,
    poster: harry_potter,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 999,
    poster: The_Great_Gatsby,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Historical Fiction",
    price: 1049,
    poster: To_Kill_a_Mockingbird,
  },
  {
    id: 4,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    genre: "Tragedy",
    price: 875,
    poster: romeo_and_juliet,
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    price: 1125,
    poster: pride_and_prejudice,
  },
];

export default bookData;
