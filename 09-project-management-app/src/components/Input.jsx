import {forwardRef} from 'react';

const Input = forwardRef(function({id, label, type, ...props}, ref) {
  const inputClass = "w-full bg-stone-200 p-1 rounded-sm text-stone-600 border-stone-300 border-b-2 focus-visible:outline-0 focus:border-stone-600";
  return (
    <p className="flex flex-col my-4 gap-1">
      <label className="text-sm uppercase text-stone-500 font-bold" htmlFor={id}>{label}</label>
      {type === "textarea" ?
        <textarea ref={ref} className={inputClass} id={id} {...props}></textarea> :
        <input ref={ref} type={type} className={inputClass} id={id} {...props}></input>
      }
    </p>
  );
});

export default Input;