import { Divider } from 'antd';

const Header = (props) => {
    return (
        <Divider orientation="left" plain>
            {props.title}
        </Divider>
    );
};
export default Header;
