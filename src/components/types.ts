export type QueryCategory = "general" | "support" | "feedback" | "enquiry";

export interface QueryProps {
  category: QueryCategory;
  value: string;
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
