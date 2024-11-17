function Title({ themeMode, children }) {
  return (
    <h1
      className={`${
        themeMode ? "text-white" : "text-gray-800"
      } text-3xl font-bold text-center`}
    >
      {children}
    </h1>
  );
}

export default Title;
