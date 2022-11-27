import { Select } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { SelectValue } from "../Main/Main";
import "./Navigation.scss";

type NavigationProps = {
  isCoursesPage?: boolean;
  selectValue: SelectValue;
  setSelectValue: Function;
};

const { Option } = Select;

const Navigation: FC<NavigationProps> = ({
  isCoursesPage,
  selectValue,
  setSelectValue,
}) => {
  return (
    <nav className="navigation">
      <div className={`currancy ${isCoursesPage ? "currancy__visible" : ""}`}>
        <Select
          value={selectValue}
          onChange={(value) => setSelectValue(value)}
          className={`currancy ${isCoursesPage ? "currancy__visible" : ""}`}
        >
          <Option value="USD">$</Option>
          <Option value="EUR">€</Option>
          <Option value="RUB">₽</Option>
        </Select>
      </div>
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
