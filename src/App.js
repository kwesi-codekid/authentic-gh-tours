// import pages
import { Routes, Route } from "react-router-dom"

// import layouts
import Public from "./layouts/Public"
import Protected from "./layouts/Protected"
import PackageDetail from "./layouts/PackageDetail";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<Public />}></Route>
        <Route path="/admin" element={<Protected />}></Route>
        <Route path="/package/:id" element={<PackageDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
