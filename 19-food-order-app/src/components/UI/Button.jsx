export default function Button({children, className, textOnly, ...rest}) {
  const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`;
  return (
    <button
      className={cssClasses}
      {...rest}
    >
      {children}
    </button>
  );
}