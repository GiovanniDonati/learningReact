function Button({ darkMode, children, ...props }) {
  return (
    <button
      {...props}
      className={`${
        darkMode
          ? "bg-blue-600 text-black hover:bg-blue-400"
          : "bg-blue-800 text-white hover:bg-blue-500"
      } p-2 rounded-md text-base font-medium w-10`}
    >
      {children}
    </button>
  );
}

export default Button;
