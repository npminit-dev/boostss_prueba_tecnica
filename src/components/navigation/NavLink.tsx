import { Link } from "react-router-dom";
import { NavLinkProps } from '../../../typedefinitions'

const NavLink = ({ text, url, onClick }: NavLinkProps) => {
  return (
    <div 
      className="w-full md:w-fit md:mx-3 my-1 md:mb-0 text-text hover:text-bckgrnd md:hover:text-text mobile_nav_hover antialiased cursor-pointer transition-all duration-100"
    >
      <div className="w-full link_box relative">
        <Link 
          to={url} 
          onClick={onClick} 
          className="w-full relative flex flex-col items-center justify-center font-merri font-medium text-sm sm:text-base"
        >{ text }</Link>
        <div className="hidden md:block h-[1px] mr-auto float-start bg-text draw_menuline"></div>
      </div>
    </div>
  );
}
 
export default NavLink;