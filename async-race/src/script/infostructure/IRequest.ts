import ICar from './ICar';
import IWinnerRequest from './IWinnerRequest';

type Request = ICar | IWinnerRequest | Record<string, never>;
export default interface IRequest {
  result: Request[]
  total: string
  status: number
}
