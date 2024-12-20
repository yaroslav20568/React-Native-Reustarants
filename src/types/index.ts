interface ICategory {
  image: object;
  text: string;
}

interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

interface IRestaurant {
  image_url: string;
  name: string;
  rating: number;
  price: string;
  categories: Array<ICategory>;
  review_count: number;
}

interface ICountry {
	name: string;
	alpha2Code: string
	callingCodes: Array<string>;
	flag: string;
}

export type { ICategory, IFood, IRestaurant, ICountry };