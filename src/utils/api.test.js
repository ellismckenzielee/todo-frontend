import axios from 'axios';
import { getTodos } from './api.utils';
jest.mock('axios');
axios.get.mockImplementation(
	jest.fn(() => {
		return { body: [] };
	})
);
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
		test('should be called with the correct url', async () => {
			// ARRANGE
			const url = 'fakeurl.com';
			// ACT
			const result = await getTodos(url);
			// ASSERT
			expect(axios.get.mock.lastCall[0]).toBe(url);
		});
	});
});
