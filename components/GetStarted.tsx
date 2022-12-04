import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import {
  FaqArrowIcon,
  FaqsYellowIcon,
  GetStartedOneIcon,
  GetStartedTwoIcon,
} from '../public/icons';

const items = [
  {
    title: 'Search',
    desc: 'When you launch app, search for your mobile number in the search field provided and click on search for the system to scan, wait a few seconds to get a response and move on to the next 👇🏻',
    icon: <FaqsYellowIcon />,
    active: true,
  },
  {
    title: 'Confirm mobile number',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
    icon: <GetStartedOneIcon />,
    active: false,
  },
  {
    title: 'Connect',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
    icon: <GetStartedTwoIcon />,
    active: false,
  },
];

const GetStarted = () => {
  const [data, setData] = useState(items);

  const handleActive = (index: number) => {
    let newItems = [...data];
    newItems[index].active = !newItems[index].active;
    newItems.forEach((item, idx) => {
      if (idx !== index) {
        item.active = false;
      }
    });
    setData(newItems);
  };
  return (
    <div className="getstarted">
      <div className="container">
        <div className="getstarted__wrapper">
          <div className="getstarted__left-wrapper">
            <div className="getstarted__desc">
              Link your mobile number with all of your Ethereum-compatible
              wallet addresses with this easy steps.
            </div>
          </div>
          <div className="getstarted__right-wrapper">
            <h2 className="getstarted__title">Getting started</h2>
          </div>
        </div>
        {data.map((item, index) => (
          <div key={index} className="getstarted__wrapper">
            <div className="getstarted__left-wrapper">{item.icon}</div>
            <div
              onClick={() => handleActive(index)}
              className={`getstarted__content-right-wrapper border ${
                index === items.length - 1 && 'noborder'
              }`}>
              <div className={`getstarted__arrow ${item.active && 'active'}`}>
                <FaqArrowIcon color={item.active && '#000000'} />
              </div>
              <div className="getstarted__content-wrapper">
                <div
                  className={`getstarted__content-title ${
                    item.active && 'active'
                  }`}>
                  {item.title}
                </div>
                <AnimateHeight duration={500} height={item.active ? 'auto' : 0}>
                  <p className="getstarted__content-desc">{item.desc}</p>
                </AnimateHeight>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
