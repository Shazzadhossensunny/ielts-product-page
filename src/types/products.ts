export interface TProduct {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  images: string[];
  instructor: {
    name: string;
    title: string;
    image: string;
  };
}
