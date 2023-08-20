import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailAddLine,
  RiMailCheckLine,
  RiMailCloseLine,
  RiMailDownloadLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/anserwaseem"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/anserwaseem/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"mailto:hafiz.anser.waseem@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
    </div>
  );
};

export default Socials;
