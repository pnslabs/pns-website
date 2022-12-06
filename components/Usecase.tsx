import Image from 'next/image';
import {
  UsdtIcon,
  EthIcon,
  CompIcon,
  BtcIcon,
  BnbIcon,
  MaticIcon,
  SolIcon,
  UniIcon,
  UsdcIcon,
  BusdIcon,
  NearIcon,
  MakerIcon,
  FileCoinIcon,
  BitcoinIcon,
  ConnectorIcon,
  UsecasePolygonIcon,
  UsecaseDaiIcon,
} from '../public/icons';
import image from '../public/images/phone.png';

const Usecase = () => {
  return (
    <div className="usecase">
      <div className="usecase__wrapper">
        <div className="usecase__bg" />
        <div className="usecase__content container">
          <div className="usecase__left">
            <h2 className="usecase__title">Your mobile number, your wallets</h2>
            <div className="usecase__desc">
              Connect your phone number to multiple addresses on different
              chains. All you need for a seamless crypto experience!
            </div>
            <div className="usecase__icons-wrapper">
              <EthIcon />
              <BtcIcon />
              <UsdtIcon />
              <BnbIcon />
              <CompIcon />
              <MaticIcon />
              <BusdIcon />
              <UniIcon />
              <UsdcIcon />
              <SolIcon />
              <MakerIcon />
              <UsdtIcon />
              <NearIcon />
              <FileCoinIcon />
              <BitcoinIcon />
            </div>
            <div className="usecase__connector">
              <ConnectorIcon />
            </div>
          </div>
          <div className="usecase__right">
            <div className="usecase__polygon">
              <UsecasePolygonIcon />
            </div>
            <Box classname="box1">
              <div>
                Your <span className="usecase__bold">Ethereum</span> and{' '}
                <span className="usecase__bold">Solana</span> wallet addresses
                are now connected to your mobile no! 🚀
              </div>
            </Box>
            <Box classname="box2">
              <div>
                You can now transfer <span className="usecase__bold">ETH</span>{' '}
                and <span className="usecase__bold">SOL</span> using your mobile
                number. 🥳
              </div>
            </Box>
            <Image
              src={image}
              alt="phone image"
              height={550}
              priority={true}
              className="usecase__phone-image"
            />
            <div className="usecase__dai">
              <UsecaseDaiIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;

const Box = ({ classname, children }: { children: any; classname: string }) => {
  return (
    <div className={`usecase__box ${classname}`}>
      <div className="usecase__box-text">{children}</div>
    </div>
  );
};
