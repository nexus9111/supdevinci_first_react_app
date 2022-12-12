import { Card } from 'antd';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';

import CocktailCard from './CocktailCard';

const RandomCocktail = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [randomCocktailOnClick, setRandomCocktailOnClick] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setRandomCocktail(data.drinks[0]);
        })()
    }, []);

    const viewRandomCocktail = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setRandomCocktailOnClick(data.drinks[0]);
    }


    return (
        <>
            <Row>
                <Col span={12}>
                    {randomCocktail ? (
                        <CocktailCard cocktail={randomCocktail} />
                    ) : (
                        // skeleton loading card
                        <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    )}
                </Col>
                <Col span={12}>
                    <Button type="primary" onClick={viewRandomCocktail}>Show cocktail</Button>
                    {randomCocktailOnClick ? (
                        <CocktailCard cocktail={randomCocktailOnClick} />
                    ) : (
                        // skeleton loading card
                        <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default RandomCocktail;