import React from 'react';

class OneFact extends React.Component {

  componentDidMount() {
    console.log('mounting..')
    this.props.getFact(this.props.path);
  }

  render() {
    console.log('current path: ', this.props.path)
    console.log('current fact: ', this.props.theFact)
    // let text = this.props.theFact.text;
    // console.log(text)
    
    if(this.props.theFact) {
      console.log(this.props.theFact.text)
      return(
        <div className="oneFact">
          <h2>Fact text: {this.props.theFact.text}</h2>
          <h3>Fact date: {this.props.theFact.when}</h3>
        </div>
      );
    } else {
      return(
        <h1>Loading Fact</h1>
      );
    }
  }
}

export default OneFact;