

export interface InputType {
  type: string;
  name: string;
  label: string
}

export interface TextAreaProps {
    name: string;
    label: string;
    content: string;
    minLength: number;
    maxLength: number;
}