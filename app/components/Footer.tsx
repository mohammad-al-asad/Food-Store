import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import SocialLink from "./SocialLink";
import { useLocation } from "react-router";

export type FooterSection = {
  type: string;
  links: { title: string; link: string }[];
};
const catagories: FooterSection = {
  type: "catagories",
  links: [
    { title: "Fruit & Vegetables", link: "#" },
    { title: "Meat & Fish", link: "#" },
    { title: "Bread & Bakery", link: "#" },
    { title: "Beauty & Health", link: "#" },
  ],
};
const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      type: "My Account",
      links: [
        { title: "My Account", link: "#" },
        { title: "Order History", link: "#" },
        { title: "Shoping Cart", link: "#" },
        { title: "Wishlist", link: "#" },
      ],
    },
    {
      type: "Helps",
      links: [
        { title: "Contact", link: "#" },
        { title: "Faqs", link: "#" },
        { title: "Terms & Condition", link: "#" },
        { title: "Privacy Policy", link: "#" },
      ],
    },
    {
      type: "Proxy",
      links: [
        { title: "About", link: "#" },
        { title: "Shop", link: "#" },
        { title: "Product", link: "#" },
        { title: "Track Order", link: "#" },
      ],
    },
  ];

  const isHome = useLocation().pathname == "/";

  return (
    <footer className="bg-zinc-900 relative">
      <img
        src="../BG/footerBG.png"
        alt="BG"
        className="absolute top-0 bottom-0 left-0 right-0 z-10"
      />
      <div className="flex overflow-hidden flex-col pb-20 pt-3 w-full px-[300px]">
        <div className="flex flex-wrap gap-8 justify-between items-end self-end w-full">
          {/* First Coloum */}
          <div className="flex flex-col items-start mt-16 w-[300px]">
            <div className="flex gap-2 items-center text-3xl font-medium tracking-tighter leading-none text-white whitespace-nowrap">
              <img
                src="../logo.png"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                alt="Ecobazar logo"
              />
              <h3 className="self-stretch my-auto text-white">Ecobazar</h3>
            </div>
            <p className="self-stretch mt-4 text-sm leading-5 text-neutral-400 mb-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
            {isHome ? (
              <SocialLink />
            ) : (
              <div className="mt-4 text-[16px] leading-5 text-neutral-400 mb-4 flex gap-2">
                <span className="text-white bold">(219) 555-0114</span>{" "}
                <p>or</p>{" "}
                <span className="text-white bold">Proxy@gmail.com</span>
              </div>
            )}
          </div>
          {/* Links */}
          {footerSections.map((section: FooterSection, index: number) => (
            <div key={index} className="flex flex-col items-start mt-16 z-50">
              <h4 className="self-stretch text-lg font-medium text-white">
                {section.type}
              </h4>
              <div className="h-0.5 w-6 mt-0.5 bg-green-500" />
              <nav className="pt-2 mt-3 text-sm text-neutral-400 z-50">
                {section.links.map((singleLink, linkIndex: number) => (
                  <a
                    key={linkIndex}
                    href={singleLink.link}
                    className={`block ${linkIndex > 0 ? "mt-3" : ""} hover:text-white text-neutral-400`}
                  >
                    {singleLink.title}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Last Coloum Other*/}
          <div className={`${isHome ? "hidden" : "block"} z-50`}>
            <h4 className={`self-stretch text-lg font-medium text-white`}>
              {catagories.type}
            </h4>
            <div className="h-0.5 w-6 mt-0.5 bg-green-500" />
            <nav className="pt-2 mt-3 text-sm text-neutral-400">
              {catagories.links.map((singleLink, linkIndex: number) => (
                <a
                  key={linkIndex}
                  href={singleLink.link}
                  className={`block ${linkIndex > 0 ? "mt-3" : ""} hover:text-white text-neutral-400`}
                >
                  {singleLink.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Last Coloum Home*/}
          <div
            className={`self-stretch my-auto ${isHome ? "block" : "hidden"}`}
          >
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
        <img src="../payment.png" alt="payment" />
      </div>
    </div>
  );
}

export default Footer;
