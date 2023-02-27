import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import heroImage from '../public/images/rectangle.png';
import heroDesktopImage from '../public/images/rectangle-desktop.png';
import heroImageMobile from '../public/images/rectangle2.png';
import { PNSButton, PNSModal } from '../components/UI';
import { butonTypes } from '../components/UI/PNSButton';
import {
  Discord,
  Github,
  GreenCircle,
  GreenLine,
  LogoWhite,
  PurpleCircle,
  PurpleLine,
  RedCircle,
  RedLine,
  Telegram,
  Twitter,
  YellowCircle,
  YellowLine,
} from '../public/icons';
import { ModalBody } from '../components';

const links = [
  {
    link: 'https://discord.gg/THHZAsT7sj',
    icon: <Discord />,
  },
  {
    link: 'https://twitter.com/pnslabs',
    icon: <Twitter />,
  },
  {
    link: 'https://github.com/pnslabs',
    icon: <Github />,
  },
  {
    link: 'https://t.me/pnslabs',
    icon: <Telegram />,
  },
];

const textStates = [
  {
    text: 'Web3',
    colorClass: 'red',
    x: 8,
  },
  {
    text: 'DeFi',
    colorClass: 'green',
    x: 10,
  },
  {
    text: 'Payments',
    colorClass: 'yellow',
    x: 7,
  },
];

export default function Home() {
  const div = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState(textStates[0]);
  const [textIndex, setTextIndex] = useState(0);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleText = () => {
    setTimeout(() => {
      gsap.to('.home__title-sub', { duration: 0.5, opacity: 0 });
      setTimeout(() => {
        if (textIndex === textStates.length - 1) {
          setTextIndex(0);
          setText(textStates[0]);
          gsap.to(`.home__num`, {
            x: textStates[0].x,
            duration: 1,
          });
          gsap.to(`.home__title-sub`, {
            duration: 1,
            opacity: 1,
          });
        } else {
          setTextIndex(textIndex + 1);
          setText(textStates[textIndex + 1]);
          gsap.to(`.home__num`, {
            x: textStates[textIndex + 1].x,
            duration: 1,
          });
          gsap.to(`.home__title-sub`, {
            duration: 1,
            opacity: 1,
          });
        }
      }, 500);
    }, 2500);
  };

  useEffect(() => {
    toggleText();
  }, [textIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.home__logo', { duration: 0.6, y: 25, opacity: 0 });
      gsap.from('.home__nav-link', {
        duration: 0.4,
        y: 25,
        opacity: 0,
        stagger: 0.2,
      });

      const tl = gsap.timeline({});

      tl.from('.first', { delay: 0.6, duration: 0.2, opacity: 0, y: 10 })
        .from('.sub', {
          duration: 0.25,
          opacity: 0,
          y: 25,
        })
        .from('.home__title-desc', { duration: 0.4, opacity: 0, y: 45 })
        .from('.home__button-wrapper', { duration: 0.3, opacity: 0, y: 45 })
        .from('.home__img, .home__img-mobile, .home__img-desktop', {
          duration: 0.3,
          opacity: 0,
          y: 150,
        });

      const yellowLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      yellowLine
        .from('.yellow-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.yellow-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.yellow-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.yellow-line', {
          duration: 0.3,
          left: '50%',
        })
        .to('.yellow-line', {
          duration: 0.1,
          left: '20%',
        })
        .to('.yellow-line', {
          duration: 0.1,
          opacity: 0,
        });

      const purpleLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      purpleLine
        .from('.purple-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.purple-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.purple-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.purple-line', {
          duration: 0.1,
          left: '40%',
        })
        .to('.purple-line', {
          duration: 0.1,
          opacity: 0,
        });

      const greenLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      greenLine
        .from('.green-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 1,
        })
        .to('.green-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.green-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.green-line', {
          duration: 0.1,
          y: 300,
        })
        .to('.green-line', {
          duration: 0.1,
          opacity: 0,
        });

      const redLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      redLine
        .from('.red-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.red-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.red-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.red-line', {
          duration: 0.3,
          y: 200,
        })
        .to('.red-line', {
          duration: 0.1,
          opacity: 0,
        });
    }, div);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PNSModal
        onClose={handleModal}
        isOpen={isModalOpen}
        children={
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY!}>
            <ModalBody handleModal={handleModal} />
          </GoogleReCaptchaProvider>
        }
      />

      <div ref={div} className="home">
        <nav className="home__nav container">
          <div className="home__logo">
            <LogoWhite />
          </div>
          <div className="home__nav-links">
            {links.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.link}
                rel="noopener noreferrer">
                <div className="home__nav-link">{item.icon}</div>
              </a>
            ))}
          </div>
        </nav>
        <div className="home__wrapper">
          <div className="home__inner-wrapper container">
            <div className="home__title-wrapper">
              <div className="home__title-inner">
                <h1 className="home__title first">Mobile Phone</h1>
                <h1 className="home__title sub">
                  <div className="home__num"> Number + </div>

                  <div className={`home__title-sub ${text.colorClass}`}>
                    {text.text}
                  </div>
                </h1>
                <div className="home__yellow yellow-circle">
                  <YellowCircle />
                </div>
                <div className="home__yellow yellow-line">
                  <YellowLine />
                </div>
              </div>
              <p className="home__title-desc">
                Phone Number Service (PNS) is a protocol designed to connect a
                phone number to wallet addresses on the Ethereum Blockchain
              </p>
            </div>
            <div className="home__button-wrapper">
              <PNSButton
                fullWidth={false}
                hasIcon
                onClick={handleModal}
                text={'Join Waitlist'}
                type={butonTypes.button}
              />
            </div>
            <div className="home__green green-circle">
              <GreenCircle />
            </div>
            <div className="home__green green-line">
              <GreenLine />
            </div>
          </div>
          <div className="home__img-wrapper">
            <Image
              priority={true}
              height={317}
              style={{ objectFit: 'contain', width: '100%' }}
              src={heroImage}
              alt="sample"
              className="home__img"
            />
            <Image
              priority={true}
              height={617}
              style={{ objectFit: 'contain', width: '100%' }}
              src={heroDesktopImage}
              alt="sample"
              className="home__img-desktop"
            />
            <div className="home__purple purple-circle">
              <PurpleCircle />
            </div>
            <div className="home__purple purple-line">
              <PurpleLine />
            </div>
          </div>
          <Image
            priority={true}
            style={{ objectFit: 'contain', width: '100%' }}
            src={heroImageMobile}
            alt="sample"
            className="home__img-mobile"
          />
          <div className="home__community mobile">Join our communities.</div>
          <div className="home__nav-links-mobile">
            {links.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.link}
                rel="noopener noreferrer">
                <div className="home__nav-link">{item.icon}</div>
              </a>
            ))}
          </div>
          <div className="home__red red-circle">
            <RedCircle />
          </div>
          <div className="home__red red-line">
            <RedLine />
          </div>
        </div>
      </div>
      <div className="home__bg-image" />
      <div className="home__bg-image2" />
      <div className="home__bg-noise" />
    </>
  );
}
