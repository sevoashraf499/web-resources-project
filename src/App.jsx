import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  return (
    <div className="flex">
      <Nav />
      <div className="mx-20 w-full">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Videos" element={<CardsContainer page="videos" />} />
          <Route
            path="/Websites"
            element={<CardsContainer page="websites" />}
          />
          <Route
            path="/Challenges"
            element={<CardsContainer page="challenges" />}
          />
          <Route path="/Books" element={<CardsContainer page="books" />} />
          <Route path="/Tools" element={<CardsContainer page="tools" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
