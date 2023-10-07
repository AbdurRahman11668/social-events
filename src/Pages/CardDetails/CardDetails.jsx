import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find((card) => card.id === idInt);


    return (
        <div className="pb-10">
      <div className="max-w-5xl mx-auto">
        <div className=" max-w-[700px] mx-auto">
          <img
            className="max-w-[700px] mx-auto rounded mt-5"
            src={card.image}
            alt=""
          />
        </div>
        <h3 className="text-4xl font-bold text-teal-600 mt-5">
          {card.name}
        </h3>
        <p className="text-lg text-gray-600 mt-3 font-medium">
          {card.short_description}
        </p>
        <button className="btn bg-teal-600 px-10 hover:bg-teal-800 text-white text-lg mt-5">{card.price}</button>
      </div>
    </div>
    );
};

export default CardDetails;