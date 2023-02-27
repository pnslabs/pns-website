import { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { TwitterShareButton } from 'react-share';
import { PNSButton, PNSInput } from '../components/UI';
import { butonTypes, outlineTypes } from '../components/UI/PNSButton';
import { CancelIcon, DiscordBlack, TwitterBlack } from '../public/icons';
import Lottie from 'react-lottie';
import animationData from '../lottie/pns-welcome.json';

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
                  href={index === 0 ? '#' : 'https://discord.gg/THHZAsT7sj'}
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
        title="I'm in! Excited to be part of the @pnslabs community. Join me on the waitlist now and be the first to know when we launch! #PNS"
        related={['@pnslabs']}>
        <div ref={twitterShareRef} className="home__share">
          SHARE
        </div>
      </TwitterShareButton>
    </div>
  );
};

export default ModalBody;
