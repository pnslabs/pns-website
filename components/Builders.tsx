import Image from 'next/image';
import { PNSButton } from './UI';

const Builders = () => {
  return (
    <div className="builders">
      <div className="builders__wrapper">
        <div className="container-left">
          <div className="builders__title-wrapper">
            <h2 className="builders__title">For builders</h2>
          </div>
          <div className="builders__desc">
            Start integrating PNS into your crypto wallets and applications.
          </div>
          <PNSButton text="View Doc" />
        </div>
        <Image
          className="builders__image"
          style={{ objectFit: 'contain' }}
          width={750}
          height={600}
          src="/images/code-block.svg"
          alt="code sample"
        />
      </div>
    </div>
  );
};

export default Builders;
