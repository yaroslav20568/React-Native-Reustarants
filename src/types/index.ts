interface ICategory {
  image: object;
  text: string;
}

interface IFood {
	name: string;
	price: string;
	image: string;
}

interface IOpeningHour {
	open: Array<{
		day: number;
		start: string;
		end: string;
	}>;
	is_open_now: boolean;
}

interface IRestaurant {
	id: string;
  image_url: string;
  name: string;
  rating: number;
  price: string;
	url: string;
}

interface IRestaurantMoreInfo {
	id: string;
	photos: Array<string>;
	name: string;
  rating: number;
  price: string;
	categories: Array<{
		title: string;
	}>;
	review_count: number;
	phone: string;
	hours: Array<IOpeningHour>;
	coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface ICountry {
	name: string;
	alpha2Code: string
	callingCodes: Array<string>;
	flag: string;
}

interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

type TTabName = 'Home' | 'Favorites' | 'Account' | 'Cart';

interface ITab {
	name: TTabName;
	screen: () => React.JSX.Element;
	icon: string;
}

export type { ICategory, IFood, IOpeningHour, IRestaurant, IRestaurantMoreInfo, ICountry, IUser, TTabName, ITab };