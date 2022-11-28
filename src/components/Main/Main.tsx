import { InputNumber, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { DefaultCoursesType } from "../App/App";
import "./Main.scss";

export type SelectValue = "USD" | "EUR" | "RUB";

type MainProps = {
  defaultCourses: DefaultCoursesType;
};

const Main: FC<MainProps> = ({ defaultCourses }) => {
  const [firstInputValue, setFirstInputValue] = useState<number | null>(5000);
  const [secondInputValue, setSecondInputValue] = useState<number | null>(0);
  const [firstSelectValue, setFirstSelectValue] = useState<SelectValue>("RUB");
  const [secondSelectValue, setSecondSelectValue] =
    useState<SelectValue>("USD");

  const { Option } = Select;

  const firstSelectAfter = (
    <Select
      defaultValue="USD"
      size="large"
      style={{ width: 50 }}
      value={firstSelectValue}
      onChange={(value: SelectValue) => setFirstSelectValue(value)}
    >
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="RUB">₽</Option>
    </Select>
  );

  const secondSelectAfter = (
    <Select
      defaultValue="USD"
      size="large"
      style={{ width: 50 }}
      value={secondSelectValue}
      onChange={(value: SelectValue) => setSecondSelectValue(value)}
    >
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="RUB">₽</Option>
    </Select>
  );

  useEffect(() => {
    if (defaultCourses) {
      setSecondInputValue(defaultCourses.USD.RUB * 5000);
    }
  }, [defaultCourses]);

  useEffect(() => {
    if (firstInputValue && defaultCourses) {
      if (firstSelectValue === "RUB") {
        if (secondSelectValue === "RUB") {
          setSecondInputValue(firstInputValue);
        }
        if (secondSelectValue === "USD") {
          setSecondInputValue(firstInputValue * defaultCourses.USD.RUB);
        }
        if (secondSelectValue === "EUR") {
          setSecondInputValue(firstInputValue * defaultCourses.EUR.RUB);
        }
      }

      if (firstSelectValue === "USD") {
        if (secondSelectValue === "RUB") {
          setSecondInputValue(firstInputValue * defaultCourses.RUB.USD);
        }
        if (secondSelectValue === "USD") {
          setSecondInputValue(firstInputValue);
        }
        if (secondSelectValue === "EUR") {
          setSecondInputValue(firstInputValue * defaultCourses.EUR.USD);
        }
      }

      if (firstSelectValue === "EUR") {
        if (secondSelectValue === "RUB") {
          setSecondInputValue(firstInputValue * defaultCourses.RUB.EUR);
        }
        if (secondSelectValue === "USD") {
          setSecondInputValue(firstInputValue * defaultCourses.USD.EUR);
        }
        if (secondSelectValue === "EUR") {
          setSecondInputValue(firstInputValue);
        }
      }
    }
  }, [defaultCourses, firstInputValue, firstSelectValue, secondSelectValue]);

  const numsCount = (x: any) =>
    x.toString().includes(".") ? x.toString().split(".").pop().length : 0;

  return (
    <main className="main">
      <h1>Конвертер валют</h1>
      <form className="main__form">
        <InputNumber
          controls={false}
          value={
            numsCount(firstInputValue) > 2
              ? firstInputValue?.toFixed(2)
              : firstInputValue
          }
          addonAfter={firstSelectAfter}
          min={1}
          size="large"
          onChange={(value) => setFirstInputValue(Number(value))}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setFirstSelectValue(secondSelectValue);
            setSecondSelectValue(firstSelectValue);
          }}
        ></button>
        <InputNumber
          controls={false}
          value={
            numsCount(secondInputValue) > 2
              ? secondInputValue?.toFixed(2)
              : secondInputValue
          }
          addonAfter={secondSelectAfter}
          min={1}
          size="large"
          onChange={(value) => setSecondInputValue(Number(value))}
          disabled
        />
      </form>
    </main>
  );
};

export default Main;
