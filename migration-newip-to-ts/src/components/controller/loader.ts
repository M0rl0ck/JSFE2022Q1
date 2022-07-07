import { ILoader, options, err } from '../../type/interface';

type urlOptions = { [prop: string]: string };

enum errorServer {
  authentication = 401,
  notFound = 404,
}


type resArg = { endpoint: string; options?: options };

class Loader implements ILoader {
  baseLink: string;
  options: options;
  constructor(baseLink: string, options: options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(
    { endpoint, options = {} }: resArg,
    callback: (data: T) => void = () => {
      console.error(err.noCallback);
    }
  ): void {
    this.load<T>('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === errorServer.authentication || res.status === errorServer.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: options, endpoint: string): string {
    const urlOptions: urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load<T>(method: string, endpoint: string, callback: (data: T) => void, options: options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response): Promise<T> => res.json())
      .then((data: T): void => callback(data))
      .catch((err: Error): void => console.error(err));
  }
}

export default Loader;
