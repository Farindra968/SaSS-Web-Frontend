
const Card = ({poster, title, author, price}) => {

  return (
    <section >

      <div className="w-full h-40 bg-white shadow-md relative overflow-hidden">
        <img
          src={poster}
          alt="Book Cover"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text- font-Poppins-SemiBold">{title}</h2>
          <p className="text-sm font-Poppins">{author}</p>
        </div>
      </div>


    </section>
  );
};

export default Card;
