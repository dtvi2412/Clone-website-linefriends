import React, { useEffect, useState } from 'react';
import logo from '../../Assets/Image/img_c_logo.png';
import './Header.scss';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
function Header() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);
  const nameOption = [
    {
      id: 0,
      name: 'ENGLISH',
    },
    {
      id: 1,
      name: 'VIỆT NAM',
    },
    {
      id: 2,
      name: 'SPAIN',
    },
  ];
  //Render Name Option
  const renderNameOption = () => {
    return nameOption.map((item, index) => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });
  };
  //Handle Close Nav
  const handleCloseNav = () => {
    let header = document.getElementById('header');

    //Set Atriibute LEFT SIDE
    header.setAttribute('style', 'transform:translateX(-350px)');
    //Set Menu === True
    //Set TimeOut Menu false
    setTimeout(() => {
      setMenu(false);
    }, 500);
  };
  //Handle Open Nav
  const handleOpenNav = () => {
    setMenu(true);
  };
  return (
    <React.Fragment>
      {menu ? (
        <header
          id="header"
          className={` ${!nav ? `header` : `headerNavWhite`}  `}
        >
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
          <select
            className={`${!nav ? 'header__select' : 'headerNavWhite__select'}`}
          >
            {renderNameOption()}
          </select>
          <div
            onClick={() => {
              handleCloseNav();
            }}
            className={`${!nav ? 'header__close' : 'headerNavWhite__close'}`}
          >
            <CancelPresentationIcon />
          </div>
        </header>
      ) : (
        <div className="openNav" onClick={() => handleOpenNav()}>
          <MenuOpenIcon />
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
