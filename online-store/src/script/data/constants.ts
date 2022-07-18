import { cardsData } from "../type/types";

const MANUFACTURERS = ['lenovo', 'hp', 'dell', 'msi'] as const;

const SIZES = ['14', '15', '16', '17'] as const;

const COLORS = ['black', 'white', 'red', 'grey'] as const;

const HOT = ['hot'] as const;

const DATACARDS: cardsData[] = [
    [
      'Dell new',
      './assets/sss.webp',
      8,
      2022,
      'dell',
      'red',
      '16',
      false
    ],

    [
      'Hp old',
      './assets/sss.webp',
      13,
      2018,
      'hp',
      'black',
      '15',
      false
    ],

    [
      'Dell old',
      './assets/sss.webp',
      10,
      2019,
      'dell',
      'white',
      '14',
      false
    ],

    [
      'Hp new',
      './assets/sss.webp',
      6,
      2021,
      'hp',
      'grey',
      '17',
      true
    ],
    [
      'Lenovo mega',
      './assets/sss.webp',
      15,
      2020,
      'lenovo',
      'red',
      '16',
      false
    ],
]

export { DATACARDS, MANUFACTURERS, COLORS, SIZES, HOT };