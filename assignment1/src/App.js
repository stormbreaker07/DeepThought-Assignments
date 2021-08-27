
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ItemListBody from "./components/ItemContainer/ItemListBody";


function App() {
  return (
    <div className="justifyContentPosition">
      <Header></Header>
        <SearchBar></SearchBar>
        <ItemListBody></ItemListBody>
    </div>
  );
}

export default App;
