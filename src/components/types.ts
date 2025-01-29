export interface QueryProps {
  value: string;
  name: string;
}
export interface TextInputProps {
  type: string;
  name: string;
  label: string;
}

export interface QueryListProps {
  label: string;
  queries: QueryProps[];
}

export interface InputProps {
  type: string;
  name: string;
  label: string;
}
