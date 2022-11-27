import { FC } from "react";
import { DefaultCoursesType } from "../App/App";
import { SelectValue } from "../Main/Main";

type CoursesProps = {
  defaultCourses: DefaultCoursesType;
  selectValue: SelectValue;
};

const Courses: FC<CoursesProps> = ({ defaultCourses, selectValue }) => {
  return (
    <main>
      <h1>Актуальные курсы валют на сегодня:</h1>
      <ul>
        <li>
          {selectValue === "RUB" && <p>1USD = {defaultCourses?.RUB.USD}RUB </p>}
          {selectValue === "USD" && <p>1RUB = {defaultCourses?.USD.RUB}USD </p>}
          {selectValue === "EUR" && <p>1RUB = {defaultCourses?.EUR.RUB}EUR </p>}
        </li>
        <li>
          {selectValue === "RUB" && <p>1EUR = {defaultCourses?.RUB.EUR}RUB </p>}
          {selectValue === "USD" && <p>1EUR = {defaultCourses?.USD.EUR}USD </p>}
          {selectValue === "EUR" && <p>1USD = {defaultCourses?.EUR.USD}EUR </p>}
        </li>
      </ul>
    </main>
  );
};

export default Courses;
