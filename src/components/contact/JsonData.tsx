import { JsonDataProps } from "../../../typedefinitions";
import { v4 as uuid } from 'uuid'

const JsonData = ({ formData }: JsonDataProps) => {
  return (
    <div className="min-h-[200px] w-full px-2 xs:w-[300px] flex items-center justify-start md:row-start-2 md:col-start-0 md:self-center md:justify-self-center text-sm sm:text-base text_emphasis overflow-hidden">
      <code>
        <span className="font-bold text-text">data = {'{'}</span>
        <br></br>
        {
          Object.entries(formData).map(entry => (
            <span key={uuid()}>
              {
                !(entry[0] !== 'ein' && !entry[1]) && !(entry[0] !== 'state' && !entry[1]) ?
                <span>
                  <span className="pl-4 text-text">
                    <span className="font-semibold text-text">{entry[0]}</span>
                    <span className="text-text w-[100px]">: {entry[1] || <q/>};</span>
                  </span>
                  <br></br>
                </span> : <></>
              }
            </span>
          ))
        }
        <span className="font-bold text-text">{'}'}</span>
      </code>
    </div>
  );
}

export default JsonData;