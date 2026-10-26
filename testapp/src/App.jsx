import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Header />
      <Card title="My Card no 1" />
      <Card title="My Card no 2" />
      <Card title="My Card no 3" />
      <Footer />
    </div>
  );
}

export default App;