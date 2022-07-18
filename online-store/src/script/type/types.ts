import { MANUFACTURERS, COLORS, SIZES, HOT } from '../data/constants';

type manufacturers = typeof MANUFACTURERS[number];

type colorType = typeof COLORS[number];

type sizesType = typeof SIZES[number];

type hotType = typeof HOT[number];

type cardsData = [string, string, number, number, manufacturers, colorType, sizesType, boolean];

export { colorType, cardsData, manufacturers, sizesType, hotType };