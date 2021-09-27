import React, { Component } from 'react';
import axios from 'axios';
import Chart from "react-google-charts";

class afterLogin extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      email: props.email,
      id: props.id,
      list: [],
      isButtonClicked: false
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }



  // Retrieves the list of items from the Express app
  getList = () => {
    const payload = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.id
    }
    axios.post("http://localhost:8080/user/jobInfoRetrival ", payload)
      .then(res => { console.log(res); this.setState({ list: res.data }) })
      .catch(err => this.setState({ error: err }));
  }

  render() {

    return (
      <div className="App">
        <button onClick={() => this.setState({isButtonClicked : true}) }>Get Graph</button>
        <div style={{ visibility: this.state.isButtonClicked === true? 'visible': 'hidden'}}>
        <Chart
          width={'700px'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.list}
          options={{
            chart: {
              title: 'Company Performance',
              subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
      </div>

    );
  }
}

export default afterLogin;