import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950
	});

	const car = await client.hGetAll('car#123123123123');

	if (Object.keys(car.length === 0)) {
		console.log('Car not found, respond with 404');
		return;
	}

	// # note!
	// HGET always return emtpty object instead of null if the key doesn't exsist
	console.log(car);
};
run();
