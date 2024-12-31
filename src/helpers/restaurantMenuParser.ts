import axios from 'axios';
import { IFood } from '../types';

const getRandomPrice = () => {
	return '$' + (Math.random() * (30 - 10) + 10.).toFixed(2);
};

const restaurantMenuParser = async (restaurantUrl: string): Promise<Array<IFood>> => {
	const response = await axios.get(restaurantUrl);

	const names: Array<string> = response.data.match(/(?<=<p class=" y-css-3s36gp" data-font-weight="bold">)(.*?)(?=<\/p>)/g);
	const prices: Array<string> = response.data.match(/(?<=<span class="price__09f24__F1T0p y-css-10rylqc" data-font-weight="bold">)(.*?)(?=<\/span>)/g);
	const imagesUrls: Array<string> = response.data.match(/(?<=<img class=" dishImageV2__09f24__VT6Je" src=")(.*?)(?=")/g);
	
	const restaurantMenuItems = names.map((name, index) => ({
		name: name,
		price: Array.isArray(prices) ? prices[index] : getRandomPrice(),
		image: imagesUrls[index]
	}));

	return restaurantMenuItems;
};

export default restaurantMenuParser;
