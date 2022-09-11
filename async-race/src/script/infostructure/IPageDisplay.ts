import ICar from './ICar';
import IWinnerCar from './IWinnerCar';

export interface IPageDisplay {
  addClass: string
}

export interface IWinnerPageDisplay extends IPageDisplay {
  countWinners: number,
  wins: IWinnerCar[],
  numWinnerPage: number,
}

export interface IGaragePageDisplay extends IPageDisplay {
  cars:ICar[]
  addGarageCar(): void
  numPage: number
  setNumPage: (num: number) => void
  deleteCar: (id: number) => Promise<void>
  numCars: number
  updateNumCars: (count?: number) => void
  deleteWinner: (id: number) => void
  createCars(): Promise<void>
  createNewCar: (name: string, color: string) => Promise<void>
  isEdit: boolean
  setEditCar: (id: number, name: string, color: string) => void
  updateCar: (id:number, name: string, color: string) => Promise<void>
  editId: number
  imputName: string
  imputColor:string
  setImputName: (name: string) => void,
  setImputColor: (color: string) => void,
}
