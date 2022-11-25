import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/courses"></Route>
      </Routes>
    </div>
  );
}

export default App;
