
import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "../routes/public"

// Components
import Footer from "../components/Footer"
import Header from "../components/Header"

const Public = () => {
  
  return (
    <div>
      {/* Header banner */}
      
      <Header />

      {/* Routes */}
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        ))}
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Public