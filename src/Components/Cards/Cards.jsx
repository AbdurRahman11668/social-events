import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  
  const btnWidth = {
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '100px'
  }
  return (
    <div className="w-2/3 md:w-full md:max-w-5xl mx-auto pt-14" id="services">
        <h3 className="text-5xl text-center font-bold text-teal-700">Services</h3>
      <div className="grid md:grid-cols-2 gap-10 py-14">
        {cards.slice(0, dataLength).map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
      <div  className={dataLength === cards.length ? 'hidden' : ''} style={btnWidth}>
        <button onClick={()=> setDataLength(cards.length)} className="px-7 py-2 font-bold rounded text-white bg-teal-600 hover:bg-teal-800 ">Show All</button>
      </div>
    </div>
  );
};

export default Cards;
