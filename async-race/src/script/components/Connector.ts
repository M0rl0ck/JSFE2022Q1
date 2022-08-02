import ICreateCarRequest from '../infostructure/ICreateCarRequest';
import ICreateWinnerRequest from '../infostructure/ICreateWinnerRequest';
import IUpdateWinnerCarRequest from '../infostructure/IUpdateWinnerCarRequest';
import { Sort, Order, StartEngine } from '../infostructure/types';

// интерфейсы вынести в отдельную папку
// можно создать папку infostructure и каждый интефейс
// вынес в отдельынй файл например ICreateCarRequest
class Connector {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async request<T>(endurl: string, method: string, body: T | undefined = undefined) {
    const requestInit = {
      method: method || undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    };
    const responce = await fetch(`${this.url}${endurl}`, requestInit);
    const result = await responce.json();

    // проверка по коду ответа => генерация ошибки в случае если АПИ не доступна

    return result;
  }

  async getCars(page: number, limit: number) {
    const result = await this.request(`garage?_page=${page}&_limit=${limit}`, 'GET'); // http://127.0.0.1:3000/garage?_page=10&_linit=10

    return result;
  }

  async getCar(id: number) {
    return this.request(`garage?id=${id}`, 'GET'); // http://127.0.0.1:3000/garage?id=2
  }

  async createCar(body: ICreateCarRequest) {
    return this.request('garage', 'POST', body);
  }

  async deleteCar(id: number) {
    return this.request(`garage/${id}`, 'DELETE');
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

  async getWinnersCar(page: number, limit: number, sort: Sort = 'id', order: Order = 'ASC') {
    return this.request(`winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`, 'GET');
  }

  async getWinnerCar(id: number) {
    return this.request(`winners?id=${id}`, 'GET');
  }

  async createWinnerCar(body: ICreateWinnerRequest) {
    return this.request('winners', 'POST', body);
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
