import {
  DiscordIcon,
  GithubIcon,
  TelegramIcon,
  TwitterIcon,
} from '../public/icons';
import { PNSButton } from './UI';
import { butonTypes } from './UI/PNSButton';

const items = [
  {
    title: 'Discord',
    desc: 'Join the conversation',
    icon: <DiscordIcon />,
    url: '',
  },
  {
    title: 'Twitter',
    desc: 'Stay updated',
    icon: <TwitterIcon />,
    url: '',
  },
  {
    title: 'Telegram',
    desc: 'Don’t miss anything',
    icon: <TelegramIcon />,
    url: '',
  },
  {
    title: 'Github',
    desc: 'Let’s build the lego together',
    icon: <GithubIcon />,
    url: '',
  },
];

const Communities = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div id="community" className="community">
      <div className="community__wrapper container">
        <div className="community__box left">
          <h2 className="community__title">Stay updated on everything PNS</h2>
          <form onSubmit={handleSubmit} className="community__input-wrapper">
            <input className="community__input" type="email" />
            <PNSButton
              type={butonTypes.button}
              hasIcon={false}
              text="Sign Up"
            />
          </form>
          <div className="community__image" />
        </div>
        <div className="community__box right">
          <h2 className="community__title">Join our communities</h2>
          <div className="community__desc">
            Be a part of our community to stay ahead of the conversations around
            PNS.
          </div>
          <div className="community__items-wrapper">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className={`community__item-wrapper ${
                  index === items.length - 1 && 'last'
                }`}>
                {item.icon}
                <div>
                  <div className="community__item-title">{item.title}</div>
                  <div className="community__item-desc">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
