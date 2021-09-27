import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  } 
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
        <form onSubmit={this.handleSubmit}>
            <label>
            User Id:
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/></label>
            <Link to={'./afterLogin/'+this.state.value}>
                <input type="submit" value="Login" />
            </Link>
            <Link to={'./registration'}>
                <input type="submit" value="registation" />
            </Link>
        </form>
    </div>
    );
  }
}
export default Home;