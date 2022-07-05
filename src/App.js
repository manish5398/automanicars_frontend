import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import Compare from "./Screens/Compare";
import Contact from "./Screens/Contact";
import New from "./Screens/New";
import Newsingle from "./Screens/Newsingle";
import Blog from "./Screens/Blog";
import Error from "./Screens/Error";
import Sellcar from "./Screens/Sellcar";
import Login from "./Screens/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new" element={<New />} />
          <Route path="/newsingle" element={<Newsingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/error" element={<Error />} />
          <Route path="/sellcar" element={<Sellcar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
