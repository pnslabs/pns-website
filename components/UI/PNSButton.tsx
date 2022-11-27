import { ButtonArrow } from '../../public/icons';

export enum butonTypes {
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
  fullWidth?: boolean;
}
const PNSButton = ({
  text,
  variant = outlineTypes.primary,
  type = butonTypes.button,
  onClick,
  hasIcon = true,
  fullWidth = false,
}: IPNSButton) => {
  return (
    <>
      <button
        type={type}
        className={`button ${variant} ${fullWidth && 'full'}`}
        onClick={onClick}>
        <div className="button__wrapper">
          <div className={`button__text ${hasIcon && 'icon'}`}>{text}</div>
          {hasIcon && <ButtonArrow />}
        </div>
      </button>
    </>
  );
};

export default PNSButton;
