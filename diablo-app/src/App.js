
import './App.css';
import NavBar from './components/navbar/NavBar';
import  ItemListContainer  from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer texto='Diablo Vinos'/>
    </div>
  );
}

export default App;
