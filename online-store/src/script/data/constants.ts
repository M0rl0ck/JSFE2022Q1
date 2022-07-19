import { cardsData } from "../type/types";

const MANUFACTURERS = ["lenovo", "hp", "dell", "msi"] as const;

const SIZES = ["14", "15", "16", "17"] as const;

const COLORS = ["black", "white", "red", "grey"] as const;

enum COLORSNAME {
  black = "черный",
  white = "белый",
  red = "красный",
  grey = "серый",
}

const MAXPLACE =20;

enum SLIDER_VALUE {
  min,
  max,
}

const HOT = ["hot"] as const;

const DATACARDS: cardsData[] = [
  ["MSI GP762", "./assets/MSI_GP.png", 10, 2017, "msi", "black", "15", true],

  ["MSI GL775", "./assets/MSI_GP.png", 3, 2018, "msi", "black", "17", false],

  [
    "MSI GF76 Katana",
    "./assets/MSI_katana.jpg",
    5,
    2021,
    "msi",
    "black",
    "17",
    false,
  ],

  [
    "MSI Modern 14",
    "./assets/MSI_modern.png",
    11,
    2020,
    "msi",
    "black",
    "14",
    true,
  ],

  [
    "MSI Wind U210",
    "./assets/MSI_wind.png",
    8,
    2010,
    "msi",
    "grey",
    "14",
    false,
  ],

  ["DELL G5", "./assets/DELL_g5.png", 8, 2015, "dell", "black", "15", false],

  ["DELL G5", "./assets/DELL_g5.png", 10, 2015, "dell", "white", "15", false],

  [
    "DELL Vostro 3490",
    "./assets/Dell_vostro.jpg",
    18,
    2019,
    "dell",
    "black",
    "14",
    true,
  ],

  [
    "DELL Vostro 1015",
    "./assets/DELL_vostro1015.jpg",
    9,
    2011,
    "dell",
    "black",
    "15",
    false,
  ],

  [
    "Dell Inspiron",
    "./assets/Dell_inspiron.webp",
    17,
    2016,
    "dell",
    "red",
    "14",
    false,
  ],

  ["HP Omen 15-en", "./assets/HP_men.png", 12, 2021, "hp", "grey", "15", false],

  [
    "HP Pavilion 15",
    "./assets/HP_pavilion15.jpg",
    10,
    2021,
    "hp",
    "white",
    "15",
    true,
  ],

  [
    "HP Pavilion Gaming",
    "./assets/HP_pavilion_gaming15.jpg",
    19,
    2019,
    "hp",
    "black",
    "16",
    true,
  ],

  [
    "HP Pavilion G6",
    "./assets/hp_grey.jpg",
    5,
    2017,
    "hp",
    "grey",
    "16",
    false,
  ],

  [
    "HP Pavilion 15c",
    "./assets/HP_rad.webp",
    15,
    2016,
    "hp",
    "red",
    "15",
    false,
  ],

  [
    "HP Pavilion dv7",
    "./assets/HP_avilion_dv7.jpg",
    11,
    2011,
    "hp",
    "black",
    "17",
    false,
  ],

  [
    "Lenovo IdeaPad L340",
    "./assets/Lenovo_ideaPad_L340.png",
    17,
    2019,
    "lenovo",
    "black",
    "16",
    false,
  ],

  [
    "Lenovo Legion 5 PRO",
    "./assets/Lenovo_egion5.png",
    10,
    2020,
    "lenovo",
    "black",
    "16",
    true,
  ],

  [
    "Lenovo ThinkBook 15",
    "./assets/Lenovo_thinkBook15.jpg",
    3,
    2021,
    "lenovo",
    "grey",
    "15",
    false,
  ],

  [
    "Lenovo IdeaPad G580",
    "./assets/Lenovo_ideaPad_G580.jpg",
    6,
    2012,
    "lenovo",
    "black",
    "15",
    false,
  ],

  [
    "Lenovo Ideapad 110",
    "./assets/Lenovo_ideapad110.jpg",
    12,
    2017,
    "lenovo",
    "black",
    "15",
    false,
  ],

  [
    "Lenovo IdeaPad Flex",
    "./assets/Lenovo_ideaPad_flex2.webp",
    18,
    2016,
    "lenovo",
    "red",
    "14",
    false,
  ],
];

export { DATACARDS, MANUFACTURERS, COLORS, SIZES, HOT, COLORSNAME, SLIDER_VALUE, MAXPLACE };
