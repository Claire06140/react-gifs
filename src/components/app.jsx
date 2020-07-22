import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';

class App extends Component {
    render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

// API_KEY_GIPHY = "wbOwcZHwj7aZMmIPJiEHpO6dAsQUb0WA"

export default App;
