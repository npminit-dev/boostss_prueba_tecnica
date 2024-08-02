import { useReducer, useState } from "react";
import { CartActions, CartProduct } from "../../../typedefinitions";
import { LocalStoragePreset } from "lowdb/browser";

const db = LocalStoragePreset<CartProduct[]>('cart', [])

export default function useCart() {
  const [cart, execCartAction] = useReducer(getCartReducer, db.data)
  return { cart, execCartAction }
}

function getCartReducer(state: CartProduct[], action: CartActions) {
  switch(action.type) {
    case 'GET_CART':
      return [...db.data]
    case 'ADD_TO_CART': 
      db.data.push(action.payload)
      db.write()
      return [...db.data]
    case 'DELETE_FROM_CART':
      db.data = db.data.filter(prod => prod.product_id !== action.payload.id)
      db.write()
      return [...db.data]
    case 'UPDATE_QUANTITY': 
      db.data = db.data.map(prod => 
        prod.product_id === action.payload.id 
        ? ({ ...prod, quantity: action.payload.newQuantity  }) 
        : prod )
      db.write()
      return [...db.data]
  }
}