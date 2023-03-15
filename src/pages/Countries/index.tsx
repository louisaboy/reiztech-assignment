import * as C from './styles'
import { useState, useEffect } from 'react';
import { Input } from '../../components/Input';
import { CountriesTS } from '../../types/Countries';
import { CountryItem } from '../../components/CountryItem';
import { api } from '../../api';
import Pagination from './Pagination'

const LIMIT = 12;

export const Countries = () => {
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState(``)
    const [offset, setOffset] = useState(0);
    const [curOrder, setCurOrder] = useState("Ascending Order");
    const [curAreaSearch, setCurAreaSearch] = useState("");

    useEffect(()=>{
        getAllCountries()
    }, [])

    const changeOrder = (newOrder: string): void => {
        setCurOrder(newOrder)
    }

    const changeAreaSearch = (newAreaSearch: string): void => {
        setCurAreaSearch(newAreaSearch)
    }
    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        console.log(countries)
        setLoading(false)
    }
    const lowerSearch = search.toLowerCase()
    const filteredCountries = countries.filter(country => country
        .name.toLowerCase().includes(lowerSearch) || country 
            .region.toLowerCase().includes(lowerSearch)   
    )
    var sortedCountries
    if (curOrder == "Ascending Order") {
        sortedCountries = filteredCountries.sort()
    } else if (curOrder == "Descending Order") {
        sortedCountries = filteredCountries.reverse()
    }
    var lesserCountries = []
    if (curAreaSearch != "" && curAreaSearch != "Unselected") {
        console.log("went here")
        for (var i = 0; i < filteredCountries.length; i++) {
            if (filteredCountries[i].area < 65300) {
                lesserCountries.push(countries[i])
            }
        }
    }
    else {
        lesserCountries = filteredCountries;
    }
    
    const pagCountries = lesserCountries.slice(offset, offset+12)

    console.log(search)
    return (
        <C.CountriesArea>
            <Input 
                value={search}
                setSearch={setSearch}
            />
            <div className='filters'>
                <select 
                    onChange={(event) => changeOrder(event.target.value)}
                    value={curOrder}
                >
                    <option value="Ascending Order" >A-Z</option>
                    <option value="Descending Order" >Z-A</option>
                </select>
                <select 
                    onChange={(event) => changeAreaSearch(event.target.value)}
                    value={curAreaSearch}
                >
                    <option value="Unselected" selected >Filter By Area Size</option>
                    <option value="Lituania" >Smaller than Lituania</option>
                </select>
            </div>
            
                
            <div className='countries'>
                {loading &&
                    <div className=''>Loading...</div>
                }
                {!loading &&
                    pagCountries.map((item) =>  (
                        <CountryItem
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                            area={item.area}
                        />
                        
                    ))
                    
                }
            </div>
            <Pagination
                limit={LIMIT}
                total={filteredCountries.length}
                offset={offset}
                setOffset={setOffset}
            />
        </C.CountriesArea>
    )
}