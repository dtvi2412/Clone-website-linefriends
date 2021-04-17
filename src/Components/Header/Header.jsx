import React, { useEffect, useState } from 'react';
import logo from '../../Assets/Image/img_c_logo.png';
import './Header.scss';
function Header() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);
  return (
    <header className={` ${!nav ? `header` : `headerNavWhite`}  `}>
      <h1 className={`${!nav ? 'header__logo' : 'headerNavWhite__logo'}`}>
        {/* <a style={{ background: `url("${logo}") no-repeat` }} href="#"> */}
        <span className="blind">LINE FRIENDS</span>
        {/* </a> */}
      </h1>
      <ul className={`${!nav ? 'header__nav' : 'headerNavWhite__nav'}`}>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CORE BUSINESS</a>
        </li>
        <li>
          <a href="#">GALLERY</a>
        </li>
        <li>
          <a href="#">NOTICE</a>
        </li>
        <li>
          <a href="#">SHOP ONLINE</a>
        </li>
        <li>
          <a href="#">CAREER</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
