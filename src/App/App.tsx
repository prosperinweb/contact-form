
import { Footer, Header, Main } from '../components/containers'
import styles from './App.module.css'

function App() {

  return (
    <div className= {styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
