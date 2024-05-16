const Button = ({ className, children }) => {
    return (
      <button className={`px-2 py-1 mx-3 my-1 rounded border border-gray-300 ${className} custom-button`}>
        {children}
      </button>
    );
  };
  
  export default Button;