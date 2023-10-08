import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { id, name, image, short_description, price } = card;
  return (
    <div className="card card-compact">
      <Link to={`/card/${id}`}>
        <div>
          <figure>
            <img className="mb-1 rounded-lg" src={image} alt="" />
          </figure>
          <h4 className="py-2 text-teal-600 font-semibold text-2xl">{name}</h4>
          {short_description.length > 200 ? 
          <p>{short_description.slice(0, 200)}</p>
          : 
        <p>{short_description}</p>}
        <Link to={`/card/${id}`} className="text-blue-600 font-bold text-lg"><button className="w-full mt-5 bg-teal-600 text-white hover:bg-teal-800 py-2 rounded">Show Details</button></Link> 
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
