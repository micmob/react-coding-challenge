import './index.css';
import placeholder from '../../assets/placeholder.png';
import Text from '../Text';

const Card = ({ title, image }) => {
    return (
        <div>
            <div className="card-image">
                <img
                    src={image ? image : placeholder}
                    height={300}
                    alt="placeholder"
                />
            </div>
            <div className="card-text">
                <Text style={{ color: 'black' }}>{title}</Text>
            </div>
        </div>
    );
};

export default Card;
