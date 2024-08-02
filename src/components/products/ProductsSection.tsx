import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import RefetchBar from "./RefetchBar";
import Search from "./Search";
import ProductList from "./ProductList";
import PendingScreen from "./PendingScreen";
import ErrorScreen from "./ErrorScreen";

const ProductsSection = () => {

  const { products, loadState, setProducts, fetchProducts, fetchWithError } = useProducts()
  const [firstFetch, setFirstFetch] = useState<boolean>(true)

  useEffect(() => {
    if(loadState === 'success' && firstFetch) setFirstFetch(false)
  }, [loadState]);

  return (
    <section className="relative min_section_box w-full h-fit">
      <div className="w-full flex items-center my-1 px-1 md:px-2 justify-between flex-wrap-reverse">
        <Search fetchProducts={fetchProducts}/>
        <RefetchBar {...{ fetchProducts, fetchWithError, setFirstFetch, isLoading: firstFetch && loadState === 'pending'}}/>
      </div>
      { loadState === 'pending' && firstFetch && <PendingScreen/> }
      { loadState === 'error' && firstFetch && <ErrorScreen/> }
      { products && !firstFetch && 
        <ProductList products={products}/>
      }
    </section>
  );
}
 
export default ProductsSection;