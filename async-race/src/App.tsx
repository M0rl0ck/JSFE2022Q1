import React, { useState } from 'react';
import Footer from './script/components/Footer';
import Header from './script/components/Header';
import Main from './script/components/Main';
import { PagesList } from './script/infostructure/types';

function App() {
  const [page, setPage] = useState<PagesList>('garage');

  return (
    <div className="App">
      <Header callback={(param: PagesList) => setPage(param)} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

export default App;
