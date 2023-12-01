import "./navbar2.css";
import logo from "../../Assests/car1.jpg";
import logos from "../../Assests/logo-04.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Navbar2 = () => {

  const navigate = useNavigate();
  let [user, setUser] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
  };

  return (
   
<Navbar fluid rounded className="bg-sky-950">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logos} className="mr-3  h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
         
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active className=""> 
         <span className="headcolor text-lg"> Home </span>
         </Navbar.Link>
        <Navbar.Link href="/stock"><span className="headcolor text-lg">Current Stock</span></Navbar.Link>
        <Navbar.Link href="/sold"><span className="headcolor text-lg">Sold</span></Navbar.Link>
        <Navbar.Link href="/finance"><span className="headcolor text-lg">Finance</span></Navbar.Link>
        <Navbar.Link href="/contact"><span className="headcolor text-lg">Contact</span></Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
