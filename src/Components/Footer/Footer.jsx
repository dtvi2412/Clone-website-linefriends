import React from 'react';
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h1>LINE FRIENDS</h1>
      </div>
      <div className="footer__list">
        <div>
          <a href="#">Partnership</a>
          <a href="#">ONLINE STORE</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FRIENDS CARE</a>
        </div>
        <p>Copyright © LINE Friends All Rights Reserved</p>
      </div>
      <div className="footer__social">
        <div>
          <FacebookIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <YouTubeIcon />
        </div>
        <div>
          <RedditIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
