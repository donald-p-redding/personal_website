import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { aboutData } from "./About";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/donald-redding-36a093234/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/donald-p-redding",
    Icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:don@donaldredding.dev",
    Icon: FaEnvelope,
  },
  {
    label: "Resume",
    href: aboutData.cvpath,
    Icon: FaFileDownload,
  },
];

function SocialLinks() {
  return (
    <div className="social-links-section">
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="social-link-item"
        >
          <Icon className="social-link-icon" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
