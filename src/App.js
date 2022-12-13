import Header from "./Header";
import Articles from "./ArticlesController/Articles";
import Divider from "./Divider";
import RandomCocktail from "./CocktailsController/RandomCocktail";
import ListCocktails from "./CocktailsController/ListCocktails"
import SearchCocktail from "./CocktailsController/SearchCocktail"


function App() {
  return (
    <div>
      <Header />
      <Divider title="Articles" />
      <Articles />
      <Divider title="Random cocktail" />
      <RandomCocktail />
      <Divider title="All cocktails" />
      <SearchCocktail />
      <Divider title="All cocktails" />
      <ListCocktails />
    </div>
  );
}

export default App;
