import { LuLoader } from "react-icons/lu";

const PendingScreen = () => {
  return ( 
    <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-around smth_appear">
      <h1 className="font-merri text-base md:text-xl tex-text text-center text_emphasis">We are bringing your menu...</h1>
      <div className="flex items-center justify-center">
        <LuLoader className="h-[55px] w-[55px] md:h-[70px] md:w-[70px] text-slate-800 animate-spin"/>
        <LuLoader className="absolute h-[26px] w-[26px] md:h-[32px] md:w-[32px] text-slate-800 animate-spin-reverse"/>
      </div>
    </div>
  );
}
 
export default PendingScreen;