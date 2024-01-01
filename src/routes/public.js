import ComingSoon from "../pages/public/ComingSoon"
import Homepage from "../pages/public/Homepage"
import About from "../pages/public/About"
import Contact from "../pages/public/Contact"
import Gallery from "../pages/public/Gallery"
import Packages from "../pages/public/Packages"

export const publicRoutes = [
  {
    path: "/",
    component: Homepage,
    exact: true,
    name: "Home",
    headerText: "Home",
    subHeaderText: "Welcome to the home page",
  },
  {
    path: "/about",
    component: About,
    exact: true,
    name: "About",
    headerText: "About Us",
    subHeaderText: "Get to know us"
  },
  {
    path: "/packages",
    component: Packages,
    exact: true,
    name: "Packages",
    headerText: "Packages",
    subHeaderText: "Browse our packages"
  },
  {
    path: "/gallery",
    component: Gallery,
    exact: true,
    name: "Gallery",
    headerText: "Gallery",
    subHeaderText: "Browse our gallery"
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
    name: "Contact",
    headerText: "Contact Us",
    subHeaderText: "Get in touch with us"
  },
]