import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
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
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
});

const ModalBody = ({ handleModal }: { handleModal: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <div className="modal__header">
        <h2 className="modal__title">Get early access. 😎</h2>
        <div onClick={handleModal} className="modal__hover">
          <CancelIcon />
        </div>
      </div>
      <div className="modal__desc">
        Join our waitlist and community to be among the first to know when we
        launch our product 🚀
      </div>
      <form className="modal__form">
        <div className="modal__input-wrapper">
          <PNSInput
            name="first_name"
            label="First name"
            register={register('first_name')}
            error={errors.first_name?.message}
            placeholder="John"
          />
          <PNSInput
            name="last_name"
            label="Last name"
            register={register('last_name')}
            error={errors.last_name?.message}
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
            text="Join Waitlist"
          />
        </div>
        <div className="modal__image" />
      </form>
    </div>
  );
};
