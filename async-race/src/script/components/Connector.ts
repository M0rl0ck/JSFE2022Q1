import ICar from '../infostructure/ICar';
import ICreateCarRequest from '../infostructure/ICreateCarRequest';
import IGetCars from '../infostructure/IGetCars';
// import IRequest from '../infostructure/IRequest';
import IUpdateWinnerCarRequest from '../infostructure/IUpdateWinnerCarRequest';
import { Sort, Order, StartEngine } from '../infostructure/types';
import IWinnerRequest from '../infostructure/IWinnerRequest';
import IGetWinners from '../infostructure/IGetWinners';
import IGetWinner from '../infostructure/IGetWinner';

class Connector {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async request<T>(
    endurl: string,
    method: string,
    body: T | undefined = undefined,
  ) {
    const requestInit = {
      method: method || undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    };
    const responce = await fetch(`${this.url}${endurl}`, requestInit);
    const { status } = responce;
    const total = responce.headers.get('X-Total-Count') || '0';
    const result = responce.status !== 500 ? await responce.json() : {};
    // проверка по коду ответа => генерация ошибки в случае если АПИ не доступна

    return { result, total, status };
  }

  async getCars(page: number, limit: number): Promise<IGetCars> {
    const { result, total } = await this.request(
      `garage?_page=${page}&_limit=${limit}`,
      'GET',
    );

    return {
      items: result,
      count: total,
    };
  }

  async getCar(id: number): Promise<ICar[]> {
    const { result } = await this.request(`garage?id=${id}`, 'GET'); // http://127.0.0.1:3000/garage?id=2
    return result;
  }

  async createCar(body: ICreateCarRequest): Promise<ICar> {
    const { result } = await this.request('garage', 'POST', body);
    return result;
  }

  async deleteCar(id: number) {
    const { result } = await this.request(`garage/${id}`, 'DELETE');
    return result;
  }

  async updateCar(id: number, body: ICreateCarRequest) {
    return this.request(`garage/${id}`, 'PUT', body);
  }

  async startStopEngineCar(id: number, status: StartEngine) {
    return this.request(`engine?id=${id}&status=${status}`, 'PATCH');
  }

  async driveCar(id: number) {
    return this.request(`engine?id=${id}&status=drive`, 'PATCH');
  }

  async getWinnersCar(
    page: number,
    limit: number,
    sort: Sort = 'id',
    order: Order = 'ASC',
  ): Promise<IGetWinners> {
    const { result, total } = await this.request(
      `winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`,
      'GET',
    );

    return {
      items: result,
      count: total,
    };
  }

  async getWinnerCar(id: number): Promise<IGetWinner> {
    const { result, status } = await this.request(`winners?id=${id}`, 'GET');
    return {
      items: result,
      status,
    };
  }

  async createWinnerCar(body: IWinnerRequest): Promise<IWinnerRequest[]> {
    const { result } = await this.request('winners', 'POST', body);
    return result;
  }

  async deleteWinnerCar(id: number) {
    return this.request(`winners/${id}`, 'DELETE');
  }

  async updateWinnerCar(id: number, body: IUpdateWinnerCarRequest) {
    return this.request(`winners/${id}`, 'PUT', body);
  }
}

const url = 'http://127.0.0.1:3000/';
const connector = new Connector(url);
export default connector;
