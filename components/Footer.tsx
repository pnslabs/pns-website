import { LogoWhite } from '../public/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <div>
          <div className="footer__logo-wrapper">
            <LogoWhite />
            <div className="footer__logo-text-wrapper">
              <h3 className="footer__logo-title">Phone Number Service</h3>
              <h6 className="footer__logo-title-sub">pns.foundation</h6>
            </div>
          </div>
          <div className="footer__copyright">
            Copyright © 2022 PNS Foundation. All rights reserved.
          </div>
        </div>
        <div className="footer__content-wrapper">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
