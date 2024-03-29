export interface CountryTS {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    area: number,
    capital: string,
    flags: {
        png: string
    },
    topLevelDomain: [
        string
    ],
    currencies: [
        {
            name: string
        }
    ],
    languages: [
        {
            name: string
        }
    ],
    borders: [
        string
    ],
}