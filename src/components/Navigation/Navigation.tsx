import { Select } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { LangType } from "../App/App";
import { SelectValue } from "../Main/Main";
import "./Navigation.scss";

type NavigationProps = {
  isCoursesPage?: boolean;
  selectValue: SelectValue;
  setSelectValue: Function;
  lang: LangType;
  setLang: Function;
};

const { Option } = Select;

const Navigation: FC<NavigationProps> = ({
  isCoursesPage,
  selectValue,
  setSelectValue,
  lang,
  setLang,
}) => {
  return (
    <nav className="navigation">
      <div className="navigation__langs">
        <Select value={lang} onChange={(value) => setLang(value)}>
          <Option value="RU">RU</Option>
          <Option value="EN">EN</Option>
        </Select>
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
      </div>
      <ul className="navigation__links">
        <li>
          <Link to="/">{lang === "RU" ? "Конвертер" : "Converter"}</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/courses">
            {lang === "RU" ? "Курсы валют" : "Exchange rates"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
