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
  disabled?: boolean;
}
const PNSButton = ({
  text,
  variant = outlineTypes.primary,
  type = butonTypes.button,
  onClick,
  hasIcon = true,
  fullWidth = false,
  disabled,
}: IPNSButton) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`button ${variant} ${fullWidth && 'full'}`}
        onClick={onClick}>
        <div className="button__wrapper">
          <div className={`button__text ${hasIcon && 'icon'}`}>{text}</div>
          {hasIcon && (
            <div className="button__icon">
              <ButtonArrow />
            </div>
          )}
        </div>
      </button>
    </>
  );
};

export default PNSButton;
