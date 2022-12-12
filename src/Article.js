import { Card } from "antd";
const { Meta } = Card;

const Article = (props) => {
    return (
        <Card hoverable style={{ width: 240 }} cover={
            <img alt={props.title} src={props.image} />
        }>
            <Meta
                title={props.title}
                description={props.subtitle + " - " + props.date.toLocaleDateString()}
            />
        </Card>
    );
};
export default Article;