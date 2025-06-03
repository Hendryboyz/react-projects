export default function Input({label, name, type}) {
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
    </div>
  )
}