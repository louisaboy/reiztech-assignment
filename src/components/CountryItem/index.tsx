import * as C from './styles';
import { CountryItemTS } from '../../types/CountryItem';
import { Link } from 'react-router-dom';

export const CountryItem = ({name, population, region, capital, flag, area}: CountryItemTS) => {
    return(
        <C.CountryItem>
            <Link to={`/country/${name}`}>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                    <p>Region: <span>{region}</span></p>
                    <p>Area: <span>{area}</span></p>
                </div>
            </Link>
        </C.CountryItem>
    )
}