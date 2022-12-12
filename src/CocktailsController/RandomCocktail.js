import { Button } from 'antd';
import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';

import CocktailCard from './CocktailCard';
import LoadingCocktailCard from './LoadingCocktailCard';

const fetchRandomCocktailAPI = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
}

const RandomCocktail = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [randomCocktailOnClick, setRandomCocktailOnClick] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await fetchRandomCocktailAPI();
            setRandomCocktail(data.drinks[0]);
        })()
    }, []);

    const viewRandomCocktail = async () => {
        const data = await fetchRandomCocktailAPI();
        setRandomCocktailOnClick(data.drinks[0]);
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    {randomCocktail ? (
                        <CocktailCard cocktail={randomCocktail} />
                    ) : (
                        <LoadingCocktailCard />
                    )}
                </Col>
                <Col span={12}>
                    <Button type="primary" onClick={viewRandomCocktail}>Show cocktail</Button>
                    {randomCocktailOnClick ? (
                        <CocktailCard cocktail={randomCocktailOnClick} />
                    ) : (
                        <LoadingCocktailCard />
                    )}
                </Col>
            </Row>
        </>
    )
}

export default RandomCocktail;