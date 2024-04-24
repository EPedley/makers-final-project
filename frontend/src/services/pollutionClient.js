import apiKey from '../../../apiKey'

class PollutionClient {

    constructor() {
        this.apiKey = apiKey;
    }

    fetchPollutionData() {
        return fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=51.5098658&lon=-0.118092&start=1606223802&end=1606482999&appid=${apiKey}`)
            .then((response) => response.json());
    }
}

export default PollutionClient;