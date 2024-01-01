import React, {useState} from "react"
import { Fade } from "react-awesome-reveal"
import { publicRoutes } from "../routes/public"
import { useLocation } from "react-router-dom"

import Navbar from "./NavBar"

const Header = () => {
  const location = useLocation()
  const { pathname } = location
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <div className="bg-coming-soon flex flex-col justify-center h-[250px] md:h-[500px] bg-no-repeat bg-cover px-10 relative">
      <Navbar open={isMenuOpen} setOpen={setIsMenuOpen} />
      <Fade direction="down" triggerOnce cascade>
        {/* header text */}
        <h1 className="text-white font-dm-serif text-4xl md:text-7xl">{publicRoutes.map((route, index) => 
          route.path === pathname && route.headerText
        )}</h1>

        {/* subheader text */}
        <h2 className="text-slate-50 font-quicksand text-lg md:text-2xl">{publicRoutes.map((route, index) => 
          route.path === pathname && route.subHeaderText
        )}</h2>
      </Fade>
    </div>
  )
}

export default Header