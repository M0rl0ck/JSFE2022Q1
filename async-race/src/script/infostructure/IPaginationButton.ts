export default interface IPaginationButton {
  btClass: string
  numPage: number
  countCars: number
  setNumPage: (num: number) => void
}
