import axios from 'axios';
export const getTodos = async (url) => {
	console.log('RUNNING GET TODOS');
	return await axios.get(url).body;
};
