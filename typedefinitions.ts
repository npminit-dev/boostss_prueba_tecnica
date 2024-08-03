import React from "react"
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
}

export type SearchBarProps = {
  fetchProducts: (value?: string) => Promise<void>
}

export type ProductListProps = {
  products: Product[]
}

export type ProductProps = Product & {
  execCartAction: React.Dispatch<CartActions>
  availability: boolean
}

export type CartActions =
  {
    type: 'GET_CART'
  } | {
    type: 'ADD_TO_CART'
    payload: CartProduct
  } | {
    type: 'DELETE_FROM_CART'
    payload: { id: number }
  } | {
    type: 'UPDATE_QUANTITY'
    payload: { id: number, newQuantity: number }
  }

export type CartProps = {
  cart: CartProduct[]
  execCartAction: React.Dispatch<CartActions>,
  setCartOpen: Dispatch<SetStateAction<boolean>>
}

export type CartProductProps = {
  productData: CartProduct
  execCartAction: React.Dispatch<CartActions>
}

export type Review = {
  content: string
  author: string
}

export type ContactFormProps = {
  formData: ContactFormData
  execFormAction: React.Dispatch<FormStateActions>,
}

export type JsonDataProps = {
  formData: ContactFormData
}

export type ContactFormData = {
  type: 'Individual' | 'Company'
  ein?: string
  state?: USState
  name: string
  email: string
  message: string
}

export type FormStateActions = {
  type: 'SET_TYPE', payload: 'Individual' | 'Company'
} | {
  type: 'SET_EIN', payload: string
} | {
  type: 'SET_STATE', payload: USState
} | {
  type: 'SET_NAME', payload: string
} | {
  type: 'SET_EMAIL', payload: string
} | {
  type: 'SET_MESSAGE', payload: string
} | {
  type: 'RESET'
}

export type USState =
  | "Alabama"
  | "Alaska"
  | "Arizona"
  | "Arkansas"
  | "California"
  | "Colorado"
  | "Connecticut"
  | "Delaware"
  | "Florida"
  | "Georgia"
  | "Hawaii"
  | "Idaho"
  | "Illinois"
  | "Indiana"
  | "Iowa"
  | "Kansas"
  | "Kentucky"
  | "Louisiana"
  | "Maine"
  | "Maryland"
  | "Massachusetts"
  | "Michigan"
  | "Minnesota"
  | "Mississippi"
  | "Missouri"
  | "Montana"
  | "Nebraska"
  | "Nevada"
  | "New Hampshire"
  | "New Jersey"
  | "New Mexico"
  | "New York"
  | "North Carolina"
  | "North Dakota"
  | "Ohio"
  | "Oklahoma"
  | "Oregon"
  | "Pennsylvania"
  | "Rhode Island"
  | "South Carolina"
  | "South Dakota"
  | "Tennessee"
  | "Texas"
  | "Utah"
  | "Vermont"
  | "Virginia"
  | "Washington"
  | "West Virginia"
  | "Wisconsin"
  | "Wyoming"
  | "District Of Columbia"
  | "American Samoa"
  | "Guam"
  | "Northern Mariana Islands"
  | "Puerto Rico"
  | "U.S. Virgin Islands";
