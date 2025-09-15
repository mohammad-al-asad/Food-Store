import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";

function SocialLink({className}:{className?:string}) {
  return (
    <div className={`${className}! flex gap-2 z-50 text-neutral-400 `}>
      <div className="p-2 bg-transparent rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
        <FaFacebookF size={25} className="p-0.5" />
      </div>
      <div className="p-2 bg-transparent rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
        <FaTwitter size={25} className="p-0.5" />
      </div>
      <div className="p-2 bg-transparent rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
        <IoLogoInstagram size={25} className="p-0.5" />
      </div>
      <div className="p-2 bg-transparent rounded-full hover:bg-green-500 hover:text-white transition-all duration-200">
        <FaPinterestP size={25} className="p-0.5" />
      </div>
    </div>
  );
}

export default SocialLink;
