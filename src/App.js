import React, { Component, Suspense, lazy } from 'react'
import ChildCompo from './MockPrep-Day2/ChildCompo';
import './App.css'
import RouteCompo from './MockPrep-Day2/Routing/RouteCompo';
import ConditionCompo from './MockPrep-Day2/ConditionalRendering/ConditionCompo';
import Parent from './MockPrep-Day3/LiftingUpState/Parent';
import GitHubData from './MockPrep-Day3/Axios/GitHubData';

let HomeCompo = lazy(() => import('./MockPrep-Day2/Routing/HomeCompo.js'));

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
      <>
        <ChildCompo data={this.state.counter} fun={this.updateCount} />
        <RouteCompo />

        <ConditionCompo />

        <HomeCompo />

        <Suspense fallback={<p>Data Loading</p>}>
          <HomeCompo />
        </Suspense>

        <Parent />
        <GitHubData />
      </>
    )
  }
}

