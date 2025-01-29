import { QueryProps } from "../types";

const Query = ({ category, value }: QueryProps) => {
  return (
    <div>
      <label htmlFor={value}>
        {value} <span>*</span>
      </label>
      <input type="radio" name="query" id={`${category}-${value}`} required />
    </div>
  );
};

export default Query;
