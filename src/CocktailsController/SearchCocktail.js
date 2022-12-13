import { Col, Row, Button, Input } from 'antd';
import { useState } from 'react';

import CocktailCard from './CocktailCard';

import cocktailApiUtils from '../apiUtils/cocktailApiRequests'

const ListCocktails = () => {
    const [cocktails, setCocktails] = useState(null);

    const searchCocktail = async (cocktailName) => {
        if (cocktailName === "") {
            alert("Please enter a cocktail name");
            return;
        }
        const data = await cocktailApiUtils.getCocktailByName(cocktailName);
        if (data.drinks === null) {
            alert("Cocktail not found");
            return;
        }
        setCocktails(data.drinks[0]);
    }

    return (
        <>
            <Row>
                <Col span={6}>
                    {cocktails ? (
                        <CocktailCard cocktail={cocktails} />
                    ) : (
                        <>
                            <form onSubmit={(e) => {e.preventDefault(); searchCocktail(e.target[0].value);}}>
                                <Input type="text" placeholder="Search for a cocktail" />
                                <Button htmlType="submit" type="primary">Search</Button>
                            </form>
                        </>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default ListCocktails;
