export interface Place {
  id: number;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
}

export interface FavoritePlace extends Partial<Place> {
  id: number;
  image: string;
  name: string;
}
