import { FC } from "react";
import { LangType } from "../App/App";

type NotFoundProps = {
  lang: LangType;
};

const NotFound: FC<NotFoundProps> = ({ lang }) => {
  return (
    <main
      style={{
        minHeight: "80vh",
        paddingTop: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>404. {lang === "RU" ? "Страница не найдена" : "Page not found"}</h1>
    </main>
  );
};

export default NotFound;
