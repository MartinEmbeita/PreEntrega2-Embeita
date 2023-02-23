import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import ItemListContainer from './assets/components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo="Bienvenido a la tienda online" />
    </div>
  )
}

export default App
