import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutPage from "./components/AboutPage";
import Movie from "./components/Movie";
import DetailMovie from "./components/DetailMovie";
import Header from "../src/components/organisms/header/Header";
import Footer from "./components/organisms/footer/Footer";
import SearchPage from "./components/SearchPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/movie/:movieId" element={<DetailMovie />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
