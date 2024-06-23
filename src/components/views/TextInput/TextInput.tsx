import styles from './TextInput.module.css'

interface ITextInput {
  type: string;
  name: string;
  label: string
}

const TextInput = ({type, name, label}: ITextInput) => {
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label} <span className={styles.required}>*</span></label>
      <input type={type} name={name} id={name} required/>
    </div>
  )
}

export default TextInput