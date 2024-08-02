import { FormEvent, useEffect, useState } from "react";
import { ContactFormProps, USState } from "../../../typedefinitions";
import { AiOutlineClear, AiOutlineLoading } from "react-icons/ai";
import { sleep } from "../../utils.mjs";
import { IoMdCheckmark } from "react-icons/io";

const ContactForm = ({ execFormAction, formData }: ContactFormProps) => {

  useEffect(() => {
    console.log('mounted')
  }, []);

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

  return (
    <form
      id="contact_form"
      onSubmit={handleSubmit}
      className="w-[calc(100vw-30px)] xs:w-[300px] h-fit my-6 py-2 md:py-4 px-3 flex flex-col items-start justify-around 
      md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:self-center md:justify-self-center
      rounded-xl border-[1px] border-slate-500 text-[12px] md:text-[13px] 
      smth_appear md:fadein_left_long bg-gradient-to-tr from-primary/70 from-20% via-bckgrnd/70 via-50% to-emphasis/70 to-100%"
    >
      <div className="w-full h-fit flex px-2 py-2 items-center justify-center">
        <h1 className="inline text-base md:text-xl font-merri font-bold">Contact us!</h1>
      </div>
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
        Entity
        <select 
          value={formData.type}
          onChange={(e) => {
            execFormAction({ type: 'RESET' })
            execFormAction({ type: 'SET_TYPE', payload: e.target.value as "Individual" | "Company" })
          }}
          className="w-full mt-[2px] px-[8px] py-[5px] border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 cursor-pointer shadow-emphasis focus:backdrop-blur-sm focus:shadow-center duration-200"
          name="entity"
        >
          <option value={'Individual'}>Individual</option>
          <option value={'Company'}>Company</option>
        </select>
      </label>
      {formData.type === 'Individual' ? 
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
        Your state
        <select 
          value={formData.state}
          onChange={(e) => execFormAction({ type: 'SET_STATE', payload: e.target.value as USState})}
          className="w-full mt-[2px] px-[8px] py-[5px] border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 cursor-pointer shadow-emphasis focus:backdrop-blur-sm focus:shadow-center duration-200"
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
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
        Company EIN
        <input
          value={formData.ein}
          onChange={(e) => execFormAction({ type: 'SET_EIN', payload: e.target.value})}
          type="text"
          placeholder="XX-XXXXXXX"
          required
          pattern='^\d{2}-\d{7}$'
          name="company ein"
          className="w-full mt-[2px] border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 px-[8px] py-[5px] shadow-emphasis focus:shadow-center focus:backdrop-blur-sm duration-200"
        ></input>
      </label> : <></>}
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
        {formData.type === 'Company' ? 'Company name' : 'Your name'}
        <input 
          value={formData.name}
          onChange={(e) => execFormAction({ type: 'SET_NAME', payload: e.target.value})}
          className="w-full mt-[2px] border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 px-[8px] py-[5px] shadow-emphasis focus:shadow-center focus:backdrop-blur-sm duration-200"
          type="text"
          name="name"
          placeholder={formData.type === 'Company' ? 'Starbridge Innovations Inc.' : 'Emma Carter'}
          required autoComplete="name"
        ></input>
      </label>
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
      {formData.type === 'Company' ? 'Company email' : 'Your email'}
        <input 
          value={formData.email}
          onChange={(e) => execFormAction({ type: 'SET_EMAIL', payload: e.target.value})}
          className="w-full mt-[2px] border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 px-[8px] py-[5px] shadow-emphasis focus:shadow-center focus:backdrop-blur-sm duration-200"
          type="text"
          placeholder={formData.type === 'Company' ? 'starbridge@building.en' : 'carter_emma_1995@gmail.com'}
          name="email"
          required autoComplete="email"
        ></input>
      </label>
      <label className="w-full flex my-1 flex-col items-start justify-center font-merri smth_appear">
        Message
        <textarea 
          value={formData.message}
          onChange={(e) => execFormAction({ type: 'SET_MESSAGE', payload: e.target.value})}
          className="w-full h-[100px] mt-1 border-[1px] rounded-md bg-bckgrnd/50 text-text border-text/40 px-[8px] py-[5px] text-wrap resize-none shadow-emphasis focus:shadow-center focus:backdrop-blur-sm duration-200"
          placeholder={
            formData.type === 'Individual' 
              ? 'Hello! I wanted to find out how to buy with virtual wallets...'
              : 'We would like to contact you to propose a new business'
          }
          required
          name="message"
        />
      </label>
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => execFormAction({ type: 'RESET' })} 
          className="w-[35px] h-[35px] flex items-center justify-center bg-bckgrnd border-[1px] border-green-600 hover:bg-green-600 hover:border-bckgrnd rounded-full cursor-pointer duration-200"
        >
          <AiOutlineClear className="w-[25px] h-[25px] text-green-600 hover:text-bckgrnd"/>
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
  "ALABAMA",
  "ALASKA",
  "ARIZONA",
  "ARKANSAS",
  "CALIFORNIA",
  "COLORADO",
  "CONNECTICUT",
  "DELAWARE",
  "FLORIDA",
  "GEORGIA",
  "HAWAII",
  "IDAHO",
  "ILLINOIS",
  "INDIANA",
  "IOWA",
  "KANSAS",
  "KENTUCKY",
  "LOUISIANA",
  "MAINE",
  "MARYLAND",
  "MASSACHUSETTS",
  "MICHIGAN",
  "MINNESOTA",
  "MISSISSIPPI",
  "MISSOURI",
  "MONTANA",
  "NEBRASKA",
  "NEVADA",
  "NEW HAMPSHIRE",
  "NEW JERSEY",
  "NEW MEXICO",
  "NEW YORK",
  "NORTH CAROLINA",
  "NORTH DAKOTA",
  "OHIO",
  "OKLAHOMA",
  "OREGON",
  "PENNSYLVANIA",
  "RHODE ISLAND",
  "SOUTH CAROLINA",
  "SOUTH DAKOTA",
  "TENNESSEE",
  "TEXAS",
  "UTAH",
  "VERMONT",
  "VIRGINIA",
  "WASHINGTON",
  "WEST VIRGINIA",
  "WISCONSIN",
  "WYOMING",
  "DISTRICT OF COLUMBIA",
  "AMERICAN SAMOA",
  "GUAM",
  "NORTHERN MARIANA ISLANDS",
  "PUERTO RICO",
  "U.S. VIRGIN ISLANDS"
];

