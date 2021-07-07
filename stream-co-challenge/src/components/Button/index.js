import './index.css';
import Text from '../Text';

const Button = ({ text, onClick, style }) => {
    return (
        <button className="button" style={style}>
            <Text>{text}</Text>
        </button>
    );
};

export default Button;
