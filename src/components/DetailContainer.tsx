import { NavLink } from "react-router-dom";

type DataProps = {
  price: number;
  amount: number;
  link: string;
  currency: string;
  unit: string;
};

export default function DetailContainer({
  price,
  amount,
  link,
  currency,
  unit,
}: DataProps) {
  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card">
        <div className="text-center card-body">
          <h5 className="card-title">
            {price} {currency} / {amount} {unit}
          </h5>
          <NavLink className="btn btn-primary" to={link}>
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}
