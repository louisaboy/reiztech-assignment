export interface SingleCountryTS {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    area: number,
    capital: string,
    topLevelDomain: string,
    currencies: [{
        name: string
    }],
    languages: [{
        name: string
    }],
    flag: string,
    borders: [
        string
    ]
}