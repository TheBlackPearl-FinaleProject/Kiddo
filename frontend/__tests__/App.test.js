import 'react-native';
import React from 'react'
import App from '../App';
// Note: test renderer must be required after react-native.
import window from '../__mocks__/mocks'; // Must be imported before the tested file
import { render } from '@testing-library/react-native'

it('renders correctly', () => {
  render(<App />);
});
