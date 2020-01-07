import React from 'react';
import { Header } from '../Header';
import { Languages } from '../Languages';

export function App() {
  return (
    <main>
      <Languages />
      <Header lead="Sign up form" title="Get more information" />
    </main>
  );
}

export default App;
