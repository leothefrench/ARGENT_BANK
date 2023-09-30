import './error.scss'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Oups ! Cette page est introuvable.</p>
        <Link to="/">Retour à la page d'accueil</Link>
    </div>
  )
}