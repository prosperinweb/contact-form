import { InputProps } from "../types";

const Input = ({ type, name, label }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name}>
        {label} <span className="text-green-600">*</span>
      </label>
      <input
        className="border border-green-600 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600 input:user-valid:border-red-600 transition-all duration-200"
        type={type}
        name={name}
        id={name}
        required
      />
    </div>
  );
};

export default Input;
