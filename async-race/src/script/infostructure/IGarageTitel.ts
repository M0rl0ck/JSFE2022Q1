export default interface IGarageTitie {
  countCars: number
  // updateNumCars(count?: number): void
  // addGarageCar(): void
  createCars(): Promise<void>
  createNewCar: (name: string, color: string) => Promise<void>
  isEdit: boolean
  updateCar: (id:number, name: string, color: string) => Promise<void>
  editId: number
  imputName: string
  imputColor:string
  setImputName: (name: string) => void,
  setImputColor: (color: string) => void,
}
