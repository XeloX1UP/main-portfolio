import { MapIcon } from "@/icons/svg/general";

const HistoryItem = ({
  event,
  date,
  functions,
  location,
  className,
  to,
}: {
  event: string;
  date: string;
  functions: string[];
  location: string;
  className?: string;
  to: string;
}) => {
  return (
    <div className={`${className ? className : ""} w-1/2 relative group my-5`}>
      <span
        className={`text-xl italic text-[var(--primary-300)] font-extrabold absolute bottom-1/2 translate-y-1/2 ${
          to === "left" ? "left-[-150px]" : "right-[-150px]"
        } transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          to === "left" ? "translate-x-20" : "translate-x-[-5rem]"
        } group-hover:translate-x-0 max-w-[9rem]`}
      >
        {date}
      </span>
      <div
        className={`absolute ${
          to === "left" ? "left-[-12px]" : "right-[-16px]"
        } top-[50%] translate-y-[-50%] w-7 h-7 bg-[var(--primary-200)] rounded-full group-hover:scale-125 transition-all duration-300`}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 bg-[var(--bg-100)] rounded-full"></div>
        </div>
      </div>
      <div className="bg-[var(--bg-200)] mx-auto rounded-md p-2 max-w-sm md:group-hover:scale-105 transition-all duration-300">
        <h3 className="font-extrabold text-xl my-1 md:my-2 text-[var(--primary-100)]">
          {event}
        </h3>
        <div
          className={`flex gap-2 items-center ${
            to === "left" ? "justify-start" : "justify-end"
          } my-1 md:my-2 text-[var(--accent-200)]`}
        >
          <MapIcon />
          <h4 className="text-sm text-[var(--accent-100)]">{location}</h4>
        </div>
        <ul className="text-left">
          {functions.map((func) => (
            <li key={func} className="text-base">
              {func}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryItem;
