import Image from 'next/image';
import { PNSButton } from './UI';
import image from '../public/images/code-block.png';
import { BuildersIcon } from '../public/icons';

const Builders = () => {
  return (
    <div className="builders">
      <div className="builders__wrapper container">
        <div className="">
          <div className="builders__title-wrapper">
            <h2 className="builders__title">For builders</h2>
            <div className="builders__icon">
              <BuildersIcon />
            </div>
          </div>
          <div className="builders__desc">
            Start integrating PNS into your crypto wallets and applications.
          </div>
          <PNSButton text="View Doc" />
        </div>
        <Image
          src={image}
          alt="code sample"
          height={600}
          priority={true}
          className="builders__image"
        />
      </div>
    </div>
  );
};

export default Builders;
