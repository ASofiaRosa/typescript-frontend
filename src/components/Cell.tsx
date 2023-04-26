import { NavLink } from "react-router-dom";
import { useState } from "react";
const eye = require("../assets/eye.gif");

type CategoryProps = {
  id: string;
  name: string;
  brand: string;
  currency: string;
  prices: {
    price: number;
    shop: string;
    link: string;
    unit: number;
    amount: number;
  }[];
  nutrition: {
    fat: { total: number; saturated: number };
    carbohydrates: { total: number; sugar: number };
    protein: number;
    salt: number;
  };
}[];

type DataProps = {
  id: string;
  name: string;
  brand: string;
  category: CategoryProps;
};

export default function Cell({ id, name, brand, category }: DataProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const minPrice = category.reduce(function (prev, curr) {
    return prev.prices[0].price / prev.prices[0].amount <
      curr.prices[0].price / curr.prices[0].amount
      ? prev
      : curr;
  });

  const averagePrice =
    category.reduce((r, c) => r + c.prices[0].price, 0) / category.length;

  return (
    <div
      className="cell"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="card text-center mb-3 mt-5" style={{ width: "19rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Manufacturer: {brand}</p>
          <p className="card-text">
            Lowest price: {minPrice.prices[0].price} {minPrice.currency}
          </p>
          <p className="card-text">
            Average price: {averagePrice.toFixed(2)} {minPrice.currency}
          </p>

          <NavLink className="btn btn-primary" to={minPrice.prices[0].link}>
            Direct Buy
          </NavLink>
        </div>
      </div>
      {isHovering && (
        <div className="eye">
          <NavLink className="eyeNavlink" to={`/${id}`}>
            <img className="eyeGif" src={String(eye)} alt="see more" />
          </NavLink>
        </div>
      )}
    </div>
  );
}
