export default function Button({ customClass, children, ...props }) {
  return (
    <button className={`rounded-lg py-3 px-4 ${customClass}`} {...props}>
      {children}
    </button>
  );
}