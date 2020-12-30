import api from './index'

export default {
    async getPokemon(url, callback) {
        api.get(url).then(response => {
            callback(response.data)
        }
        ).catch(error => {
            console.log(error);
        });
    }
}