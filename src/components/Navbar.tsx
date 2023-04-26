import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar ">
      <NavLink to="/">
        <div className="logo">
          <h1>Chocomania</h1>
        </div>
      </NavLink>
    </div>
  );
}
