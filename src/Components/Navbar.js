import './Navbar.css';
import {useRef} from 'react';
const Navbar = () => {
  const item = "0";
  const menuBarRef = useRef(null);
  const menuBarHandler = () =>
    menuBarRef.current.style.display === "none"
      ? (menuBarRef.current.style.display = "block")
      : (menuBarRef.current.style.display = "none");

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <div className="text-wrapper">Logo</div>
        </div>
        <div>
        <ul className='nav-link'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#cart">Cart{item}</a>
          </li>
        </ul>
        </div>
        <div className="hire-now">
          <div className="overlap-group">
            <button className="text-wrapper-1">Hire Now</button>
          </div>
        </div>
        <img
          className="hamburger"
          src="/images/menubar.png"
          alt="mobileMenubar"
          onClick={menuBarHandler}
        />
       
      </nav>
      <ul className="deviceview" ref={menuBarRef}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#pages">Pages</a>
        </li>
        <li>
          <a href="#cart">Cart{item}</a>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
