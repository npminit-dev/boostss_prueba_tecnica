import { useReducer } from "react";
import { ContactFormData, FormStateActions } from "../../../typedefinitions";
import ContactForm from "./ContactForm";
import AboutContact from "./AboutContact";
import JsonData from "./JsonData";

const Contact = () => {

  const [formData, execFormAction] = useReducer(formReducer, DefFormValues)

  return (
    <section className="w-full py-6 flex md:grid md:grid-rows-2 md:grid-cols-2 flex-col items-center justify-around">
      <AboutContact/>
      <ContactForm {...{ formData, execFormAction }}/>
      <JsonData formData={formData} />
    </section>
  );
}
 
export default Contact;

const DefFormValues: ContactFormData = {
  type: 'Individual',
  ein: '',
  state: 'NEW YORK',
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

