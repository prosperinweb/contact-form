import { type QueryListProps } from "../types";
import Query from "./Query";

const QueryList = ({ label, queries }: QueryListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        {label} <span className="text-green-600">*</span>
      </p>
      <ul className="flex flex-col gap-2">
        {queries.map((query) => (
          <Query key={`${query.value}`} value={query.value} name={query.name} />
        ))}
      </ul>
    </div>
  );
};

export default QueryList;
