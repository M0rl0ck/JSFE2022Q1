import { MANUFACTURERS, COLORS } from '../data/constants';

type manufacturers = typeof MANUFACTURERS[number];

type colorType = typeof COLORS[number];

type cardsData = [string, string, number, number, manufacturers, colorType, number, boolean];

export { colorType, cardsData, manufacturers };