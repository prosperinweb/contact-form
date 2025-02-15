import { InputProps } from "../types";

const Input = ({ type, name, label }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name}>
        {label} <span className="text-green-600">*</span>
      </label>
      <input
        className="border border-green-600 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600 [&:user-invalid]:border-red-600 [&:user-invalid]:ring-red-500 transition-all duration-200"
        type={type}
        name={name}
        maxLength={320} //max length as per RFC 5321
        minLength={2}
        id={name}
        required
      />
      <p className="error-message opacity-0">
        Please enter a valid {label.toLowerCase()}
      </p>
    </div>
  );
};

export default Input;
