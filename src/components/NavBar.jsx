import { Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import { publicRoutes } from '../routes/public'
import { Link } from 'react-router-dom'

const Navbar = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path)
    setOpen(false)
  }
  return (
    <div className="flex items-center justify-between py-2 backdrop-blur-sm px-1 md:px-3 absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mr-2 text-white bg-white rounded-full">
          <img src={logo} alt="Logo" className="w-8 md:w-12 h-6 md:h-8" />
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-white font-montserrat">Authentic Ghana Tours</h1>
      </div>

      <div className="hidden md:flex items-center justify-between">
        {publicRoutes.map((route, index) => (
          <Link to={route.path} key={index} className="font-semibold text-white px-3 py-2 rounded-md text-sm font-montserrat">
            {route.name}
          </Link>
        ))}
      </div>

      {/* toggler */}
      <div className="flex md:hidden">
        <button className="outline-none mobile-menu-button" onClick={() => setOpen(true)}>
          <svg className=" w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        footer={null}
        width={300}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {publicRoutes.map((route, index) => (
            <p className='text-lg cursor-pointer font-sen' key={index} onClick={() => handleNavigate(route.path)}>{route.name}</p>
          ))}
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar