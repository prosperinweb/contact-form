import { TextInputProps } from "../types";

const TextInput = ({ type, name, label }: TextInputProps) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <input type={type} name={name} id={name} required />
    </div>
  );
};

export default TextInput;
