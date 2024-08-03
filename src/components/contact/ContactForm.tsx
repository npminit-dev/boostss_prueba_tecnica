import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ContactFormProps, USState } from "../../../typedefinitions";
import { AiOutlineClear, AiOutlineLoading } from "react-icons/ai";
import { sleep } from "../../utils.mjs";
import { IoMdCheckmark } from "react-icons/io";

const ContactForm = ({ execFormAction, formData }: ContactFormProps) => {

  const [sendState, setSendState] = useState<'idle'|'sending'|'ok'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSendState('sending')
    await sleep(2000)
    execFormAction({ type: 'RESET' })
    setSendState('ok')
    await sleep(3000)
    setSendState('idle')
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value
    if(value.trim().length < 20 || value.trim().length > 1000) e.target.setCustomValidity('El mensaje no cumple con el formato requerido')
    else e.target.setCustomValidity('')
    execFormAction({ type: 'SET_MESSAGE', payload: value})
  }

  return (
    <form
      id="contact_form"
      onSubmit={handleSubmit}
      className="contact_form"
    >
      <div className="w-full h-fit flex px-2 py-2 items-center justify-center text_emphasis">
        <h1 className="inline text-base md:text-xl font-merri font-bold">Contact us!</h1>
      </div>
      <label className="form_labels">
        Entity
        <select 
          value={formData.type}
          onChange={(e) => {
            execFormAction({ type: 'RESET' })
            execFormAction({ type: 'SET_TYPE', payload: e.target.value as "Individual" | "Company" })
          }}
          className="form_selects"
          name="entity"
        >
          <option value={'Individual'}>Individual</option>
          <option value={'Company'}>Company</option>
        </select>
      </label>
      {formData.type === 'Individual' ? 
      <label className="form_labels">
        Your state
        <select 
          value={formData.state}
          onChange={(e) => execFormAction({ type: 'SET_STATE', payload: e.target.value as USState})}
          className="form_selects"
          name="state"
        >
        {
          USStates.map(state => (
            <option key={state} value={state}>{state}</option>
          ))
        }
        </select>
      </label> : <></>}
      {formData.type === 'Company' ? 
      <label className="form_labels">
        Company EIN
        <input
          value={formData.ein}
          onChange={(e) => execFormAction({ type: 'SET_EIN', payload: e.target.value})}
          type="text"
          placeholder="XX-XXXXXXX"
          required spellCheck={false}
          pattern='^\d{2}-\d{7}$'
          name="company ein"
          className="form_inputs"
        ></input>
      </label> : <></>}
      <label className="form_labels">
        {formData.type === 'Company' ? 'Company name' : 'Your name'}
        <input 
          value={formData.name}
          onChange={(e) => execFormAction({ type: 'SET_NAME', payload: e.target.value})}
          className="form_inputs"
          type="text" spellCheck={false}
          name="name"
          placeholder={formData.type === 'Company' ? 'Starbridge Innovations Inc.' : 'Emma Carter'}
          required autoComplete="name"
        ></input>
      </label>
      <label className="form_labels">
      {formData.type === 'Company' ? 'Company email' : 'Your email'}
        <input 
          value={formData.email}
          onChange={(e) => execFormAction({ type: 'SET_EMAIL', payload: e.target.value})}
          className="form_inputs"
          type="email" spellCheck={false}
          placeholder={formData.type === 'Company' ? 'starbridge@building.en' : 'carter_emma_1995@gmail.com'}
          name="email"
          required autoComplete="email"
        ></input>
      </label>
      <label className="form_labels">
        Message
        <textarea 
          value={formData.message}
          onChange={handleTextAreaChange}
          minLength={20}
          maxLength={1000}
          className="form_textarea"
          placeholder={
            formData.type === 'Individual' 
              ? 'Hello! I wanted to find out how to buy with virtual wallets...'
              : 'We would like to contact you to propose a new business'
          }
          required spellCheck={false}
          name="message"
        />
      </label>
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => execFormAction({ type: 'RESET' })} 
          className="w-[35px] h-[35px] flex items-center justify-center bg-bckgrnd border-[1px] border-green-600 hover:bg-green-600 hover:border-bckgrnd group rounded-full cursor-pointer duration-200"
        >
          <AiOutlineClear className="w-[25px] h-[25px] text-green-600 group-hover:text-bckgrnd"/>
        </div>
        <button 
          type="submit" 
          title="Send form" 
          form="contact_form" 
          disabled={sendState !== 'idle'}
          className={`h-[35px] m-auto my-4 px-2 py-[2px] text-base md:text-lg rounded-md shadow-center ${sendState === 'idle' ? 'bg-secondary' : sendState === 'sending' ? 'bg-blue-300' : 'bg-green-300'} text-text hover:bg-emphasis hover:text-bckgrnd duration-200`}
        >
        {
          sendState === 'idle' ? 
          'submit' : sendState === 'sending' ?
          <AiOutlineLoading className="h-[23px] w-[23px] animate-spin"/> :
          <IoMdCheckmark className="h-[23px] w-[23px]"/>
        }
        </button>
        <div className="w-[35px]"></div>
      </div>
    </form>
  );
}

export default ContactForm;

const USStates: USState[] = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "District Of Columbia",
  "American Samoa",
  "Guam",
  "Northern Mariana Islands",
  "Puerto Rico",
  "U.S. Virgin Islands"
];

