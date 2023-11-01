<center>
  <h1>MOCK - INTERVIEW - PREPRATION DAY-ONE</h1>
</center>

### 1.What is SPA ?

=>
'SPA' Stands for Single Page Application, which is a type of web application that operates within a single HTML page,
and dynamically updating its content as the user interacts with it.
it provide a seamless and interactive user experience by loading and updating content dynamically within a single web
page, rather than navigating to multiple traditional pages.

<hr>

### 2. What is Virtual DOM ?

=>
Virtual DOM is a concept of React, which is a lightweight in-memory representation of the actual dom of a web page. When
changes are made in React Component, a new Virtual DOM will created, then react calculates the difference between the
new virtual dom and the previous one to update the actual DOM more efficiently, this process known as reconcilication.
It improve the performance and speed of react application.

DOM stands for 'DOCUMENT OBJECT MODEL", which represents the document as a tree of objects, where each part of the web
page, such as elements, attributes, and text content, is represented as an object in the tree.

<hr>

### 3. What is difference between class and functional component ?

=>
Class components are defined using JavaScript classes, while functional components are JavaScript functions.

Class components can manage their own state using the this.state object. Functional components can manage state using
React Hooks, such as useState, introduced in React 16.8 and later.

Class components have access to various lifecycle methods like componentDidMount, componentDidUpdate, and
componentWillUnmount. Functional components can replicate the behavior of lifecycle methods using Hooks like useEffect.

<hr>

### 4. What is package.json?

=>
package.json is a file used in Node.js and JavaScript projects. It contains metadata about the project, including the
project's name, version, dependencies, and various configuration settings. It's commonly used to manage project
dependencies and scripts for tasks like building, testing, and running the application.

<hr>

### 5.What is JSX

JSX stands for JavaScript XML, which an extension to JavaScript syntax that allow us to write HTML like code within our
Js code, within working with React. JSX is used in React to define the structure and layout of UI components. It makes
it more readable and easier to write and maintain complex user interfaces. Browsers don't understand JSX directly, so
it's transformed into regular JavaScript using tools like Babel before it's executed in the browser.

<hr>

### 6.StateFull and stateless componet

In react StateFull components refers to the Classbased component and stateless component refers to the functional
component.

Statefull components have the ability to manage their own state data where stateless component does not manage their own
state.stateless component rely on the data provided to them through props and do not have internal state.

Statefull componet does have access to React's lifecycle methods where stateless component don't have access to react's
lifecycle methods.

Statefull compoonents are more suitable for components that require complex logic, data mangement or interactions with
the server. where
Stateless components are often used for presentation or UI components. They are concerned with how things look and are
typically simpler and more focused on rendering.

<hr>
<center>
  <h2>MOCK - INTERVIEW - PREPRATION DAY- TWO</h2>
</center>

### 1. What is an EVENT in react?

=> In React, an event is an action or occurrence that can be detected and responded to within a component. Events in
React typically correspond to user interactions, like clicking a button, hovering over an element, or submitting a form.
React uses a synthetic event system that normalizes events across different browsers, making it easier to work with
event handling in a consistent manner. You can define event handlers, such as onClick or onChange, to respond to these
events and update the component's state or trigger specific actions.

<hr>

### 2. How do you pass data from parent to child?

=> Data can be passed from a parent component to a child component in React through the use of **props**.Props are
essentially properties that are assigned to a child component by its parent. The parent component can specify the values
of these props when rendering the child component. This allows you to share data, configuration, and behavior between
components.

<hr>

### 3. What is the package name you are using for routing

=> react-router-dom

### 4.Routing Implementation

=> CHECK THE SRC/MOCKPREP-DAY2/ROUTING

### 5.How do you switch one component to another, Conditional Rendering

=> CHECK THE src/MockPrep-Day2/ConditionalRendering/ConditionCompo.js

### 6. Difference between FETCH and AXIOS

=>
Axios: Axios is a third-party library that simplifies the process of making HTTP requests. Where The Fetch API is a
built-in feature in modern web browsers.

Axios allows for easy request cancellation using the built-in CancelToken feature. The Fetch API does not have built-in
support for request cancellation.

In axios we do not have to convert the data into JSON formate manually. But in FETCH we have to convert the data into
JSON formate

<hr>
<center>
  <h2>MOCK - INTERVIEW - PREPRATION DAY- THREE</h2>
</center>

### 1. What do You mean by Prop Drilling ?

=> In React, Prop drilling refers to the process of passing data from a high level component down to a deep level
component through intermediate components that do not need the data themeselves.
This can happen when components in a Components tree need to access shared data, but they are not direct descendants of
each other.

State Uplifting is the process of moving the state from a child component to a parent component. This is achieved by
lifting the state to a common ancestor component that needs access to the state data.

<hr>

### 2. What is UseState Hook ?(Implementation) ?

=> useState hook is a function, that allows functional components to manage state. useState accepts an initial state and
returns two values :
One is the current state and Second one is the function that updates the state variable.

<hr>

### 3. What is useEffect Hook ?(Implementation) ?

=> useState hook is a function, that allows functional components to manage state. useState accepts an initial state and
returns two values :
One is the current state and Second one is the function that updates the state variable.

<hr>
<center>
  <h2>MOCK - INTERVIEW - PREPRATION DAY- FOUR</h2>
</center>

### 1. What is useMemo Hook ?(Implementation) ?

=> The 'useMemo' hook in React js is used for performance optimization. It memozies the result of a function so that the
function is only re-executed if its dependencies change. This can prevent un-necessary re-calculations in scenarious
where the computation is resource-intensive or where the calculation remains the same for certain inputs.
In React, the useMemo hook is used to memoize the result of a computation, so that the computation is only executed,
when it's dependencies change. This can be useful to optimize the performance of expensive calculations or computations
in functional components.

<hr>

### 2. What is UseRef Hook ?(Implementation) ?

=>
- useRef is a way for React components to remember things or interact with elements without triggering re-renders when those things or elements change. It returns a mutable object whose, 'current' propery it initialized to the passed argument and this property
can be modified.  The use of useRef to interact with a DOM element (input field) by accessing and managing its properties without
causing re-renders. 

- The useRef hook in React is a function that lets you access a mutable value that persists for the full lifetime of the component. This can be useful for a variety of purposes, such as storing a reference to a DOM element or keeping track of a variable that you don't want to cause re-renders.
To use useRef, you first need to import it from "react",  then you can create a ref object by calling useRef():
<hr>

### 3. Difference between callback and useCallback Hook ?

=>
- A **callback** function is a general JavaScript concept, which refers to a function that passed as an argument to
another function.In react, callBack function is commonly used to handle events, asynchronous operations, or as props to
child components to manage what happens after certain events .

- **useCallback** is a hook provided by React that memoizes a provided function. It takes two arguments, first is a
callBack function, which we want to memoize and second is a dependencies array. The 'useCallback' hook returns the
memoized version of that callBack function , that will only be re-created if the dependencies change.

<table style="text-align:center; width:100%; text-align:center" border="4" cellPadding='1em' cellSpacing='1em'>
  <thead>
    <tr>
      <th>callBack</th>
      <th>useCallback </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Callback refers to a function passed as an argument to another function, to be executed later </td>
      <td>useCallback is a React hook used to optimize functional components by memoizing functions. </td>
    </tr>
    <tr>
      <td>Callback is used to handle asynchronous tasks, event handling, or passing functions as arguments. </td>
      <td>useCallback optimizes performance by preventing unnecessary re-creation of functions. </td>
    </tr>
    <tr>
      <td>Callbacks are not specific to React. They're a fundamental concept in JavaScript and programming in general. </td>
      <td>useCallback is built-in hook in react js </td>
    </tr>
  </tbody>
</table>

<hr>

### 4. Why do we need keys in react less ?
=>The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM.

- In React, keys are special attributes that provide a way to identify and differentiate between elements in a list. Each element in an array should have a unique key. React uses keys to efficiently update the user interface by identifying which elements have changed or been added/removed when rendering lists.

**The Problem Without Keys**
Without keys, when React re-renders a list, it has no way to determine which elements have changed or where new items have been inserted. This can lead to unexpected and incorrect behavior.

**The Solution with Keys**
By providing unique keys to elements in a list, React can accurately track changes. When React re-renders a list, it will compare the keys of the new elements to the previous ones, allowing it to update, reorder, or remove elements effectively

**When to Use Keys**
When rendering dynamic lists or arrays in React components.
When dealing with lists that may change over time, such as when items are added, removed, or reordered.

<hr>


### 5. What is UseReducer Hook ?(Implementation)
=> The useReducer hook is a built-in hook that provides an alternative way to manage state in functional components. 
syntax : const [currentState, dispatchMethod] = useReducer(reducerFunction, initialValue);

It takes two variable as a argument: 
- First is a reducer function that takes the current state and an action as arguments and then  returns the new state.
- Second is a Initial value, that can be a any type of value, which is our default value forr state variable.

useReducer returns the current state and a dispatch method.

Dispatch is a function that allow us to send actions to the reducer function. It takes an action object as an argument and triggers the state update.

When we call the dispatch method, we pass an action object that describes the type of action to be performed along with any additional data needed to update the state. 
The reducer then proess the action and returns a new state based on the current state and the action.
<hr>

<center>
  <h2>MOCK - INTERVIEW - PREPRATION DAY- FIVE</h2>
</center>

### 1. High Order Component in react js ?(Implementation)
=> In React, A higher order component is a function that takes a component as an argument/Props and return a new enhanced component as output.
It is like a special function that can make our components more powerful and add extra functionality to them. Essentially it is a way to reuse component logic and share it between different components.


<center>
  <h2>MOCK - INTERVIEW - PREPRATION DAY- SIX</h2>
</center>

### 1. Explain Reducer as a pure Function.
=> In Redux, a reducer function is responsible for specifying how the application's state should change in response to dispatched actions. Reducers are pure functions that take the current state and an action as arguments and return the new state based on the action's type.

 Reducers are pure functions, which means they always produce the same output for the same given input and have no side effects. They rely only on their input arguments (the state and an action) to compute the new state and don’t modify the existing state directly.