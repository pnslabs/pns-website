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
            {/* <Image
              className="hero__image"
              style={{ objectFit: 'contain' }}
              width={500}
              height={600}
              src="/images/hero-image.svg"
              alt="hero"
            /> */}
            <Image
              src={heroImage}
              alt="hero image"
              height={600}
              priority={true}
              className="hero__img"
            />
          </div>
        </div>
      </div>
      <div className="hero__bg"></div>
    </>
  );
};

export default Hero;
