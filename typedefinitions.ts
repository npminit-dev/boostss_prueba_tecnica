import { Dispatch, SetStateAction } from "react"

export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: string
  preparationTime: number
  rating: number
}

export type CartProduct = {
  product_id: number
  name: string
  quantity: number
  price: number
}

export type NavLinkProps = {
  text: string
  url: string
  onClick?: () => void
}

export type LoadState = 'success' | 'pending' | 'error'

export type RefetchBarProps = {
  fetchProducts: (value?: string) => Promise<void>
  fetchWithError: () => Promise<void>
  setFirstFetch: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
}

export type SearchBarProps = {
  fetchProducts: (value?: string) => Promise<void>
}

export type ProductListProps = {
  products: Product[]
}

export type ProductProps = Product&{
  execCartAction: React.Dispatch<CartActions>,
  availability: boolean
}

export type CartActions =
  {
    type: 'GET_CART'
  } | {
    type: 'ADD_TO_CART',
    payload: CartProduct
  } | {
    type: 'DELETE_FROM_CART',
    payload: { id: number }
  } | {
    type: 'UPDATE_QUANTITY',
    payload: { id: number, newQuantity: number }
  }

export type CartProps = {
  cart: CartProduct[],
  execCartAction: React.Dispatch<CartActions>,
  setCartOpen: Dispatch<SetStateAction<boolean>>
}

export type CartProductProps = {
  productData: CartProduct,
  execCartAction: React.Dispatch<CartActions>
}
