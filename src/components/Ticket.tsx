// Types
import { DataProps } from "../types/types";

// Images
import Logo from "../assets/images/logo-full.svg";
import bgTicket from "../assets/images/pattern-ticket.svg";
import iconGithub from "../assets/images/icon-github.svg";

const TicketComponent = ({ data }: { data: DataProps }) => {
  return (
    <div className="ticket-bg">
      <img src={bgTicket} alt="pattern ticket" className="absolute" />
      <div className="flex flex-col justify-between h-full p-5">
        <div className="flex flex-col">
          <img
            alt="logo"
            src={Logo}
            className="w-[130px] xs:w-[220px] sm:w-[300px]"
          />
          <p className="ml-7 text-sm text-neutral_300 xs:ml-[50px] xs:text-[14px] sm:ml-[70px] sm:text-[17px]">
            Jan 31, 2025 / Austion, TX
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            alt="photo"
            src={data?.avatar}
            className="rounded-md object-cover w-10 h-w-10 xs:w-[50px] xs:h-[50px] sm:w-[70px] sm:h-[70px]"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-[12px] font-normal xs:text-[16px] sm:text-[20px]">
              {data?.full_name}
            </h4>
            <div className="flex items-center gap-1">
              <img src={iconGithub} alt="git icon" className="w-[23px]" />
              <p className="text-[12px] text-neutral_300 xs:text-[13px] sm:text-[16px]">
                {data?.email_address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="flex items-center text-neutral_300 rotate-90 text-md h-5 xs:text-2xl sm:text-3xl">
        #01609
      </span>
    </div>
  );
};

export default TicketComponent;
