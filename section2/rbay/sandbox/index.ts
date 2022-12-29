import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950,

		// below will not cause an error...but doesn't store value the way we want
		// { ... }.toString => "[Object objct]"
		engine: {
			cylinders: 8
		},

		// below will cause an error!!
		owner: null, // null.toString() => X
		service: undefined // undefined => X
	});

	const car = await client.hGetAll('car');

	console.log(car);
};
run();
