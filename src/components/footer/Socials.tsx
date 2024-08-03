import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoPinterest, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { PiXLogoFill } from "react-icons/pi";

const Socials = () => {
  return ( 
    <div className="flex items-center justify-center md:grid md:grid-cols-3 md:grid-flow-row-3">
      <IoLogoLinkedin className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-[#0A66C2] cursor-pointer hover:scale-105 duration-200"/>
      <IoLogoInstagram className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-[#C81A8E] cursor-pointer hover:scale-105 duration-200"/>
      <IoLogoFacebook className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-[#0A66C2] cursor-pointer hover:scale-105 duration-200"/>
      <PiXLogoFill className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-text cursor-pointer hover:scale-105 col-start-2 duration-200"/>
      <IoLogoPinterest className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-[#E60023] cursor-pointer hover:scale-105 col-start-3 duration-200"/>
      <IoLogoWhatsapp className="xs:mx-1 mx-[1px] h-[26px] w-[26px] text-[#08AB5F] cursor-pointer hover:scale-105 col-start-3 duration-200"/>
    </div>
  );
}
 
export default Socials;