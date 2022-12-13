import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';

import CocktailCard from './CocktailCard';
import LoadingCocktailCard from './LoadingCocktailCard';

import cocktailApiUtils from '../apiUtils/cocktailApiRequests'

const ListCocktails = () => {
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await cocktailApiUtils.getAllCocktails();
            setCocktails(data.drinks);
        })()
    }, []);

    return (
        <>
            <Row>
                {cocktails ? (
                    <>
                        {(cocktails.map((ingredient) =>
                            <Col span={6} key={ingredient.strDrink}>
                                <CocktailCard cocktail={ingredient} />
                            </Col>
                        ))}
                    </>
                ) : (
                    <Col span={6}>
                        <LoadingCocktailCard />
                    </Col>
                )}
            </Row>
        </>
    )
}

export default ListCocktails;
