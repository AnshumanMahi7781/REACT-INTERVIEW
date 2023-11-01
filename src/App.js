import './App.css'

import { Provider } from 'react-redux'
import CounterStore from './MockPrep-Day6/Store/CounterStore'
import CounterCompo from './MockPrep-Day6/UI/CounterCompo'

import React, { Component, Suspense, lazy } from 'react'
import ChildCompo from './MockPrep-Day2/ChildCompo';
import RouteCompo from './MockPrep-Day2/Routing/RouteCompo';
import ConditionCompo from './MockPrep-Day2/ConditionalRendering/ConditionCompo';
import Parent from './MockPrep-Day3/LiftingUpState/Parent';
import GitHubData from './MockPrep-Day3/Axios/GitHubData';
import UseStateCompo from './MockPrep-Day3/HOOKS/UseStateCompo';
import UseEffectCompo from './MockPrep-Day3/HOOKS/UseEffectCompo';
import ParentCompo from './MockPrep-Day4/UseCallBackComponents/ParentCompo';
import UseMemoCompo from './MockPrep-Day4/UseMemoComponents/UseMemoCompo';
import UserRefCompo from './MockPrep-Day4/UseRefComponents/UserRefCompo';
import UseReducerCompo from './MockPrep-Day4/UseReducerComponents/UseReducerCompo'
import ClickCounter from './MockPrep-Day5/HIgherOrderComponent/ClickCounter';
import HoverCounter from './MockPrep-Day5/HIgherOrderComponent/HoverCounter';
import MoutningPhaseCompo from './MockPrep-Day5/LIfeCycleMethods/MountingPhaseCompo';
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

        <UseStateCompo />
        <UseEffectCompo />

        <ParentCompo />
        <UseMemoCompo />

        <UserRefCompo />

        <UseReducerCompo />
        <ClickCounter />
        <HoverCounter />
        <MoutningPhaseCompo value="Mahi" />

        <Provider store={CounterStore}>
          <CounterCompo />
        </Provider>

      </>
    )
  }
}

