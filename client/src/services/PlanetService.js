const baseURL = "http://localhost:3000/api/solar_system/";

export default {
    async getPlanets() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    async getOnePlanet(id) {
        return fetch(baseURL + id)
        .then(res => res.json());
    }
}
