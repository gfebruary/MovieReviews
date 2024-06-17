import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import Films from "./pages/Films";
import Lists from "./pages/Lists";
import Members from "./pages/Members";
import Journal from "./pages/Journal";
import MovieDetails from "./pages/MovieDetails";

import "./App.css";
import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const fetchedMovies = await client.getEntries({
        content_type: "movie",
      });
      setMovies(fetchedMovies.items);
    };

    fetchMovieData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails movies={movies} />}
        />
        <Route path="signin" element={<SignIn />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="films" element={<Films />} />
        <Route path="lists" element={<Lists />} />
        <Route path="members" element={<Members />} />
        <Route path="journal" element={<Journal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
