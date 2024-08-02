import { useRef, useState } from "react";
import { SearchBarProps } from "../../../typedefinitions";
import { FaSearch } from "react-icons/fa";

const Search = ({ fetchProducts }: SearchBarProps) => {

  const [value, setValue] = useState<string>('')
  const [touched, setIsTouched] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout|null>(null)

  const handleChange = (value:string) => {
    setValue(value)
    if(timer.current) clearTimeout(timer.current)
    if(value !== '') fetchProducts(value)
    else fetchProducts()
    if(!touched) setIsTouched(true)
  }

  return ( 
    <search onSubmit={() => handleChange(value)} className="h-[30px] w-full sm:max-w-[500px] m-0 flex-shrink basis-[200px] grow flex items-center justify-center flex-nowrap rounded-l-full rounded-r-full border-[1px] border-slate-500 overflow-hidden">
      <input
        name="Search input"
        className="inline-block w-full h-full sm:max-w-[500px] py-1 px-3 text-sm font-roboto rounded-l-full focus:outline-none placeholder:text-slate-500/50 bg-bckgrnd" 
        type="search" 
        value={value} 
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Escargots à la Bourguignonne"
      /> 
      <div className="h-full flex items-center justify-center px-2 bg-emphasis cursor-pointer rounded-r-full" onClick={() => handleChange(value)}>
        <FaSearch className="text-bckgrnd"/>
      </div>
    </search>
  );
}
 
export default Search;