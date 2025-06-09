export default function Input({label, name, type, ...props}) {
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required {...props} />
    </div>
  )
}