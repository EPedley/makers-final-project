class Pollution {
    constructor(client) {
        this.client = client;
        this.data = ''
    }

    load() {
        return this.client.fetchPollutionData().then((pollutionData) => {
            this.data = pollutionData;
        });
    }

    getPollutionData() {
        return this.data;
    }
}

export default Pollution;