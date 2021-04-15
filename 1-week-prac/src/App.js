import React from 'react';
import Start from './Start';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "스파르타"
    }
  }

  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    );
  }
}

export default App;
