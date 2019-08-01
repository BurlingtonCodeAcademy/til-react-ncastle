import React from 'react';
import logo from './logo.svg';

class AllFacts extends React.Component {

  componentDidMount() {
    this.props.getFacts();
  }

  render() {
    console.log("All Facts: ", this.props.allFacts);
    return(
      <div className="App">
        <h1>Hey we're in the Facts path! <img src={logo} alt="React Logo"></img></h1>
        
        {/* <p>{this.props.facts.map(fact => <li key={fact.id}>{fact.text}</li>)}</p> */}
        { this.props.allFacts && 
          <ul>{this.props.allFacts.map((fact, index) => {
            return(
              <div key={index}>
                <li key={fact._id}>
                  <span>Fact:</span> {fact.text}
                </li>
                <li key={fact._id+1}>
                  <span>Date added:</span> {fact.when}
                </li>
              </div>
            );
        })}</ul>
        }
      </div>
    );
  }

}

export default AllFacts;