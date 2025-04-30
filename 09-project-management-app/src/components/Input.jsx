import {forwardRef} from 'react';
const Input = function({id, label, type, ref}) {
  const inputClass = "bg-gray-200 px-1 pt-2 pb-1 border-b-2 border-b-gray-300 focus-visible:outline-0 focus:border-b-gray-500";
  return (
    <div className="w-3/5 flex flex-col mb-3">
      <label className="uppercase text-gray-600 font-bold mb-2" htmlFor={id}>{label}</label>
      {type === "textarea" ?
        <textarea ref={ref} className={inputClass} id={id}></textarea> :
        <input ref={ref} type={type} className={inputClass} id={id}></input>
      }
    </div>
  );
}

export default Input;