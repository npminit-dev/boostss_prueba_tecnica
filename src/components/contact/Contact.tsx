import { useReducer } from "react";
import { ContactFormData, FormStateActions } from "../../../typedefinitions";
import ContactForm from "./ContactForm";
import AboutContact from "./AboutContact";
import JsonData from "./JsonData";
import useFormData from "./useFormData";

const Contact = () => {

  const { formData, execFormAction } = useFormData()

  return (
    <section className="w-full py-6 flex md:grid md:grid-rows-2 md:grid-cols-2 flex-col items-center justify-around">
      <AboutContact/>
      <ContactForm {...{ formData, execFormAction }}/>
      <JsonData formData={formData} />
    </section>
  );
}
 
export default Contact;



