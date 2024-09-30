export type Movie = {
    id: number;
    name: string;
    img: string;
    time: string;
    schedule: {
      day: string;
      hours: string[];
    }[];
  };
  
  export const movies: Movie[] = [
    {
      id: 1,
      name: "The Werewolf and the Mysterious Ninja",
      img: "/path-to-image1.jpg",
      time: "120 min",
      schedule: [
        { day: "Monday", hours: ["14:00", "18:00"] },
        { day: "Wednesday", hours: ["16:00", "20:00"] }
      ],
    },
    {
      id: 2,
      name: "Journey to the Moon",
      img: "/path-to-image2.jpg",
      time: "90 min",
      schedule: [
        { day: "Tuesday", hours: ["13:00", "17:00"] },
        { day: "Thursday", hours: ["15:00", "19:00"] }
      ],
    },
    {
      id: 3,
      name: "The Enchanted Forest",
      img: "/path-to-image3.jpg",
      time: "105 min",
      schedule: [
        { day: "Friday", hours: ["12:00", "16:00"] },
        { day: "Sunday", hours: ["14:00", "18:00"] }
      ],
    },
    {
      id: 4,
      name: "Mystery of the Deep",
      img: "/path-to-image4.jpg",
      time: "110 min",
      schedule: [
        { day: "Saturday", hours: ["13:00", "17:00"] },
        { day: "Sunday", hours: ["15:00", "19:00"] }
      ],
    },
  ];
  