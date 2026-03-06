import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Partner from "../pages/Partner";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/partner", element: <Partner /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
];