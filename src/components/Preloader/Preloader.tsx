import { FC } from "react";
import "./Preloader.css";

type PreloaderProps = {
  isDarkTheme: boolean;
};

const Preloader: FC<PreloaderProps> = ({ isDarkTheme }) => {
  return (
    <div className="preloader">
      <div className={`lds-roller ${isDarkTheme ? "" : "lds-roller__light"}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
