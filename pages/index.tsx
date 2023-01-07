import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Builders,
  Header,
  Hero,
  Usecase,
  Teams,
  Faqs,
  GetStarted,
  Footer,
  Communities,
  Notification,
} from '../components';
import { PNSButton, PNSInput, PNSModal } from '../components/UI';
import { CancelIcon } from '../public/icons';
import { butonTypes } from '../components/UI/PNSButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Header handleModal={handleModal} />
      <Hero handleModal={handleModal} />
      <GetStarted />
      <Builders />
      <Notification />
      <Usecase />
      <Teams />
      <Faqs />
      <Communities />
      <Footer />
      <PNSModal
        onClose={handleModal}
        isOpen={isModalOpen}
        children={<ModalBody handleModal={handleModal} />}
      />
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
