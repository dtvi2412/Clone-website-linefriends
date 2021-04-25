import React, { useEffect, useState } from 'react';
import './CoreBusiness.scss';

import icon1 from '../../Assets/Image/img_sec_icon4.gif';
import icon2 from '../../Assets/Image/img_sec_icon5.gif';
import icon3 from '../../Assets/Image/img_sec_icon6.gif';

import show1 from '../../Assets/Image/show1.jpg';
import show2 from '../../Assets/Image/show2.jpg';
import show3 from '../../Assets/Image/show3.jpg';
import show4 from '../../Assets/Image/show4.jpg';
import show5 from '../../Assets/Image/show5.jpg';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RoomIcon from '@material-ui/icons/Room';
function CoreBusiness() {
  const coreItems = [
    {
      id: 0,
      name: 'RETAIL',
      description:
        'We introduce a wide range of products which are practical and adorable at home, in the office or even outdoors, LINE FRIENDS makes every occasion special.',
      linkImage: icon1,
    },
    {
      id: 1,
      name: 'PARTNERSHIP',
      description:
        'LINE FRIENDS works with global partners across multiple industries to reach more customers by producing branded consumer products and expanding distribution channels.',
      linkImage: icon2,
    },
    {
      id: 2,
      name: 'CONTENTS',
      description:
        'LINE FRIENDS creates entertainment such as animated movies and games. Reconciling character merchandising and IT, the company is expanding its business to AI and IoT.',
      linkImage: icon3,
    },
  ];
  //Location Image
  const [location, setLocation] = useState(4);
  // List Image Show
  const [listImageShow, setListImageShow] = useState([
    {
      id: 0,
      linkImage: show1,
      name: 'Times square, Newyork',
      check: true,
    },
    {
      id: 1,
      linkImage: show2,
      name: 'Insadong, Seoul',
      check: false,
    },
    {
      id: 2,
      linkImage: show3,
      name: 'APM, Hongkong',
      check: false,
    },
    {
      id: 3,
      linkImage: show4,
      name: 'Hongdae, Seoul',
      check: false,
    },
    {
      id: 4,
      linkImage: show5,
      name: 'Hongdae, Seoul',
      check: false,
    },
  ]);

  const renderCoreItems = () => {
    return coreItems.map((item, index) => {
      return (
        <div key={item.id} className="coreBusiness__items__item">
          <div className="coreBusiness__items__item__image">
            <img src={item.linkImage} alt={`icon${item.id}`} />
            <h1>{item.name}</h1>
          </div>
          <p className="coreBusiness__items__description">{item.description}</p>
        </div>
      );
    });
  };
  //Handle Click Image Change Background
  const handleClickImage = (id) => {
    setLocation(id);
  };
  // Render List Show Image Items
  const renderListImageItems = () => {
    return listImageShow.map((item, index) => {
      return (
        <div key={item.id} className="coreBusiness__listImage__items__item">
          <img
            onClick={() => {
              handleClickImage(item.id);
            }}
            src={item.linkImage}
            alt={`image-show-${item.id}`}
          />
        </div>
      );
    });
  };
  //Render Name Location
  const renderNameLocation = () => {
    // //Check Item === true
    // const checkLocationTrue = listImageShow.filter((item) => item.check);
    // //Render Item true , show Name
    // return checkLocationTrue.map((item, index) => {
    //   return (
    //     <div key={item.id}>
    //       <h1 className="text-location">{item.name}</h1>
    //     </div>
    //   );
    // });

    return (
      <div className="nameLocation">
        <RoomIcon />
        <h1 className="text-location">{listImageShow[location].name}</h1>
      </div>
    );
  };
  //Handle Back Image
  const handleBackImage = () => {
    //Length Array Image
    const length = listImageShow.length;
    if (location > 0) {
      setLocation(location - 1);
    }
    if (location === 0) {
      setLocation(length - 1);
    }
  };
  //Handle Next Image
  const handleNextImage = () => {
    //Length Array Image
    const length = listImageShow.length;
    if (location >= 0) {
      setLocation(location + 1);
    }
    if (location === length - 1) {
      setLocation(0);
    }
  };
  //Set Timeout slide show
  // useEffect(() => {
  //   const length = listImageShow.length;
  //   setInterval(() => {
  //     if (location < length - 1) {
  //       setLocation(location + 1);
  //     }
  //     if (location === length - 1) {
  //       setLocation(0);
  //     }
  //   }, 5000);
  // }, [location]);
  return (
    <section className="coreBusiness">
      <h1 className="coreBusiness__title">CORE BUSINESS</h1>
      <div className="coreBusiness__items">{renderCoreItems()}</div>
      <div className="coreBusiness__contact">
        <a href="#">Contact</a>
      </div>
      <div className="coreBusiness__listImage">
        <img
          className="coreBusiness__listImage__image"
          //Set Location list array images
          src={listImageShow[location].linkImage}
          alt="show"
        />

        <h1 className="location-name">{renderNameLocation()}</h1>
        <div className="coreBusiness__listImage__items">
          {renderListImageItems()}
        </div>
        <div className="coreBusiness__listImage__button">
          <div className="back" onClick={handleBackImage}>
            <ArrowBackIosIcon />
          </div>
          <div className="next">
            <ArrowForwardIosIcon onClick={handleNextImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreBusiness;
