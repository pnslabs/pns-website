import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import heroImage from '../public/images/hero-img.png';

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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* <Header handleModal={handleModal} />
      <Hero handleModal={handleModal} />
      <GetStarted />
      <Builders />
      <Notification />
      <Usecase />
      <Teams />
      <Faqs />
      <Communities />
      <Footer /> */}
      {/* <PNSModal
        onClose={handleModal}
        isOpen={isModalOpen}
        children={<ModalBody handleModal={handleModal} />}
      /> */}
      <div className="home">
        <div className="home__wrapper container">
          <div>
            <nav className="home__nav">
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
            <div className="home__title-wrapper">
              <h1 className="home__title">
                Mobile Phone Number <span>+</span>
                <span className="home__title-sub"> Web3</span>
              </h1>
              <p className="home__title-desc">
                The PNS protocol is a chain agnostic smart contract that enables
                the seamless transfer of cryptocurrency using a phone number.
              </p>
            </div>
            <div className="home__button-wrapper">
              <button className="home__button" onClick={handleModal}>
                <div className="home__button-text">Join Waitlist</div>
                <ButtonArrow />
              </button>
            </div>
          </div>
          {/* <div className="home__img" /> */}
          <Image
            priority={true}
            height={337}
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
        <h2 className="modal__title">Get early access. 😎</h2>
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
