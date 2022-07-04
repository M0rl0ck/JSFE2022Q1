import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'bb4d30e6207a45d7b438aba84f581e29', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
