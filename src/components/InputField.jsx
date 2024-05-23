

const InputField = ({ type, name, placeholder, defaultValue,error, required }) => (
    <div className="input-field">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
            
        />
        {error && <span className="error">{error}</span>}
    </div>
);

export default InputField;
