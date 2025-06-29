export type Movie = {
  id: number;
  name: string;
  img: string;
  banner: string;
  time: string;
  genre: string;
  rating: string;
  audio: string;
  room: string;
  popular: boolean,
  schedule: {
    day: string;
    hours: string[];
  }[];
};

export const movies: Movie[] = [
  {
    id: 1,
    name: "Na Praia",
    img: "/m1.png",
    banner: "",
    time: "110 min",
    genre: "Aventura",
    rating: "L",
    audio: "Dublado",
    room: "Sala 1",
    popular: false,
    schedule: [
      { day: "Sabádo, 05/10/2024", hours: ["13:00", "17:00"] },
      { day: "Domingo, 06/10/2024", hours: ["15:00", "19:00"] }
    ],
  },

  {
    id: 2,
    name: "Homem-Aranha 3",
    img: "/m4.png",
    banner: "",
    time: "220 min",
    genre: "Ação",
    rating:  "14",
    audio: "Legendado",
    room: "Sala 2",
    popular: false,
    schedule: [
      { day: "Quarta, 09/10/2024", hours: ["19:00", "21:00"] },
      { day: "Quinta, 10/10/2024", hours: ["18:00", "19:40", "21:00"] }
    ],
  },
  {
    id: 3,
    name: "Pânico",
    img: "/m3.png",
    banner: "",
    time: "105 min",
    genre: "Terror",
    rating: "16",
    audio: "Dublado",
    room: "Sala 4",
    popular: false,
    schedule: [
      { day: "Sexta, 11/10/2024", hours: ["12:00", "16:00"] },
      { day: "Sabádo, 12/10/2024", hours: ["14:00", "18:00"] }
    ],
  },
  {
    id: 4,
    name: "Lightyear",
    img: "/m2.png",
    banner: "",
    time: "120 min",
    genre: "Aventura",
    audio: "Legendado",
    rating: "L",
    room: "Sala 3",
    popular: false,
    schedule: [
      { day: "Segunda , 13/10/2024", hours: ["18:00", "19:40", "21:00"] },
      { day: "Terça, 14/10/2024", hours: ["19:00", "20:30"] }
    ],
  },
  {
    id: 5,
    name: "Fantasma",
    img: "/m5.png",
    banner: "/assets/banner-m5.png",
    time: "110 min",
    genre: "Aventura",
    rating: "16",
    audio: "Dublado",
    room: "Sala 1",
    popular: true,
    schedule: [
      { day: "Sabádo, 05/10/2024", hours: ["13:00", "17:00"] },
      { day: "Domingo, 06/10/2024", hours: ["15:00", "19:00"] }
    ],
  },
];