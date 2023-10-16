import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/HOme/Home";
import Slider from "./Pages/Slider/Slider";
import Cards from "./Pages/Cards/Cards";
import About from "./Pages/Aboutus/About";
import ProductGroup from "./Pages/FirstPage/ProductGroup/ProductGroup";
import ProductSlider from "./Pages/FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider";
import Services from "./Pages/FirstPage/Services/Services";
// import Login from './Pages/FirstPage/Login/Login';
import FairsComponent from "./Pages/FirstPage/FairsArticle/FairsArticle";
import Footer from "./Pages/Foooter/Footer";
import Corporate from "./Pages/Corporate/Corporate";
import Prducts from "./Pages/Products/Prducts";
import BackgroundDiv from "./Pages/FirstPage/FairsArticle/FairsArticle";
import OurDocument from "./Pages/OurDocuments/OurDocument";
import Contact from "./Pages/ContactForm/Contact";
import MainPage from "./Pages/MainPage/MainPage";
import Teachnical from "./Pages/TeachnicalService/Teachnical";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Productdetail from "./Pages/Products/ProductDetail";
import PaymentPage from "./Pages/Products/Payment";
import Dashbord from "./Pages/AdminDashboard/Dashboard";
import AddProduct from "./Pages/AdminDashboard/DashboardCrud/AddProduct/Addproduct";
import UserDashboard from "./Pages/Userdashboard/UserDashboard";
import Profile from "./Pages/Userdashboard/Profile";
import AddProductuser from "./Pages/Userdashboard/AddProduct";
import Allproduct from "./Pages/Userdashboard/Allproduct";
import { Provider } from "react-redux";
import { CartProvider } from "./Pages/Context/CartContext";
import Store from "./Store";
import { AllProductDashboad } from "./Pages/AdminDashboard/DashboardCrud/AddProduct/AllProduct/AllProduct";
import { MyContextProvider } from "./Pages/Context/Context";
import PrivacyPolicy from "./Pages/Policy/Policy";
import Productdetail2 from "./Pages/Products/ProductDetail2";
import CardPage from "./Pages/CardPage/CardPage";
import HoverButton from "./HowerAnimation/HowerAnimation";
import LoginPage from "./Pages/LoginPage";
import { AllUser } from "./Pages/AdminDashboard/DashboardCrud/Alluser/AllUser";
import { Selectuserproduct } from "./Pages/AdminDashboard/DashboardCrud/Alluser/Selectuserproduct";
import Productrequest from "./Pages/AdminDashboard/Productrequests/Productrequest";
import EdittProduct from "./Pages/Products/Editproduct/editproductcheck";
import EditUser from "./Pages/AdminDashboard/DashboardCrud/Alluser/EditUser";
import Editproductuser from "./Pages/Products/Editproduct/EditproductUser";
import Signform from "./Pages/Signinform/Signform";
import LoginForm from "./Pages/Loginform";

function App() {
  return (
    <div>
      <CartProvider>
        <MyContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<MainPage />} />
              <Route path={"/Corporate"} element={<Corporate />} />
              <Route path={"/About"} element={<About />} />
              <Route path={"/Prducts"} element={<Prducts />} />
              <Route path={"/OurDocument"} element={<OurDocument />} />
              <Route path={"/Contact"} element={<Contact />} />
              <Route path={"/TechnicalService"} element={<Teachnical />} />
              <Route path={"/Login"} element={<Login />} />
              <Route path="/Productdetail" element={<Productdetail />} />
              <Route
                path="/PaymentPage/:totalPrice/:quantity"
                element={<PaymentPage />}
              />
              <Route path="/Dashbord" element={<Dashbord />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/UserDashboard" element={<UserDashboard />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/AddProduct/user" element={<AddProductuser />} />
              <Route path="/Allproduct" element={<Allproduct />} />
              <Route
                path="/AllProductDashboad"
                element={<AllProductDashboad />}
              />
              <Route path="/AllUser" element={<AllUser />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Productdetail2" element={<Productdetail2 />} />
              <Route path="/CardPage" element={<CardPage />} />
              <Route path="/productrequest" element={<Productrequest />} />
              <Route path="/UserProduct" element={<Selectuserproduct />} />
              <Route path="/signupform" element={<Signform />} />
              <Route path="/Loginform" element={<LoginForm />} />
              <Route path="/EditProduct/:id" element={<EdittProduct />} />
              <Route path="/Editproductuser/:id" element={<Editproductuser />} />
              <Route path="/EditUser/:id" element={<EditUser />} />

            </Routes>
          </BrowserRouter>
        </MyContextProvider>
      </CartProvider>
    </div>
  );
}

export default App;
