import { Card } from "antd";
import Divider from '../Divider';

const CocktailCard = (props) => {
    return (
        <Card title={props.cocktail.strDrink}
            extra={<p>{props.cocktail.strCategory}</p>}
            style={{ width: 300 }}
            cover={<img alt="example" src={props.cocktail.strDrinkThumb} />}
        >
            <p>{props.cocktail.strInstructions}</p>
            <Divider title="Ingredients" />
            <ul>
                {(getIngredients(props.cocktail)).map((ingredient) =>
                    <li key={ingredient}>{ingredient}</li>
                )}
            </ul>
        </Card>
    );
};

const getIngredients = (drink) => {
    let ingredients = [];
    for (const key in drink) {
        if (key.includes('strIngredient') && drink[key]) {
            ingredients.push(drink[key]);
        }
    }
    // make all ingredients unique
    ingredients = [...new Set(ingredients)];
    return ingredients;
}

export default CocktailCard;