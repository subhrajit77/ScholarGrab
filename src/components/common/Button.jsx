export default function Button({ variant = "red", as = "button", children, ...rest }) {
  const className = `btn btn-${variant}`;
  if (as === "a") return <a className={className} {...rest}>{children}</a>;
  return <button className={className} {...rest}>{children}</button>;
}