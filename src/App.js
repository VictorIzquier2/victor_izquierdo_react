import React from 'react';
import 'bulma/css/bulma.css';
import './components/assets/css/App.css';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    
  };
  
  render() {
    return (
      <div className='App'>
        <div className='container is-widescreen is-full'>
          <Header/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;