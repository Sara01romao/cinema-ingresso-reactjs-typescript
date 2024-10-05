export type Movie = {
    id: number;
    name: string;
    img: string;
    time: string;
    genre: string;
    audio:string;
    room:string;
    schedule: {
      day: string;
      hours: string[];
    }[];
  };
  
  export const movies: Movie[] = [
    {
      id: 1,
      name: "Goiabada Monstrinho",
      img: "/movie4.png",
      time: "110 min",
      genre: "Aventura",
      audio: "Dublado",
      room: "Sala 1",
      schedule: [
        { day: "Sabádo, 05/10/2024", hours: ["13:00", "17:00"] },
        { day: "Domingo, 06/10/2024", hours: ["15:00", "19:00"] }
      ],
    },
    
    {
      id: 2,
      name: "Homem-Aranha 3",
      img: "/movie2.png",
      time: "220 min",
      genre: "Ação",
      audio: "Legendado",
      room: "Sala 2",
      schedule: [
        { day: "Quarta, 09/10/2024", hours: ["19:00", "21:00"] },
        { day: "Quinta, 10/10/2024", hours: ["18:00", "19:40", "21:00"] }
      ],
    },
    {
      id: 3,
      name: "Na Praia",
      img: "/movie3.png",
      time: "105 min",
      genre: "Aventura",
      audio: "Dublado",
      room: "Sala 4",
      schedule: [
        { day: "Sexta, 11/10/2024", hours: ["12:00", "16:00"] },
        { day: "Sabádo, 12/10/2024", hours: ["14:00", "18:00"] }
      ],
    },
    {
      id: 4,
      name: "A Caminhada",
      img: "/movie1.png",
      time: "120 min",
      genre: "Drama",
      audio: "Legendado",
      room: "Sala 3",
      schedule: [
        { day: "Segunda , 13/10/2024", hours: ["18:00", "19:40", "21:00"] },
        { day: "Terça, 14/10/2024", hours: ["19:00", "20:30"] }
      ],
    }
    
  ];
  