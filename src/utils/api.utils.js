import axios from 'axios';
async function getTodos(url) {
	return await axios.get(url).body;
}

export { getTodos };
