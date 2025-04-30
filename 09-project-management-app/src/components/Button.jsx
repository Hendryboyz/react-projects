export default function Button({ customClass, children, ...props }) {
  return (
    <button className={`rounded-md py-2 px-4 md:text-base text-xs ${customClass}`} {...props}>
      {children}
    </button>
  );
}