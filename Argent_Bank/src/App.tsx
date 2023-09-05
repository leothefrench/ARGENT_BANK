import './App.scss'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Router } from './components/routes/Router'

function App() {

  return (
    <div className='body'>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
