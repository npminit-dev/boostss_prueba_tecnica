import { CartProductProps } from "../../../typedefinitions";
import { CiCircleRemove } from "react-icons/ci";

const CartProduct = ({ productData: {name, price, product_id, quantity}, execCartAction }: CartProductProps) => {
  return ( 
    <li>
      <article className="w-full h-fit px-2 flex items-center justify-between text-lg">
        <h1 className="w-full px-1 text-ellipsis overflow-hidden text-nowrap font-crayon" title={name}>{ name }</h1>
        <div className="w-[100px] flex items-center justify-between font-merri select-none">
          <span 
            onClick={quantity <= 1 ? undefined : () => execCartAction({ type: 'UPDATE_QUANTITY', payload: {id: product_id, newQuantity: quantity-1} })}
            className={`font-bold cursor-pointer ${quantity === 1 ? 'text-slate-500' : ''}`}
          >{'< '}</span>
          <h1 className="inline text-md">{ quantity }</h1>
          <span 
            className={`font-bold cursor-pointer ${quantity >= 10 ? 'text-slate-500' : ''}`}
            onClick={quantity >= 10 ? undefined : () => execCartAction({ type: 'UPDATE_QUANTITY', payload: {id: product_id, newQuantity: quantity+1} })}
          >{' >'}</span>
        </div>
        <h1 className="w-[100px] text-end text-sm font-merri">${ (price * quantity).toFixed(1) }</h1>
        <div className="w-[50px] pr-1">
          <CiCircleRemove 
            onClick={() => execCartAction({ type: 'DELETE_FROM_CART', payload: { id: product_id }})}
            className="h-[22px] w-[22px] float-right hover:scale-105 fill-red-500 hover:bg-red-500 hover:fill-bckgrnd cursor-pointer duration-200 rounded-full"
          />
        </div>
      </article>
    </li>
  );
}
 
export default CartProduct;