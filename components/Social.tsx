import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/retr0717/" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/alwin-aji-475498255/",
  },
  { icon: <FaTwitter />, path: "https://x.com/AlwinAji7047" },
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
        <Link
          key={index}
          href={social.path}
          className={iconsStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
