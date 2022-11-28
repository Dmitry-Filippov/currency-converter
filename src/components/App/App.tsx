import "./App.css";
import { useState, useEffect, FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main, { SelectValue } from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import { ConfigProvider, theme } from "antd";
import { getAllCourses } from "../../api/Api";
import Courses from "../Courses/Courses";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

type CourseType = {
  USD: number;
  EUR: number;
  RUB: number;
};

export type DefaultCoursesType = {
  USD: CourseType;
  EUR: CourseType;
  RUB: CourseType;
} | null;

const App: FC = () => {
  const [defaultCourses, setDefaultCourses] =
    useState<DefaultCoursesType>(null);

  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    getAllCourses()
      .then((res) => {
        setDefaultCourses({
          RUB: { USD: res[0].USD.RUB, EUR: res[0].EUR.RUB, RUB: 1 },
          EUR: { USD: res[1].USD.EUR, RUB: res[1].RUB.EUR, EUR: 1 },
          USD: { EUR: res[2].EUR.USD, RUB: res[2].RUB.USD, USD: 1 },
        });
      })
      .then(() => setLoadingComplete(true));
  }, []);

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

  const [selectValue, setSelectValue] = useState<SelectValue>("RUB");

  return (
    <ConfigProvider
      theme={{
        algorithm: themeAlgorithm,
      }}
    >
      <div className="app">
        {!isLoadingComplete && <Preloader isDarkTheme={isDarkTheme} />}
        {isLoadingComplete && (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <header>
                      <Navigation
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                      />
                      <Main defaultCourses={defaultCourses} />
                    </header>
                  </>
                }
              ></Route>
              <Route
                path="/courses"
                element={
                  <>
                    <header>
                      <Navigation
                        isCoursesPage
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                      />
                    </header>
                    <Courses
                      defaultCourses={defaultCourses}
                      selectValue={selectValue}
                    />
                  </>
                }
              ></Route>
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </ConfigProvider>
  );
};

export default App;
