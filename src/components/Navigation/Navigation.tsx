import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation:FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <Link to="/">Конвертер</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/courses">Курсы валют</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
