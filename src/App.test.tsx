import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', async () => {
  TestRenderer.create(<App />);
});
