import { ButtonArrow } from '../../public/icons';

export enum butonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum outlineTypes {
  primary = 'primary',
  outline = 'outline',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

interface IPNSButton {
  text: string;
  variant?: outlineTypes | string;
  type?: butonTypes;
  onClick?: () => void;
  hasIcon?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode | JSX.Element;
}
const PNSButton = ({
  text,
  variant = outlineTypes.primary,
  type = butonTypes.button,
  onClick,
  hasIcon = true,
  fullWidth = false,
  disabled,
  icon,
}: IPNSButton) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`button ${variant} ${fullWidth && 'full'}`}
        onClick={onClick}>
        <div className="button__wrapper">
          <div className={`button__text`}>{text}</div>
          {!disabled && (
            <>
              {hasIcon && (
                <div className="button__icon">
                  <ButtonArrow />
                </div>
              )}
              {icon && <div className="button__icon">{icon}</div>}
            </>
          )}
        </div>
      </button>
    </>
  );
};

export default PNSButton;
