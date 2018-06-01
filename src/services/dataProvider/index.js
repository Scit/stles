import styleConfiguration from './styleConfiguration.json';

class DataProvider {
    getDefaultConfiguration() {
        return styleConfiguration;
    }
}

export default new DataProvider();