import styles from './Input.module.css'

interface InputProps {
  type: string;
  name: string;
  label: string
}

const Input = ({type, name, label}: InputProps) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={name}>{label} <span className={styles.required}>*</span></label>
      <input type={type} name={name} id={name} required/>
    </div>
  )
}

export default Input