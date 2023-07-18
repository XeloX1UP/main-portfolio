export default function RrSsLink({
  href,
  icon,
  name,
}: {
  href: string;
  icon: JSX.Element;
  name: string;
}) {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="shadow-black shadow-sm hover:text-amber-400 hover:shadow-amber-200 rounded-xl px-4 py-2 flex items-center gap-2 text-2xl font-bold transition-all duration-500"
    >
      {name}
      <i className="text-white">{icon}</i>
    </a>
  );
}
