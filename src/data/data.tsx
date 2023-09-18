import fifa from "../images/fifa.jpeg";
import cod from "../images/cod.jpeg";
import spider from "../images/spider.jpg";
import box from "../images/box.jpeg";
import fort from "../images/fortnite.jpeg";
import wwe from "../images/wwe.jpg";

export interface cardData {
  id: string;
  name: string;
  imageSource: string;
  price: number;
  stock: number;
  description: string;
  category: string;
}

export const cards: cardData[] = [
  {
    id: "1",
    imageSource: fifa,
    name: "FIFA 2023",
    price: 50.99,
    stock:  13,
    description:
      "FIFA 23 features the men's World Cup game mode and the women's World Cup game mode.",
    category: "Sports",
  },
  {
    id: "2",
    imageSource: cod,
    name: "Call of Duty",
    price: 65.99,
    stock: 0,
    description:
      "As a first-person shooter, Call of Duty places the player in control of an infantry soldier who makes use of various authentic World War II firearms in combat.",
    category: "War",
  },
  {
    id: "3",
    imageSource: spider,
    name: "Spider Man",
    price: 65.99,
    stock: 0,
    description:
      "Marvel's Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.",
    category: "War",
  },
  {
    id: "4",
    imageSource: box,
    name: "Boxville",
    price: 40.99,
    stock: 20,
    description:
      "Boxville is an award-winning adventure puzzle game about speechless cans living in the city of boxes and drawing doodles on cardboards to tell the stories. Boxville is 2-in-1: an animated film and a puzzle game.",
    category: "Battle Royale",
  },
  {
    id: "5",
    imageSource: fort,
    name: "Fortnite",
    price: 39.99,
    stock: 0,
    description:
      "Fortnite is a third-person shooter game where up to 100 players compete to be the last person or team standing. You can compete alone or join a team of up to four. You progress through the game by exploring the island, collecting weapons, building fortifications and engaging in combat with other players.",
    category: "Battle Royale",
  },
  {
    id: "6",
    imageSource: wwe,
    name: "WWE",
    price: 69.99,
    stock: 9,
    description:
      "The world of WWE is your battleground with over the top, arcade action as your favorite WWE Superstars and Legends battle in interactive environments around the world.",
    category: "Sports",
  },
];
export default cards;
