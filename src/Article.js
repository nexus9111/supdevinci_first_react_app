import { Card } from "antd";
const { Meta } = Card;

const Article = (props) => {
    return (
        <Card hoverable style={{ width: 240 }} cover={
            <img alt={props.article.title} src={props.article.image} />
        }>
            <Meta
                title={props.article.title}
                description={props.article.subtitle + " - " + props.article.date.toLocaleDateString()}
            />
        </Card>
    );
};
export default Article;