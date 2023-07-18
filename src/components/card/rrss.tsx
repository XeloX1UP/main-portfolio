import { GitHubSvg, LinkedInSvg } from "@/icons/svg/rrss";
import RrSsLink from "./rrssLink";

const rrSsList = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardo-moncada-lillo-25b336225/",
    icon: <LinkedInSvg />,
  },
  {
    name: "GitHub",
    href: "https://github.com/XeloX1UP",
    icon: <GitHubSvg />,
  },
];

export default function RrSs() {
  return (
    <div className="md:flex-1 py-5 md:py-0">
      <h2 className="text-2xl text-center my-2">Mis redes</h2>
      <div className="flex justify-center items-center gap-5 ">
        {rrSsList.map((rrSs) => (
          <RrSsLink key={rrSs.href} {...rrSs} />
        ))}
      </div>
    </div>
  );
}
