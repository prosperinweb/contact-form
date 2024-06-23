import { Query } from '..';
import styles from './QueryList.module.css'

interface QueryListProps {
    label: string;
    queries: typeof Query[]
}

const QueryList = ({label, queries}: QueryListProps) => {
  return (
    <div>
        <p>{label}</p>
        <ul className={styles.queryList}>
            {queries.map((query) => <Query key={query.name} {...query}/>)}
        </ul>
    </div>
  )
}

export default QueryList