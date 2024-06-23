import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Built by <a target='_blank' href='https://github.com/ProsperInWeb'>ProsperInWeb</a></p> 
      <p>Design challenge by <a target='_blank' href='https://www.frontendmentor.io?ref=challenge'>FrontendMentor</a></p> 
      
    </footer>
  )
}

export default Footer