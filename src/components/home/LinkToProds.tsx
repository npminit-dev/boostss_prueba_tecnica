import { useNavigate } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";

const LinkToProds = () => {

  const navigate = useNavigate()

  return ( 
    <div 
      onClick={() => navigate('/products')}
      className="h-fit w-fit p-3 font-merri bg-secondary hover:bg-emphasis border-[1px] border-bckgrnd hover:scale-105 
      duration-[400ms] rounded-full cursor-pointer shadow-md hover:shadow-slate-300 shadow-transparent smth_appear_verylong"
    >
      <GiHotMeal className="h-[35px] w-[35px] text-bckgrnd hover:text-text" title="Go to shop" />
    </div>
  );
}
 
export default LinkToProds;