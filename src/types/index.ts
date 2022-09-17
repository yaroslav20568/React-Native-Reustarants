interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

interface ICategory {
  title: string
}

interface IRestaurant {
  image_url: string;
  name: string;
  rating: number;
  price: string;
  categories: Array<ICategory>;
  review_count: number;
}

export type { IFood, IRestaurant };