import React, { Component } from 'react';

//import people component
import PeopleList from './component/people-list';

// css file
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="body-color">
          <PeopleList />
      </div>
    );
  }
}

export default App;
