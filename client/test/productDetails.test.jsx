import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetails from '../components/productDetails';

describe('ProductDetails', () => {
	test('renders ProductDetails Component', async () => {
		const mockProduct = {
			description: 'XYZ',
			brand: 'GE',
			weight: 50,
		};

		render(<ProductDetails product={mockProduct} />);
		expect(screen.getByText('XYZ')).toBeInTheDocument();
		expect(screen.getByText('GE')).toBeInTheDocument();
		expect(screen.getByText('50')).toBeInTheDocument();
	});
});
