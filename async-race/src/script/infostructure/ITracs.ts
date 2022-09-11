import ICar from './ICar';

export default interface ITracs {
  cars:ICar[]
  deleteCar: (id: number) => Promise<void>
  deleteWinner(id: number): void
  setEditCar: (id: number, name: string, color: string) => void
}
