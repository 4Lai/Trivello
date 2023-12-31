export interface OffersAll {
  typeOfJourney: string;
  price: number;
  lengthOfStay: number;
  country: string;
  deadline: string;
  town: string;
  img: string;
  score: number;
  id: number;
  desc: string;
  places: { place: string }[];
  planOfStay: string;
}
