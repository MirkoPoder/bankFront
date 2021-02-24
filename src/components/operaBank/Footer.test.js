import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    test('renders footer component text', () => {
        render(<Footer />);
        expect(screen.getByText("© 2021 Company Name")).toBeInTheDocument();
    })
});