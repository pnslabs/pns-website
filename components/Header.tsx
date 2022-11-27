import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LogoText } from '../public/icons';
import { PNSButton } from './UI';

const linkItems = [
  { name: 'Governance', link: 'governance' },
  { name: 'Team', link: 'team' },
  { name: 'Docs', link: 'docs' },
  { name: 'FAQs', link: 'faqs' },
  { name: 'Community', link: 'community' },
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
  {
    /* <Button text={item.name} /> */
  }
  return (
    <div className={`header__wrapper${!isTop ? ' --fixed' : ''}`}>
      <div className="container">
        <header className="header">
          <div>
            <LogoText />
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
