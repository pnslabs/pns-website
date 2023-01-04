const items = [
  {
    title: 'DeFi Degens & Plebs',
    desc: 'Stay up-to-date on your web3 activities ( wallet transfers, governance, trades etc. ) and never get liquidated on your DeFi positions.',
  },
  {
    title: 'Protocols',
    desc: 'Send notifications and messages to your protocol users ( e.g escrows, renewals, lending / borrowing, ENS expiry, airdrops etc ).',
  },
];

const Notification = () => {
  return (
    <div className="notification">
      <div className="container">
        <h2 className="notification__title">PNS as a notification service</h2>
        <div className="notification__desc">
          The PNS protocol is designed to provide users with a secure and
          convenient way to receive notifications about their web3 and DeFi
          activities.
        </div>
        <div className="notification__items">
          {items.map((item, index) => (
            <div key={index} className="notification__item">
              <div className="notification__item-title">{item.title}</div>
              <div className="notification__item-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
