import { getProducts } from './productService';
import axios from 'axios';

jest.mock('axios');

describe('Product Service', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should fetch products data from service successfully', async () => {
		const mockProduct = { id: 1, name: 'Energy Saving bulb' };
		const mockData = {
			data: mockProduct,
		};
		axios.post.mockImplementation(() => Promise.resolve(mockData));

		await expect(getProducts()).resolves.toEqual(mockData);
		expect(axios.post).toHaveBeenCalledTimes(1);
	});

	test('should fail to fetch product data from service', async () => {
		const exception = 'Technical error occurred.';
		axios.post.mockImplementation(() => Promise.reject(exception));

		await expect(getProducts()).rejects.toEqual(exception);
		expect(axios.post).toHaveBeenCalledTimes(1);
	});
});
