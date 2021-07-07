import './index.css';
import Card from '../Card';

const CardGrid = ({ data }) => {
    return (
        <ul className="grid">
            {data.map(elem => (
                <li>
                    <button className="grid-card" onClick={elem.onClick}>
                        <Card title={elem.title} image={elem.image}></Card>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CardGrid;
