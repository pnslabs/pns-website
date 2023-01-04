import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PNSButton } from './UI';
import heroImage from '../public/images/hero-image.png';

const textStates = [
  {
    text: 'web3',
    colorClass: 'black',
  },
  {
    text: 'payments',
    colorClass: 'green',
  },
  {
    text: 'DeFi',
    colorClass: 'red',
  },
];

const Hero = ({ handleModal }: { handleModal: () => void }) => {
  const [text, setText] = useState(textStates[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleText = () => {
    setTimeout(() => {
      setLeaving(false);
      if (textIndex === textStates.length - 1) {
        setTextIndex(0);
        setText(textStates[0]);
      } else {
        setTextIndex(textIndex + 1);
        setText(textStates[textIndex + 1]);
      }
    }, 3000);
  };

  const toggleTextLeaving = () => {
    setTimeout(() => {
      setLeaving(true);
    }, 2200);
  };

  useEffect(() => {
    toggleTextLeaving();
    toggleText();
  }, [textIndex]);
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">
                Unlock the power of{' '}
                <span
                  className={`hero__text ${text.colorClass} ${
                    leaving && 'leaving'
                  }`}>
                  {text.text}
                </span>{' '}
                with your mobile phone.
              </h1>
              <h6 className="hero__desc">
                The PNS protocol is a chain agnostic smart contract that
                connects wallet addresses to phone numbers
              </h6>
              <div className="hero__action_wrapper">
                <PNSButton onClick={handleModal} text="Join Waitlist" />
                <div className="hero__divider" />
                <PNSButton
                  hasIcon={false}
                  variant="outline"
                  text="Documentation"
                />
              </div>
            </div>
            <div className="hero__img-wrapper">
              <div className="hero__box top">
                <div className="hero__box-text">
                  You have succesfully sent{' '}
                  <span className="hero__box-text-inner">$234.95</span> to{' '}
                  <span className="hero__box-text-inner">+971-234-761-221</span>{' '}
                  🥳
                </div>
              </div>
              <Image
                src={heroImage}
                alt="hero image"
                height={600}
                priority={true}
              />
              <div className="hero__box bottom">
                <div className="hero__box-text">
                  <span className="hero__box-text-inner">Kamzy</span>, your
                  mobile no{' '}
                  <span className="hero__box-text-inner">+971-234-761-221</span>{' '}
                  just recieved{' '}
                  <span className="hero__box-text-inner">$234.95</span> from{' '}
                  <span className="hero__box-text-inner">Codemathics</span> 🥳
                </div>
              </div>
            </div>

            <div className="hero__box-sm top">
              <div className="hero__box-text">
                You have succesfully sent{' '}
                <span className="hero__box-text-inner">$234.95</span> to{' '}
                <span className="hero__box-text-inner">+971-234-761-221</span>{' '}
                🥳
              </div>
            </div>
            <Image
              src={heroImage}
              alt="hero image"
              height={600}
              priority={true}
              className="hero__img"
            />
            <div className="hero__box-sm bottom">
              <div className="hero__box-text">
                <span className="hero__box-text-inner">Kamzy</span>, your mobile
                no{' '}
                <span className="hero__box-text-inner">+971-234-761-221</span>{' '}
                just recieved{' '}
                <span className="hero__box-text-inner">$234.95</span> from{' '}
                <span className="hero__box-text-inner">Codemathics</span> 🥳
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__bg"></div>
    </>
  );
};

export default Hero;
