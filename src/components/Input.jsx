function Input(props) {
  <input
    type={props.type}
    placeholder={props.placeholder}
    className="bg-white p-2 rounded-md text-base font-medium text-black-400"
    value={props.value}
    onChange={props.onChange}
  />;
}

export default Input;
