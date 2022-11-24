import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaqsBlackIcon, FaqsYellowIcon } from '../public/icons';

const items = [
  {
    title: 'What is PNS?',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
  },
  {
    title:
      'If my phone is stolen, does the rouge actor with access to my phone number have access to my wallets?',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
  },
  {
    title: 'What happens when I change my phone number?',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
  },
  {
    title: 'How is my phone number verified?',
    desc: 'PNS is a Phone Number Service that enables people to link their phone numbers to their wallet addresses on-chain. It also resolves wallet addresses to phone numbers.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="faqs">
      <div className="faqs__wrapper">
        <div className="faqs__left-wrapper">
          <div className="faqs__desc">
            Not sure how to get started with the PNS protocol, indulge yourself
          </div>
        </div>
        <div className="faqs__right-wrapper">
          <h2 className="faqs__title">FAQs</h2>
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="faqs__wrapper">
          <div className="faqs__left-wrapper">
            {index === activeIndex ? <FaqsYellowIcon /> : <FaqsBlackIcon />}
          </div>
          <div
            onClick={() => setActiveIndex(index)}
            className={`faqs__content-right-wrapper border ${
              index === items.length - 1 && 'noborder'
            }`}>
            <div className={`faqs__arrow ${index === activeIndex && 'active'}`}>
              {'>'}
            </div>
            <div className="faqs__content-wrapper">
              <div className="faqs__content-title">{item.title}</div>
              <AnimateHeight
                duration={500}
                height={index === activeIndex ? 'auto' : 0}>
                <p className="faqs__content-desc">{item.desc}</p>
              </AnimateHeight>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
