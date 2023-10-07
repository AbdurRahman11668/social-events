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
    <div className="w-2/3 md:w-full md:max-w-5xl mx-auto pt-14" id="services">
        <h3 className="text-5xl text-center font-bold text-teal-700">Services</h3>
      <div className="grid md:grid-cols-2 gap-10 py-14">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
