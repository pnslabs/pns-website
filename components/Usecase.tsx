import Image from 'next/image';

const Usecase = () => {
  return (
    <div className="usecase">
      <div className="usecase__wrapper">
        <div className="usecase__bg"></div>
        <div className="usecase__content container">
          <div className="usecase__left">
            <h2 className="usecase__title">Your mobile number, your wallets</h2>
            <div className="usecase__desc">
              Connect your phone number to multiple addresses on different
              chains. All you need for a seamless crypto experience!
            </div>
            <div className="usecase__icons-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;
