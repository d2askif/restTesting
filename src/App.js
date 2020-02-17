import React from 'react';
import Header from '../src/components/header';
import Headline from '../src/components/headline';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className='main'>
          <Headline
            header={'Posts'}
            desc='Culpa veniam fugiat aliqua mollit excepteur. Labore ex do ad commodo pariatur et excepteur ea non esse. Officia veniam esse eiusmod laborum do excepteur commodo enim excepteur. Ut nulla pariatur reprehenderit cillum deserunt sit laborum veniam eiusmod. Incididunt quis mollit id tempor id id do id irure aliquip qui proident et enim. Anim cupidatat consequat officia mollit ad.'
          />
        </section>
      </div>
    );
  }
}

export default App;
