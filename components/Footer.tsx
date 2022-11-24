import { LinkIcon, LogoWhite } from '../public/icons';

const communityItems = [
  {
    title: 'Discord',
    url: '',
  },
  {
    title: 'Twitter',
    url: '',
  },
  {
    title: 'Github',
    url: '',
  },
  {
    title: 'Telegram',
    url: '',
  },
];

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
          <div>
            <div className="footer__title">Community</div>
            {communityItems.map((item, index) => (
              <a href={item.url} key={index} className="footer__item">
                <LinkIcon />
                <div className="footer__item-title">{item.title}</div>
              </a>
            ))}
          </div>
          <div>
            <div className="footer__title">Foundation</div>
            <a href="#" className="footer__item">
              <div className="footer__item-title">Blog</div>
            </a>
          </div>
        </div>
        <div className="footer__copyright sm">
          Copyright © 2022 PNS Foundation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
