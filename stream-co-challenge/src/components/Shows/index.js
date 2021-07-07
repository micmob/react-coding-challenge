import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardGrid from '../CardGrid';

const Shows = ({ type }) => {
    const shows = useSelector(state => state.shows);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const updatedData = shows.data
            .filter(
                elem =>
                    elem.programType === type &&
                    parseInt(elem.releaseYear) >= 2010
            )
            .map(elem => {
                return {
                    title: elem.title,
                    image: elem.images['Poster Art'].url,
                };
            });
        setData(updatedData);
    }, [shows.data, type]);

    return <div className="home">{data && <CardGrid data={data} />}</div>;
};

export default Shows;
