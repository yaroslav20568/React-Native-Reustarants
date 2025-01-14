import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/Stacks";

interface IOnAddToCartPayload {
	isChecked: boolean;
	item: IFood;
}

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

interface ICoordinate {
	latitude: number;
	longitude: number;
}

interface IRestaurant {
	id: string;
  image_url: string;
  name: string;
  rating: number;
  price: string;
	url: string;
}

interface IRestaurantMoreInfo extends Pick<IRestaurant, 'id' | 'name' | 'rating' | 'price'> {
	photos: Array<string>;
	categories: Array<{
		title: string;
	}>;
	review_count: number;
	phone: string;
	hours: Array<IOpeningHour>;
	coordinates: ICoordinate;
	location: {
		address1: string;
		city: string;
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

type TNavigation = NavigationProp<RootStackParamList>;

interface IOrderClient {
	phone: string;
	address?: string | null;
}

interface IOrderPrice {
	items: number;
	delivery?: number | null;
}

interface IOrderTime {
	cooking: number;
	delivery?: number | null;
}

interface IOrderStatus {
	isPaid: boolean;
	isCooked: boolean;
	isDelivered?: boolean;
}

interface IOrder {
	restaurant: {
		name: string;
		address: string;
	};
	items: Array<IFood>;
	shippingMethod: string;
	client: IOrderClient;
	price: IOrderPrice;
	time: IOrderTime;
	status: IOrderStatus;
}

export type { IOnAddToCartPayload, ICategory, IFood, IOpeningHour, ICoordinate, IRestaurant, IRestaurantMoreInfo, ICountry, IUser, TTabName, ITab, TNavigation, IOrderClient, IOrderPrice, IOrderTime, IOrderStatus, IOrder };