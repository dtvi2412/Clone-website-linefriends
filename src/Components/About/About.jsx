import React from 'react';
import './About.scss';
import thumb from '../../Assets/Image/img_about_thumb.jpg';
function About() {
  return (
    <section className="about">
      <h1 className="about__title">ABOUT LINE FRIENDS</h1>
      <p className="about__text">
        LINE FRIENDS began with the introduction of sticker characters 'BROWN &
        FRIENDS' for leading mobile messenger app LINE and its active worldwide
        user base of 200 million. Since then, the company has emerged as a
        global creative studio based on its range of exclusive Intellectual
        Property's(IP) including 'BT21'– characters created in collaboration
        with worldwide pop-sensation BTS, and Supercell's mobile hit game 'Brawl
        Stars', winning the hearts and minds of the youth worldwide.
      </p>
      <p className="about__text">
        LINE FRIENDS continues to partner with leading brands across the
        industry such as Netflix, Supercell, Tencent and Big Hit Entertainment,
        to create an exclusive range of media and entertainment content, proving
        the limitless potential of character IP’s.
      </p>
      <a href="#" className="about__thumb">
        <img className="about__thumb__image" src={thumb} alt="thumb-about" />
      </a>
    </section>
  );
}

export default About;
