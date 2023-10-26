import React, { Component } from 'react'
import ChildCompo from './MockPrep-Day2/ChildCompo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  updateCount = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    return (
      <ChildCompo data={this.state.counter} fun={this.updateCount} />
    )
  }
}

