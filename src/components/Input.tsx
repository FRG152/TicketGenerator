// TYPES
import { InputComponentProps } from "../types/types";

const InputComponent = ({
  type,
  name,
  label,
  error,
  register,
  placeholder,
}: InputComponentProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        className="text-white "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        className="p-2 h-12 text-white rounded-lg border-[1px] border-white bg-neutral_700_transparent"
        placeholder={placeholder}
        {...register}
      />
      {error[`${name}`] && (
        <p className="text-orange_500">{error[`${name}`].message}</p>
      )}
    </div>
  );
};

export default InputComponent;
