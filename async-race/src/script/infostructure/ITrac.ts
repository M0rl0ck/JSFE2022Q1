export default interface ITrac {
  name: string
  deleteCar: (id: number) => Promise<void>
  id: number
  fill: string
  deleteWinner(id: number): void
  setEditCar: (id: number, name: string, color: string) => void
}
