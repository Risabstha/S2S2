import { Mail } from "lucide-react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
// import { RiTwitterXFill } from "react-icons/ri";

import apnlogo from "../../assets/client/antarikchya.webp";
import s2s2logo from "../../assets/client/s2s2logo.webp";

interface quicklink {
  id: number;
  name: string;
  url?: string;
  link?: string;
}

const Quicklinks: quicklink[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   name: "Contact Us",
  //   url: "/",
  // },
  {
    id: 3,
    name: "S2S",
    link: "https://s2s.antarikchya.org.np/",
  },
];

const Footer = () => {
  // interface SocialMedia {
  //   id: number;
  //   name: string;
  //   url?: string;
  //   icon?: React.ReactNode;
  // }
  // const socialmedia = [
  //   {
  //     id: 1,
  //     name: "facebook",
  //     url: "https://www.facebook.com/antarikchya",
  //     icon: (
  //       <FaFacebook
  //         className={`w-8 h-8 text-[#e1e6ed]
  //        hover:text-gray-400 `}
  //       />
  //     ),
  //   },
  //   {
  //     id: 2,
  //     name: "linkedin",
  //     url: "https://www.linkedin.com/company/antarikchya/",
  //     icon: (
  //       <FaLinkedin
  //         className={`w-8 h-8 text-[#e1e6ed]
  //        hover:text-gray-400 `}
  //       />
  //     ),
  //   },
  //   {
  //     id: 3,
  //     name: "Youtube",
  //     url: "https://www.youtube.com/@antarikchyapratisthannepal",
  //     icon: (
  //       <FaYoutube
  //         className={`w-8 h-8 text-[#e1e6ed]hover:text-gray-400
  //         }`}
  //       />
  //     ),
  //   },
  //   {
  //     id: 4,
  //     name: "Instagram",
  //     url: "https://www.instagram.com/antarikchya/",
  //     icon: (
  //       <FaInstagram
  //         className={`w-8 h-8 text-[#e1e6ed]
  //        hover:text-gray-400 `}
  //       />
  //     ),
  //   },
  //   {
  //     id: 5,
  //     name: "X (Twitter)",
  //     url: "https://x.com/antarikchya",
  //     icon: (
  //       <RiTwitterXFill
  //         className={`w-8 h-8 text-[#e1e6ed]
  //        hover:text-gray-400 `}
  //       />
  //     ),
  //   },
  //   {
  //     id: 6,
  //     name: "Whatsapp",
  //     url: "https://chat.whatsapp.com/KlcGW72NlAm8b5Mb2mf9G8",
  //     icon: (
  //       <FaWhatsapp
  //         className={`w-8 h-8 text-[#e1e6ed]hover:text-gray-400}`}
  //       />
  //     ),
  //   },
  // ];

  return (
    <footer className={`bg-[#dedad3]`}>
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-5 md:pt-8 lg:pt-12 pb-2 md:pb-4 lg:pb-6`}
      >
        {/* Footer Content Grid */}
        <div
          className="grid grid-cols-1  md:justify-items-center 
        md:grid-cols-3 gap-5 md:gap-6 lg:gap-12 
        mb-5 md:mb-6 lg:mb-12"
        >
          {/* Logo Section */}
          <div className="flex justify-between  md:flex-col md:gap-y-6 gap-x-15 md:gap-x-0">
            
            <div className="flex items-center gap-2 ">
              <img
                src={s2s2logo}
                alt="Antarikchya Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className={`text-sm font-bold text-[#C18374#183148] playfairDisplayDiv`}>
                  Slippers
                </span>
                <span className="text-sm font-bold text-[#C18374] ">2</span>
                <span className={`text-sm font-bold text-[#183148] playfairDisplayDiv`}>Sat</span>
                <span className={`text-sm pl-2 font-bold text-[#C18374] `}>2</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={apnlogo}
                alt="Antarikchya Logo"
                className="w-8 h-8 object-contain"
              />

              <div>
                <div className={`text-sm font-bold text[#C18374] playfairDisplayDiv`}>
                  Antarikchya
                </div>
                <div className="text-sm font-bold text-[#C18374] playfairDisplayDiv">Pratisthan</div>
                <div className={`text-sm font-bold text-[#183148] playfairDisplayDiv`}>Nepal</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3
              className={`text-lg font-bold text-[#C18374] hover:text-[#183148]  mb-1 md:mb-2 lg:mb-3 playfairDisplayDiv`}
            >
              Quick Links
            </h3>
            <ul className="space-y-1 md:space-y-1.5">
              {Quicklinks.map((link) => (
               
                    <li key={link.id}>
                      {link.link ? (
                        <a
                          href={link.link}
                          className="text-gray-800 hover:text-gray-500 transition text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a
                          href={link.url}
                          className="text-gray-800 hover:text-gray-500 transition text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ) 
              )
            }
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="">
            <h3
              className={`text-lg font-bold text-[#C18374] hover:text-[#183148]  mb-1 md:mb-2 lg:mb-3 playfairDisplayDiv`}
            >
              Get in Touch
            </h3>

            {/* Email */}
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-[#2F5064]" />
              <a
                href="https://mail.google.com/mail/?view=cm&to=slippers2sat-2@antarikchya.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2F5064] hover:underline text-sm"
              >
                slippers2sat-2@antarikchya.org.np
              </a>
            </div>

            {/* Social Media Icons */}
            {/* <div className="flex gap-4">
              {socialmedia.map((social: SocialMedia) => (
                <a
                  key={social.id}
                  title={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t border-gray-400 pt-2 md:pt-4 lg:pt-6`}>
          <p
            className={`text-center text-gray-800 hover:text-gray-500  text-sm playfairDisplayDiv`}
          >
            © {new Date().getFullYear()} Antarikchya Pratisthan Nepal
          </p>
          <p
            className={`text-center text-gray-800 hover:text-gray-500  text-sm playfairDisplayDiv`}
          >
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
