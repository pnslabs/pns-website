import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { gsap } from 'gsap';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { TwitterShareButton } from 'react-share';

import heroImage from '../public/images/rectangle.png';
import recaptchaImage from '../public/images/RecaptchaLogo.png';
import heroImageMobile from '../public/images/rectangle2.png';
import { PNSButton, PNSInput, PNSModal } from '../components/UI';
import { butonTypes, outlineTypes } from '../components/UI/PNSButton';
import {
  CancelIcon,
  Discord,
  DiscordBlack,
  Github,
  GreenCircle,
  GreenLine,
  LogoWhite,
  PurpleCircle,
  PurpleLine,
  RecaptchaIcon,
  RedCircle,
  RedLine,
  Telegram,
  Twitter,
  TwitterBlack,
  YellowCircle,
  YellowLine,
} from '../public/icons';
import Lottie from 'react-lottie';
import animationData from '../lottie/pns-welcome.json';

const discordLink = 'https://discord.gg/D7mFfmyF';

const links = [
  {
    link: discordLink,
    icon: <Discord />,
  },
  {
    link: 'https://twitter.com/pnslabs',
    icon: <Twitter />,
  },
  {
    link: 'https://github.com/pnslabs',
    icon: <Github />,
  },
  {
    link: 'https://t.me/pnslabs',
    icon: <Telegram />,
  },
];

const textStates = [
  {
    text: 'Web3',
    colorClass: 'red',
    x: 8,
  },
  {
    text: 'DeFi',
    colorClass: 'green',
    x: 10,
  },
  {
    text: 'Payments',
    colorClass: 'yellow',
    x: 7,
  },
];

export default function Home() {
  const div = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState(textStates[0]);
  const [textIndex, setTextIndex] = useState(0);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleText = () => {
    setTimeout(() => {
      gsap.to('.home__title-sub', { duration: 0.5, opacity: 0 });
      setTimeout(() => {
        if (textIndex === textStates.length - 1) {
          setTextIndex(0);
          setText(textStates[0]);
          gsap.to(`.home__num`, {
            x: textStates[0].x,
            duration: 1,
          });
          gsap.to(`.home__title-sub`, {
            duration: 1,
            opacity: 1,
          });
        } else {
          setTextIndex(textIndex + 1);
          setText(textStates[textIndex + 1]);
          gsap.to(`.home__num`, {
            x: textStates[textIndex + 1].x,
            duration: 1,
          });
          gsap.to(`.home__title-sub`, {
            duration: 1,
            opacity: 1,
          });
        }
      }, 500);
    }, 2500);
  };

  useEffect(() => {
    toggleText();
  }, [textIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.home__logo', { duration: 0.6, y: 25, opacity: 0 });
      gsap.from('.home__nav-link', {
        duration: 0.4,
        y: 25,
        opacity: 0,
        stagger: 0.2,
      });

      const tl = gsap.timeline({});

      tl.from('.first', { delay: 0.6, duration: 0.2, opacity: 0, y: 10 })
        .from('.sub', {
          duration: 0.25,
          opacity: 0,
          y: 25,
        })
        .from('.home__title-desc', { duration: 0.4, opacity: 0, y: 45 })
        .from('.home__button-wrapper', { duration: 0.3, opacity: 0, y: 45 })
        .from('.home__img, .home__img-mobile', {
          duration: 0.3,
          opacity: 0,
          y: 150,
        });

      const yellowLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      yellowLine
        .from('.yellow-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.yellow-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.yellow-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.yellow-line', {
          duration: 0.3,
          left: '50%',
        })
        .to('.yellow-line', {
          duration: 0.1,
          left: '20%',
        })
        .to('.yellow-line', {
          duration: 0.1,
          opacity: 0,
        });

      const purpleLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      purpleLine
        .from('.purple-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.purple-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.purple-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.purple-line', {
          duration: 0.1,
          left: '40%',
        })
        .to('.purple-line', {
          duration: 0.1,
          opacity: 0,
        });

      const greenLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      greenLine
        .from('.green-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 1,
        })
        .to('.green-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.green-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.green-line', {
          duration: 0.1,
          y: 300,
        })
        .to('.green-line', {
          duration: 0.1,
          opacity: 0,
        });

      const redLine = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      redLine
        .from('.red-circle', {
          duration: 0.5,
          opacity: 0,
          delay: 0.2,
        })
        .to('.red-circle', {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
        })
        .from('.red-line', {
          duration: 0.1,
          opacity: 0,
        })
        .to('.red-line', {
          duration: 0.3,
          y: 200,
        })
        .to('.red-line', {
          duration: 0.1,
          opacity: 0,
        });
    }, div);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PNSModal
        onClose={handleModal}
        isOpen={isModalOpen}
        children={
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY!}>
            <ModalBody handleModal={handleModal} />
          </GoogleReCaptchaProvider>
        }
      />

      <div ref={div} className="home">
        <nav className="home__nav container">
          <div className="home__logo">
            <LogoWhite />
            {/* <div>
              <h3 className="home__logo-title">Phone Number</h3>
              <h3 className="home__logo-title">Service</h3>
            </div> */}
          </div>
          <div className="home__nav-links">
            {links.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.link}
                rel="noopener noreferrer">
                <div className="home__nav-link">{item.icon}</div>
              </a>
            ))}
          </div>
        </nav>
        <div className="home__wrapper">
          <div className="home__inner-wrapper container">
            <div className="home__title-wrapper">
              <div className="home__title-inner">
                <h1 className="home__title first">Mobile Phone</h1>
                <h1 className="home__title sub">
                  <div className="home__num"> Number + </div>

                  <div className={`home__title-sub ${text.colorClass}`}>
                    {text.text}
                  </div>
                </h1>
                <div className="home__yellow yellow-circle">
                  <YellowCircle />
                </div>
                <div className="home__yellow yellow-line">
                  <YellowLine />
                </div>
              </div>
              <p className="home__title-desc">
                Phone Number Service (PNS) is a protocol designed to connect a
                phone number to wallet addresses on the Ethereum Blockchain
              </p>
            </div>
            <div className="home__button-wrapper">
              <PNSButton
                fullWidth={false}
                hasIcon
                onClick={handleModal}
                text={'Join Waitlist'}
                type={butonTypes.button}
              />
            </div>
            <div className="home__green green-circle">
              <GreenCircle />
            </div>
            <div className="home__green green-line">
              <GreenLine />
            </div>
          </div>
          <div className="home__img-wrapper">
            <Image
              priority={true}
              height={317}
              style={{ objectFit: 'contain', width: '100%' }}
              src={heroImage}
              alt="sample"
              className="home__img"
            />
            <div className="home__purple purple-circle">
              <PurpleCircle />
            </div>
            <div className="home__purple purple-line">
              <PurpleLine />
            </div>
          </div>
          <Image
            priority={true}
            style={{ objectFit: 'contain', width: '100%' }}
            src={heroImageMobile}
            alt="sample"
            className="home__img-mobile"
          />
          <div className="home__community mobile">Join our communities.</div>
          <div className="home__nav-links-mobile">
            {links.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.link}
                rel="noopener noreferrer">
                <div className="home__nav-link">{item.icon}</div>
              </a>
            ))}
          </div>
          <div className="home__red red-circle">
            <RedCircle />
          </div>
          <div className="home__red red-line">
            <RedLine />
          </div>
        </div>
      </div>
      <div className="home__bg-image" />
      <div className="home__bg-image2" />
      <div className="home__bg-noise" />
    </>
  );
}

const schema = yup.object().shape({
  email: yup.string().email('Email is Invalid').required('Email is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  captcha: yup.string(),
});

const share = [
  {
    title: 'Share on Twitter',
    icon: <TwitterBlack />,
  },
  {
    title: 'Join Community',
    icon: <DiscordBlack />,
  },
];

const ModalBody = ({ handleModal }: { handleModal: () => void }) => {
  const twitterShareRef: any = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [btnText, setBtnText] = useState('Join Waitlist');
  const [isDisabled, setIsDisabled] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const handleReCaptcha = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('homepage');
    setValue('captcha', token);
    return token;
  }, [executeRecaptcha]);

  const onSubmit = async (values: any) => {
    try {
      const token = await handleReCaptcha();
      if (token) {
        setBtnText('Sending...');
        setIsDisabled(true);
        const url = process.env.NEXT_PUBLIC_SERVER_URL!;
        const response = await axios.post(url, { ...values, captcha: token });
        if (response) {
          setSuccess(true);
        }
      }
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      setBtnText(
        error?.response?.data?.message || 'Something went wrong, try again'
      );
      setTimeout(() => {
        setIsDisabled(false);
        setBtnText('Join Waitlist');
      }, 4000);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div id="modal-body" className="home__success">
      {success && (
        <div className="home__success-screen">
          <Lottie options={defaultOptions} />
        </div>
      )}
      <div onClick={handleModal} className="home__icon">
        <CancelIcon />
      </div>
      {success ? (
        <div>
          <div className="home__success-wrapper">
            <div className="home__success-icon">🚀</div>
            <div className="home__success-title">You are on the waitlist!</div>
            <div className="home__success-desc">
              You have now successfully joined the waitlist, you will be
              notified when PNS launches. Spread the word? 👇🏽
            </div>
            <div className="home__success-share">
              {share.map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={index === 0 ? '#' : discordLink}
                  rel="noopener noreferrer">
                  <PNSButton
                    fullWidth
                    hasIcon={false}
                    onClick={() =>
                      index === 0 && twitterShareRef?.current?.click()
                    }
                    text={item.title}
                    type={butonTypes.button}
                    variant={
                      index === 0
                        ? outlineTypes.secondary
                        : outlineTypes.tertiary
                    }
                    icon={item.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="modal__wrapper">
          <div className="modal__header">
            <h2 className="modal__title">Get early access 😎</h2>
          </div>
          <div className="modal__desc">
            Join our waitlist and community to be among the first to know when
            we launch our product. 🚀
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
            <div className="modal__input-wrapper">
              <PNSInput
                name="firstname"
                label="First name"
                register={register('firstname')}
                error={errors.firstname?.message}
                placeholder="John"
              />
              <PNSInput
                name="lastname"
                label="Last name"
                register={register('lastname')}
                error={errors.lastname?.message}
                placeholder="Doe"
              />
            </div>
            <PNSInput
              name="email"
              label="Email"
              type="email"
              register={register('email')}
              error={errors.email?.message}
              placeholder="codemathics@pns.foundation"
            />

            <div className="modal__button-wrapper">
              <PNSButton
                fullWidth
                hasIcon
                onClick={() => {}}
                text={btnText}
                disabled={isDisabled}
                type={butonTypes.submit}
              />
            </div>
          </form>
        </div>
      )}
      <div className="modal__image-wrapper">
        <div className="modal__image" />
      </div>
      <TwitterShareButton
        url="https://usepns.xyz"
        hashtags={['PNS']}
        related={['pnsxyz']}>
        <div ref={twitterShareRef} className="home__share">
          SHARE
        </div>
      </TwitterShareButton>
    </div>
  );
};
