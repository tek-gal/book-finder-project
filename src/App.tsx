import React from 'react';

import BackgroundImage from './images/sky.jpeg';
import { Background, Container, AppTitle, SearchForm, BookList } from './components';
import './App.css';


function App() {
  return (
    <div className="App">
      <Background image={BackgroundImage}>
        <Container>
          <AppTitle>Book Finder</AppTitle>
          <SearchForm />
          <BookList />
        </Container>
      </Background>
    </div>
  );
}

export default App;
