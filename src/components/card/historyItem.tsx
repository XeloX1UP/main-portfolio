import { MapIcon } from "@/icons/svg/general";

const HistoryItem = ({
  event,
  date,
  functions,
  location,
  className,
}: {
  event: string;
  date: string;
  functions: string[];
  location: string;
  className?: string;
}) => {
  return (
    <div className={`${className ? className : ""} w-1/2 p-1`}>
      <div className="bg-gradient-to-bl from-slate-800 to-slate-500 text-white mx-auto rounded-md shadow-slate-950 shadow-md p-2 max-w-sm">
        <h3 className="font-extrabold underline text-lg">
          {event} <span className="text-sm italic text-lime-200">{date}</span>
        </h3>
        <div className="flex gap-2 text-black">
          <MapIcon />
          <h4 className="text-amber-400">{location}</h4>
        </div>
        <ul>
          {functions.map((func) => (
            <li key={func} className="text-sm">
              {func}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryItem;
