import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavList from './components/header'
import App from "./App";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

import "./App.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <NavList />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);