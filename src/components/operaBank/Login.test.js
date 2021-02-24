import React from 'react';
import { render, screen } from '@testing-library/react';
import { post } from '../api'
import Login from './Login'

jest.mock('../api');
post.mockImplementation();

describe('Login component', () => {
    test('renders login component text', () => {
        render(<Login />);
        expect(screen.getAllByText('Company')).toHaveLength(1);
        expect(screen.getAllByText('Sign up')).toHaveLength(1);
        expect(screen.getAllByText('Log in')).toHaveLength(1);
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.queryAllByRole('button')).toHaveLength(1);
    })
});