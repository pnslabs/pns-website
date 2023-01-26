import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import heroImage from '../public/images/rectangle.png';
import heroImageMobile from '../public/images/rectangle2.png';
import { PNSButton, PNSInput, PNSModal } from '../components/UI';
import {
  ButtonArrow,
  CancelIcon,
  Discord,
  DiscordBlack,
  Github,
  LogoWhite,
  PurpleCircle,
  PurpleLine,
  Telegram,
  Twitter,
  TwitterBlack,
} from '../public/icons';
import { butonTypes, outlineTypes } from '../components/UI/PNSButton';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import ReCAPTCHA from 'react-google-recaptcha';

const links = [
  {
    link: 'https://www.pns.network/',
    icon: <Discord />,
  },
  {
    link: 'https://www.pns.network/',
    icon: <Twitter />,
  },
  {
    link: 'https://www.pns.network/',
    icon: <Github />,
  },
  {
    link: 'https://www.pns.network/',
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

      const line = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      line
        .from('.yellow-circle', {
          duration: 0.8,
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
          x: -150,
        })
        .to('.yellow-line', {
          duration: 0.1,
          left: '35%',
        })
        .to('.yellow-line', {
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
        children={<ModalBody handleModal={handleModal} />}
      />
      <div ref={div} className="home">
        <nav className="home__nav container">
          <div className="home__logo">
            <LogoWhite />
            <div>
              <h3 className="home__logo-title">Phone Number</h3>
              <h3 className="home__logo-title">Service</h3>
            </div>
          </div>
          <div className="home__nav-links">
            {links.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="home__nav-link">{item.icon}</div>
              </Link>
            ))}
          </div>
        </nav>
        <div className="home__wrapper">
          <div className="container">
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
                  <PurpleCircle />
                </div>
                <div className="home__yellow yellow-line">
                  <PurpleLine />
                </div>
              </div>
              <p className="home__title-desc">
                The PNS protocol is a chain agnostic smart contract that enables
                the seamless transfer of cryptocurrency using a phone number.
              </p>
            </div>
            <div className="home__button-wrapper">
              <PNSButton
                hasIcon
                onClick={handleModal}
                text={'Join Waitlist'}
                type={butonTypes.button}
              />
            </div>
          </div>
          <Image
            priority={true}
            height={317}
            style={{ objectFit: 'contain', width: '100%' }}
            src={heroImage}
            alt="sample"
            className="home__img"
          />
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
              <Link key={index} href={item.link}>
                <div className="home__nav-link">{item.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="home__bg-image" />
      <div className="home__bg-image2" />
    </>
  );
}

const schema = yup.object().shape({
  email: yup.string().email('Email is Invalid').required('Email is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  googleCaptcha: yup.string().required('Please verify you are human'),
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
  const [btnText, setBtnText] = useState('Join Waitlist');
  const [isDisabled, setIsDisabled] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    try {
      setBtnText('Sending...');
      setIsDisabled(true);
      const url = 'https://pns-backend.herokuapp.com/api/v1/waitlist/subscribe';
      const response = await axios.post(url, { ...values, googleCaptcha: '' });
      if (response) {
        setSuccess(true);
      }
    } catch (error) {
      setBtnText('Something went wrong, try again');
      setTimeout(() => {
        setIsDisabled(false);
        setBtnText('Join Waitlist');
      }, 1000);
    }
  };

  const onChange = (value: any) => {
    setValue('googleCaptcha', value);
  };

  return (
    <div>
      <div onClick={handleModal} className="modal__icon">
        <CancelIcon />
      </div>
      {success ? (
        <div className="home__success">
          <div className="home__success-icon">🚀</div>
          <div className="home__success-title">You are on the waitlist!</div>
          <div className="home__success-desc">
            You have now successfully joined the waitlist, you will be notified
            when PNS launches. Spread the word? 👇🏽
          </div>
          <div className="home__success-share">
            {share.map((item, index) => (
              <PNSButton
                key={index}
                fullWidth
                hasIcon={false}
                onClick={() => {}}
                text={item.title}
                disabled={isDisabled}
                type={butonTypes.button}
                variant={
                  index === 0 ? outlineTypes.secondary : outlineTypes.tertiary
                }
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
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
            <div className="modal__captcha">
              <ReCAPTCHA
                sitekey={'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                onChange={onChange}
                onErrored={() => setValue('googleCaptcha', '')}
              />
            </div>
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
        </>
      )}
      <div className="modal__image" />
    </div>
  );
};
