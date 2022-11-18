import { ButtonArrow } from '../../public/icons';

enum butonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum outlineTypes {
  primary = 'primary',
  outline = 'outline',
}

interface IPNSButton {
  text: string;
  variant?: outlineTypes | string;
  type?: butonTypes;
  onClick?: () => void;
  hasIcon?: boolean;
}
const PNSButton = ({
  text,
  variant = outlineTypes.primary,
  type = butonTypes.button,
  onClick,
  hasIcon = true,
}: IPNSButton) => {
  return (
    <>
      <button type={type} className={`button ${variant}`} onClick={onClick}>
        <div className="button__wrapper">
          <div className={`button__text ${hasIcon && 'icon'}`}>{text}</div>
          {hasIcon && <ButtonArrow />}
        </div>
      </button>
    </>
  );
};

export default PNSButton;
