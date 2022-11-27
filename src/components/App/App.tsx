import "./App.css";
import { useState, useEffect, FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import { ConfigProvider, theme } from "antd";

const App: FC = () => {
  const useThemeDetector = () => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e: any) => {
      setIsDarkTheme(e.matches);
    };

    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
  };

  const isDarkTheme = useThemeDetector();
  const themeAlgorithm = isDarkTheme
    ? theme.darkAlgorithm
    : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        algorithm: themeAlgorithm,
      }}
    >
      <div className="app">
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/courses"></Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
};

export default App;
