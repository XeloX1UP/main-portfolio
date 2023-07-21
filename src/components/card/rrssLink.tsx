export default function RrSsLink({
  href,
  icon,
  name,
  textColor,
  shadowColor,
}: {
  href: string;
  icon: JSX.Element;
  name: string;
  textColor: string;
  shadowColor: string;
}) {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`italic 
      ${shadowColor} shadow-sm hover:text-amber-400 hover:shadow-amber-200 hover:scale-95 hover:shadow-md rounded-xl px-4 py-2 flex items-center gap-2 text-2xl font-bold transition-all duration-500`}
    >
      {name}
      <i className={textColor}>{icon}</i>
    </a>
  );
}
