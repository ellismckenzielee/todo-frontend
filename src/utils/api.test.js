import axios from 'axios';
import { getTodos } from './api.utils';
jest.mock('axios');
axios.get.mockReturnValue({ body: [] });
describe('testing api functions', () => {
	describe('getTodos', () => {
		test('should return an array of objects', async () => {
			// ARRANGE
			const isArray = true;
			// ACT
			const result = await getTodos();
			// ASSERT
			expect(Array.isArray(result)).toBe(isArray);
		});
	});
});
