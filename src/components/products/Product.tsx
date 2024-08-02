import { useInView } from "react-intersection-observer";
import { ProductProps } from "../../../typedefinitions";
import { BsCartFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const Product = (props: ProductProps) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .5
  })

  const handleAddToCart = () => props.execCartAction({ type: 'ADD_TO_CART', payload: { name:props.name, product_id:props.id, quantity:1, price:props.price }})
  
  return (
    <article ref={ref} className="h-[225px] w-full sm:max-w-[500px] md:basis-[400px] grow my-1 sm:m-2 rounded-lg overflow-hidden shadow-md antialiased">
      {
        inView ?
          <div className="relative h-full w-full flex flex-col items-center justify-between smth_appear_slow bg-bckgrnd/80">
            <div className="w-full p-1 flex flex-col items-center bg-primary">
              <h1 className="font-merri font-bold text-center text-sm md:text-base text-text">~ {props.name} ~</h1>
              <h2 className="text-[12px] sm:text-sm text-text">{props.category}</h2>
            </div>
            <p className="max-w-[350px] my-2 px-1 text-center font-roboto text-[11px] sm:text-[12px] leading-tight sm:leading-normal text-text italic">"{props.description}"</p>
            <h3 className="font-merri text-[11px] sm:text-[13px] text-text"> Preparation time: {props.preparationTime}'</h3>
            <h2 className="mb-1 sm:mb-2 text-sm md:text-base font-merri font-bold text-green-800">$ {props.price}</h2>
            {
              props.availability ?
              <div
                onClick={() => handleAddToCart()} 
                className="mb-1 sm:mb-2 flex items-center justify-center py-1 px-4 text-text bg-emphasis hover:bg-text rounded-xl cursor-pointer duration-200"
              >
                <BsCartFill className="h-[25px] w-[25px] text-primary" title="Add to cart" />
              </div> :
              <div className="mb-1 sm:mb-2 flex items-center justify-center py-1 px-4 text-text bg-bckgrnd border-slate-500/80 border-[1px] rounded-xl smth_appear opacity-50">
                <FaCheck className="h-[25px] w-[25px] text-emphasis/80" title="Product added to cart" />
              </div>
            }
            <p className="absolute right-2 bottom-2 font-merri text-[12px] sm:text-sm">{ props.rating }/5⭐</p>
            <div className="absolute left-2 bottom-0 h-[40px] w-[40px]">
            {
            props.category === 'Appetizer' ?
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 125">
                <g transform="translate(0,-952.36218)">
                  <path d="m 43.822055,976.30761 a 0.99853978,1.0005488 0 0 0 -0.873635,1.03171 l 0,7.40958 c -6.006707,0.57094 -11.542874,1.88188 -16.318252,3.75168 l -0.655227,-4.31444 a 0.99853978,1.0005488 0 0 0 -1.060842,-0.87539 0.99853978,1.0005488 0 0 0 -0.936037,1.15677 l 0.74883,4.7834 c -1.009349,0.44704 -1.97592,0.93863 -2.901716,1.43814 -7.253585,3.91364 -11.887676,9.45344 -11.887676,15.66324 0,6.2099 4.634091,11.7184 11.887676,15.632 7.253584,3.9137 17.180932,6.3154 28.112324,6.3154 10.931392,0 20.85874,-2.4017 28.112324,-6.3154 7.253585,-3.9136 11.887676,-9.4221 11.887676,-15.632 0,-6.2098 -4.634091,-11.7496 -11.887676,-15.66324 -4.417949,-2.38368 -9.826694,-4.17404 -15.850234,-5.22109 L 60.920339,977.183 a 0.99853978,1.0005488 0 0 0 -1.060842,-0.87539 0.99853978,1.0005488 0 0 0 -0.936038,1.15677 l 1.185648,7.65968 c -3.252534,-0.46071 -6.655275,-0.6878 -10.171607,-0.6878 -1.691829,0 -3.354787,0.0465 -4.9922,0.15632 l 0,-7.25326 a 0.99853978,1.0005488 0 0 0 -1.123245,-1.03171 z m 6.115445,9.94196 c 3.62286,0 7.136304,0.27366 10.452418,0.7816 l 0.530421,3.43904 a 1.0082639,1.0102924 0 0 0 0.0624,0.21885 c -1.313817,0.45237 -2.426377,1.33833 -3.151326,2.50112 -2.469767,-0.50315 -5.114419,-0.7816 -7.893916,-0.7816 -0.494481,0 -0.979054,0.0183 -1.466459,0.0313 -0.895622,-1.03938 -2.119549,-1.7649 -3.525741,-2.0009 a 0.99853978,1.0005488 0 0 0 0,-0.0938 l 0,-3.90801 c 1.635536,-0.11567 3.297535,-0.18758 4.9922,-0.18758 z m -6.98908,0.37517 0,3.72042 a 0.99853978,1.0005488 0 0 0 0,0.0938 c -2.09819,0.35214 -3.82856,1.7835 -4.586583,3.72042 -2.884898,0.93843 -5.39961,2.19509 -7.332293,3.75168 -0.866285,-0.79553 -1.968272,-1.32378 -3.182528,-1.50067 l -0.904836,-6.0027 c 4.607127,-1.87821 10.058115,-3.18759 16.00624,-3.78295 z m 19.531982,0.7816 c 4.256939,0.79789 8.145456,1.97706 11.544461,3.4703 a 0.99853978,1.0005488 0 0 0 -0.0936,0.25012 l -2.152886,10.12954 c -0.727193,-1.2459 -1.769854,-2.3865 -3.057723,-3.40778 0.122878,-0.47742 0.187208,-0.986 0.187208,-1.50067 0,-3.30334 -2.693927,-6.00269 -5.99064,-6.00269 a 1.0082639,1.0102924 0 0 0 0,-0.15632 l -0.436817,-2.7825 z m -37.472699,3.84547 0.811232,5.22109 c -2.753861,0.5383 -4.836193,2.96599 -4.836193,5.8776 0,3.3033 2.693927,6.0027 5.990639,6.0027 0.175216,0 0.358926,-0.016 0.530422,-0.031 1.194317,2.9074 4.064908,5.3276 7.862714,7.0656 3.990653,1.8264 9.049955,2.9076 14.570983,2.9076 6.159474,0 11.722871,-1.3337 15.881435,-3.5641 1.07221,1.0058 2.510517,1.6257 4.087364,1.6257 3.296713,0 5.990639,-2.6994 5.990639,-6.0027 0,-2.1828 -1.18373,-4.1078 -2.932917,-5.1585 -4.59e-4,-0.022 -0.03055,-0.041 -0.0312,-0.063 l 2.901716,-13.41223 c 0.360617,0.18002 0.713993,0.37561 1.060842,0.56276 6.839617,3.69027 10.920437,8.67547 10.920437,14.06877 0,5.3934 -4.08082,10.3473 -10.920437,14.0376 -6.839617,3.6903 -16.383769,6.0339 -26.957878,6.0339 -10.574109,0 -20.118261,-2.3436 -26.957878,-6.0339 -6.839617,-3.6903 -10.920437,-8.6442 -10.920437,-14.0376 0,-5.3933 4.08082,-10.3785 10.920437,-14.06877 0.652925,-0.35229 1.327061,-0.70508 2.028081,-1.03172 z m 18.939157,1.09424 c 2.217519,0 3.99376,1.77982 3.99376,4.0018 0,2.22199 -1.776241,4.00175 -3.99376,4.00175 -2.217518,0 -3.993759,-1.77976 -3.993759,-4.00175 0,-2.22198 1.776241,-4.0018 3.993759,-4.0018 z m 18.970359,0 c 2.217518,0 3.99376,1.77982 3.99376,4.0018 0,2.22199 -1.776242,4.00175 -3.99376,4.00175 -2.217518,0 -3.99376,-1.77976 -3.99376,-4.00175 0,-2.22198 1.776242,-4.0018 3.99376,-4.0018 z m -13.354134,1.93837 c 0.124365,-0.002 0.248779,0 0.374415,0 2.516612,0 4.914158,0.25102 7.145086,0.68781 -0.102672,0.43876 -0.156006,0.9065 -0.156006,1.37562 0,3.30335 2.693926,6.00265 5.990639,6.00265 2.060446,0 3.882013,-1.0601 4.960999,-2.6574 1.627266,1.4334 2.633961,3.0335 2.901716,4.7209 -0.281394,-0.041 -0.581305,-0.063 -0.873635,-0.063 -3.296713,0 -5.99064,2.6993 -5.99064,6.0027 0,1.0168 0.236924,1.9725 0.686428,2.8138 -3.75099,1.9796 -8.908771,3.2515 -14.664587,3.2515 -5.207104,0 -9.965784,-1.0239 -13.603744,-2.6888 -3.417282,-1.5639 -5.790431,-3.6888 -6.770671,-5.9714 2.006917,-0.9722 3.400936,-3.0344 3.400936,-5.4087 0,-1.0323 -0.255288,-1.9946 -0.717629,-2.84499 1.465429,-1.23057 3.429624,-2.29829 5.709829,-3.15766 0,3.30335 2.693926,6.00265 5.990639,6.00265 3.296713,0 5.99064,-2.6993 5.99064,-6.00265 0,-0.72261 -0.138487,-1.42056 -0.374415,-2.06343 z m -22.714509,4.06433 a 1.0082639,1.0102924 0 0 0 0.187208,0 c 2.188062,0.0333 3.931357,1.80085 3.931357,4.00175 0,2.222 -1.776241,4.0018 -3.99376,4.0018 -2.217518,0 -3.993759,-1.7798 -3.993759,-4.0018 0,-2.1798 1.710423,-3.93595 3.868954,-4.00175 z m 43.057723,8.00355 c 2.217518,0 3.99376,1.7798 3.99376,4.0018 0,2.222 -1.776242,4.0018 -3.99376,4.0018 -1.140925,0 -2.176236,-0.4592 -2.901716,-1.2193 a 1.0628995,0.93996435 0 0 0 -0.24961,-0.3126 c -0.526316,-0.6777 -0.842434,-1.538 -0.842434,-2.4699 0,-2.222 1.776242,-4.0018 3.99376,-4.0018 z" fill="#000000" fillOpacity="1" stroke="none" visibility="visible" display="inline" overflow="visible" />
                </g>
              </svg> :
            props.category === 'Main Course' ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
                <path d="M51.32,27.18c-.28,0-.55-.09-.75-.27-1.18-1.07-3.65-4.96-1.13-8.01,1.98-2.4-1.22-6.42-1.25-6.46-.3-.37-.18-.86,.28-1.11,.46-.24,1.08-.14,1.39,.23,.16,.2,3.98,4.91,1.25,8.22-1.87,2.27,.2,5.39,.96,6.07,.37,.33,.33,.84-.09,1.13-.19,.13-.43,.2-.66,.2Z" /><path d="M59.25,26.98c-.3,0-.6-.11-.79-.31-1.33-1.38-2.36-4.61,.2-7.84,2.67-3.35-1.68-8.52-1.72-8.57-.31-.36-.19-.86,.26-1.11s1.08-.15,1.39,.21c.21,.25,5.12,6.09,1.76,10.33-2.25,2.83-.94,5.35-.3,6.02,.34,.35,.25,.85-.19,1.12-.18,.11-.4,.16-.61,.16Z" /><path d="M87,79H13c-.55,0-1-.45-1-1s.45-1,1-1H87c.55,0,1,.45,1,1s-.45,1-1,1Z" /><path d="M56.44,38.08c.01-.06,.04-.12,.04-.19-.04-3.53-2.94-6.41-6.48-6.41s-6.44,2.88-6.48,6.41c0,.07,.02,.13,.04,.19-15.69,3.01-27.56,16.81-27.56,33.38,0,.52,.01,1.03,.03,1.54H83.97c.02-.51,.03-1.02,.03-1.54,0-16.57-11.86-30.37-27.56-33.38Zm-6.44-4.6c2.41,0,4.38,1.93,4.47,4.32-1.13-.08-2.79-.12-4.47-.12s-3.34,.04-4.47,.12c.08-2.39,2.06-4.32,4.47-4.32Zm-32,37.52c.11-7.48,2.84-14.7,7.71-20.38,4.92-5.73,11.71-9.55,19.13-10.75,.57-.09,2.42-.19,5.16-.19s4.59,.1,5.16,.19c7.41,1.2,14.2,5.02,19.13,10.75,4.87,5.68,7.6,12.9,7.71,20.38H18Z" />
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                <path d="m79.418 49.375c0.15234-0.33984 0.74609-0.80859 0.74609-1.8789 0-3.5195-3.5-5.9258-7.1602-7.1484-1.1445-0.38281-0.87891-1.3594-0.87891-2.1484 0-5.4844-5.793-9.168-10.914-9.1367-1.043 0.007812-1.1328-0.75781-1.9922-1.7148l-0.26562 1.3555-0.019531 0.074219c-1.4844 5.4492-7.0117 8.75-12.512 7.3164l0.003906 0.007812-0.074219-0.019531c-3.5273-0.96094-6.1758-3.6914-7.1797-7.0625-0.097656 0.027344-0.19922 0.039063-0.30859 0.042969-5.8867 0.11328-11.539 4.2148-10.953 9.9023h-0.003906c0.21094 2.0352-3.1992 1.2773-6.3945 4.5977-1.4141 1.4688-2.332 3.9375-1.1328 5.4961 1.8711 2.4375 5.9258 4.1094 9.7148 5.1055 1.6914 0.44531 0.29688 2.1914 2.2812 4.1758 2.1992 2.1953 5.625 1.0977 6.5664-1.4141 0.19141-0.57031 0.75781-0.94922 1.3789-0.88672 10.457 1.1172 22.805 0.40625 31.523-2.4648 3.6797-1.207 6.3516-2.6562 7.5742-4.1992zm-32.422-28.594c-0.054688 1.8633 1.5 3.2578 3.2891 3.3047 3.1953 0.089843 3.375-2.9453 1.4688-3.0391 0.30859-0.65625 0.63281-1.2812 0.97266-1.875 3.0703 1.7227 4.6172 5.375 3.6992 8.8594l-0.019531 0.066406c-1.1094 4.082-5.2266 6.5469-9.3047 5.4766l-0.0625-0.015625c-4.1289-1.1211-6.5195-5.4258-5.4297-9.5664l0.019531-0.066407c1.0391-3.8242 4.7305-6.2578 8.5898-5.6289-0.30469 0.55469-0.59766 1.1328-0.87891 1.7344-0.73438-0.97656-2.3086-0.48438-2.3438 0.75zm4.6836-4.8438c2.0234-2.8945 4.5859-5.1562 7.7891-6.4609 1.582-0.64453 2.5664 1.7695 0.98438 2.4141-2.5352 1.0312-4.6094 2.8086-6.2969 5.082 4.2227 2.4648 4.8477 6.6992 4.9102 6.7969 0.5 0.50781 1.5039 0.91797 2.8086 2.7109 6.5742 0.40234 12.871 4.9961 12.871 11.738 4.4648 1.793 8.0391 4.7383 8.0391 9.2773 0 1.0039-0.32031 1.9688-0.92578 2.8867l-2.0352 11.508c6.1914 1.9453 15.176 5.9375 15.176 12.371 0 4.7812-5.2305 8.9727-13.684 11.887-17.34 5.9766-45.297 5.9766-62.637 0-8.4492-2.9102-13.68-7.1055-13.68-11.887 0-6.4336 8.9844-10.43 15.172-12.375l-2.0273-11.465c-0.60938-0.92188-0.93359-1.9023-0.93359-2.9297 0-4.5391 3.5742-7.4844 8.0391-9.2773 0-6.668 6.2148-11.328 12.871-11.738 1.3555-1.875 0.097656 0.15234 0.96094-3.168l0.019531-0.074219c1.4844-5.4492 7.0117-8.75 12.512-7.3164zm27.238 51.09c8.9688 4.457 6.8867 11.035-5.1211 14.648-13.184 3.9688-34.41 3.9688-47.594 0-12.008-3.6133-14.09-10.191-5.1211-14.648l-0.44922-2.5469c-15.066 4.8359-19.02 13.016-1.1016 19.191 16.785 5.7852 44.148 5.7852 60.938 0 9.6719-3.3359 16.34-8.8125 8.3867-14.707-2.2812-1.6914-5.5195-3.2109-9.4883-4.4844zm-57.359 2.7031c-15.449 8.4688 26.742 16.891 51.488 9.4375 7.9805-2.4023 12.074-5.7734 5.3906-9.4375-0.39453 2.2422-0.59766 4.6094-3.3047 5.6445-7.1953 2.7461-16.172 4.1211-25.133 4.1211v-0.003906c-8.9688 0-17.945-1.375-25.133-4.1211-2.7109-1.0312-2.9102-3.3945-3.3086-5.6406zm27.129-27.863c0-1.7266 2.6211-1.7266 2.6211 0v8.6523c0 1.7266-2.6211 1.7266-2.6211 0zm-13.027 5.2109c-0.38281 1.6797-2.9336 1.0938-2.5508-0.58594 1.3359-5.8203 6.3555-10.285 7.4492-7.5547 0.26953 0.67188-0.058594 1.4297-0.72656 1.6992-2.0977 0.84375-3.7773 4.7422-4.1719 6.4414zm31.227-0.58594c0.38281 1.6797-2.1641 2.2617-2.5508 0.58594-0.45703-1.9844-1.9883-5.3711-4.2617-6.4805-1.543-0.75391-0.39453-3.1016 1.1484-2.3438 3.082 1.5039 5.0234 5.4609 5.6641 8.2383zm-45.562 6.8594c1.8594 1.1797 4.3281 2.2305 7.2617 3.0977 1.1367 6.2734 9.1953 7.8008 12.371 2.2812 11.793 1.1445 29.223 0.066406 37.727-5.4062l-3.1484 17.805c-0.14453 0.82031-0.53906 1.4883-1.3281 1.793-6.8984 2.6367-15.547 3.957-24.207 3.957v0.003906c-8.6523 0-17.301-1.3203-24.203-3.957-0.79297-0.30469-1.1836-0.96875-1.3281-1.793z" fillRule="evenodd"/>
              </svg>
            }
            </div>
          </div> : <></>
      }
    </article>
  );
}

export default Product;