import React from 'react';
import { render, screen } from '@testing-library/react';
import { post } from '../api'
import Register from './Register'

jest.mock('../api');
post.mockImplementation();

describe('Register component', () => {
    test('renders register component text', () => {
        render(<Register />);
        expect(screen.getAllByText('Sign up')).toHaveLength(2);
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.queryAllByRole('button')).toHaveLength(1);

    })
});