import harry_potter from "../../assets/images/book/harry_potter.jpg";
import The_Great_Gatsby from "../../assets/images/book/The_Great_Gatsby.jpg";
import To_Kill_a_Mockingbird from "../../assets/images/book/To-Kill-a-Mockingbird.webp";
import romeo_and_juliet from "../../assets/images/book/romeo_and_juliet.jpg";

const Card = () => {
  const topSellingBooks = [
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      poster: harry_potter,
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
        poster: The_Great_Gatsby,
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        poster: To_Kill_a_Mockingbird,
    },
    {
        id: 4,
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        poster: romeo_and_juliet,
    }
  ];
  return (
    <section className="grid grid-cols-2 gap-4">
        {topSellingBooks?.map((book, index)=> (
      <div key={index} className="w-full h-40 bg-white shadow-md relative overflow-hidden">
        <img
          src={book.poster}
          alt="Book Cover"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text- font-Poppins-SemiBold">{book.title}</h2>
          <p className="text-sm font-Poppins">{book.author}</p>
        </div>
      </div>
        ))}

    </section>
  );
};

export default Card;
