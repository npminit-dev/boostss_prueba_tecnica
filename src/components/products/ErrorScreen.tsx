import { MdOutlineErrorOutline } from "react-icons/md";

const ErrorScreen = () => {
  return ( 
    <div className='w-full h-[300px] md:h-[400px] flex flex-col items-center justify-around smth_appear'>
      <h1 className="font-merri text-base md:text-xl tex-text text-center text_emphasis">Fetching failed succesfully 😐</h1>
      <MdOutlineErrorOutline className="h-[55px] w-[55px] md:h-[70px] md:w-[70px] text-red-500"/>
    </div>
  );
}
 
export default ErrorScreen;