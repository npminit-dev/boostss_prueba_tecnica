import { useEffect, useState } from "react";
import { LoadState, Product } from "../../../typedefinitions";
import { LocalStoragePreset } from "lowdb/browser";
import defaultProducts from "../../../db/products.mjs";
import { sleep } from "../../utils.mjs";

export default function useProducts() {
  const [loadState, setLoadState] = useState<LoadState>('pending')
  const [products, setProducts] = useState<Product[]|null>(null)

  useEffect(() => {
    fetchProducts()
  }, []);

  const fetchProducts = async (search?:string) => {
    setLoadState('pending')
    const db = LocalStoragePreset<Product[]>('products', defaultProducts)
    await sleep(800 + (Math.random() * 201))
    db.write()
    setProducts(!search ? db.data : db.data.filter(prod => new RegExp(`.*${search}.*`, 'i').test(prod.name)))
    setLoadState('success')
  }

  const fetchWithError = async () => {
    setLoadState('pending')
    await sleep(800 + (Math.random() * 201))
    setProducts(null)
    setLoadState('error')
  }

  return { products, setProducts, loadState, fetchProducts, fetchWithError }
}