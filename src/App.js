import React from 'react';
import { Title } from './components/title'
import { SearchForm } from './components/SearchForm'

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Title>MovieNet</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
