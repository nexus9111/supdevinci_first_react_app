const CocktailDbUrl = {
    random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    search: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
}

const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

exports.getRandomCocktail = async () => {
    return await fetchAPI(CocktailDbUrl.random);
}

exports.getCocktailByName = async (cocktailName) => {
    return await fetchAPI(CocktailDbUrl.search + cocktailName);
}

exports.getAllCocktails = async () => {
    return await fetchAPI(CocktailDbUrl.search);
}
