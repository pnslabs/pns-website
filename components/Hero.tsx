import { PNSButton } from './UI';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              Unlock the power of Web3 with your mobile phone.
            </h1>
            <h6 className="hero__desc">
              The PNS protocol is a chain agnostic smart contract that connects
              wallet addresses to phone numbers
            </h6>
            <div className="hero__action_wrapper">
              <PNSButton text="Join Waitlist" />
              <div className="hero__divider" />
              <PNSButton
                hasIcon={false}
                variant="outline"
                text="Documentation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
