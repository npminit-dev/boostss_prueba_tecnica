import About from "./About";
import Socials from "./Socials";

const Footer = () => {
  return ( 
    <footer className="w-full p-2 py-4 flex flex-col md:flex-row items-center justify-around md:justify-center bg-primary border-t-[1px] border-slate-500/50">
      <Socials/>
      <div className="md:hidden w-[60%] h-[2px] bg-text/60 my-2"></div>
      <div className="hidden md:block w-[2px] h-[60px] bg-text/60 mx-4"></div>
      <About/>
    </footer>
  );
}
 
export default Footer;