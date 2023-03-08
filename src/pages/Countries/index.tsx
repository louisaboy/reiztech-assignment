import * as C from './styles'
import { useState, useEffect } from 'react';
import { Input } from '../../components/Input';
import { CountriesTS } from '../../types/Countries';
import { CountryItem } from '../../components/CountryItem';
import { Pagination } from './Pagination';
import { api } from '../../api';

export const Countries = () => {
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(()=>{
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        console.log(countries)
        setLoading(false)
    }

    const totalPosts = 0;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost+9)
    return (
        <C.CountriesArea>
            <Input />
            <div className='countries'>
                {loading &&
                    <div className=''>Loading...</div>
                }
                {!loading &&
                    currentCountries.map((item) =>  (
                        <CountryItem
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                        
                    ))
                    
                }
            </div>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={countries.length}/> */}
        </C.CountriesArea>
    )
}