import { RxReload } from "react-icons/rx";
import { MdError } from "react-icons/md";
import { RefetchBarProps } from "../../../typedefinitions";

const RefetchBar = ({ fetchProducts, fetchWithError, setFirstFetch, isLoading }: RefetchBarProps) => {

  const handleFetch = (callback:() => void) => {
    return () => {
      setFirstFetch(true)
      callback()
    }
  }


  return ( 
    <div className="w-full sm:max-w-[500px] sm:w-fit my-1 flex items-center justify-between md:justify-center rounded-l-full rounded-r-full border-[1px] border-slate-500 bg-bckgrnd/60 overflow-hidden">
      <div className="flex items-center justify-center my-[3px]">
        <div onClick={handleFetch(() => fetchProducts())} className='p-[3px] mx-[2px] ml-1 bg-green-700 rounded-full duration-300 cursor-pointer'
          >
          <RxReload className={`h-[18px] w-[18px] text-bckgrnd ${isLoading ? 'animate-spin' : ''}`} title="Refetch products"/>
        </div>
        <div onClick={handleFetch(() => fetchWithError())} className="p-[3px] mx-[2px] bg-red-700 rounded-full cursor-pointer duration-300">
          <MdError className="h-[18px] w-[18px] text-bckgrnd" title="Refetch with error"/>
        </div>
      </div>
      <div className="w-fit h-[30px] ml-2 flex items-center justify-center font-merri text-[12px] rounded-l-full bg-emphasis">
        <h2 className="mx-2 md:mt-[2px] text-bckgrnd text-[10px]">Fetch</h2>
      </div>
    </div>
  );
}
 
export default RefetchBar;