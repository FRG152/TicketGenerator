// Component
import TicketComponent from "../components/Ticket";

// REACT HOOKS
import { useEffect, useState } from "react";

// Images
import Logo from "../assets/images/logo-full.svg";
import patternLines from "../assets/images/pattern-lines.svg";
import patternSquigglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottom from "../assets/images/pattern-squiggly-line-bottom.svg";

const TicketPage = () => {
  const [data, setData] = useState({
    avatar: "",
    full_name: "",
    email_address: "",
  });

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data") || "");
    setData(localData);
  }, []);

  return (
    <section>
      <img
        alt="patternSquigglyLineTop"
        src={patternSquigglyLineTop}
        className="pattern-squiggly-top"
      />
      <img alt="Pattern Lines" src={patternLines} className="pattern-lines" />
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
            className="text-center text-white font-bold text-4xl sm:text-6xl"
          >
            Congrats,{" "}
            <span className="text-color-effect">{data.full_name}</span> <br />
            Your ticket is ready.
          </h1>
          <span
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-lg font-light text-center text-white sm:text-2xl"
          >
            We've emailed your ticket to <br />{" "}
            <span className="text-orange_500">{data.email_address}</span> and
            will send updates in <br /> the run up to the event
          </span>
        </div>
      </div>
      <TicketComponent data={data} />
      <img
        alt="patternSquigglyLineBottom"
        src={patternSquigglyLineBottom}
        className="pattern-squiggly-bottom"
      />
    </section>
  );
};

export default TicketPage;
