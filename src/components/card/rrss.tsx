import { GitHubSvg, LinkedInSvg, TwitterSvg } from "@/icons/svg/rrss";
import RrSsLink from "./rrssLink";

const rrSsList = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardo-moncada-lillo-25b336225/",
    icon: <LinkedInSvg />,
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-400",
  },
  {
    name: "GitHub",
    href: "https://github.com/XeloX1UP",
    icon: <GitHubSvg />,
    textColor: "text-white",
    shadowColor: "shadow-gray-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/XeloX_1UP",
    icon: <TwitterSvg />,
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-400",
  },
];

export default function RrSs() {
  return (
    <div className="md:flex-1 py-5 md:py-0">
      <h2 className="text-2xl text-center mb-8">Mis redes</h2>
      <div className="flex mx-auto gap-5 flex-wrap justify-evenly md:flex-col md:w-min">
        {rrSsList.map((rrSs) => (
          <RrSsLink key={rrSs.href} {...rrSs} />
        ))}
      </div>
    </div>
  );
}
