export default interface IGarageTitie {
  countCars: number
  callback(count?: number): void
  addGarageCar(): void
}
