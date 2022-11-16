import React, { useRef, useEffect , useState } from "react";
import useAuth from '../../custom-hooks/useAuth'

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.jpg";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/CartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "My Order",
    path: "/cart ",
  },
  
];

const Header =(props) => {
  const menuRef = useRef(null);

  const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const reduxState = useSelector((state) => state);
  console.log(reduxState);

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to='/home'>
              <img src={logo} alt="logo" />
              <h5>Fast Now</h5>
            </Link>
          </div>

          {/* ======== menu ====== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* nav  right icons */}
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">     
             <Link to ='/login'> <i class="ri-user-line"></i></Link>
             <ul className="dropdown-menu-nav" id ="user-menu-nav">
              <li></li>
             </ul>
             </span>
             

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
    </>
  );
};

export default Header;
