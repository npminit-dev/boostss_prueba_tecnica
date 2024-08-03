import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PageFallback = () => {
  return ( 
    <div className="section_box flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-merri text-xl md:text-2xl">Loading page...</h1>
        <AiOutlineLoading3Quarters className="h-[50px] w-[50px] mt-4 animate-spin"/>
      </div>
    </div>
  );
}
 
export default PageFallback;