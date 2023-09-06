import './home.scss'
import { Hero } from '../../components/hero/Hero'
import { Features } from '../../components/features/Features'

export const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}