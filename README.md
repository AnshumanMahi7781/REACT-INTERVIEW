<center><h1>MOCK - INTERVIEW - PREPRATION DAY-ONE</h1> </center>

### 1.What is SPA ?  

=> 
'SPA' Stands for Single Page Application, which is a type of web application that operates within a single HTML  page, and dynamically updating its content as the user interacts with it.
it provide a seamless and interactive user experience by loading and updating content dynamically within a single web page, rather than navigating to multiple traditional pages.
<hr>

###  2. What is Virtual DOM ?   
=> 
Virtual DOM is a concept of React, which is a lightweight in-memory representation of the actual dom of a web page. When changes are made in React Component, a new Virtual DOM will created, then react calculates the difference between the new virtual dom and the previous one to update the actual DOM more efficiently, this process known as reconcilication. It improve the performance and speed of react application.

DOM stands for 'DOCUMENT OBJECT MODEL", which  represents the document as a tree of objects, where each part of the web page, such as elements, attributes, and text content, is represented as an object in the tree.

<hr>

### 3. What is difference between class and functional component ?  
=> 
Class components are defined using JavaScript classes, while functional components are JavaScript functions.

Class components can manage their own state using the this.state object. Functional components can manage state using React Hooks, such as useState, introduced in React 16.8 and later.

Class components have access to various lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. Functional components can replicate the behavior of lifecycle methods using Hooks like useEffect.

<hr>


### 4. What is package.json?  
=>
package.json is a file used in Node.js and JavaScript projects. It contains metadata about the project, including the project's name, version, dependencies, and various configuration settings. It's commonly used to manage project dependencies and scripts for tasks like building, testing, and running the application.

<hr>

### 5.What is JSX  

JSX stands for JavaScript XML, which an extension to JavaScript syntax that allow us to write HTML like code within our Js code, within working with React.  JSX is used in React to define the structure and layout of UI components. It makes it more readable and easier to write and maintain complex user interfaces. Browsers don't understand JSX directly, so it's transformed into regular JavaScript using tools like Babel before it's executed in the browser.

<hr>

### 6.StateFull and stateless componet   

In react StateFull components refers to the Classbased component and stateless component refers to the functional component.

Statefull components have the ability to manage their own state data where stateless component does not manage their own state.stateless component rely on the data provided to them through props and do not have internal state.

Statefull componet does have access to React's lifecycle methods where stateless component don't have access to react's lifecycle methods.

Statefull compoonents are more suitable for components that require complex logic, data mangement or interactions with the server. where
  Stateless components are often used for presentation or UI components. They are concerned with how things look and are typically simpler and more focused on rendering.



<hr>
<center><h2>MOCK - INTERVIEW - PREPRATION DAY- TWO</h2> </center>

### 1. What is an EVENT in react?
=> In React, an event is an action or occurrence that can be detected and responded to within a component. Events in React typically correspond to user interactions, like clicking a button, hovering over an element, or submitting a form. React uses a synthetic event system that normalizes events across different browsers, making it easier to work with event handling in a consistent manner. You can define event handlers, such as onClick or onChange, to respond to these events and update the component's state or trigger specific actions.

<hr>


### 2. How do you pass data from parent to child?
=> Data can be passed from a parent component to a child component in React through the use of **props**.Props are essentially properties that are assigned to a child component by its parent. The parent component can specify the values of these props when rendering the child component. This allows you to share data, configuration, and behavior between components.

<hr>

### 3. What is the package name you are using for routing
=> react-router-dom

### 4.Routing Implementation
=> CHECK THE SRC/MOCKPREP-DAY2/ROUTING

### 5.How do you switch one component to another, Conditional Rendering
=> CHECK THE src/MockPrep-Day2/ConditionalRendering/ConditionCompo.js

### 6. Difference between FETCH and AXIOS
=>
Axios: Axios is a third-party library that simplifies the process of making HTTP requests. Where The Fetch API is a built-in feature in modern web browsers.

 Axios allows for easy request cancellation using the built-in CancelToken feature. The Fetch API does not have built-in support for request cancellation. 

 In axios we do not have to convert the data into JSON formate manually. But in FETCH we have to convert the data into JSON formate 

 <hr>
<center><h2>MOCK - INTERVIEW - PREPRATION DAY- THREE</h2> </center>

### 1. What do You mean by Prop Drilling ?

=> In React, Prop drilling refers to the process of passing data from a high level component down to a deep level component through intermediate components that do not need the data themeselves.
This can happen when components in a Components tree need to access shared data, but they are not direct descendants of each other.

State Uplifting is the process of moving the state from a child component to a parent component. This is achieved  by lifting the state to a common ancestor component that needs access to the state data.

<hr>

### 2. What is UseState Hook ?(Implementation)  ?
=> useState hook is a function, that allows functional components to manage state. useState accepts an initial state and returns two values : 
One is the current state and Second one is the function that updates the state variable. 


<hr>

### 3. What is useEffect Hook ?(Implementation)  ?
=> useState hook is a function, that allows functional components to manage state. useState accepts an initial state and returns two values : 
One is the current state and Second one is the function that updates the state variable. 
