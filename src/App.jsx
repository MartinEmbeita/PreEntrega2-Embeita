import NavBar from '../src/components/Navbar'
import ItemListContainer from '../src/components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a Compañeros Peludos" />
    </div>
  )
}

export default App
