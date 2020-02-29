// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const {container} = render(<App />)
  expect(container).toBeDefined();
});
