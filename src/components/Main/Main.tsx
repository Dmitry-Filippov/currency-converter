import { InputNumber, Select } from "antd";
import { FC, useState } from "react";
import "./Main.scss";

type SelectValue = "USD" | "EUR" | "RUB";

const Main: FC = () => {
  const [inputValue, setInputValue] = useState(5000);
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

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <main>
      <h1>Конвертер валют</h1>
      <form className="main__form">
        <InputNumber
          controls={false}
          value={inputValue}
          addonAfter={firstSelectAfter}
          min={1}
          size="large"
          onChange={handleInputChange}
        />
        <p>=</p>
        <InputNumber
          controls={false}
          value={inputValue}
          addonAfter={secondSelectAfter}
          min={1}
          size="large"
          onChange={handleInputChange}
        />
      </form>
    </main>
  );
};

export default Main;
