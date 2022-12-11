import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LogoBlackAlt, LogoText } from '../public/icons';
import { PNSButton } from './UI';
import { FaqArrowIcon } from '../public/icons';

const communityChildren = [
  { name: 'Discord', link: 'https://discord.gg/6Z2Y4Z8' },
  { name: 'Twitter', link: 'https://twitter.com/Polkastarter' },
  { name: 'Telegram', link: 'https://t.me/polkastarter' },
  { name: 'Medium', link: 'https://medium.com/polkastarter' },
];

const linkItems = [
  { name: 'Governance', link: 'governance' },
  { name: 'Team', link: 'team' },
  { name: 'Docs', link: 'docs' },
  { name: 'FAQs', link: 'faqs' },
  { name: 'Community', link: 'community', children: communityChildren },
];

const Header = ({ handleModal }: { handleModal: () => void }) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`header__wrapper${!isTop ? ' --fixed' : ''}`}>
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <LogoText />
          </div>
          <div className="header__logo-sm">
            <LogoBlackAlt />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-items">
              {linkItems.map(item => (
                <li key={item.name} className="header__nav-item">
                  <ScrollLink
                    to={item.link}
                    className="header__nav-links"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}>
                    {item.name}
                  </ScrollLink>
                  {item.children && (
                    <div className="header__arrow">
                      <FaqArrowIcon color="#A3A3A3" />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <PNSButton onClick={handleModal} text="Join Waitlist" />
        </header>
      </div>
    </div>
  );
};

export default Header;
