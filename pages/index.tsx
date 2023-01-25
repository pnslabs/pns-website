import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import heroImage from '../public/images/rectangle.png';
import { PNSButton, PNSInput, PNSModal } from '../components/UI';
import {
  ButtonArrow,
  CancelIcon,
  Discord,
  Github,
  LogoWhite,
  Telegram,
  Twitter,
} from '../public/icons';
import { butonTypes } from '../components/UI/PNSButton';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

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
            duration: 0.6,
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
            duration: 0.6,
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
        .from('.home__img', {
          duration: 0.3,
          opacity: 0,
          y: 150,
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
        <div className="home__wrapper container">
          <div>
            <div className="home__title-wrapper">
              <h1 className="home__title first">Mobile Phone</h1>
              <h1 className="home__title sub">
                <div className="home__num"> Number + </div>

                <div className={`home__title-sub ${text.colorClass}`}>
                  {text.text}
                </div>
              </h1>
              <p className="home__title-desc">
                The PNS protocol is a chain agnostic smart contract that enables
                the seamless transfer of cryptocurrency using a phone number.
              </p>
            </div>
            <div className="home__button-wrapper">
              <button className="home__button" onClick={handleModal}>
                <div className="home__button-text">Join Waitlist</div>
                <div className="home__button-arrow">
                  <ButtonArrow />
                </div>
              </button>
            </div>
          </div>
          <Image
            priority={true}
            height={317}
            width={850}
            src={heroImage}
            alt="sample"
            className="home__img"
          />
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
});

const ModalBody = ({ handleModal }: { handleModal: () => void }) => {
  const [btnText, setBtnText] = useState('Join Waitlist');
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    setBtnText('Sending...');
    setIsDisabled(true);
    const url = `https://pns-backend.herokuapp.com/api/v1/waitlist/subscribe`;
    await axios.post(url, values);
    setBtnText("Success, you're now on the waitlist");
  };
  return (
    <div>
      <div onClick={handleModal} className="modal__icon">
        <CancelIcon />
      </div>
      <div className="modal__header">
        <h2 className="modal__title">Get early access.</h2>
      </div>
      <div className="modal__desc">
        Join our waitlist and community to be among the first to know when we
        launch our product 🚀
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
            hasIcon={false}
            onClick={() => {}}
            text={btnText}
            disabled={isDisabled}
            type={butonTypes.submit}
          />
        </div>
        <div className="modal__image" />
      </form>
    </div>
  );
};
