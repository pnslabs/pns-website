import Image from 'next/image';
import { PNSButton } from './UI';
import heroImage from '../public/images/hero-image.svg';

const Hero = ({ handleModal }: { handleModal: () => void }) => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">
                Unlock the power of Web3 with your mobile phone.
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
