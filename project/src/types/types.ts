export interface Location {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  hours: string;
  image: string;
  position: {
    x: number; // Percentage position on the map (0-100)
    y: number; // Percentage position on the map (0-100)
  };
  phone?: string;
  website?: string;
  events?: {
    title: string;
    date: string;
    time: string;
  }[];
  highlights?: {
    title: string;
    description: string;
  }[];
  sections?: {
    title: string;
    content: string;
    image?: string;
  }[];
}