import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: any;
  iconsStyles: any;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social: any, index: number) => (
        <Link key={index} href={social.path} className={iconsStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
