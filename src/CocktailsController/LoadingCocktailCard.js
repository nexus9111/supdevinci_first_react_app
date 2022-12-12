import { Card } from "antd";

const LoadingCocktailCard = (props) => {
    return (
        <Card style={{ width: 300, marginTop: 16 }} loading={true}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};


export default LoadingCocktailCard;