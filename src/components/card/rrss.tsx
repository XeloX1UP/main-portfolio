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
    <div className="flex justify-center items-center gap-5 my-5 md:flex-1">
      {rrSsList.map((rrSs) => (
        <RrSsLink key={rrSs.href} {...rrSs} />
      ))}
    </div>
  );
}
