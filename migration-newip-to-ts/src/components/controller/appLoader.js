import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bb4d30e6207a45d7b438aba84f581e29', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
