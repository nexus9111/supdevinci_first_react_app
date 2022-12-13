import { Col, Row } from 'antd';
import { useState } from 'react';

import CocktailCard from './CocktailCard';

import cocktailApiUtils from '../apiUtils/cocktailApiRequests'
import FormSearchCocktail from './FormSearchCocktail'

const ListCocktails = () => {
    const [cocktails, setCocktails] = useState(null);

    const searchCocktail = async (e) => {
        e.preventDefault();
        const cocktailName = e.target.search.value;
        if (cocktailName === "") {
            alert("Please enter a cocktail name");
            return;
        }
        const data = await cocktailApiUtils.getCocktailByName(cocktailName);
        if (data.drinks === null) {
            alert("No cocktails found");
            return;
        }
        setCocktails(data.drinks);
    }

    return (
        <>
            <Row>
                {cocktails ? (
                    <>
                        {(cocktails.map((cocktail) =>
                            <Col span={6} key={cocktail.strDrink}>
                                <CocktailCard cocktail={cocktail} />
                            </Col>
                        ))}
                    </>
                ) : (
                    <Col span={6}>
                        <FormSearchCocktail onSubmit={searchCocktail} />
                    </Col>
                )}

            </Row>
        </>
    )
}

export default ListCocktails;
