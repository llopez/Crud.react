import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';
import List from './components/List';

render(
  <div>
     <Form />
     <List />
  </div>,
  document.getElementById('app')
);

