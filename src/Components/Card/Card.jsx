import React from 'react';
import './Card.scss';
import thumb1 from '../../Assets/Image/img_ip_thumb1_v2.jpg';
import thumb2 from '../../Assets/Image/img_ip_thumb2_v2.jpg';
import thumb3 from '../../Assets/Image/img_ip_thumb3_v2.jpg';
import thumb4 from '../../Assets/Image/img_ip_thumb4_v2.jpg';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
function Card() {
  const listCard = [
    {
      id: 0,
      title: 'BROWN & FRIENDS',
      description:
        'Originally created as stickers for leading mobile messenger application LINE and its 200 million active users, BROWN & FRIENDS has expanded beyond mobile use and developed into a highly successful character brand, introducing variety of products and contents in collaboration with global partners.',
      more: 'OFFICIAL CHANNEL',
      mores: '',
      linkImage: thumb1,
    },
    {
      id: 1,
      title: 'BT21',
      description:
        'Created in collaboration with global superstar BTS, BT21 is winning the hearts of millennials worldwide. It is also the first outcome of "FRIENDS CREATORS" platform, where LINE FRIENDS team up with influential artists to create new characters for  IP & content business',
      more: 'OFFICIAL CHANNEL',
      mores: 'CHARACTERS',
      linkImage: thumb2,
    },
    {
      id: 2,
      title: 'ROY6',
      description:
        'LINE FRIENDS collaborated with Chinese idol star Roy Wang to launch ROY6, the second outcome of "FRIENDS CREATORS" . ROY6 presents a lineup of characters whose appearance, personality, capability and storytelling reflects Roy Wang’s  irresistible charms.',
      more: 'OFFICIAL CHANNEL',
      mores: 'CHARACTERS',
      linkImage: thumb3,
    },
    {
      id: 3,
      title: 'Brawl Stars',
      description:
        "Supercell's smash-hit mobile game Brawl Stars has ventured out of the mobile screen through LINE FRIENDS' creativity and strategic know-how of characters. LINE FRIENDS, the official global licensee of Brawl Stars' character IP, expands the Brawl Stars universe further through a wide range of physical products and digital content.",
      more: 'OFFICIAL CHANNEL',
      mores: '',
      linkImage: thumb4,
    },
  ];
  //Render Card
  const renderCard = () => {
    return listCard.map((item, index) => {
      return (
        <div key={item.id} className="card__content__item">
          <img src={item.linkImage} alt={`img-thumb-${item.id}`} />

          <div className="card__content__item__text">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="card__content__item__text__more">
              <h2>
                {item.more}
                <ArrowRightIcon />
              </h2>
              <h2>
                {item.mores}
                {item.mores !== '' && <ArrowRightIcon />}
              </h2>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="card">
      <div className="card__content">{renderCard()}</div>
    </section>
  );
}

export default Card;
