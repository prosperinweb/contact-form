
import { type QueryListProps } from "../types";
import Query from "./Query";

const QueryList = ({ label, queries }: QueryListProps) => {
  return (
    <div>
      <p>{label}</p>
      <ul>
        {queries.map((query) => (
          <Query
            key={`${query.category}-${query.value}`}
            category={query.category}
            value={query.value}
          />
        ))}
      </ul>
    </div>
  );
};

export default QueryList;
