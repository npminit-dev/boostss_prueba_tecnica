import { useEffect, useState } from "react";
import { ProductListProps } from "../../../typedefinitions";
import Product from "./Product";
import useCart from "./useCart";
import { BsCartFill } from "react-icons/bs";
import { IoMdArrowUp } from "react-icons/io";
import Cart from "./Cart";

const ProductList = ({ products }: ProductListProps) => {

  const { cart, execCartAction } = useCart()
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [goUpOpen, setGoUpOpen] = useState<boolean>(false)

  useEffect(() => {
    globalThis.addEventListener('scroll', handleScrollChange)
    return () => {
      removeEventListener('scroll', handleScrollChange)
    }
  }, []);

  const handleScrollChange = () => {
    if(globalThis.scrollY > 30) setGoUpOpen(true)
    else setGoUpOpen(false)
  }

  const goToTop = () => {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return ( 
    <>
      <div className="relative h-fit w-full px-2">
        <ul className="relative mb-[10px] flex items-center justify-around flex-wrap h-full w-full">
        {
          cart && products.map((prod) => (
            <Product 
              key={prod.id} 
              {...prod}
              execCartAction={execCartAction}
              availability={!cart.some(c => prod.id === c.product_id)}
            />
          ))
        }
        </ul>
        <div className="sticky w-full h-[50px] bottom-1 sm:bottom-2 antialiased">
          <div>
          {
            goUpOpen && !cartOpen ?
            <div 
              onClick={goToTop}
              className="absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] ml-1 md:ml-2 mb-2 flex float-left items-center justify-center bg-secondary border-2 border-black rounded-full cursor-pointer smth_appear"
              title="Back to top"
            >
              <IoMdArrowUp className="h-[22px] w-[22px] sm:h-[32px] sm:w-[32px] text-black"/>
            </div> : 
            <></>
          }
          </div>
          {
            !cartOpen && cart.length ? 
            <div
              onClick={() => setCartOpen(true)} 
              className="relative h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] flex items-center justify-center mr-1 sm:mr-2 mb-2 float-right smth_appear_slow bg-secondary rounded-full border-text border-2 cursor-pointer duration-200 z-0"
              title="Open cart"
            >
            { 
              cart.length !== 0 ? 
              <div className="absolute flex h-[20px] w-[20px] items-center justify-center -top-1 -right-1 p-1 bg-primary text-bckgrnd border-[1px] border-black rounded-full smth_appear">
                <h6 className="text-[12px] text-text font-merri m-0">{ cart.length }</h6>
              </div> : <></>
            }
              <BsCartFill className="h-[22px] w-[22px] sm:h-[32px] sm:w-[32px] text-black"/>
            </div> : <></>
          }
        </div>
      </div>
      {
        cartOpen ?
        <Cart {...{cart, execCartAction, setCartOpen,}}></Cart> :
        <></>
      }
    </>
  );
}
 
export default ProductList;