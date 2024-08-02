import { createPortal } from "react-dom";
import { CartProps } from "../../../typedefinitions";
import CartProduct from "./CartProduct";
import { v4 as uuid } from 'uuid'
import { useEffect } from "react";

const Cart = ({ cart, setCartOpen, execCartAction }: CartProps) => {

  useEffect(() => {
    if(cart.length === 0) setCartOpen(false)
  }, [cart]);

  return (
    <>
      {createPortal(
        <div className="fixed bottom-0 left-0 h-[calc(100vh-45px)] md:h-[calc(100vh-61px)] w-full fadein_left bg-slate-500/30 z-0" onClick={() => { setCartOpen(false) }}>
          <aside className="fixed top-0 right-0 h-[calc(100vh-45px)] md:h-[calc(100vh-61px)] flex flex-col items-center justify-between sm:w-[400px] bg-bckgrnd/90 rounded-lg z-10" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-full mx-1 flex flex-col items-center justify-between text-text  border-[1px] border-emphasis rounded-lg">
              <ul className="h-full w-full">
                <img src="/table_decoration.png" className="w-[400px] h-[110px]" />
                <div className="w-full px-2 py-1 flex items-center justify-between font-merri font-bold">
                  <h1 className="w-full">Dish</h1>
                  <h1 className="w-[100px] text-end">Quantity</h1>
                  <h1 className="w-[100px] text-end">Price</h1>
                  <span className="w-[50px]"></span>
                </div>
                {
                  cart.map((entry) => {
                    return (
                      <CartProduct key={uuid()} productData={entry} execCartAction={execCartAction} />
                    )
                  })
                }
                <div className="w-full h-[1px] my-2 flex items-center justify-center">
                  <span className="block w-[95%] h-[1px] bg-emphasis"></span>
                </div>
                <div className="w-full px-2 my-1 flex items-center justify-between font-merri">
                  <span className="font-bold">Total <span className="text-emphasis font-normal">{'('}+ shipment{')'}</span>: </span>
                  <span className="font-bold">${cart.reduce((acc, curr) => acc += curr.price * curr.quantity, 0) + 10}</span>
                </div>
              </ul>
              <div className="w-full flex pb-4 items-center justify-between font-merri">
                <div 
                  onClick={() => setCartOpen(false)}
                  className="w-fit h-fit px-2 ml-4 py-1 bg-bckgrnd text-text shadow-sm shadow-slate-500 hover:bg-emphasis hover:text-bckgrnd text-sm rounded-md cursor-pointer"
                >close</div>
                <div 
                  onClick={() => setCartOpen(false)}
                  className="w-fit h-fit px-3 py-2 bg-secondary text-text rounded-md shadow-sm shadow-slate-500 hover:bg-emphasis hover:text-bckgrnd text-sm cursor-pointer duration-100"
                >payment</div>
                <div className="w-[30px]">
                </div>
              </div>
            </div>
          </aside>
        </div>
        , document.body)}
    </>

  );
}

export default Cart;