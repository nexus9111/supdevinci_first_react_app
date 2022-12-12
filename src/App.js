import Header from "./Header";
import Articles from "./ArticlesController/Articles";
import Divider from "./Divider";
import RandomCocktail from "./CocktailsController/RandomCocktail";


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
