// faking api calls

import h1 from "./assets/hoodies/h1.jpg";
import h2 from "./assets/hoodies/h2.jpg";
import h3 from "./assets/hoodies/h3.jpg";
import h4 from "./assets/hoodies/h4.jpg";
import h5 from "./assets/hoodies/h5.jpg";
import h6 from "./assets/hoodies/h6.jpg";
import w1 from "./assets/watches/w1.jpg";
import w2 from "./assets/watches/w2.jpg";
import w3 from "./assets/watches/w3.jpg";
import w4 from "./assets/watches/w4.jpg";
import w5 from "./assets/watches/w5.jpg";
import w6 from "./assets/watches/w6.jpg";
import s1 from "./assets/shoes/s1.jpg";
import s2 from "./assets/shoes/s2.jpg";
import s3 from "./assets/shoes/s3.jpg";
import s4 from "./assets/shoes/s4.jpg";
import s5 from "./assets/shoes/s5.jpg";
import s6 from "./assets/shoes/s6.jpg";

const hoodiesData = [
  {
    name: "Driper",
    src: h1,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "SuperDry",
    src: h2,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Pirate",
    src: h3,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Coax",
    src: h4,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Phew",
    src: h5,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Mighty Morty",
    src: h6,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
];
const watchesData = [
  {
    name: "Royalty",
    src: w1,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Timex",
    src: w2,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Google watch",
    src: w3,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Coax",
    src: w4,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Riener",
    src: w5,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Courel",
    src: w6,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
];
const shoesData = [
  {
    name: "Asian",
    src: s1,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Campus",
    src: s2,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Nike",
    src: s3,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "wolf",
    src: s4,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Jordan",
    src: s5,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
  {
    name: "Comber",
    src: s6,
    price: Math.floor(Math.random() * (2000 - 50 + 1) + 50),
    onCart: false,
    itemCount: 1,
  },
];

const itemData = [hoodiesData, watchesData, shoesData];
export default itemData;
