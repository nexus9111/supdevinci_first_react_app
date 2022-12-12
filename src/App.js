import Header from "./Header";
import Articles from "./Articles";
import Divider from "./Divider";
import RandomCocktail from "./RandomCocktail";


function App() {
  return (
    <div>
      <Header />
      <Divider title="Articles" />
      <Articles />
      <Divider title="Random cocktail" />
      <RandomCocktail />
    </div>
  );
}

export default App;
