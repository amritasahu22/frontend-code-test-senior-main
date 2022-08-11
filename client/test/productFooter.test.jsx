import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductFooter from '../components/productFooter';

describe('ProductFooter', () => {
	test('renders ProductFooter Component', async () => {
		render(<ProductFooter />);
		expect(screen.getByText(/Octopus Energy Ltd is a/)).toBeInTheDocument();
	});
});
