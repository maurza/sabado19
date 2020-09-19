import axios from 'axios'

export class Mercadolibreservice {
    getConsult(cons: string, offset: number) {
        return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${cons}&offset=${offset}`)
    }
}