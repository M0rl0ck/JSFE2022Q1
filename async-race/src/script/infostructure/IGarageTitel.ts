import ICar from './ICar';

export default interface IGarageTitie {
  countCars: number
  callback(count?: number): void
  addGarageCar(car: ICar): void
}
