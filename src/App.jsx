import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from './pages/login/login.jsx'
import Rotas from './routes/routes.jsx'
import CadastroEletronicos from './pages/CadastrarEletronicos/CadastrarEletronicos.jsx'
import CadastroTipoEletronicos from './pages/CadastrarTipoEletronicos/CadastrarTipoEletronicos.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rotas /> 
    </>
  )
}

export default App
