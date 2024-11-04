function Input(themeMode, props) {
  return (
    <input
      className={`${
        themeMode ? "bg-gray-600 text-white" : "bg-white"
      } p-2 rounded-md text-base font-medium`}
      {...props}
    />
  );
}

export default Input;
