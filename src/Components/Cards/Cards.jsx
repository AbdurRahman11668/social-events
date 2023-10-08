import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-2/3 md:w-full md:max-w-5xl mx-auto pt-14" id="events">
      <div className="grid justify-center">
        <h3 className="text-4xl md:text-5xl text-center font-bold text-teal-700 mb-10">
          EVENTS
        </h3>
        <img
          src="https://i.ibb.co/h8mFv3M/line-light-purple.png"
          className="mb-10"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10 pb-14 text-center md:text-start">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
