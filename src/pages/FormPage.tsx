// React hook form
import { useForm } from "react-hook-form";

// React Router
import { useNavigate } from "react-router";

// Types
import { FormPageProps } from "../types/types";

// Images
import ImagePicker from "../components/ImagePicker";
import InputComponent from "../components/Input";
import ButtonComponent from "../components/Button";

// Resolvers
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
import { schemaTicket } from "../validations/formValidation";

// Images
import Logo from "../assets/images/logo-full.svg";
import PatternLines from "../assets/images/pattern-lines.svg";
import patternSquigglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottom from "../assets/images/pattern-squiggly-line-bottom.svg";

const FormPage = ({ setData }: FormPageProps) => {
  const navigate = useNavigate();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaTicket) });

  const onSubmit = (data: {
    avatar: string;
    full_name: string;
    email_address: string;
  }) => {
    setData(data);
    navigate("/ticket");
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <section className="container-form-page">
      <img
        alt="patternSquigglyLineTop"
        src={patternSquigglyLineTop}
        className="pattern-squiggly-top"
      />
      <img alt="Pattern Lines" src={PatternLines} className="pattern-lines" />
      <div>
        <img
          src={Logo}
          alt="logo"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="logo"
        />
        <div className="flex flex-col items-center gap-5">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center text-white font-bold text-2xl sm:text-6xl"
          >
            Your Journey to Coding <br /> Conf 2025 Starts Here!
          </h1>
          <span
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-center text-white font-extralight text-2xl sm:text-2xl"
          >
            Secure your spot at next year's biggest coding conference
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center max-w-[500px] m-auto gap-5"
        >
          <ImagePicker name={"avatar"} setValue={setValue} />
          <InputComponent
            type="text"
            name={"full_name"}
            label={"Full Name"}
            register={register("full_name")}
            error={errors}
          />
          <InputComponent
            type="email"
            name={"email_address"}
            label={"Email Address"}
            register={register("email_address")}
            placeholder="example@email.com"
            error={errors}
          />
          <InputComponent
            type="text"
            name={"username"}
            label={"GitHub Username"}
            register={register("username")}
            placeholder={"@yourusername"}
            error={errors}
          />
          <ButtonComponent type="submit" text="Generate My Ticker" />
        </form>
      </div>
      <img
        alt="patternSquigglyLineBottom"
        src={patternSquigglyLineBottom}
        className="pattern-squiggly-bottom"
      />
    </section>
  );
};

export default FormPage;
