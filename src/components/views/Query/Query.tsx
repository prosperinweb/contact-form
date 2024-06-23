import styles from './QueryType.module.css'

export type QueryCategory = 'general' | 'support' | 'feedback' | 'enquiry'

export interface QueryProps {
  category: QueryCategory;
  value: string;
}

const Query = ({category, value}: QueryProps) => {
  return (
    <div className={styles.query}>
      <label htmlFor={value}>{value} <span className={styles.required}>*</span></label>
      <input type='radio' name='query' id={`${category}-${value}`} required/>
    </div>
  )
}

export default Query;