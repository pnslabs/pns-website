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
} from '../public/icons';

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
            <div className="usecase__box1">
              <Box>
                <div>
                  Your <span className="usecase__bold">Ethereum</span> and{' '}
                  <span className="usecase__bold">Solana</span> wallet addresses
                  are now connected to your mobile no! 🚀
                </div>
              </Box>
            </div>
            <div className="usecase__box2">
              <Box>
                <div>
                  You can now transfer{' '}
                  <span className="usecase__bold">ETH</span> and{' '}
                  <span className="usecase__bold">SOL</span> using your mobile
                  number. 🥳
                </div>
              </Box>
            </div>
            <Image
              className="usecase__phone-image"
              style={{ objectFit: 'contain' }}
              width={307}
              height={662}
              src="/images/phone.svg"
              alt="phone image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;

const Box = ({ children }: { children: any }) => {
  return (
    <div className="usecase__box">
      <div className="usecase__box-text">{children}</div>
    </div>
  );
};
