export type Movie = {
    id: number;
    name: string;
    img: string;
    time: string;
    audio:string
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
      audio: "Dublado",
      schedule: [
        { day: "Sabádo", hours: ["13:00", "17:00"] },
        { day: "Domingo", hours: ["15:00", "19:00"] }
      ],
    },
    
    {
      id: 2,
      name: "Homem-Aranha 3",
      img: "/movie2.png",
      time: "220 min",
      audio: "Legendado",
      schedule: [
        { day: "Quarta-Feira", hours: ["19:00", "21:00"] },
        { day: "Quinta-Feira", hours: ["18:00", "19:40", "21:00"] }
      ],
    },
    {
      id: 3,
      name: "Na Praia",
      img: "/movie3.png",
      time: "105 min",
      audio: "Dublado",
      schedule: [
        { day: "Sexta-Feira", hours: ["12:00", "16:00"] },
        { day: "Sabádo", hours: ["14:00", "18:00"] }
      ],
    },
    {
      id: 4,
      name: "A Caminhada",
      img: "/movie1.png",
      time: "120 min",
      audio: "Legendado",
      schedule: [
        { day: "Segunda-Feira", hours: ["18:00", "19:40", "21:00"] },
        { day: "Terça-Feira", hours: ["19:00", "20:30"] }
      ],
    }
    
  ];
  