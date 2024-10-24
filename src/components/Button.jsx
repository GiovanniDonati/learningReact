
function Button({props}){
    return (
    <button {...props} className="bg-blue-800 self-end text-white text-base font-bold p-2 gap-2 rounded-md w-full flex justify-center hover:bg-blue-500">
        {props.children}
    </button>
    );
}

export default Button;