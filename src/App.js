import React from 'react';
import './App.css';
import AllFacts from './AllFacts';
import OneFact from './OneFact'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      facts:[],
      currentFact: null
    }
    this.getFacts = this.getFacts.bind(this);
    this.getFact = this.getFact.bind(this);
  }

  async getFacts() {
    console.log('fetching facts')
    const response = await fetch('/facts');
    console.log(response);
    const result = await response.json();
    console.log(result);
    this.setState({
      facts: result
    });
    console.log(this.state.facts[0]);
  }

  async getFact(path) {
    console.log('fetching a fact at path: ', path);
    const response = await fetch(path);
    const result = await response.json();
    console.log({result});
    this.setState({
      currentFact: result
    });
  }

  render() {
    const path = document.location.pathname;
    console.log(path);
    if(path === '/'){
      return (  
        <div className="App">
          <h1>Today I Learned</h1>
          <li><a href='/facts' >List all entries (JSON)</a></li>
          <h2>Add a fact</h2>
          <form method="POST" action="/facts">
            <input type="text" name="text"></input>
            <input type="submit"></input>
          </form>
        </div>
      );
    } else if (path === '/facts') {
      return(
        <div>
          <AllFacts allFacts={this.state.facts} getFacts={this.getFacts}/>
        </div>
      );
    } else {
      const pathId = path.split('/').slice(-1)[0];
      console.log({pathId});
      return(
        <div>
          <h1>We're looking at a fact!</h1>
          <OneFact getFact={this.getFact} path={path}
                   theFact={this.state.currentFact} />
        </div>
      );
    }
  }
}

export default App;