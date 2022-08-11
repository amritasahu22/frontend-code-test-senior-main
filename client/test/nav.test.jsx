import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../components/nav';

describe('Nav', () => {
	test('renders Nav Component', async () => {
		render(<Nav basketItems={3} />);
		expect(screen.getByTitle('Basket items')).toBeInTheDocument();
		expect(screen.getByText('3')).toBeInTheDocument();
	});
});
