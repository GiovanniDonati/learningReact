function Button(props) {
  return (
    <button
      {...props}
      className="bg-blue-800 text-white p-2 rounded-md text-base font-medium w-10 hover:bg-blue-500"
    >
      {props.children}
    </button>
  );
}

export default Button;
