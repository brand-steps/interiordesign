import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Customer/Home/HomePage";

function App() {
  let backendurl = "https://easy-erin-clownfish-ring.cyclic.ap p/"
  let newurl = "https://quaint-pocketbook-bat.cyclic.a pp"
  let vercelurl = "https://list-back-gn1y.vercel.ap p"
  let locals = "http://localhost:800 0"

  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
