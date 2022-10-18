
import './App.css';
import NavBar from './components/navBar/NavBar';
import  ItemListContainer  from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer texto='Diablo Vinos'/>
    </div>
  );
}

export default App;
