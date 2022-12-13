import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LogoBlackAlt, LogoText } from '../public/icons';
import { PNSButton } from './UI';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (status?: boolean) => {
    setIsMenuOpen(status || !isMenuOpen);
  };

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
            <Items />
          </nav>
          <div className="header__btn">
            <PNSButton onClick={handleModal} text="Join Waitlist" />
          </div>
          <div onClick={() => handleMenu()} className="header__hamburger">
            {Array.apply(null, Array(3)).map((_, index) => (
              <div key={index} className="header__hamburger-line" />
            ))}
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <MobileHeader handleMenu={handleMenu} isOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default Header;

const MobileHeader = ({
  handleMenu,
  isOpen,
}: {
  handleMenu: (status?: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <div className={`header__mobile ${isOpen ? 'fade-in' : 'fade-out'}`}>
        <div
          onClick={() => handleMenu()}
          className="header__hamburger-line-mobile">
          X
        </div>
        <nav>
          <Items hideMenu={() => handleMenu(false)} />
        </nav>
      </div>
    </>
  );
};

const Items = ({ hideMenu }: { hideMenu?: () => void }) => {
  return (
    <ul className="header__nav-items mobile">
      {linkItems.map(item => (
        <li key={item.name} className="header__nav-item mobile">
          <ScrollLink
            to={item.link}
            className="header__nav-links"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            onClick={hideMenu}>
            {item.name}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};
