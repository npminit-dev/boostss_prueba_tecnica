import { useReducer } from "react";
import { ContactFormData, FormStateActions } from "../../../typedefinitions";

export default function() {
  const [formData, execFormAction] = useReducer(formReducer, DefFormValues)
  return { formData, execFormAction }
}

const DefFormValues: ContactFormData = {
  type: 'Individual',
  ein: '',
  state: 'New York',
  name: '',
  email: '',
  message: '',
}

const formReducer = (state: ContactFormData, action: FormStateActions): ContactFormData => {
  switch (action.type) {
    case 'SET_TYPE': return { ...state, type: action.payload }
    case 'SET_EIN': return { ...state, ein: action.payload }
    case 'SET_STATE': return { ...state, state: action.payload }
    case 'SET_NAME': return { ...state, name: action.payload }
    case 'SET_EMAIL': return { ...state, email: action.payload }
    case 'SET_MESSAGE': return { ...state, message: action.payload }
    case 'RESET': return DefFormValues
    default: return state
  }
}