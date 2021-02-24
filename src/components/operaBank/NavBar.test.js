import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar component', () => {
    test('renders navbar component text', () => {
        render(<NavBar />);
        expect(screen.getByText("Company")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Accounts")).toBeInTheDocument();
        expect(screen.getByText("Create account")).toBeInTheDocument();
        expect(screen.getByText("Log out")).toBeInTheDocument();
    })
});