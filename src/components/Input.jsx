function Input({ themeMode, ...props }) {
  return (
    <input
      {...props}
      className={`${
        themeMode ? "bg-gray-600 text-white" : "bg-white"
      } p-2 rounded-md text-base font-medium`}
    />
  );
}

export default Input;
