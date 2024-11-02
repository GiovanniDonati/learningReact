function Button({ darkMode, children, ...props }) {
  const itsDark = "bg-blue-300 text-black hover:bg-blue-200";
  const itsLight = "bg-blue-800 text-white hover:bg-blue-500";
  return (
    <button
      {...props}
      className={`${
        darkMode ? itsDark : itsLight
      } p-2 rounded-md text-base font-medium w-10`}
    >
      {children}
    </button>
  );
}

export default Button;
