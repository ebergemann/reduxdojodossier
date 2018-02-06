import React, { Component } from 'react';
import TitlesWrapped from './Titles';
import WrappedInfoCard from './InfoCard';
import './ui-tool/css/nm-cx/main.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="medium-2 columns"><span>&nbsp;</span></div>
          <div className="medium-8 columns">
            <TitlesWrapped />
            <WrappedInfoCard />
               
          </div>
          <div className="medium-2 columns"><span>&nbsp;</span></div>
        </div>
      </div>
    );
  }
}

export default App;
