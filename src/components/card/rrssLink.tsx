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
      className={`italic bg-[var(--bg-200)] hover:bg-[var(--bg-300)] rounded-md px-2 hover:scale-105 py-1 flex items-center gap-2 text-2xl font-bold transition-all duration-500`}
    >
      {name}
      <i className={textColor}>{icon}</i>
    </a>
  );
}
