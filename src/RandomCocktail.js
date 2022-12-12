import { Card } from 'antd';
import { useState, useEffect } from 'react';

import Divider from './Divider';

const RandomCocktail = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setRandomCocktail(data.drinks[0]);
        })()
    }, []);

    return (
        <>
            {randomCocktail ? (
                <Card title={randomCocktail.strDrink}
                    extra={<p>{randomCocktail.strCategory}</p>}
                    style={{ width: 300 }}
                    cover={<img alt="example" src={randomCocktail.strDrinkThumb} />}
                >
                    <p>{randomCocktail.strInstructions}</p>
                    <Divider title="Ingredients" />
                    <ul>
                        {(getIngredients(randomCocktail)).map((ingredient) =>
                            <li key={ingredient}>{ingredient}</li>
                        )}
                    </ul>
                </Card>
            ) : (
                // skeleton loading card
                <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            )}
        </>
    )
}


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

export default RandomCocktail;