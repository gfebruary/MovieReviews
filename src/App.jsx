import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moviedetails/:id" element={<MovieDetails />} />
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
