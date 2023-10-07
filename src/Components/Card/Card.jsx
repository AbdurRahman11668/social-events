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
          {short_description.length > 200 ? <p>{short_description.slice(0, 200)}<Link to={`/card/${id}`} className="text-blue-600 ml-3 font-bold text-xl">Read More...</Link></p> : 
        <p>{short_description}</p>}
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
