import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput {
  label: string;
  placeholder: string;
  error?: any;
  type?: string;
  register: UseFormRegisterReturn;
  name: string;
}

const PNSInput = ({
  label,
  placeholder,
  error,
  type = 'text',
  register,
  name,
}: IInput) => {
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        id={name}
        className={`input__input${error ? ' --error' : ''}`}
        placeholder={placeholder}
        type={type}
        {...register}
      />
      {error && <p className="input__error">{error}</p>}
    </div>
  );
};

export default PNSInput;
