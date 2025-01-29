import { QueryProps } from "../types";

const Query = ({ value, name }: QueryProps) => {
  return (
    <label
      htmlFor={value}
      className="flex flex-row gap-2 items-center border border-green-600 rounded-sm px-3 py-2 cursor-pointer hover:bg-green-200 transition-colors duration-200"
    >
      <input type="radio" name="query" id={`${value}`} required />
      {name}
    </label>
  );
};

export default Query;
