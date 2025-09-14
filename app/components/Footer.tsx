import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export type FooterSection = {
  title: string;
  links: string[];
};
const catagories = [{title:"Fruit & Vegetables", link:""},{title:"Fruit & Vegetables", link:""},{title:"Fruit & Vegetables", link:""},{title:"Fruit & Vegetables", link:""},]
const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "My Account",
      links: ["My Account", "Order History", "Shoping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
    },
    {
      title: "Proxy",
      links: ["About", "Shop", "Product", "Track Order"],
    },
  ];

  return (
    <footer className="bg-zinc-900 relative">
      <img src="./BG/footerBG.png" alt="BG" className="absolute top-0 bottom-0 left-0 right-0 z-10" />
      <div className="flex overflow-hidden flex-col pb-20 pt-3 mt-20 w-full px-[300px]">
        <div className="flex flex-wrap gap-5 justify-between items-end self-end w-full">
          {/* First Coloum */}
          <div className="flex flex-col items-start mt-16 w-[300px]">
            <div className="flex gap-2 items-center text-3xl font-medium tracking-tighter leading-none text-white whitespace-nowrap">
              <img
                src="./logo.png"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                alt="Ecobazar logo"
              />
              <h3 className="self-stretch my-auto text-white">Ecobazar</h3>
            </div>
            <p className="self-stretch mt-4 text-sm leading-5 text-neutral-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
            <div className="flex gap-2 mt-4 z-50">
              <div className="p-2 bg-transparent text-neutral-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
                <FaFacebookF size={25} className="p-0.5" />
              </div>
              <div className="p-2 bg-transparent text-neutral-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
                <FaTwitter size={25} className="p-0.5" />
              </div>
              <div className="p-2 bg-transparent text-neutral-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
                <IoLogoInstagram size={25} className="p-0.5" />
              </div>
              <div className="p-2 bg-transparent text-neutral-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
                <FaPinterestP size={25} className="p-0.5" />
              </div>
            </div>
          </div>
          {/* Links */}
          {footerSections.map((section: FooterSection, index: number) => (
            <div key={index} className="flex flex-col items-start mt-16 z-50">
              <h4 className="self-stretch text-lg font-medium text-white">
                {section.title}
              </h4>
              <div className="h-0.5 w-6 mt-0.5 bg-green-500" />
              <nav className="pt-2 mt-3 text-sm text-neutral-400">
                {section.links.map((link:string, linkIndex:number) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className={`block ${linkIndex > 0 ? "mt-3" : ""} hover:text-white text-neutral-400`}
                  >
                    {link}
                  </a>
                ))}
              </nav>
          {/* Last Coloum Other*/}
              {/* <nav className="pt-2 mt-3 text-sm text-neutral-400">
                {catagories.map((catagory, index) => (
                  <a
                    key={index}
                    href={catagory.link}
                    className={`block ${index > 0 ? "mt-3" : ""} hover:text-white text-neutral-400`}
                  >
                    {catagory.title}
                  </a>
                ))}
              </nav> */}

            </div>
          ))}

          {/* Last Coloum Home*/}
          <div className="self-stretch my-auto">
            <h4 className="text-lg font-medium text-white">
              Download Mobile App
            </h4>
            <div className="h-0.5 w-8 mt-0.5 bg-green-500" />
            <div className="flex gap-2 items-start pt-2 mt-3">
              <div className="flex gap-1.5 items-center p-2.5 rounded bg-zinc-800">
                <FaApple size={30} className="text-white" />
                <div className="self-stretch my-auto w-[100px]">
                  <p className="text-xs leading-tight text-zinc-400">
                    Download on the
                  </p>
                  <p className="text-base font-medium text-white">App Store</p>
                </div>
              </div>
              <div className="flex gap-1.5 items-center p-2.5 rounded bg-zinc-800">
                <FaGooglePlay size={27} className="text-white" />
                <div className="self-stretch my-auto w-[100px]">
                  <p className="text-xs leading-tight text-zinc-400">
                    Download on the
                  </p>
                  <p className="text-base font-medium text-white">
                    Google play
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <BottomBar />
    </footer>
  );
};

export function BottomBar() {
  return (
    <div className="flex flex-wrap justify-between items-center px-[300px] p-4 border-t border-neutral-700 shadow-sm bg-zinc-900">
      <p className="self-stretch my-auto text-sm text-zinc-500">
        Ecobazar eCommerce © 2021. All Rights Reserved
      </p>
      <div className="items-start self-stretch my-auto min-w-60">
        <img src="./payment.png" alt="payment" />
      </div>
    </div>
  );
}

export default Footer;
