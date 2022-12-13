import { Button, Input } from 'antd';

const FormSearchCocktail = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input type="text" name="search" placeholder="Search for a cocktail" />
            <Button htmlType="submit" type="primary">Search</Button>
        </form>
    );
}

export default FormSearchCocktail;