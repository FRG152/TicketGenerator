// TYPES
import { ButtonComponentProps } from "../types/types";

const ButtonComponent = ({
  type = "button",
  text,
  eventFunction,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={eventFunction}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="2000"
      className="h-12 px-5 rounded-md bg-orange_700 z-50"
    >
      <span className="text-neutral_900 font-extrabold text-xl">{text}</span>
    </button>
  );
};

export default ButtonComponent;
