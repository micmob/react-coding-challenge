import './index.css';
import Card from '../../components/Card';
import { useHistory } from 'react-router-dom';
import CardGrid from '../../components/CardGrid';

const Home = () => {
    const history = useHistory();

    const handleCardClick = path => {
        history.push(`/${path}`);
    };

    const data = [
        { title: 'Popular Series', onClick: () => handleCardClick('series') },
        { title: 'Popular Movies', onClick: () => handleCardClick('movies') },
    ];

    return (
        <div className="home">
            <CardGrid data={data} />
        </div>
    );
};

export default Home;
