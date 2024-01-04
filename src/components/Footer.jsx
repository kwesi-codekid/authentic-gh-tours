import logo from '../assets/imgs/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center gap-10 bg-slate-900 px-8 py-5">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className='h-12' />
            <h1 className="text-2xl font-bold text-blue-900 font-dm-serif">Authentic Africa Tours</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer